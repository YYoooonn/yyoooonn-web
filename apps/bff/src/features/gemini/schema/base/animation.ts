import { Type } from "@google/genai";

export const animationSchema = {
  type: Type.OBJECT,
  properties: {
    property: { type: Type.STRING },
    from: { type: Type.NUMBER },
    to: { type: Type.NUMBER },
    duration: { type: Type.NUMBER },
    delay: { type: Type.NUMBER },
    repeat: { type: Type.NUMBER },
  },
  propertyOrdering: ["property", "from", "to", "duration", "delay", "repeat"],
};
