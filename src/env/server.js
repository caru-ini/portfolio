import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Define schema for server-side environment variables
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    AUTH_SECRET: z.string().min(1),
    DATABASE_URL: z.string().url(),
    AUTH_GITHUB_ID: z.string().min(1),
    AUTH_GITHUB_SECRET: z.string().min(1),
    GOOGLE_GENERATIVE_AI_API_KEY: z.string().min(1),
    GITHUB_TOKEN: z.string().min(1),
    GITHUB_WEBHOOK_SECRET: z.string().min(1),
    GOOGLE_FONTS_API_KEY: z.string().min(1),
  },
  /**
   * Specify runtimeEnv manually for Next.js < 13.4.4
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    AUTH_SECRET: process.env.AUTH_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
    GOOGLE_GENERATIVE_AI_API_KEY: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GITHUB_WEBHOOK_SECRET: process.env.GITHUB_WEBHOOK_SECRET,
    GOOGLE_FONTS_API_KEY: process.env.GOOGLE_FONTS_API_KEY,
  },
  /**
   * Skip validation of environment variables (useful for CI/CD)
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Treat empty strings as undefined
   */
  emptyStringAsUndefined: true,
});
