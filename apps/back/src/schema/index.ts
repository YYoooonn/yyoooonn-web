import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { readFileSync } from "fs";

const typeDefs = readFileSync("./src/schema/example.graphql", {
  encoding: "utf-8",
});

export default typeDefs;
