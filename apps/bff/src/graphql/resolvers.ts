import { loadFilesSync } from "@graphql-tools/load-files";
import { Resolvers } from "@repo/shared/generated/types";
import { mergeResolvers } from "@graphql-tools/merge";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 리졸버 파일들을 동적으로 불러옴
const resolversArray = loadFilesSync(
  path.join(__dirname, "./resolvers/**/*.resolver.ts"), // 리졸버가 있는 폴더 경로
  { extensions: ["ts"] }, // TypeScript 파일만 읽도록 설정
);

// 리졸버들을 합침
export const resolvers: Resolvers = mergeResolvers(resolversArray);
