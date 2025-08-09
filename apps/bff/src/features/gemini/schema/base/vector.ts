import { Type } from "@google/genai";

export const vectorSchema = {
  type: Type.OBJECT,
  properties: {
    x: { type: Type.NUMBER },
    y: { type: Type.NUMBER },
    z: { type: Type.NUMBER },
  },
  propertyOrdering: ["x", "y", "z"],
};
