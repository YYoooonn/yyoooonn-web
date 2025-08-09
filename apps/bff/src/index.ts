import { startServer } from "./server";

startServer().catch((err) => {
  console.error("❌ Server failed to start:", err);
});
