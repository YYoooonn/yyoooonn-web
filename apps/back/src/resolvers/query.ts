import { QueryResolvers } from "@repo/shared/generated/resolvers-type";

const resolvers: QueryResolvers = {
  users: () => {
    return [
      { id: "1", name: "Alice" },
      { id: "2", name: "Bob" },
    ];
  },
};

export default resolvers;
