import { createGlobalTheme } from "@vanilla-extract/css";
import { geistmono, geistvf } from "./font.css";
import { color } from "./palettes";
import { textStyle } from "./textStyles";

export const theme = createGlobalTheme(":root", {
  color,
  textStyle,
  geistmono,
  geistvf,
});
