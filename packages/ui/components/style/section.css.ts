import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles";

export const sectionStyle = style({
  backgroundColor: themeVars.color.background,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});
