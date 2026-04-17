import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();

  async findAll() {
    return this.prisma.users.findMany({
      include: { roles: true },
      omit: { password: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.users.findUnique({
      where: { id },
      include: { roles: { include: { permissions: true } } },
      omit: { password: true },
    });
  }

  async create(data: any) {
    return this.prisma.users.create({ data });
  }

  async update(id: number, data: any) {
    return this.prisma.users.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prisma.users.delete({ where: { id } });
  }
}
