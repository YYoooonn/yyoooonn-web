import {
  JetBrains_Mono,
  IBM_Plex_Sans_KR,
  Goudy_Bookletter_1911,
} from "next/font/google";

/* 폰트 변경시 style에서 variable 체크필요 */

export const ibmPlexSans = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal"],
  variable: "--font-ibm-plex-sans",
});

export const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-jetbrains-mono",
});

export const sortMillGoudy = Goudy_Bookletter_1911({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal"],
  variable: "--font-goudy-bookletter",
});
