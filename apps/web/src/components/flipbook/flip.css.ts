import { style } from "@vanilla-extract/css";
import { themeVars, breakpoints } from "@/styles";

export const bookWrapper = style({
  display: "flex",
  flex: "1 0 auto",
  height: "100%",
  justifyContent: "center",
  overflow: "hidden",
  // transform: "perspective(1000px) rotateX(40deg)",
});
