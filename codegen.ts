import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "apps/bff/src/schema/**/*.graphql",
  documents: ["apps/web/src/**/*.graphql"],
  generates: {
    "packages/types/src/generated/resolvers.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        skipTypename: true,
        contextType: "apps/bff/src/context/context#Context",
        // useIndexSignature: true,
        // avoidOptionals: true,
        // useTypeImports: true,
        maybeValue: "T | null",
      },
    },
    "packages/types/src/generated/documents.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        skipTypename: true,
        maybeValue: "T | null",
        // contextType: "../index#Context",
        // defaultMapper: "unknown",
        // useIndexSignature: true,
        // avoidOptionals: true,
        // useTypeImports: true,
      },
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
  overwrite: true,
};

export default config;
