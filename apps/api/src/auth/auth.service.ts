import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private prisma = new PrismaClient();

  constructor(private jwtService: JwtService) {}

  async login(username: string, password: string, remember?: boolean) {
    const user = await this.prisma.users.findUnique({ where: { username } });
    if (!user || !await bcrypt.compare(password, user.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.id, username: user.username };
    return {
      token: this.jwtService.sign(payload),
      user: { id: user.id, username: user.username, email: user.email, name: user.name, avatar: user.avatar },
    };
  }

  async changePassword(userId: number, oldPassword: string, newPassword: string) {
    const user = await this.prisma.users.findUnique({ where: { id: userId } });
    if (!user) throw new UnauthorizedException('User not found');
    const updated = await this.prisma.users.update({
      where: { id: userId },
      data: { password: await bcrypt.hash(newPassword, 10) },
    });
    return updated;
  }
}
