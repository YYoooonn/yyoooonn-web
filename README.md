# yyoooonn

## folder structure

### apps

`bff` backend for frontend - express with graphql(apollo server)

`web` frontend - nextjs

_wip_ `example` _프론트 활용 방식 테스트 용으로 생각 중_

_wip_ ~~`api`~~ _websocket 실시간 통신 테스트용_


### packages

`ui` ui 컴포넌트들과 style - react + vanilla extract css

`shared` graphql 통합 - .graphql schema, codegen with types, ...

`typescript-config + eslint-config` 각 config 파일 통합
 
_wip_ `database` 추후 prismaorm(or typeorm) 사용하여 실제 db와 연결시킬 예정


### dependencies

>모든 빌드 및 test과정에서는 env-sync과정을 해줘야함. \
monorepo의 .env를 공통으로 활용하기 위함

```bash
# 현재
web <- ui, shared
bff <- shared, (wip: database)
```


```bash
# test 환경
pnpm docker:dev

# prod 환경
pnpm docker:prod
```



---
---

### commands


```bash
# install
pnpm i -D -r @NAME --filter=repo --filter=repo

# build
pnpm build
```

```bash
# docker compose with profile
docker-compose -f ${filename} --profile ${target} up
# example
docker-compose -f docker-compose.dev.yml --profile db up

# docker compose build
# for dev
docker-compose -f docker-compose.dev.yml up --build

# for prod
# nginx.prod.conf 추가하고
docker-compose -f docker-compose.prod.yml up --profile prod --build

# 추후에 db 추가하면 
docker-compose -f docker-compose.prod.yml up --build
```

```bash
# cerbot renewal code on deploy environmnet
0 0 * * * certbot renew --post-hook "docker exec nginx nginx -s reload"
```
