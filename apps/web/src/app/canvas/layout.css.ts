import { style } from "@vanilla-extract/css";

export const layoutContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flex: 1,
  width: "100vw",
  height: "100vh",
});

export const canvasContainer = style({
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden",
});
