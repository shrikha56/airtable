import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { env } from "~/env";
import { db } from "~/server/db";

const handler = NextAuth({
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

// ✅ Correct export for App Router
export { handler as GET, handler as POST };
