"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface LandingContactProps {
  headline: string;
  email: string;
  location: string;
  github?: string;
  linkedin?: string;
  resumeUrl?: string;
  name: string;
  prefersReducedMotion?: boolean;
}

/**
 * 06 · Contact — a confident full-bleed red close: the pitch, the email, the
 * links, and an observatory nod to sign off.
 */
export function LandingContact({
  headline,
  email,
  location,
  github,
  linkedin,
  resumeUrl,
  name,
  prefersReducedMotion = false,
}: LandingContactProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const year = new Date().getFullYear();

  useGSAP(
    () => {
      if (prefersReducedMotion || !sectionRef.current) return;
      gsap.utils.toArray<HTMLElement>("[data-reveal]", sectionRef.current).forEach((el, index) => {
        gsap.fromTo(
          el,
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            ease: "sine.out",
            duration: 0.8,
            delay: index * 0.08,
            scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
          }
        );
      });
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-between bg-landing-accent px-5 py-12 text-landing-paper md:px-10 md:py-16"
    >
      <div
        data-reveal
        className="flex items-baseline justify-between gap-4 font-grotesk text-[0.62rem] uppercase tracking-[0.22em] text-[hsl(var(--landing-paper)/0.8)] md:text-xs"
      >
        <span>
          <span className="mr-3.5">06</span>Contact
        </span>
        <span>{location}</span>
      </div>

      <div data-reveal className="py-10">
        <h2 className="max-w-4xl font-grotesk-bold text-4xl leading-[0.98] tracking-[-0.02em] sm:text-5xl md:text-6xl lg:text-[4.75rem]">
          {headline}
        </h2>

        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Link
            href={`mailto:${email}`}
            className="border-b-2 border-landing-paper pb-1 font-grotesk text-lg md:text-[1.375rem]"
          >
            {email}
          </Link>
          <div className="flex flex-wrap items-center gap-4 font-grotesk text-[0.72rem] uppercase tracking-[0.12em] md:text-[0.8rem]">
            {github ? (
              <Link href={github} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
                GitHub ↗
              </Link>
            ) : null}
            {linkedin ? (
              <Link href={linkedin} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
                LinkedIn ↗
              </Link>
            ) : null}
            {resumeUrl ? (
              <Link
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-landing-paper px-4 py-2.5 transition-colors hover:bg-landing-paper hover:text-landing-accent"
              >
                View Resume
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <div
        data-reveal
        className="flex flex-wrap items-end justify-between gap-3 border-t border-[hsl(var(--landing-paper)/0.3)] pt-5"
      >
        <span className="font-grotesk-bold text-2xl uppercase tracking-[-0.01em] text-[hsl(var(--landing-paper)/0.9)] md:text-[2.125rem]">
          {name}
        </span>
        <span className="font-grotesk text-[0.6rem] uppercase tracking-[0.16em] text-[hsl(var(--landing-paper)/0.7)] md:text-[0.7rem]">
          © {year} · still scanning the sky ✦
        </span>
      </div>
    </section>
  );
}
