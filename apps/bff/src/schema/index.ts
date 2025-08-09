import { fileURLToPath } from "url";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import path from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// resolvers
const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, "../**/*.resolver.ts")),
);

// typdefs
const typeDefsArray = loadFilesSync(
  path.resolve(__dirname, "../../node_modules/@repo/graphql/**/*.graphql"),
);
const typeDefs = mergeTypeDefs(typeDefsArray); // 병합

// schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
