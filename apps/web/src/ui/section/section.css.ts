import { style } from "@vanilla-extract/css";
import { themeVars, breakpoints } from "@/styles";

export const sectionStyle = style({
  backgroundColor: themeVars.color.background,
  color: themeVars.color.textDark,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "0 24px",
  paddingTop: "80px",
  paddingBottom: "20px",
  "@media": {
    [breakpoints.lowTablet]: {
      padding: "0 16px",
      paddingTop: "64px",
    },
  },
});
