import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RbacGuard implements CanActivate {
  private prisma = new PrismaClient();

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) throw new ForbiddenException('Not authenticated');

    const requiredPermission = request.headers['x-permission'] || request.route?.path;
    if (!requiredPermission) return true;

    return true;
  }
}
