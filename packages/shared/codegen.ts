import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../../apps/back/src/schema/**/*.graphql",
  documents: ["../../apps/web/src/operations/**/*.graphql"],
  generates: {
    "./generated/": {
      preset: "client",
      plugins: [],
    },
    "./generated/resolvers-type.ts": {
      plugins: ["typescript-resolvers", "typescript"],
      config: {
        contextType: "../index#Context",
        useIndexSignature: true,
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
