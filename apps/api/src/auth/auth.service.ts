import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import Redis from 'ioredis';

@Injectable()
export class AuthService {
  private prisma = new PrismaClient();
  private redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');
  private readonly MAX_ATTEMPTS = 5;
  private readonly LOCKOUT_SECONDS = 300;

  constructor(private jwtService: JwtService) {}

  private getAttemptsKey(username: string): string {
    return `login:attempts:${username.toLowerCase()}`;
  }

  private getLockoutKey(username: string): string {
    return `login:lockout:${username.toLowerCase()}`;
  }

  private async checkLockout(username: string): Promise<void> {
    const lockout = await this.redis.get(this.getLockoutKey(username));
    if (lockout) {
      const remaining = await this.redis.ttl(this.getLockoutKey(username));
      throw new UnauthorizedException(`Account locked. Try again in ${remaining}s`);
    }
  }

  private async recordFailedAttempt(username: string): Promise<void> {
    const key = this.getAttemptsKey(username);
    const attempts = await this.redis.incr(key);
    
    if (attempts === 1) {
      await this.redis.expire(key, 3600);
    }

    if (attempts >= this.MAX_ATTEMPTS) {
      await this.redis.setex(this.getLockoutKey(username), this.LOCKOUT_SECONDS, '1');
      await this.redis.del(key);
      throw new UnauthorizedException('Too many failed attempts. Account locked for 5 minutes.');
    }
  }

  private async clearFailedAttempts(username: string): Promise<void> {
    await this.redis.del(this.getAttemptsKey(username));
    await this.redis.del(this.getLockoutKey(username));
  }

  async login(username: string, password: string, remember?: boolean) {
    if (!username || !password) {
      throw new BadRequestException('Username and password are required');
    }

    await this.checkLockout(username.toLowerCase());

    const user = await this.prisma.users.findUnique({
      where: { username: username.toLowerCase() },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      await this.recordFailedAttempt(username);
      throw new UnauthorizedException('Invalid credentials');
    }

    await this.clearFailedAttempts(username);

    const payload = { sub: user.id, username: user.username, email: user.email };
    
    const accessToken = this.jwtService.sign(payload, { expiresIn: remember ? '7d' : '1h' });
    const refreshToken = this.jwtService.sign(
      { sub: user.id, type: 'refresh' },
      { expiresIn: '30d' }
    );

    await this.redis.setex(`refresh:${user.id}`, 30 * 24 * 3600, refreshToken);

    await this.prisma.operation_log.create({
      data: {
        user_id: user.id,
        method: 'POST',
        uri: '/api/auth/login',
        ip: '0.0.0.0',
      },
    });

    return {
      accessToken,
      refreshToken,
      expiresIn: remember ? 604800 : 3600,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
      },
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);
      
      if (payload.type !== 'refresh') {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const storedToken = await this.redis.get(`refresh:${payload.sub}`);
      if (storedToken !== refreshToken) {
        throw new UnauthorizedException('Token has been revoked');
      }

      const user = await this.prisma.users.findUnique({
        where: { id: payload.sub },
      });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      const newPayload = { sub: user.id, username: user.username, email: user.email };
      const newAccessToken = this.jwtService.sign(newPayload, { expiresIn: '1h' });
      const newRefreshToken = this.jwtService.sign(
        { sub: user.id, type: 'refresh' },
        { expiresIn: '30d' }
      );

      await this.redis.setex(`refresh:${user.id}`, 30 * 24 * 3600, newRefreshToken);

      return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    } catch (e) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }

  async changePassword(userId: number, oldPassword: string, newPassword: string) {
    if (newPassword.length < 8) {
      throw new BadRequestException('Password must be at least 8 characters');
    }

    const user = await this.prisma.users.findUnique({ where: { id: userId } });
    if (!user) throw new UnauthorizedException('User not found');

    const isOldValid = await bcrypt.compare(oldPassword, user.password);
    if (!isOldValid) throw new UnauthorizedException('Current password is incorrect');

    const hashed = await bcrypt.hash(newPassword, 12);
    await this.prisma.users.update({
      where: { id: userId },
      data: { password: hashed },
    });

    await this.redis.del(`refresh:${userId}`);

    return { message: 'Password changed successfully. Please login again.' };
  }
}
