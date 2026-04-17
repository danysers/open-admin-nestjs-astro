import { Controller, Post, Get, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string; remember?: boolean }) {
    const result = await this.authService.login(body.username, body.password, body.remember);
    return { code: 200, data: result };
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout() {
    return { code: 200, message: 'Logged out successfully' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@Req() req: any) {
    return { code: 200, data: req.user };
  }

  @UseGuards(JwtAuthGuard)
  @Post('password')
  async changePassword(@Req() req: any, @Body() body: any) {
    await this.authService.changePassword(req.user.id, body.old_password, body.new_password);
    return { code: 200, message: 'Password changed' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('permissions')
  async permissions(@Req() req: any) {
    return { code: 200, data: req.user.permissions || [] };
  }
}
