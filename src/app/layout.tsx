import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const stolzlBook = localFont({
  src: "./fonts/stolzl_book.ttf",
  variable: "--font-stolzl-book",
});

const stolzlBold = localFont({
  src: "./fonts/stolzl_bold.ttf",
  variable: "--font-stolzl-bold",
});

export const metadata: Metadata = {
  title: "Anikhet Mulky",
  description: "Anikhet Mulky's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} ${spaceGrotesk.variable} ${stolzlBook.variable} ${stolzlBold.variable}`}>
      <body className="font-sans antialiased text-zinc-900 bg-background">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
