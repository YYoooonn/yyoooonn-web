import { createGlobalTheme } from "@vanilla-extract/css";

// CHECK 폰트 변경시 체크 필요
const ibm = `--font-ibm-plex-sans`;
const jetBrains = `--font-jetbrains-mono`;
const sortMill = `--font-sort-mill-goudy`;

const font = createGlobalTheme(":root", {
  primary: `var(${ibm})`,
  secondary: `var(${jetBrains})`,
  tertiary: `var(${sortMill})`,
});

export default font;
