import { Injectable } from '@nestjs/common';

// Better Auth handles all auth logic - this service is kept for compatibility
// and future custom auth operations that Better Auth doesn't cover
@Injectable()
export class AuthService {
  // Better Auth handles login, registration, 2FA, sessions, etc.
  // This service can be used for custom business logic on top of Better Auth
}
