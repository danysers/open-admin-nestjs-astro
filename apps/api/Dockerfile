FROM node:22-alpine

WORKDIR /app
RUN apk add --no-cache curl

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY src ./src
COPY prisma ./prisma
COPY tsconfig.json ./

RUN npx prisma generate
RUN pnpm run build

ENV NODE_OPTIONS="--require reflect-metadata"
ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

CMD ["sh", "-c", "curl -s http://localhost:3000/api/health > /dev/null || true; node dist/src/main.js"]
