import { createGlobalTheme } from "@vanilla-extract/css";
import {
  lightModeColors,
  darkModeColors,
  neutralColors,
} from "../constants/palettes";

export const light = createGlobalTheme(":root", {
  ...neutralColors,
  primary: lightModeColors.primary,
  secondary: lightModeColors.secondary,
  tertiary: lightModeColors.tertiary,
  background: lightModeColors.backgroundDefault,

  text: lightModeColors.text,
  textLight: lightModeColors.textLight,
  textDark: lightModeColors.textDark,
  textLightest: lightModeColors.textLightest,
  textDarkest: lightModeColors.textDarkest,

  textPlaceholder: lightModeColors.textPlaceholder,
  textPlaceholderLight: lightModeColors.textPlaceholderLight,
  textPlaceholderDark: lightModeColors.textPlaceholderDark,
});

export const darkColor = createGlobalTheme(".dark", {
  ...neutralColors,

  primary: darkModeColors.primary,
  secondary: darkModeColors.secondary,
  tertiary: darkModeColors.tertiary,
  background: darkModeColors.backgroundDefault,

  text: darkModeColors.text,
  textLight: darkModeColors.textLight,
  textDark: darkModeColors.textDark,
  textLightest: darkModeColors.textLightest,
  textDarkest: darkModeColors.textDarkest,

  textPlaceholder: darkModeColors.textPlaceholder,
  textPlaceholderLight: darkModeColors.textPlaceholderLight,
  textPlaceholderDark: darkModeColors.textPlaceholderDark,
});
