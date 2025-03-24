import { createGlobalTheme } from "@vanilla-extract/css";
import { color, textStyle } from "@repo/ui/styles";

export const theme = createGlobalTheme(":root", {
  fontFamily: {
    root: `var(--font-root)`,
    design: { regular: `var(--font-design)`, bold: `var(--font-design-bold)` },
  },
});
