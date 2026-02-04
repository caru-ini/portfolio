import { env } from "@/env";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";

const openRouter = createOpenRouter({
  apiKey: env.OPENROUTER_API_KEY,
});

export const generateWithGLM = async ({
  instructions,
  input,
}: {
  instructions: string;
  input: string;
}) => {
  const model = openRouter("z-ai/glm-4.5-air:free");
  const response = await generateText({
    model,
    prompt: `${instructions}\n\n${input}`,
    maxRetries: 5,
  });
  return response.text;
};
