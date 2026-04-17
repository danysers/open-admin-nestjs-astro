import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class GridService {
  private prisma = new PrismaClient();

  async list(resource: string, query: any, user: any) {
    const page = +query.page || 1;
    const perPage = +query.perPage || 20;
    const skip = (page - 1) * perPage;

    const where: any = {};
    if (query.filters) {
      const filters = JSON.parse(query.filters);
      for (const f of filters) {
        switch (f.operator) {
          case 'eq': where[f.column] = f.value; break;
          case 'neq': where[f.column] = { not: f.value }; break;
          case 'gt': where[f.column] = { gt: f.value }; break;
          case 'lt': where[f.column] = { lt: f.value }; break;
          case 'like': where[f.column] = { contains: f.value }; break;
          case 'in': where[f.column] = { in: f.value.split(',') }; break;
          case 'between': where[f.column] = { gte: f.value, lte: f.value2 }; break;
        }
      }
    }

    const orderBy: any = query.sort ? JSON.parse(query.sort) : { id: 'asc' };

    const [data, total] = await Promise.all([
      (this.prisma as any)[resource].findMany({ where, skip, take: perPage, orderBy }),
      (this.prisma as any)[resource].count({ where }),
    ]);

    return { data, total, page, perPage, totalPages: Math.ceil(total / perPage) };
  }

  async findOne(resource: string, id: number) {
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

  async batch(resource: string, ids: number[], action: string) {
    if (action === 'delete') {
      return (this.prisma as any)[resource].deleteMany({ where: { id: { in: ids } } });
    }
    return { success: true };
  }

  async export(resource: string, query: any, user: any) {
    return this.list(resource, { ...query, perPage: 10000 }, user);
  }
}
