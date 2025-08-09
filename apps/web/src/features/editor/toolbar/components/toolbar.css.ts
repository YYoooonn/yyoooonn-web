import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles";

export const toolbarStyle = style({
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  maxHeight: "30%",
  overflow: "hidden",
  maxWidth: "1024px",
  width: "80%",
  bottom: "64px",
  padding: "0.5rem 1rem",
  left: "50%",
  transform: "translateX(-50%)",

  // liquid glass
  background: "rgba(255, 255, 255, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)", // Safari 호환성
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  borderRadius: "16px",
  fontFamily: themeVars.font.secondary,
  ...themeVars.textStyle.small,
});

export const buttonStyle = style({
  padding: "0.4rem",
  marginRight: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",

  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",

  selectors: {
    "&:hover": {
      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.25)",
      transform: "translateY(-2px)",
    },
    "&:active": {
      transform: "translateY(1px)",
      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.15)",
    },
  },

  color: themeVars.color.text,
  ...themeVars.textStyle.small,
});

export const helperButton = style([
  buttonStyle,
  {
    borderColor: "rgb(236, 159, 45)",
    backgroundColor: "rgba(236, 159, 45, 0.3)",
    selectors: {
      "&:hover": {
        backgroundColor: "rgba(236, 159, 45, 0.6)",
        transform: "none",
      },
    },
  },
]);

export const toggleButtonSelected = style([
  buttonStyle,
  {
    background: "rgba(86, 110, 246, 0.2)",
    borderColor: "rgb(86, 110, 246)",
  },
]);

export const inputStyle = style({
  flex: "1",
  bottom: 0,
  background: "transparent",
  border: "none",
  backdropFilter: "none",
  outline: "none",
  ...themeVars.textStyle.small,
});

export const inputContainer = style({
  display: "flex",
  width: "100%",
  padding: "0.5rem",
  paddingRight: 0,
  borderRadius: "12px",
  background: "rgba(255, 255, 255, 0.2)",
});
