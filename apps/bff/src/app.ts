import express from "express";
import authRouter from "./routes/auth";

const app: express.Application = express();
app.use(express.json());
app.use("/auth", authRouter);

// Serve static files from the public directory
app.get("/", (req, res) => {
  res.send({
    title: "yyoooonn api server",
    status: "working in progress",
    requestIp: req.ip,
    requestUrl: req.url,
    requestMethod: req.method,
    requestDate: new Date(),
  });
});

export default app;
