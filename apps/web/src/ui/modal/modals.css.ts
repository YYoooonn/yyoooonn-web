import { themeVars } from "@/styles";
import { style } from "@vanilla-extract/css";
import globalTheme from "@/styles/theme/globalTheme.css";

export const modalContainer = style({
  backgroundColor: themeVars.color.backgroundBlur,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backdropFilter: "blur(5px)",
  transition: "opacity 0.3s ease-in-out",
  selectors: {
    "&.fade-in": {
      opacity: 1,
    },
    "&.fade-out": {
      opacity: 0,
    },
  },
});

export const modalContent = style({
  backgroundColor: themeVars.color.background,
  borderStyle: globalTheme.bSolid,
  padding: "20px",
  maxWidth: "500px",
  width: "100%",
  zIndex: 1001,
});
