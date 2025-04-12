import { Resolvers } from "@repo/shared/graphql";
import { queryResolvers } from "./resolvers/query";

export const resolvers: Resolvers = {
  Query: queryResolvers,
  // Mutation: {
  //   ...exampleResolvers.Mutation,
  // },
};
