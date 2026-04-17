import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { TreeService } from './tree.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('trees')
@UseGuards(JwtAuthGuard)
export class TreeController {
  constructor(private treeService: TreeService) {}

  @Get(':resource')
  async tree(@Param('resource') resource: string) {
    const data = await this.treeService.getTree(resource);
    return { code: 200, data };
  }

  @Post(':resource')
  async create(@Param('resource') resource: string, @Body() body: any) {
    const data = await this.treeService.create(resource, body);
    return { code: 200, data };
  }

  @Put(':resource/:id')
  async update(@Param('resource') resource: string, @Param('id') id: string, @Body() body: any) {
    const data = await this.treeService.update(resource, +id, body);
    return { code: 200, data };
  }

  @Delete(':resource/:id')
  async delete(@Param('resource') resource: string, @Param('id') id: string) {
    await this.treeService.delete(resource, +id);
    return { code: 200, message: 'Deleted' };
  }

  @Put(':resource/reorder')
  async reorder(@Param('resource') resource: string, @Body() body: { order: { id: number; parent_id: number | null; order: number }[] }) {
    await this.treeService.reorder(resource, body.order);
    return { code: 200, message: 'Reordered' };
  }
}
