import { globalStyle } from "@vanilla-extract/css";
import { global } from "@repo/ui/styles";

globalStyle("*", {
  ...global,
  fontWeight: "500",
});

globalStyle("html, body, #__next", {
  height: "100vh",
  width: "100vw",
  overflowX: "hidden",
});
