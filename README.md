# OpenAdmin - NestJS + Astro Migration

Admin panel builder migrated from PHP/Laravel to Node.js stack.

## 🌐 Live Demo

- **URL**: https://core.codss.com.ar
- **Login**: https://core.codss.com.ar/login
- **Credentials**: `admin` / `admin123` (after running seed)

## Stack

- **API**: NestJS 11 + Prisma + PostgreSQL
- **Cache/Sessions**: Redis (ioredis)
- **Frontend**: Astro 6 (SSR) + React 19 + Tailwind CSS
- **Auth**: JWT + bcrypt + refresh tokens

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
# Edit DATABASE_URL and REDIS_URL
```

### 3. Database
```bash
cd apps/api
pnpm db:push     # Create tables
pnpm db:seed     # Seed admin user (admin / admin123)
```

### 4. Run
```bash
# API (terminal 1)
cd apps/api && pnpm dev

# Web (terminal 2)
cd apps/web && pnpm dev
```

### 5. Test
- Login: http://localhost:4321/login
- Dashboard: http://localhost:4321/admin/dashboard
- API: http://localhost:3000/api/auth/me

## Docker

```bash
docker-compose up -d
```

## Features

- Secure login with rate limiting (5 attempts → 5 min lockout)
- Refresh token rotation (30 days)
- Access token: 1h (7 days with "remember me")
- Grid component with TanStack Table
- Form builder with React Hook Form + Zod
- Tree view for nested data
- i18n ready

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/login | Login |
| POST | /api/auth/refresh | Refresh token |
| POST | /api/auth/logout | Logout |
| GET | /api/auth/me | Current user |
| GET | /api/grids/:resource | List resource |
| GET | /api/users | Users CRUD |
| GET | /api/roles | Roles CRUD |
| GET | /api/menu/tree | Menu tree |
