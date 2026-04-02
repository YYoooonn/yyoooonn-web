import { IBM_Plex_Sans_KR } from "next/font/google";
import localFont from "next/font/local";

/* 폰트 변경시 style에서 variable 체크필요 */

export const ibmPlexSans = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal"],
  variable: "--font-ibm-plex-sans",
});

export const arial = localFont({
  src: [
    { path: "../../public/fonts/Arial.woff2", weight: "300", style: "normal" },
    {
      path: "../../public/fonts/ArialBold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/ArialItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/ArialBoldItalic.woff2",
      weight: "700",
      style: "bold-italic",
    },
  ],
  display: "swap",
  style: "normal",
  variable: "--font-arial",
});

export const timesNewRoman = localFont({
  src: [
    {
      path: "../../public/fonts/TimesNewRoman.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/TimesNewRomanBold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/TimesNewRomanItalic.woff2",
      weight: "300",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-times-new-roman",
});
