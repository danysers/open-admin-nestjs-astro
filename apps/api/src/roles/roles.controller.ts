import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('roles')
@UseGuards(JwtAuthGuard)
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get()
  async index() {
    const roles = await this.rolesService.findAll();
    return { code: 200, data: roles };
  }

  @Post()
  async create(@Body() body: { name: string; slug: string; permissions?: number[] }) {
    const role = await this.rolesService.create(body);
    return { code: 200, data: role };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const role = await this.rolesService.update(+id, body);
    return { code: 200, data: role };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.rolesService.delete(+id);
    return { code: 200, message: 'Deleted' };
  }
}
