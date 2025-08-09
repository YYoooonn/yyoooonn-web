import { Type } from "@google/genai";
// import {
//   addActionSchema,
//   updateActionSchema,
//   removeActionSchema,
// } from "./action";
import { sceneObjectSchema } from "./base";

export const editResponseSchema = {
  type: Type.OBJECT,
  properties: {
    summary: {
      type: Type.STRING,
      description: "breif response for user's request or failure reason",
    },
    actions: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          type: { type: Type.STRING, enum: ["add", "update", "remove"] },
          data: sceneObjectSchema,
        },
        required: ["type", "data"],
        propertyOrdering: ["type", "data"],
      },
    },
  },
  required: ["summary", "actions"],
  propertyOrdering: ["summary", "actions"],
};

// export const editResponseSchema = {
//   type: Type.OBJECT,
//   properties: {
//     summary: {
//         type: Type.STRING,
//         description : "breif summary for action or summary for failure reason"
//     },
//     actions : {
//         type: Type.ARRAY,
//         items: {
//           anyOf: [addActionSchema, updateActionSchema, removeActionSchema]
//         },
//         description:  "An array of actions to be taken on the scene."
//     }
//   },
//   required: ["summary", "actions"],
//   propertyOrdering: ["summary", "actions"]
// };
