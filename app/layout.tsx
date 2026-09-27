import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/header";
import "./globals.css";

const displayFont = localFont({
  src: "../public/fonts/Sekuya-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cabana Music Festival",
  description: "The Caribbean's Biggest Music Festival",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${displayFont.variable}`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
