import { style } from "@vanilla-extract/css";
import { breakpoints, themeVars } from "@/styles";

export const layoutContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flex: 1,
  width: "100vw",
  height: "100vh",
});

export const mainContainer = style({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  overflowY: "auto",
  position: "relative",
  padding: "0 24px",
  paddingTop: "80px",
  "@media": {
    [breakpoints.lowTablet]: {
      padding: "0 16px",
      paddingTop: "64px",
    },
  },
});
