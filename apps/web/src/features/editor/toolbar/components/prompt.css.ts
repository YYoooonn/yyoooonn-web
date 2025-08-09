import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles";

export const logContainer = style({
  display: "block",
  width: "100%",
  maxHeight: "20%",
  paddingTop: "8px",
  overflowY: "auto",
});

const logStyle = style({
  maxWidth: "80%",
  display: "inline-block",
  padding: "0.5rem",
  marginBottom: "4px",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  borderRadius: "16px",
});

export const logLeft = style([
  logStyle,
  {
    float: "left",
  },
]);

export const logRight = style([
  logStyle,
  {
    float: "right",
  },
]);
