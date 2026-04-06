import type { Metadata } from "next";
import { Uncial_Antiqua, IM_Fell_English, Pirata_One } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const uncial = Uncial_Antiqua({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-uncial",
});

const fellEnglish = IM_Fell_English({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fell",
});

const pirata = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pirata",
});

export const metadata: Metadata = {
  title: "Anikhet Mulky | Illuminated Portfolio",
  description: "Anikhet Mulky's Medieval Manuscript Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${uncial.variable} ${fellEnglish.variable} ${pirata.variable}`}>
      <body className="font-fell antialiased text-ink-black bg-parchment-light min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
