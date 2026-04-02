import { style } from "@vanilla-extract/css";
import { themeVars, breakpoints } from "@/styles";

export const pageContainer = style({
  width: "100%",
  padding: "24px",
  paddingTop: "80px",
  "@media": {
    [breakpoints.lowTablet]: {
      padding: "12px",
      paddingTop: "60px",
    },
  },
});

export const projectCardContainer = style({
  borderBottom: "1px dashed black",
  margin: "8px",
  padding: "8px",
  fontStyle: "italic",
});
