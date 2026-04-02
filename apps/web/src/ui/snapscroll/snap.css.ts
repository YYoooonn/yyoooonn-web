import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles";

export const snapContainer = style({
  position: "relative",
  width: "100%",
  height: "100vh",
  overflowY: "auto",
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

export const snapAnimateContainer = style({
  position: "absolute",
  width: "100%",
  // height: "100%", height should be parallel to behind
});

export const snapAnimateSectionContainer = style({
  position: "sticky",
  height: "100vh",
  overflow: "hidden",
  top: 0,
  // scrollPaddingBottom: "100px",
  color: themeVars.color.text,
});

export const snapSection = style({
  position: "absolute",
  height: "100%",
  width: "100%",
});

export const scrollContainer = style({
  position: "fixed",
  height: "100%",
  display: "flex",
  right: 0,
  zIndex: 10,
  marginRight: "4px",
});

export const indContainer = style({
  position: "relative",
  display: "flex",
  justifyContent: "right",
  top: 0,
  height: "100%",
  width: "100%",
});

export const baseInd = style({
  position: "absolute",
  textAlign: "right",
  verticalAlign: "bottom",
  ...themeVars.textStyle.small,
  fontWeight: "300",
  fontStyle: "italic",
});

export const indText = style([
  baseInd,
  {
    paddingRight: "1rem",
  },
]);

export const indSelector = style([
  indText,
  {
    opacity: 0.2,
    ":hover": {
      cursor: "pointer",
      opacity: 1,
      color: themeVars.color.primary,
    },
  },
]);
