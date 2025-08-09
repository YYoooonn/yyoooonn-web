import type { Resolvers, SceneObject } from "@repo/graphql/server";
import { loadChatMessages } from "../../../lib/redis/chatStore";

const chatResolvers: Resolvers = {
  Query: {
    getChatLogs: async (_, { id }: { id: string }) => {
      const logs = await loadChatMessages(id);
      return { logs: logs };
    },
  },
};

export default chatResolvers;
