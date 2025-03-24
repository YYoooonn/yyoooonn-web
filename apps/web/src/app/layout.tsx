import type { Metadata } from "next";
import { ibmPlexSans, goudyOld, goudyOldBold } from "@/assets/fonts";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "yyoooonn",
  description: "yyoooonn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${goudyOld.variable} ${goudyOldBold.variable} ${ibmPlexSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
