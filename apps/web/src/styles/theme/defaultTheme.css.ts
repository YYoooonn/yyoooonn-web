import { createTheme } from "@vanilla-extract/css";
import { themeVars } from "./themeContract.css";
import globalTheme from "./globalTheme.css";

const defaultTheme = createTheme(themeVars, {
  color: {
    primary: globalTheme.orange,
    secondary: globalTheme.blue,
    tertiary: globalTheme.green,
    background: globalTheme.white,
    text: globalTheme.gray600,
    textLight: globalTheme.white,
    textDark: globalTheme.gray800,
    textLightest: globalTheme.gray100,
    textDarkest: globalTheme.black,
    textPlaceholder: globalTheme.gray400,
    textPlaceholderLight: globalTheme.gray200,
    textPlaceholderDark: globalTheme.gray600,
  },
  textStyle: {
    xsmall: globalTheme.subtitle3,
    small: globalTheme.subtitle1,
    medium: globalTheme.body1,
    large: globalTheme.heading4,
    xlarge: globalTheme.heading2,
  },
  font: {
    primary: globalTheme.goudy,
    secondary: globalTheme.ibm,
    tertiary: globalTheme.jetBrains,
  },
  spacing: {
    xsmall: globalTheme.s4,
    small: globalTheme.s8,
    medium: globalTheme.s12,
    large: globalTheme.s16,
    xlarge: globalTheme.s20,
  },
});

export default defaultTheme;
