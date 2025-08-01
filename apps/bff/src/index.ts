import { startServer } from "./server.js";

startServer().catch((err) => {
  console.error("❌ Server failed to start:", err);
});
