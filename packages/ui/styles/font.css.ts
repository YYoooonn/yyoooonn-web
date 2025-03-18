import { globalFontFace } from "@vanilla-extract/css";

export const geistmono = "GlobalGeistMono";
export const geistvf = "GlobalGeistVF";

globalFontFace(geistmono, {
  src: `local("../assets/fonts/GeistMonoVF.woff")`,
});

globalFontFace(geistvf, {
  src: `local("../assets/fonts/GeistVF.woff")`,
});
