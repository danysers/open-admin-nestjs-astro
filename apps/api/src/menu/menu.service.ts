import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/index';

@Injectable()
export class MenuService {
  private prisma = new PrismaClient();

  async getTree() {
    const items = await this.prisma.menu.findMany({ orderBy: { order: 'asc' } });
    return this.buildTree(items);
  }

  private buildTree(items: any[], parentId: number | null = null): any[] {
    return items.filter(i => i.parent_id === parentId).map(item => ({
      ...item,
      children: this.buildTree(items, item.id),
    }));
  }

  async create(data: any) {
    return this.prisma.menu.create({ data });
  }

  async update(id: number, data: any) {
    return this.prisma.menu.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prisma.menu.delete({ where: { id } });
  }

  async search(q: string) {
    return this.prisma.menu.findMany({
      where: { title: { contains: q } },
      take: 20,
    });
  }
}
