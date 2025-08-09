import type { Resolvers } from "@repo/graphql/server";
import { loadFromMock } from "../utils/loadFromMock";

const sceneResolvers: Resolvers = {
  Mutation: {
    createSceneObject: async (_, { input }) => {
      console.log("creating scene object...");
      return await loadFromMock("object/test1.json");
    },
    updateSceneObject: async (_, { input }) => {
      console.log("updating scene object...");
      return await loadFromMock("object/test1.json");
    },
  },
};

export default sceneResolvers;
