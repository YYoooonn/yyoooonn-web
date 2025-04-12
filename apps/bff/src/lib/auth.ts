import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "dev-secret";

export interface JwtPayload {
  userId?: string;
  email?: string;
}

export function signJwt(payload: JwtPayload): string {
  return jwt.sign(payload, SECRET, { expiresIn: "1h" });
}

export function verifyJwt(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, SECRET) as JwtPayload;
  } catch (err) {
    return null;
  }
}
