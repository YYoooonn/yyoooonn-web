import { globalStyle } from "@vanilla-extract/css";
import { geistmono } from "./font.css.js";

globalStyle("*", {
  fontFamily: geistmono,
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
});
