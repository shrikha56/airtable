// src/app/api/auth/[...nextauth]/route.ts

import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { env } from "~/env";
import { db } from "~/server/db";

export const { auth, handlers } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Google({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: env.AUTH_SECRET,
  session: { strategy: "jwt" },
});

// Export GET and POST handlers for the app router
export const { GET, POST } = handlers;
