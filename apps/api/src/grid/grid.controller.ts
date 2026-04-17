import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards, Req } from '@nestjs/common';
import { GridService } from './grid.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';


@Controller('grids')
@UseGuards(JwtAuthGuard)
export class GridController {
  constructor(private gridService: GridService) {}

  @Get(':resource')
  async list(@Param('resource') resource: string, @Query() query: any, @Req() req: any) {
    const data = await this.gridService.list(resource, query, req.user);
    return { code: 200, data };
  }

  @Get(':resource/:id')
  async show(@Param('resource') resource: string, @Param('id') id: string) {
    const data = await this.gridService.findOne(resource, +id);
    return { code: 200, data };
  }

  @Post(':resource')
  async create(@Param('resource') resource: string, @Body() body: any) {
    const data = await this.gridService.create(resource, body);
    return { code: 200, data };
  }

  @Put(':resource/:id')
  async update(@Param('resource') resource: string, @Param('id') id: string, @Body() body: any) {
    const data = await this.gridService.update(resource, +id, body);
    return { code: 200, data };
  }

  @Delete(':resource/:id')
  async delete(@Param('resource') resource: string, @Param('id') id: string) {
    await this.gridService.delete(resource, +id);
    return { code: 200, message: 'Deleted' };
  }

  @Post(':resource/batch')
  async batch(@Param('resource') resource: string, @Body() body: { ids: number[]; action: string }) {
    const data = await this.gridService.batch(resource, body.ids, body.action);
    return { code: 200, data };
  }

  @Post(':resource/export')
  async export(@Param('resource') resource: string, @Query() query: any, @Req() req: any) {
    const data = await this.gridService.export(resource, query, req.user);
    return { code: 200, data };
  }
}
