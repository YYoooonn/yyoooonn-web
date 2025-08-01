import { Request, Response } from "express";

export interface AuthUser {
  id: string;
  email: string;
  role: "user" | "admin";
}

export interface DataSources {
  userDataSource: {
    getById: (id: string) => Promise<{ id: string; email: string } | null>;
  };
}

export interface Context {
  req: Request;
  res: Response;
  user?: AuthUser;
  dataSources: DataSources;
}
