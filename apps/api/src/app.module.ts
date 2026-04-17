import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { RolesController } from './roles/roles.controller';
import { RolesService } from './roles/roles.service';
import { MenuController } from './menu/menu.controller';
import { MenuService } from './menu/menu.service';
import { GridController } from './grid/grid.controller';
import { GridService } from './grid/grid.service';
import { FormController } from './form/form.controller';
import { FormService } from './form/form.service';
import { TreeController } from './tree/tree.controller';
import { TreeService } from './tree/tree.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'openadmin-secret',
      signOptions: { expiresIn: '7d' },
    }),
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 60,
    }]),
  ],
  controllers: [
    AuthController,
    UsersController,
    RolesController,
    MenuController,
    GridController,
    FormController,
    TreeController,
  ],
  providers: [
    AuthService,
    JwtStrategy,
    UsersService,
    RolesService,
    MenuService,
    GridService,
    FormService,
    TreeService,
  ],
})
export class AppModule {}
