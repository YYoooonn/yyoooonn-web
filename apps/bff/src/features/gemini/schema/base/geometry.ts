import { Type } from "@google/genai";

export const geometrySchema = {
  type: Type.OBJECT,
  properties: {
    type: {
      type: Type.STRING,
      enum: ["box", "sphere", "cylinder", "cone", "custom"],
    },
    params: {
      type: Type.ARRAY,
      items: { type: Type.NUMBER },
      description: "threejs에서 사용하는 params 순서로 작성",
    },
    vertices: { type: Type.ARRAY, items: { type: Type.NUMBER } },
    indices: { type: Type.ARRAY, items: { type: Type.NUMBER } },
    normals: { type: Type.ARRAY, items: { type: Type.NUMBER } },
    uvs: { type: Type.ARRAY, items: { type: Type.NUMBER } },
    colors: { type: Type.ARRAY, items: { type: Type.NUMBER } },
  },
  propertyOrdering: [
    "type",
    "params",
    "vertices",
    "indices",
    "uvs",
    "normals",
    "colors",
  ],
};
