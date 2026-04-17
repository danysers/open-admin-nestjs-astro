import * as bcrypt from 'bcrypt';
import { PrismaClient } from '../generated/prisma/index';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { twoFactor } from 'better-auth/plugins';

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  appName: 'OpenAdmin',
  secret: process.env.BETTER_AUTH_SECRET || process.env.AUTH_SECRET || 'openadmin-better-auth-secret',
  basePath: '/api/auth',
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: false,
    minPasswordLength: 8,
    password: {
      async hash(password) {
        return bcrypt.hash(password, 12);
      },
      async verify({ hash, password }) {
        return bcrypt.compare(password, hash);
      },
    },
  },
  user: {
    modelName: 'authUser',
  },
  session: {
    modelName: 'authSession',
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },
  account: {
    modelName: 'authAccount',
  },
  verification: {
    modelName: 'authVerification',
  },
  plugins: [
    twoFactor({
      issuer: 'OpenAdmin',
      schema: {
        user: {
          modelName: 'authUser',
          fields: {
            twoFactorEnabled: 'twoFactorEnabled',
          },
        },
        twoFactor: {
          modelName: 'authTwoFactor',
        },
      },
    }),
  ],
  advanced: {
    useSecureCookies: false,
    defaultCookieAttributes: {
      sameSite: 'lax' as const,
      secure: false,
      httpOnly: true,
      path: '/',
    },
  },
});

export type AuthType = typeof auth;
