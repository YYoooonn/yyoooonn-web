# yyoooonn

```bash

# install
pnpm i -D -r @NAME --filter=repo --filter=repo

# build
turbo build

# check types
turbo build check-types

```

```bash
# docker compose build
# for dev
docker-compose -f docker-compose.dev.yml up --build

# for prod
docker-compose -f docker-compose.prod.yml up --build
```

```bash
# cerbot renewal code on deploy environmnet
0 0 * * * certbot renew --post-hook "docker exec nginx nginx -s reload"
```
