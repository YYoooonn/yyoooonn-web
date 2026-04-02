import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles";

export const aboutContainer = style({
  fontFamily: themeVars.font.primary,
  fontStyle: "italic",
});

export const aboutTitle = style({
  width: "100%",
  textAlign: "left",
  color: themeVars.color.text,
  ...themeVars.textStyle.large,
});
