import { BaseQueryResolver } from "../baseResolver";

export const exampleResolver: BaseQueryResolver = {
  user: async (_, { id }, context) => {
    // do something with the context
    return { id: id, name: "Alice", email: "example@example.com" };
  },
};
