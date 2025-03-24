import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";

export const createServer = (): Express => {
  const app = express();
  app.disable("x-powered-by").use(json());

  return app;
};
