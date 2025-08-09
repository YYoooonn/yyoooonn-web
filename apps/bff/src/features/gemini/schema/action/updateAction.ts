import { Type } from "@google/genai";
import { sceneObjectSchema } from "../base";

function pickProperties(baseSchema: Record<string, any>, keys: string[]) {
  const originalProps = baseSchema.properties;
  const selectedProps: Record<string, any> = {};

  for (const key of keys) {
    if (originalProps[key]) {
      selectedProps[key] = originalProps[key];
    }
  }

  return {
    type: Type.OBJECT,
    properties: selectedProps,
  };
}

const updatableKeys = [
  "id",
  "name",
  "geometry",
  "material",
  "light",
  "camera",
  "position",
  "rotation",
  "scale",
  "animations",
];

const updateItemSchema = pickProperties(sceneObjectSchema, updatableKeys);

// console.log(JSON.stringify(updateItemSchema, null, 2));

export const updateActionSchema = {
  type: Type.OBJECT,
  properties: {
    type: { type: Type.STRING, enum: ["update"] },
    data: updateItemSchema,
  },
};
