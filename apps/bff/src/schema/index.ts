import { fileURLToPath } from "url";
import { loadFiles } from "@graphql-tools/load-files";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resolverExts =
  process.env.NODE_ENV === "production" ? [".js"] : [".ts", ".js"];

export async function loadSchema() {
  const resolversArray = await loadFiles(
    path.join(__dirname, "../**/*.resolver.*"),
    {
      extensions: resolverExts,
    },
  );
  const resolvers = mergeResolvers(resolversArray);

  const typeDefsArray = await loadFiles(
    path.resolve(__dirname, "../../node_modules/@repo/graphql/**/*.graphql"),
  );
  const typeDefs = mergeTypeDefs(typeDefsArray);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  return schema;
}
