// packages/shared/graphql/index.ts
import { loadFilesSync } from "@graphql-tools/load-files";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const typeDefs = loadFilesSync(
  path.join(__dirname, "./schema/**/*.graphql"),
);
