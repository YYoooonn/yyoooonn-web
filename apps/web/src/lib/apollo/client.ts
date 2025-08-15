import { ApolloClient, InMemoryCache } from "@apollo/client";

export const createApolloClient = () => {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API ?? "http://localhost:4000/graphql", // ← 여기에 호스트/포트
    cache: new InMemoryCache(),
  });
};
