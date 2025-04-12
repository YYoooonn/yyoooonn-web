import { loadFilesSync } from "@graphql-tools/load-files";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prod = process.env.NODE_ENV === "production";

// docker 및 로컬에서 사용하기 위한 상대 경로
const sharedGraphqlPath = prod
  ? path.join(
      __dirname,
      "../node_modules/@repo/shared/dist/graphql/schema/**/*.graphql",
    )
  : path.join(
      __dirname,
      "../../../node_modules/@repo/shared/src/graphql/schema/**/*.graphql",
    );

console.log(`Loading GraphQL schema from ${sharedGraphqlPath}`);

export const typeDefs = loadFilesSync(path.join(sharedGraphqlPath));
