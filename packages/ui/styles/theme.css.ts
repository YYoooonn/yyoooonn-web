import { createGlobalTheme } from "@vanilla-extract/css";
import { color } from "./palettes";
import { textStyle } from "./textStyles";

export const theme = createGlobalTheme(":root", {
  color,
  textStyle,
  fontFamily: {
    root: `var(--font-root)`,
    dev: `var(--font-dev)`,
    design: { regular: `var(--font-design)`, bold: `var(--font-design-bold)` },
  },
});
