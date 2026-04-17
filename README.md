# OpenAdmin - NestJS + Astro Migration

Admin panel builder migrated from PHP/Laravel to Node.js stack.

## 🌐 Live Demo

- **URL**: https://core.codss.com.ar
- **Login**: https://core.codss.com.ar/
- **Credentials**: `admin@example.com` / `admin123` for Better Auth, and `admin` / `admin123` for legacy data

## Stack

- **API**: NestJS 11 + Prisma + PostgreSQL
- **Cache/Sessions**: Redis (ioredis)
- **Frontend**: Astro 6 (SSR) + React 19 + Tailwind CSS
- **Auth**: Better Auth + bcrypt + cookie sessions + TOTP 2FA

## Quick Start

### 1. Clone and install
```bash
git clone https://github.com/danysers/open-admin-nestjs-astro.git
cd open-admin-nestjs-astro
pnpm install
```

### 2. Environment
```bash
cp apps/api/.env.example apps/api/.env
# Default local ports avoid collisions: PostgreSQL 55432, Redis 56379
# Edit DATABASE_URL and REDIS_URL if needed
```

### 3. Database
```bash
cd apps/api
pnpm db:push     # Create tables
pnpm db:seed     # Seed Better Auth admin (admin@example.com / admin123)
```

### 4. Run
```bash
# API (terminal 1)
cd apps/api && pnpm dev

# Web (terminal 2)
cd apps/web && pnpm dev
```

### 5. Test
- Login: http://localhost:4321/
- Dashboard: http://localhost:4321/admin/dashboard
- API session: http://localhost:3000/api/auth/get-session

## Docker

```bash
docker-compose up -d
```

## Features

- Better Auth email/password login with cookie sessions
- TOTP 2FA with QR setup and backup codes
- Grid component with TanStack Table
- Form builder with React Hook Form + Zod
- Tree view for nested data
- i18n ready

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/sign-in/email | Login |
| POST | /api/auth/two-factor/enable | Enable TOTP 2FA |
| POST | /api/auth/two-factor/verify | Verify TOTP |
| GET | /api/auth/get-session | Current session |
| GET | /api/grids/:resource | List resource |
| GET | /api/users | Users CRUD |
| GET | /api/roles | Roles CRUD |
| GET | /api/menu/tree | Menu tree |
