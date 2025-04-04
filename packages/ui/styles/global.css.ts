import { globalStyle } from "@vanilla-extract/css";
import * as theme from "./theme/index.css";

globalStyle("*", {
  boxSizing: "border-box" as "border-box",
  padding: 0,
  margin: 0,
});

globalStyle("html, #__next", {
  height: "100vh",
  width: "100vw",
  overflowX: "hidden",
});

globalStyle("body", {
  height: "100vh",
  width: "100vw",
  backgroundColor: theme.color.light.background,
  color: theme.color.light.text,
  fontFamily: theme.font.primary,
});

globalStyle(":root", {
  colorScheme: "light",
});
