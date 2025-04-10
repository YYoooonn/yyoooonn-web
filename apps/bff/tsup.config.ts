import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  outDir: "dist",
  target: "node16",
  format: ["esm"], // or ['cjs'] depending on your environment
  sourcemap: false,
  clean: true,
  dts: false,
  minify: true,
  bundle: true,
  splitting: false,
  skipNodeModulesBundle: true,
  // external: ['@apollo/server', 'graphql'], // ✅ graphql 관련은 외부로 설정
  // noExternal: ['@graphql-tools/*'], // 필요시 추가
});
