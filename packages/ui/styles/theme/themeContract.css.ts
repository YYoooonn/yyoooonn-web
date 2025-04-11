import { createThemeContract } from "@vanilla-extract/css";

const DefaultTextstyle = {
  fontWeight: "",
  fontSize: "",
  lineHeight: "",
};
export const themeVars = createThemeContract({
  color: {
    primary: "",
    secondary: "",
    tertiary: "",
    background: "",
    text: "",
    textLight: "",
    textDark: "",
    textLightest: "",
    textDarkest: "",
    textPlaceholder: "",
    textPlaceholderLight: "",
    textPlaceholderDark: "",
  },
  textStyle: {
    xsmall: DefaultTextstyle,
    small: DefaultTextstyle,
    medium: DefaultTextstyle,
    large: DefaultTextstyle,
    xlarge: DefaultTextstyle,
  },
  font: {
    primary: "",
    secondary: "",
    tertiary: "",
  },
  spacing: {
    xsmall: "",
    small: "",
    medium: "",
    large: "",
    xlarge: "",
  },
});
