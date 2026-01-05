"use client";

import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function HeroV3() {
  const { profile, social } = portfolioData;

  return (
    <section className="flex flex-col gap-8 mb-24 pt-24">
      <div className="flex items-center gap-6">
        <div className="relative w-24 h-24 shrink-0 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-serif text-3xl md:text-4xl text-white">
            {profile.name}
          </h1>
          <p className="text-neutral-400 font-sans">{profile.role}</p>
        </div>
      </div>

      <div className="max-w-2xl">
        <p className="text-neutral-300 leading-relaxed text-lg font-light whitespace-pre-line">
          {profile.bio}
        </p>
      </div>

      <div className="flex gap-6">
        {social.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-white pb-0.5"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
