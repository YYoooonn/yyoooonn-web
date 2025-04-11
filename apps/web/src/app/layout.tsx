import type { Metadata } from "next";
import { ibmPlexSans, jetBrains_Mono, sortMillGoudy } from "@/assets/fonts";
import "@/styles/global.css";
import ModalContainer from "@/components/modal/ModalContainer";
import { defaultTheme, themeVars } from "@repo/ui/styles";

export const metadata: Metadata = {
  title: "yyoooonn",
  description: "yyoooonn portfolio wip",
  openGraph: {
    type: "website",
    title: "yyoooonn",
    description: "web portfolio wip",
    url: "https://yyoooonn.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetBrains_Mono.variable} ${sortMillGoudy.variable} ${ibmPlexSans.variable} ${defaultTheme}`}
    >
      <head>
        <title>yyoooonn</title>
      </head>
      <body style={{ fontFamily: themeVars.font.primary }}>
        <ModalContainer />
        <main>{children}</main>
      </body>
    </html>
  );
}
