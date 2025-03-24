import { global } from "@repo/ui/styles";
import { theme } from "./theme.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
  fontFamily: "var(--font-root)",
});

globalStyle("html, body, #__next", {
  height: "100vh",
  width: "100vw",
  overflowX: "hidden",
});
