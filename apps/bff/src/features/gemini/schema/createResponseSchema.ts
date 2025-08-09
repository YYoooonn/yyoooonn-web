import { Type } from "@google/genai";
import { sceneObjectSchema } from "./base";

export const createResponseSchema = {
  type: Type.OBJECT,
  properties: {
    summary: {
      type: Type.STRING,
      description:
        "breif summary for generated scene or summary for failure reason",
    },
    data: {
      type: Type.ARRAY,
      items: sceneObjectSchema,
    },
  },
  required: ["summary", "data"],
  propertyOrdering: ["summary", "data"],
};
