import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { MenuService } from './menu.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('menu')
@UseGuards(JwtAuthGuard)
export class MenuController {
  constructor(private menuService: MenuService) {}

  @Get('tree')
  async tree() {
    const menu = await this.menuService.getTree();
    return { code: 200, data: menu };
  }

  @Post()
  async create(@Body() body: any) {
    const item = await this.menuService.create(body);
    return { code: 200, data: item };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const item = await this.menuService.update(+id, body);
    return { code: 200, data: item };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.menuService.delete(+id);
    return { code: 200, message: 'Deleted' };
  }

  @Get('search')
  async search(@Query('q') q: string) {
    const results = await this.menuService.search(q);
    return { code: 200, data: results };
  }
}
