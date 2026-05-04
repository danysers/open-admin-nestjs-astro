import { Controller, Get } from '@nestjs/common';

@Controller('api/health')
export class HealthController {
  @Get()
  health() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }

  @Get('api')
  apiHealth() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
