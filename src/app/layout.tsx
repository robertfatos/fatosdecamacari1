import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Fatos de Camaçari - O portal de notícias da ",
  description: "Últimas notícias do Brasil e do mundo, sobre política, economia, emprego, educação, saúde, meio ambiente, tecnologia, ciência, cultura e carros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          openSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
