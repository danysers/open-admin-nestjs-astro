import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private prisma = new PrismaClient();

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'openadmin-secret',
    });
  }

  async validate(payload: { sub: number; username: string }) {
    const user = await this.prisma.users.findUnique({
      where: { id: payload.sub },
      include: { roles: { include: { permissions: true } } },
    });
    if (!user) return null;
    return { id: user.id, username: user.username, email: user.email, roles: user.roles };
  }
}
