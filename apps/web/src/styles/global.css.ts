import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
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
});
