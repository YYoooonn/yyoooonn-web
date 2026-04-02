import type { Metadata } from "next";
import { ibmPlexSans, timesNewRoman, arial } from "@/assets/fonts";
import "@/styles/global.css";
import ModalContainer from "@/components/modal/ModalContainer";
import Header from "@/components/layout/Header";
import { defaultTheme, themeVars } from "@/styles";
import { ApolloWrapper } from "@/components/ApolloProvider";

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
      className={`${ibmPlexSans.variable} ${timesNewRoman.variable} ${arial.variable} ${defaultTheme}`}
    >
      <head>
        <title>yyoooonn</title>
      </head>
      <body
        style={{
          fontFamily: themeVars.font.primary,
          fontStyle: "normal",
          fontWeight: "300",
          backgroundColor: themeVars.color.background,
        }}
      >
        <Header />
        <ModalContainer />
        <main>
          <ApolloWrapper>{children}</ApolloWrapper>
        </main>
      </body>
    </html>
  );
}
