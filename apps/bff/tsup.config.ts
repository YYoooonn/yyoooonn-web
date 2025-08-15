import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // 진입점, schema 관련 코드 포함
  format: ["esm"], // esm 포맷으로 빌드
  dts: true, // 타입 선언 파일 생성
  splitting: false, // ESM 코드 분할 (선택 사항)
  sourcemap: true,
  clean: true,
  external: ["fs", "path", "url"], // node 내장 모듈 external 처리
});
