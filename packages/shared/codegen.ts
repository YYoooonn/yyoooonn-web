import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/graphql/schema/**/*.graphql",
  documents: [
    "./src/graphql/operations/**/*.graphql",
    "./src/graphql/fragments/**/*.graphql",
  ],
  generates: {
    "./src/generated/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        // contextType: "../index#Context",
        // useIndexSignature: true,
        // avoidOptionals: true,
        useTypeImports: true,
        maybeValue: "T | null",
        // defaultMapper: "unknown",
      },
    },
    "./src/generated/client.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        // contextType: "../index#Context",
        // useIndexSignature: true,
        // avoidOptionals: true,
        useTypeImports: true,
        maybeValue: "T | null",
        // defaultMapper: "unknown",
      },
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
  overwrite: true,
};

export default config;
