import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async index() {
    const users = await this.usersService.findAll();
    return { code: 200, data: users };
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    const user = await this.usersService.findOne(+id);
    return { code: 200, data: user };
  }

  @Post()
  async create(@Body() body: any) {
    const user = await this.usersService.create(body);
    return { code: 200, data: user };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const user = await this.usersService.update(+id, body);
    return { code: 200, data: user };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.usersService.delete(+id);
    return { code: 200, message: 'Deleted' };
  }
}
