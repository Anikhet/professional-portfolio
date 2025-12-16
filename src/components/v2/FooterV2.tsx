"use client";

import { portfolioData } from "@/data/portfolio";
import Link from "next/link";

export function FooterV2() {
  return (
    <footer className="h-screen bg-black flex flex-col justify-between p-8 md:p-20">
      <div className="flex-1 flex flex-col justify-center items-center">
        <p className="text-neutral-500 text-xl mb-8">Have an idea?</p>
        <Link 
            href="mailto:am9559@rit.edu"
            className="text-6xl md:text-9xl font-bold text-white hover:text-neutral-400 transition-colors text-center leading-none"
        >
            Let&apos;s Talk
        </Link>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-t border-neutral-800 pt-8">
        <div className="flex gap-8">
            {portfolioData.social.map((social, i) => (
                <Link key={i} href={social.url} target="_blank" className="text-neutral-400 hover:text-white text-lg uppercase tracking-wider">
                    {social.name}
                </Link>
            ))}
        </div>
        <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
