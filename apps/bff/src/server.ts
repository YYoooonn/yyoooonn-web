import http from "http";
import express from "express"; // 추가
import { expressMiddleware } from "@apollo/server/express4";
import { createApolloServer } from "./graphql/server";
import { createContext } from "./graphql/context";

const app = express(); // app을 express 애플리케이션으로 설정

// JSON 요청을 처리하기 위한 미들웨어 추가
app.use(express.json());

async function startServer() {
  const httpServer = http.createServer(app);
  const apolloServer = await createApolloServer();

  // express 미들웨어로 ApolloServer를 사용
  app.use(
    "/graphql",
    expressMiddleware(apolloServer, {
      context: createContext,
    }),
  );

  const port = Number(process.env.PORT_BACK || 4000);

  httpServer.listen({ port }, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
  });
}

// 서버 실행
startServer().catch((err) => {
  console.error("❌ Server failed to start:", err);
});
