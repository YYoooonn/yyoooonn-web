import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles";

export const projectSection = style({
  padding: "8px",
  borderStyle: "dashed",
  borderColor: "transparent",
  borderWidth: "1px",
  marginTop: "8px",
  maxWidth: "100%",
  width: "max-content",
  //   borderRadius: "4px",
  selectors: {
    "&:hover": {
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: themeVars.color.textDark,
      cursor: "pointer",
      // borderColor: themeVars.color.primary,
      // color: themeVars.color.primary,
    },
  },
});

export const projectContentsContainer = style({
  width: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  height: "64px",

  // alignItems: "center",
  // flexWrap: "wrap",
  gap: "4px",
  // flexDirection: "row",
});

export const itemBase = style({
  flexShrink: 0,
  width: "64px",
  marginRight: "4px",
  height: "64px",
});

export const projectItem = style([
  itemBase,
  {
    flexShrink: 0,
    marginRight: "4px",
    width: "64px",
    height: "64px",
    borderStyle: "dotted",
    borderWidth: "1px",
  },
]);

export const projectTitle = style([
  itemBase,
  {
    position: "absolute",
    width: "120px",
    // backgroundColor: themeVars.color.background
  },
]);
