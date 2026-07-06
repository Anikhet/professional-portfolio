import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  JetBrains_Mono,
  Space_Grotesk,
  Libre_Caslon_Display,
  Kalam,
  Caveat,
  Space_Mono,
} from "next/font/google";
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

// Editorial Front Page (Direction A) faces.
const libreCaslon = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caslon",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
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
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} ${spaceGrotesk.variable} ${stolzlBook.variable} ${stolzlBold.variable} ${libreCaslon.variable} ${kalam.variable} ${caveat.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased text-zinc-900 bg-background">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("editorial-theme");if(!t){t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"night":"day"}document.documentElement.dataset.editorialTheme=t==="night"?"night":"day"}catch(e){document.documentElement.dataset.editorialTheme="day"}`,
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
