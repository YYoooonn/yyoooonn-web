import { QueryResolvers } from "@repo/shared/graphql";
import { exampleResolver } from "./example.resolver";
import { GQLContext } from "../../context";

export const queryResolvers: QueryResolvers<GQLContext> = {
  ...exampleResolver,
};
