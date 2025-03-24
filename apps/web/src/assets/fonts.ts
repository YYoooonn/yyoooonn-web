import localFont from "next/font/local";
import { Source_Code_Pro, IBM_Plex_Sans_KR } from "next/font/google";

export const ibmPlexSans = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-root",
});

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-dev",
});

export const goudyOld = localFont({
  src: "../../public/fonts/GoudyOldStyleRegular.ttf",
  variable: "--font-design",
  weight: "300 400 500 600",
});

export const goudyOldBold = localFont({
  src: "../../public/fonts/GoudyOldStyleBold.ttf",
  variable: "--font-design-bold",
  weight: "400 500 600",
});
