import { Type } from "@google/genai";
import { colorSchema } from "./color.js";

export const materialSchema = {
  type: Type.OBJECT,
  properties: {
    type: {
      type: Type.STRING,
      enum: ["standard", "physical", "basic"], // MaterialType enum
    },
    color: colorSchema,
    roughness: { type: Type.NUMBER },
    metalness: { type: Type.NUMBER },
    transparent: { type: Type.BOOLEAN },
    opacity: { type: Type.NUMBER },
  },
  propertyOrdering: [
    "type",
    "color",
    "roughness",
    "metalness",
    "transparent",
    "opacity",
  ],
};
