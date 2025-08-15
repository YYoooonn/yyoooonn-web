import type { Resolvers } from "@repo/graphql/server";
import { redis } from "../../../lib/redis/index.js";
import { saveScene } from "../../../lib/redis/sceneStore.js";
import { initScene } from "../utils/initScene.js";
import { generateGeminiResponse } from "../../../features/gemini/services/gemini.service.js";
import { generateEditPrompt } from "../../../features/gemini/lib/generateEditPrompt.js";
import { generateArtistPrompt } from "../../../features/gemini/lib/generateArtistPrompt.js";
import {
  loadChatMessages,
  saveChatMessage,
} from "../../../lib/redis/chatStore.js";

const sceneResolvers: Resolvers = {
  Query: {
    getScene: async (_, { id }: { id: string }) => {
      if (!redis) return initScene(id); // XXX db not set

      const data = await redis.get(`scene:${id}`);
      if (!data) return initScene(id);

      const parsed = await JSON.parse(data);
      return parsed;
    },
  },
  Mutation: {
    editScene: async (_, { input }) => {
      const history = await loadChatMessages(input.id, 10);
      saveChatMessage(input.id, {
        sender: "user",
        message: input.prompt,
        data: input.data,
        timestamp: Date.now(),
      });

      const prompt = generateEditPrompt(
        input.prompt,
        JSON.stringify(input.data),
        history ? JSON.stringify(history) : "",
      );

      const res = await generateGeminiResponse(prompt, true);

      if (res) {
        saveChatMessage(input.id, {
          sender: "gemini",
          message: res.summary,
          data: res.actions,
          timestamp: Date.now(),
        });
        return res;
      }

      return { summary: "empty response from gemini", actions: [] };
    },
    createScene: async (_, { input }) => {
      const history = await loadChatMessages(input.id, 10);
      saveChatMessage(input.id, {
        sender: "user",
        message: input.prompt,
        timestamp: Date.now(),
      });
      const prompt = generateArtistPrompt(
        input.prompt,
        input.id,
        history ? JSON.stringify(history) : "",
      );

      const res = await generateGeminiResponse(prompt, false);
      if (res) {
        saveChatMessage(input.id, {
          sender: "gemini",
          message: res.summary,
          data: res.actions,
          timestamp: Date.now(),
        });
        return res;
      }

      return { summary: "empty response from gemini", data: [] };
    },
    saveScene: async (_, { id, data }) => {
      // TODO save scene logic
      return await saveScene(id, data);
    },
  },
};

export default sceneResolvers;
