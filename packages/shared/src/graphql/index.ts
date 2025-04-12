export * from "../generated/types";

import { loadFilesSync } from "@graphql-tools/load-files";
import { fileURLToPath } from "url";
import path from "path";

/*

FIXME 

상대경로 문제, node_modules에서 가져오는게 아니라 실행 위치로 묶임.
사용하는 곳에서 절대 경로로 가져오도록 변경

*/

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// console.log(
//   `Loading GraphQL schema from ${path.resolve(__dirname, "./schema/**/*.graphql")}`,
// )

// export const typeDefs = loadFilesSync(
//   path.resolve(__dirname, "./schema/**/*.graphql"),
// );
