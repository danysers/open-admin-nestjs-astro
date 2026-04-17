import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/index';

@Injectable()
export class FormService {
  private prisma = new PrismaClient();

  async getFormData(resource: string, id: number) {
    return (this.prisma as any)[resource].findUnique({ where: { id } });
  }

  async create(resource: string, data: any) {
    return (this.prisma as any)[resource].create({ data });
  }

  async update(resource: string, id: number, data: any) {
    return (this.prisma as any)[resource].update({ where: { id }, data });
  }

  async delete(resource: string, id: number) {
    return (this.prisma as any)[resource].delete({ where: { id } });
  }

  async getOptions(resource: string, query: { field?: string; q?: string }) {
    return [];
  }
}
