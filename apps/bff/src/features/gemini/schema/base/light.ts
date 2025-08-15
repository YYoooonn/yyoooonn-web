import { Type } from "@google/genai";
import { vectorSchema } from "./vector.js";
import { colorSchema } from "./color.js";

export const lightSchema = {
  type: Type.OBJECT,
  properties: {
    type: {
      type: Type.STRING,
      enum: ["directional", "point", "spot", "ambient"], // LightType enum
    },
    color: colorSchema,
    intensity: { type: Type.NUMBER },
    position: vectorSchema,
    distance: { type: Type.NUMBER },
    angle: { type: Type.NUMBER },
    target: vectorSchema,
  },
  propertyOrdering: [
    "type",
    "color",
    "intensity",
    "position",
    "distance",
    "angle",
    "target",
  ],
};
