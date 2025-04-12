import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["./src/graphql/index.ts"],
    dts: true,
    outDir: "./dist/graphql",
    clean: true,
    format: ["esm"],
    target: "node18",
    splitting: false,
    shims: true,
    external: ["graphql", "@apollo/client"],
  },
  {
    entry: ["./src/generated/client.ts"],
    dts: true,
    outDir: "./dist/graphql/client",
    clean: false,
    format: ["esm"],
    target: "node18",
    splitting: false,
    shims: true,
    external: ["graphql"],
  },
]);
