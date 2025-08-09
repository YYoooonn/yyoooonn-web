import { style } from "@vanilla-extract/css";
import { palettes } from "@/styles/constants/palettes";
import { breakpoints, themeVars } from "@/styles";
import { textStyle } from "@/styles/constants/textStyles";

export const navContainer = style({
  position: "fixed",
  top: 16,
  left: 0,
  right: 0,
  zIndex: 999,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const navWrapper = style({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  height: "64px",
  width: "90%",
  alignItems: "center",
  padding: "0 24px",
  borderRadius: "16px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  transition: "all 0.2s ease-in-out",
  "@media": {
    [breakpoints.lowTablet]: {
      padding: "0 16px",
      height: "40px",
    },
  },
});

export const scrolled = style([
  navWrapper,
  {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
]);

export const containerDark = style([
  navWrapper,
  {
    "@media": {
      "(prefers-color-scheme: dark)": {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      },
    },
  },
]);

export const logo = style({
  fontSize: "20px",
  fontWeight: "600",
  color: themeVars.color.textDarkest,
  textDecoration: "none",
  transition: "color 0.2s ease-in-out",
  selectors: {
    "&:hover": {
      color: themeVars.color.primary,
    },
  },
  fontFamily: themeVars.font.primary,
});

export const logoDark = style({
  "@media": {
    "(prefers-color-scheme: dark)": {
      color: palettes.white,
    },
  },
});

export const nav = style({
  display: "flex",
  alignItems: "center",
  gap: "32px",
  "@media": {
    "(max-width: 768px)": {
      display: "none",
    },
  },
});

export const navLink = style({
  fontSize: "14px",
  fontWeight: "400",
  color: themeVars.color.text,
  textDecoration: "none",
  transition: "color 0.2s ease-in-out",
  selectors: {
    "&:hover": {
      color: themeVars.color.primary,
    },
  },
});

export const navLinkDark = style({
  "@media": {
    "(prefers-color-scheme: dark)": {
      color: palettes.gray400,
    },
  },
  selectors: {
    "&:hover": {
      color: palettes.white,
    },
  },
});

export const actions = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  "@media": {
    "(max-width: 768px)": {
      display: "none",
    },
  },
});

export const button = style({
  padding: "8px 16px",
  fontSize: "14px",
  fontWeight: "500",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const primaryButton = style({
  backgroundColor: palettes.blue,
  color: palettes.white,
  selectors: {
    "&:hover": {
      backgroundColor: "#0014cc",
      transform: "translateY(-1px)",
    },
  },
});

export const secondaryButton = style({
  backgroundColor: "transparent",
  color: palettes.gray600,
  border: "1px solid rgba(0, 0, 0, 0.1)",
  selectors: {
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
  },
});

export const secondaryButtonDark = style({
  "@media": {
    "(prefers-color-scheme: dark)": {
      color: palettes.gray400,
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
  },
  selectors: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
  },
});

export const scrolledDark = style({
  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundColor: "rgba(0, 0, 0, 0.95)",
      boxShadow: "0 1px 3px rgba(255, 255, 255, 0.1)",
    },
  },
});

// Mobile menu styles
export const mobileMenuButton = style({
  display: "none",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "32px",
  height: "32px",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "0",
  "@media": {
    [breakpoints.lowTablet]: {
      display: "flex",
    },
  },
});

export const mobileMenuIcon = style({
  width: "20px",
  height: "2px",
  backgroundColor: palettes.black,
  transition: "all 0.3s ease-in-out",
  selectors: {
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      translate: "-10px",
      width: "20px",
      height: "2px",
      backgroundColor: palettes.black,
      transition: "all 0.3s ease-in-out",
    },
    "&::before": {
      transform: "translateY(-6px)",
    },
    "&::after": {
      transform: "translateY(6px)",
    },
  },
});

export const mobileMenuIconOpen = style({
  backgroundColor: "transparent",
  selectors: {
    "&::before": {
      transform: "rotate(45deg)",
    },
    "&::after": {
      transform: "rotate(-45deg)",
    },
  },
});

export const mobileMenu = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 998,
  backgroundColor: themeVars.color.background,
  backdropFilter: "blur(20px)",
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  padding: "24px",
  paddingTop: "64px",
  transform: "translateY(-100%)",
  transition: "transform 0.3s ease-in-out",
});

export const mobileMenuOpen = style({
  transform: "translateY(0)",
});

export const mobileNav = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const mobileNavLink = style({
  fontSize: "16px",
  fontWeight: "500",
  color: palettes.black,
  textDecoration: "none",
  padding: "12px 0",
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  transition: "color 0.2s ease-in-out",
  selectors: {
    "&:hover": {
      color: palettes.blue,
    },
  },
});

export const mobileActions = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginTop: "24px",
  paddingTop: "24px",
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
});
