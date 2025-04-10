#!/bin/bash

set -e  # 에러 발생 시 종료

ENV=${1:-development}

echo "🚀 Starting development environment [$ENV]..."

# # 1. DB 실행
echo "📦 Starting Docker DB containers..."
pnpm db:up

# # 2. 종료 시 db:down 자동 처리
cleanup() {
  echo ""
  echo "🧹 Cleaning up..."
  echo "🔻 Stopping Docker containers..."
  pnpm db:down
  echo "✅ Cleanup complete!"
  exit
}

trap cleanup SIGINT SIGTERM EXIT

# # 3. DB 준비
echo "⏳ Waiting for DB to be ready..."
pnpm db:ready

# 4. Turbo dev 실행
echo "🌐 Launching turbo dev..."
pnpm turbo run dev --filter=!@repo/db
