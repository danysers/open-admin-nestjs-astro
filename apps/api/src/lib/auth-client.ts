import { createAuthClient } from 'better-auth/client';
import { twoFactorClient, organizationClient } from 'better-auth/client/plugins';

export const authClient = createAuthClient({
  baseURL: process.env.API_URL || 'http://localhost:3001',
  plugins: [
    twoFactorClient(),
    organizationClient(),
  ],
});
