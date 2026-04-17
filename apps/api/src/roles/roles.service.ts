import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/index';

@Injectable()
export class RolesService {
  private prisma = new PrismaClient();

  async findAll() {
    return this.prisma.roles.findMany({ include: { permissions: true } });
  }

  async create(data: { name: string; slug: string; permissions?: number[] }) {
    return this.prisma.roles.create({
      data: {
        name: data.name,
        slug: data.slug,
        permissions: data.permissions ? {
          create: data.permissions.map(id => ({ permission_id: id }))
        } : undefined,
      },
      include: { permissions: true },
    });
  }

  async update(id: number, data: any) {
    return this.prisma.roles.update({ where: { id }, data, include: { permissions: true } });
  }

  async delete(id: number) {
    return this.prisma.roles.delete({ where: { id } });
  }
}
