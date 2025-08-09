import { Type } from "@google/genai";
import { geometrySchema } from "./geometry";
import { vectorSchema } from "./vector";
import { materialSchema } from "./material";
import { lightSchema } from "./light";
import { cameraSchema } from "./camera";
import { animationSchema } from "./animation";

const sceneObjectSchema = {
  type: Type.OBJECT,
  description: "3D object information",
  properties: {
    id: {
      type: Type.STRING,
      description: "uuid for 3D object",
      nullable: false,
    },
    name: { type: Type.STRING },
    parentId: { type: Type.STRING, nullable: true },
    type: {
      type: Type.STRING,
      enum: ["mesh", "light", "group", "camera"],
    },
    // Mesh related fields
    geometry: geometrySchema,
    material: materialSchema,
    // Light related fields
    light: lightSchema,
    // Camera related fields
    camera: cameraSchema,
    // Common fields (transform)
    position: vectorSchema,
    rotation: vectorSchema,
    scale: vectorSchema,
    animations: {
      type: Type.ARRAY,
      items: animationSchema,
    },
    count: { type: Type.NUMBER },
  },
  required: ["id", "parentId", "type"],
};

export { materialSchema, vectorSchema, geometrySchema, sceneObjectSchema };
