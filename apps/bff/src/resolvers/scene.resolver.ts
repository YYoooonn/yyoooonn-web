import type { Resolvers } from "@repo/graphql/server";
import { loadFromMock } from "../mock/loadFromMock.js";

const sceneResolvers: Resolvers = {
  Mutation: {
    generateScene: async (_, { input }) => {
      return await loadFromMock("scene/test2.json");
    },
  },
};

export default sceneResolvers;
