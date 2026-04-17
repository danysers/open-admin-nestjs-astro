import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TreeService {
  private prisma = new PrismaClient();

  async getTree(resource: string) {
    const items = await (this.prisma as any)[resource].findMany({ orderBy: { order: 'asc' } });
    return this.buildTree(items);
  }

  private buildTree(items: any[], parentId: number | null = null): any[] {
    return items.filter(i => i.parent_id === parentId).map(item => ({
      ...item,
      children: this.buildTree(items, item.id),
    }));
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

  async reorder(resource: string, order: { id: number; parent_id: number | null; order: number }[]) {
    for (const item of order) {
      await (this.prisma as any)[resource].update({
        where: { id: item.id },
        data: { parent_id: item.parent_id, order: item.order },
      });
    }
    return { success: true };
  }
}
