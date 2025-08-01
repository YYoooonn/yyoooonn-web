# 환경 설정
DOCKER_ID="yyoooonn"
IMAGES=(
  "yyoooonnweb:v0.0.0"
  "yyoooonnbff:v0.0.0"
)

echo "📦 Docker 이미지 태깅 및 푸시 시작"

for image in "${IMAGES[@]}"; do
  LOCAL_TAG="$image"
  REMOTE_TAG="$DOCKER_ID/${image}"

  echo "🔁 $LOCAL_TAG -> $REMOTE_TAG"
  docker tag "$LOCAL_TAG" "$REMOTE_TAG"
  docker push "$REMOTE_TAG"
done

echo "✅ 모든 이미지 푸시 완료!"