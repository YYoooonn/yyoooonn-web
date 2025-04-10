import { Resolvers } from "@repo/shared/generated/types";

const resolvers: Resolvers = {
  Query: {
    users: () => {
      return [
        { id: "1", name: "Alice" },
        { id: "2", name: "Bob" },
      ];
    },
  },
};

export default resolvers;
