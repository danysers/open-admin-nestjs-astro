FROM node:22-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/shared/package.json packages/shared/
COPY apps/web/package.json apps/web/

RUN pnpm install --frozen-lockfile

COPY packages/shared/src packages/shared/src
COPY apps/web/src apps/web/src
COPY apps/web/public apps/web/public
COPY apps/web/astro.config.mjs apps/web/
COPY apps/web/tsconfig.json apps/web/

WORKDIR /app/apps/web
RUN pnpm run build

FROM node:22-alpine

WORKDIR /app/apps/web

RUN npm install -g pnpm
COPY --from=builder /app/apps/web/dist ./dist
COPY --from=builder /app/apps/web/node_modules ./node_modules
COPY --from=builder /app/apps/web/package.json ./

ENV HOST=0.0.0.0
ENV PORT=4321
ENV NODE_ENV=production

EXPOSE 4321

CMD ["node", "dist/server/entry.mjs"]
