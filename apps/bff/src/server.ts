import http from "http";
import expressServer from "./app.js"; // 추가
import { expressMiddleware } from "@apollo/server/express4";
import { createContext } from "./context/createContext.js";
import { ApolloServer } from "@apollo/server";
import { loadSchema } from "./schema/index.js";
import { Context } from "./context/context.js";
import dotenv from "dotenv";

dotenv.config();

export async function createApolloServer() {
  const schema = await loadSchema();
  const server = new ApolloServer<Context>({
    schema: schema,
    introspection: process.env.NODE_ENV !== "production", // 개발 환경에서만 사용
  });

  await server.start();
  return server;
}

export async function startServer() {
  const httpServer = http.createServer(expressServer);
  const apolloServer = await createApolloServer();

  // express 미들웨어로 ApolloServer를 사용
  expressServer.use(
    "/graphql",
    expressMiddleware(apolloServer, {
      context: createContext,
    }),
  );

  const port = Number(process.env.PORT_BFF || 4000);

  httpServer.listen({ port }, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
  });
}
