import { Request } from "express";
import { JwtPayload, verifyJwt } from "../lib/auth";
import { BaseContext } from "@apollo/server";

export interface GQLContext extends BaseContext {
  user: JwtPayload | null;
}

export async function createContext({
  req,
}: {
  req: Request;
}): Promise<GQLContext> {
  const authHeader = req.headers.authorization;
  const token = authHeader ? authHeader.split(" ")[1] : null;

  const user = token ? verifyJwt(token) : null;

  return {
    user,
  };
}
