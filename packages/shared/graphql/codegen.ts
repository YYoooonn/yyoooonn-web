import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./graphql/schema/**/*.graphql",
  documents: ["./graphql/operations/**/*.graphql"],
  generates: {
    "./generated/client/": {
      preset: "client",
      plugins: [],
    },
    "./generated/types.ts": {
      plugins: ["typescript-resolvers", "typescript"],
      config: {
        // contextType: "../index#Context",
        // useIndexSignature: true,
        // avoidOptionals: true,
        // useTypeImports: true,
        // defaultMapper: "unknown",
        // maybeValue: "T | null",
      },
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
  overwrite: true,
};

export default config;
