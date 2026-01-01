import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Define schema for server-side environment variables
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    DATABASE_URL: z.string().url(),
    GITHUB_TOKEN: z.string().min(1),
    GITHUB_WEBHOOK_SECRET: z.string().min(1),
    GOOGLE_FONTS_API_KEY: z.string().min(1),
    OPENROUTER_API_KEY: z.string().min(1),
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
