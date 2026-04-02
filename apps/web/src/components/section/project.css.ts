import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles";

export const cardStyle = style({
  width: "100%",
  minHeight: "32px",
  // border: `1px dotted black`,
  marginTop: "12px",
  // borderRadius: "8px",
  padding: "8px",
  display: "flex",
  gap: "8px",
  flexDirection: "column",
  flexGrow: 0,
  // alignItems: "center",
  // justifyContent: "space-between",
  color: themeVars.color.text,
  fontSize: "10px",
  transition: "flex-grow 0.3s ease-in-out",
  selectors: {
    "&:hover": {
      // border: "1px solid rgb(0,0,0)",
      fontWeight: "bold",
      cursor: "pointer",
      // backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
  },
});

export const cardSelected = style([
  cardStyle,
  {
    fontWeight: "bold",
    flexGrow: 1,
  },
]);

export const projectContainer = style({});

export const projectInfoContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const projectTextContainer = style({
  height: "max-content",
  marginRight: "4px",
  // width: "160px",
  flexShrink: 0,
  alignSelf: "flex-start",
});

export const projectImageContainer = style({
  display: "flex",
  // position: "relative",
  justifyContent: "space-between",
  minHeight: "64px",
  // minWidth: "64px",
  alignSelf: "flex-start",
  overflow: "hidden",
});
