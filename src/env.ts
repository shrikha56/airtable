import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

let _env: ReturnType<typeof createEnv>;

try {
  _env = createEnv({
    server: {
      AUTH_SECRET: z.string().optional(),
      AUTH_GOOGLE_ID: z.string(),
      AUTH_GOOGLE_SECRET: z.string(),
      DATABASE_URL: z.string().url().optional(),
      NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    },
    client: {},
    runtimeEnv: {
      AUTH_SECRET: process.env.AUTH_SECRET,
      AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
      AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
      DATABASE_URL: process.env.DATABASE_URL,
      NODE_ENV: process.env.NODE_ENV,
    },
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
    emptyStringAsUndefined: true,
  });
} catch (e) {
  console.error("❌ Invalid environment variables:", e);
  throw e;
}

export const env = _env;
