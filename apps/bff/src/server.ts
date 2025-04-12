import http from "http";
import expressServer from "./app"; // 추가
import { expressMiddleware } from "@apollo/server/express4";
import { createApolloServer } from "./graphql/server";
import { createContext } from "./graphql/context";

// // JSON 요청을 처리하기 위한 미들웨어 추가
// app.use(express.json());

async function startServer() {
  const httpServer = http.createServer(expressServer);
  const apolloServer = await createApolloServer();

  // express 미들웨어로 ApolloServer를 사용
  expressServer.use(
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
