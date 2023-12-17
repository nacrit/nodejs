FROM node:18.16.0 AS builder
WORKDIR /app
COPY . /app
RUN npm config set registry https://registry.npm.taobao.org && corepack enable && pnpm install
RUN pnpm build

FROM node:18.16.0-slim
WORKDIR /app
COPY --from=builder /app /app
