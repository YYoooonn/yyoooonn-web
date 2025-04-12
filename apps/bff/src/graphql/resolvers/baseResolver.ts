import { GQLContext } from "../context";
import { QueryResolvers } from "@repo/shared/graphql";

export type BaseQueryResolver = QueryResolvers<GQLContext>;

// export type BaseMutationResolver = MutationResolvers<GQLContext>
