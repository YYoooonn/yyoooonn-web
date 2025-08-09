import { Type } from "@google/genai";

export const cameraSchema = {
  type: Type.OBJECT,
  properties: {
    type: {
      type: Type.STRING,
      enum: ["perspective", "orthographic"], // CameraType enum
    },
    fov: { type: Type.NUMBER },
    near: { type: Type.NUMBER },
    far: { type: Type.NUMBER },
    zoom: { type: Type.NUMBER },
  },
  propertyOrdering: ["type", "fov", "near", "far", "zoom"],
};
