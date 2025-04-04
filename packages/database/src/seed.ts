import { prisma } from ".";
import type { User } from "../prisma/generated/client";

const DEFAULT_USERS = [
  // Add your own user to pre-populate the database with
  {
    username: "usertest",
    password: "usertest",
    email: "usertest@gmail.com",
    firstName: "user",
    lastName: "test",
  },
] as Array<User>;

(async () => {
  try {
    await Promise.all(
      DEFAULT_USERS.map((user) =>
        prisma.user.upsert({
          where: {
            username: user.username,
          },
          update: {
            ...user,
          },
          create: {
            ...user,
          },
        }),
      ),
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
