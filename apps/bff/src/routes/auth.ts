import { Router, Request, Response } from "express";
import { signJwt } from "../lib/auth";

const router: Router = Router();

router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;

  // 실제 DB 조회 로직 추가 필요
  if (email === "test@example.com" && password === "1234") {
    const token = signJwt({ userId: "abc123", email });
    return res.json({ token });
  }

  return res.status(401).json({ error: "Invalid credentials" });
});

export default router;
