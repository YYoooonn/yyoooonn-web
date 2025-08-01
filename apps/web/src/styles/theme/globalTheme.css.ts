import { createGlobalTheme } from "@vanilla-extract/css";
import { palettes } from "../constants/palettes";
import { textStyle } from "../constants/textStyles";

// CHECK 폰트 변경시 체크 필요
const ibm = `--font-ibm-plex-sans`;
const jetBrains = `--font-jetbrains-mono`;
const goudy = `--font-goudy-bookletter`;

const spacing = {
  s4: "4px",
  s8: "8px",
  s12: "12px",
  s16: "16px",
  s20: "20px",
};

const borderStyle = {
  bSolid: "solid",
  bDashed: "dashed",
  bDotted: "dotted",
  bDouble: "double",
  bGroove: "groove",
  bRidge: "ridge",
  bInset: "inset",
  bOutset: "outset",
};

const globalTheme = createGlobalTheme(":root", {
  ibm: `var(${ibm})`,
  jetBrains: `var(${jetBrains})`,
  goudy: `var(${goudy})`,
  ...palettes,
  ...textStyle,
  ...spacing,
  ...borderStyle,
});

export default globalTheme;
