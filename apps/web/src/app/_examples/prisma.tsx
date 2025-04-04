/* 

https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
example page to test the database connection

db가 동작하는 상태이면 미리 가져와서 프리렌더를 하고,
incremental static regeneration을 사용하여 업데이트 할 수 있음.

db가 동작하지 않는다면, 즉 prisma를 통한 db연결이 되지 않는 경우에는,
페이지가 prerender하지 않기 위해 async function과 force-dynamic을 사용

*/

import { prisma } from "@repo/db";

export const dynamic = "force-dynamic";

export default async function PrismaPage() {
  const users = await prisma.user.findMany();
  return (
    <div>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
