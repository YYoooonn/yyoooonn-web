import { prisma } from "@repo/db";

export const dynamic = "force-dynamic";

export default async function TestPage() {
  const users = await prisma.user.findMany();
  return (
    <div>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
