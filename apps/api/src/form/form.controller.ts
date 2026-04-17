import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards, Req } from '@nestjs/common';
import { FormService } from './form.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('forms')
@UseGuards(JwtAuthGuard)
export class FormController {
  constructor(private formService: FormService) {}

  @Get(':resource/:id/edit')
  async edit(@Param('resource') resource: string, @Param('id') id: string) {
    const data = await this.formService.getFormData(resource, +id);
    return { code: 200, data };
  }

  @Post(':resource')
  async create(@Param('resource') resource: string, @Body() body: any) {
    const data = await this.formService.create(resource, body);
    return { code: 200, data };
  }

  @Put(':resource/:id')
  async update(@Param('resource') resource: string, @Param('id') id: string, @Body() body: any) {
    const data = await this.formService.update(resource, +id, body);
    return { code: 200, data };
  }

  @Delete(':resource/:id')
  async delete(@Param('resource') resource: string, @Param('id') id: string) {
    await this.formService.delete(resource, +id);
    return { code: 200, message: 'Deleted' };
  }

  @Get('options/:resource')
  async options(@Param('resource') resource: string, @Query() query: any) {
    const data = await this.formService.getOptions(resource, query);
    return { code: 200, data };
  }
}
