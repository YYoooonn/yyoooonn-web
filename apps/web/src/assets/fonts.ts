import localFont from "next/font/local";
import { IBM_Plex_Sans, IBM_Plex_Sans_KR } from "next/font/google";

export const ibmPlexSans = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-root",
});

export const goudyOld = localFont({
  src: "../../public/fonts/GoudyOldStyleRegular.ttf",
  variable: "--font-design",
  weight: "500 700 900",
});

export const goudyOldBold = localFont({
  src: "../../public/fonts/GoudyOldStyleBold.ttf",
  variable: "--font-design-bold",
  weight: "100 900",
});
