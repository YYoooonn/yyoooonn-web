import { style } from "@vanilla-extract/css";
import { themeVars, breakpoints } from "@/styles";
import { globalTheme } from "@/styles/global";

export const bookContainer = style({
  display: "flex",
  padding: "20px",
  flexDirection: "row",
  // backgroundColor: globalTheme.gray400,
  justifyContent: "space-between",
  borderRadius: "1rem",
  //   justifyContent: "center",
  width: "100%",
  height: "100%",
  // minHeight: "660px",
  alignItems: "top",
  "@media": {
    [breakpoints.lowTablet]: {
      padding: 0,
      height: "100%",
    },
  },
});

export const canvasContainer = style({
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden",
});
