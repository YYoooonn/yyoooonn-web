import type { Metadata } from "next";
import { ibmPlexSans, jetBrains_Mono, sortMillGoudy } from "@/assets/fonts";
import "@repo/ui/styles";

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
      className={`${jetBrains_Mono.variable} ${sortMillGoudy.variable} ${ibmPlexSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
