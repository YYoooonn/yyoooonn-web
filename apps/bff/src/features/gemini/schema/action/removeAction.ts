import { Type } from "@google/genai";

export const removeActionSchema = {
  type: Type.OBJECT,
  properties: {
    type: {
      type: Type.STRING,
      enum: ["remove"],
      description: "3D 객체 삭제",
    },
    data: {
      type: Type.STRING,
      description: "삭제할 객체의 ID",
    },
  },
  required: ["type", "data"],
};
