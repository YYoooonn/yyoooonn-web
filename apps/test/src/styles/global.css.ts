import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  backgroundColor: "black",
  color: "white",
});

globalStyle("html, body, #__next", {
  height: "100vh",
  width: "100vw",
  overflowX: "hidden",
});
