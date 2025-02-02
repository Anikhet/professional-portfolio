import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";

// Load a local font
const customFont = localFont({
  src: "./fonts/stolzl_light.ttf", // ✅ Correct: Use absolute URL, not relative paths
  variable: "--font-custom",
  weight: "200", // Adjust weight if necessary
  display: "swap",
});

const customFont1 = localFont({
  src: "./fonts/stolzl_bold.ttf", // ✅ Correct: Use absolute URL, not relative paths
  variable: "--font-ptags",
  weight: "200", // Adjust weight if necessary
  display: "swap",
});

const customFont2 = localFont({
  src: "./fonts/stolzl_book.ttf", // ✅ Correct: Use absolute URL, not relative paths
  variable: "--font-htags",
  weight: "200", // Adjust weight if necessary
  display: "swap",
});
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Anikhet's Portfolio Website",
  description: "Anikhet Mulky's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"     className={`${customFont.variable} ${customFont1.variable} ${customFont2.variable}`}>
      <body className="font-custom">
        {children}
      </body>
    </html>
  );
}
