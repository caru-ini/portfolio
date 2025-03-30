import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Define schema for client-side environment variables
   * (those with NEXT_PUBLIC_ prefix)
   */
  client: {
    // Empty object as there are no client environment variables yet
    // Example: NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_GTM_ID: z.string().optional(),
  },
  /**
   * Actual values for client environment variables
   */
  runtimeEnv: {
    // Example: NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
  },
  /**
   * Treat empty strings as undefined
   */
  emptyStringAsUndefined: true,
});
