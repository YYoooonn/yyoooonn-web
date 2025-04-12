import { ApolloServer } from "@apollo/server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import { GQLContext } from "./context";

export async function createApolloServer() {
  const server = new ApolloServer<GQLContext>({
    typeDefs,
    resolvers,
  });

  await server.start();
  return server;
}
