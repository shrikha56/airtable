
import { handlers } from "~/server/auth";

// ✅ Export only GET and POST (this is required in /app/api)
export const { GET, POST } = handlers;