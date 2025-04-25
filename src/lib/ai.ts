import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export const generateWithGemini = async ({
  instructions,
  input,
}: {
  instructions: string;
  input: string;
}) => {
  const model = google("gemini-2.0-flash-exp");
  const response = await generateText({
    model,
    prompt: `${instructions}\n\n${input}`,
  });
  return response.text;
};
