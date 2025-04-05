import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema";
import resolvers from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req, res }) => ({ req, res }),
  listen: { port: Number(process.env.PORT) || 4000 },
});

console.log(`🚀 Server ready at ${url}`);
