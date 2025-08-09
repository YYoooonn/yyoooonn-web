import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./**/*.graphql",
  generates: {
    "./generated/server/resolvers-types.d.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
