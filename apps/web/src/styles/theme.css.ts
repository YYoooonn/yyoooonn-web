import { createGlobalTheme } from "@vanilla-extract/css";
import { theme } from "@repo/ui/styles";

export const devTheme = createGlobalTheme(":root", {
  ...theme,
  fontFamily: { regular: `var(--font-dev)`, bold: `var(--font-dev)` },
});

export const designTheme = createGlobalTheme(":root", {
  ...theme,
  fontFamily: {
    regular: `var(--font-design)`,
    bold: `var(--font-design-bold)`,
  },
});
