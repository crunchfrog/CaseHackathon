// src/server/models/chatModel.ts
import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";
dotenv.config();

export const model = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 0.6,
  // streaming: true,
});
