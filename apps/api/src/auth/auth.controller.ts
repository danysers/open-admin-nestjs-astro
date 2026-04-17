import { All, Controller, Req, Res } from '@nestjs/common';
import { toNodeHandler } from 'better-auth/node';
import { auth } from '../lib/auth';

const authHandler = toNodeHandler(auth);

@Controller('auth')
export class AuthController {
  @All('*')
  async handleAuth(@Req() req: any, @Res() res: any) {
    await authHandler(req, res);
  }
}
