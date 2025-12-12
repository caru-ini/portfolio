import { env } from "@/env";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";

const openRouter = createOpenRouter({
  apiKey: env.OPENROUTER_API_KEY,
});

export const generateWithGemini = async ({
  instructions,
  input,
}: {
  instructions: string;
  input: string;
}) => {
  const model = openRouter("google/gemma-3-27b-it:free");
  const response = await generateText({
    model,
    prompt: `${instructions}\n\n${input}`,
  });
  return response.text;
};
