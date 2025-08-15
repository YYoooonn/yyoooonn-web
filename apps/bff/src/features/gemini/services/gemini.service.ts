import { GoogleGenAI } from "@google/genai";
import { editResponseSchema } from "../schema/index.js";
// import { sceneObjectSchema } from "../schema/base";
import {
  artistSytemInstruction,
  editSystemInstruction,
} from "../lib/systemInstructions.js";
import dotenv from "dotenv";
import { createResponseSchema } from "../schema/createResponseSchema.js";

dotenv.config();
const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generationConfig = (edit: boolean) => ({
  maxOutputTokens: 16384, // 최대 출력 토큰 (필요에 따라 조절)
  temperature: 0.9, // 창의성 (0.0 - 1.0, 높을수록 창의적)
  topP: 1,
  topK: 1,
  responseMimeType: "application/json",
  systemInstruction: edit ? editSystemInstruction : artistSytemInstruction,
  responseSchema: edit ? editResponseSchema : createResponseSchema,
});

export async function generateGeminiResponse(
  prompt: string,
  edit: boolean = true,
  model: string = "gemini-2.5-flash",
) {
  try {
    const response = await genAI.models.generateContent({
      model,
      contents: prompt,
      config: generationConfig(edit),
    });

    if (!response.text) {
      // console.log(response)
      return { summary: "empty response", actions: [], data: [] };
    }
    return await JSON.parse(response.text);
    // if (!response.candidates) throw new Error("no candidates")
    // const parts = response.candidates[0]?.content?.parts
    // if (!parts) throw new Error("no content parts")
    // return parts[0]?.text;
  } catch (error) {
    console.error("Error generating Gemini response:", error);
    return {
      summary: "error from gemini, please retry",
      actions: [],
      data: [],
    };
  }
}

export async function countTokens(prmopt: string) {
  const tokens = await genAI.models.countTokens({
    model: "gemini-2.5-pro",
    contents: prmopt,
  });
  console.log("tokens", tokens);
}
