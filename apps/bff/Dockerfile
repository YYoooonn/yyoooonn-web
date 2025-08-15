# --- 1. base ---
FROM node:18-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && pnpm install turbo --global

# --- 2. prune ---
FROM base AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY ../ .
RUN turbo prune --scope=bff --docker

# 2. installer 단계 (pnpm install 직접 수행)
FROM base AS installer
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --frozen-lockfile

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN turbo run build --filter=bff...

# 3. runner 단계 (node_modules 복사 안 하고 설치 필요 시 설치)
FROM node:18-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 express
RUN adduser --system --uid 1001 express
USER express

COPY --from=installer /app .

ENV NODE_ENV=production

CMD ["node", "apps/bff/dist/index.js"]