#!/bin/bash

# 기본값
ENV_FILE=".env"
TARGET_DIRS=()

# 옵션 파싱
while [[ "$#" -gt 0 ]]; do
  case "$1" in
    # -e|--env)
    #   ENV_NAME="$2"
    #   shift 2
    #   ;;
    -d|--development)
      ENV_FILE=".env.development"
      shift 2
      ;;
    *)
        TARGET_DIRS+=("$1")
        shift
        ;;
  esac
done

# .env 파일 확인
if [ ! -f "$ENV_FILE" ]; then
  echo "❌ $ENV_FILE not found"
  exit 1
fi

# 디렉토리 없을 경우 안내
if [ ${#TARGET_DIRS[@]} -eq 0 ]; then
  echo "❌ 복사할 디렉토리를 하나 이상 지정해주세요."
  echo "예: ./env-sync.sh packages/db"
  exit 1
fi

# 복사 실행
for dir in "${TARGET_DIRS[@]}"; do
  if [ -d "$dir" ]; then
    cp -f "$ENV_FILE" "$dir/.env"
    echo "✅ Copied $ENV_FILE → $dir/.env"
  else
    echo "⚠️ Directory not found: $dir"
  fi
done
