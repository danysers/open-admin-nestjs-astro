import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { fromNodeHeaders } from 'better-auth/node';
import { auth } from '../../lib/auth';

@Injectable()
export class JwtAuthGuard {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    try {
      const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
      });

      if (!session?.user) {
        throw new UnauthorizedException('Not authenticated');
      }

      req.user = session.user;
      req.session = session.session;
      return true;
    } catch {
      throw new UnauthorizedException('Not authenticated');
    }
  }
}
