import { Type } from "@google/genai";
import { sceneObjectSchema } from "../base/sceneObject.js";

const addActionSchema = {
  type: Type.OBJECT,
  properties: {
    type: { type: Type.STRING, enum: ["add"] },
    data: sceneObjectSchema,
  },
  required: ["type", "data"],
};

export { addActionSchema };
