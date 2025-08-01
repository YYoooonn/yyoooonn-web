# 사용할 이미지 목록
IMAGES=(
  "yyoooonn/yyoooonnweb:v0.0.0"
  "yyoooonn/yyoooonnbff:v0.0.0"
)

echo "📥 Docker Hub에서 이미지 받는 중..."

for image in "${IMAGES[@]}"; do
  echo "👉 $image"
  docker pull "$image"
done

echo ""
echo "🚀 docker compose up 실행 중..."
docker compose --profile prod up -d

echo "✅ 완료!"