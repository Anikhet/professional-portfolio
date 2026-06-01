"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SectionEyebrow } from "./section-eyebrow";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  url?: string;
}

interface Education {
  degree: string;
  school: string;
  location: string;
  date: string;
}

interface LandingExperienceProps {
  experience: Experience[];
  education: Education[];
  prefersReducedMotion?: boolean;
}

/**
 * 02 · Experience — Swiss numbered list. The current role reads in red + underline;
 * the rest go red + underline on hover. Education sits beneath.
 */
export function LandingExperience({
  experience,
  education,
  prefersReducedMotion = false,
}: LandingExperienceProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion || !sectionRef.current) return;
      const rows = gsap.utils.toArray<HTMLElement>("[data-reveal]", sectionRef.current);
      rows.forEach((row) => {
        gsap.fromTo(
          row,
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            ease: "sine.out",
            duration: 0.7,
            scrollTrigger: { trigger: row, start: "top 90%" },
          }
        );
      });
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section ref={sectionRef} className="landing-warm-rev relative px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow index="02" label="Experience" right="2018 → Now" />

        <div className="mt-6">
          {experience.map((entry, index) => {
            const current = index === 0;
            const row = (
              <div className="grid grid-cols-[2rem_1fr] items-baseline gap-x-4 gap-y-1 border-b border-landing-muted/30 py-5 md:grid-cols-[3rem_1fr_auto] md:items-center md:gap-6">
                <span className="font-grotesk text-xs text-landing-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span
                    className={[
                      "font-grotesk-bold text-xl tracking-[-0.01em] transition-colors md:text-[2.125rem]",
                      current
                        ? "text-landing-accent underline underline-offset-[6px]"
                        : "text-landing-ink group-hover:text-landing-accent group-hover:underline group-hover:underline-offset-[6px]",
                    ].join(" ")}
                  >
                    {entry.company}
                  </span>
                  <span className="font-grotesk text-sm text-landing-muted">
                    {entry.role} · {entry.location}
                  </span>
                </div>
                <span className="col-start-2 font-grotesk text-[0.65rem] uppercase tracking-[0.14em] text-landing-muted md:col-start-3 md:text-xs">
                  {entry.date}
                </span>
              </div>
            );

            return entry.url ? (
              <Link
                key={entry.company}
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                className="group block"
              >
                {row}
              </Link>
            ) : (
              <div key={entry.company} data-reveal className="group">
                {row}
              </div>
            );
          })}
        </div>

        <div data-reveal className="mt-10">
          <p className="mb-3 font-grotesk text-[0.62rem] uppercase tracking-[0.22em] text-landing-accent md:text-[0.7rem]">
            Education
          </p>
          {education.map((entry) => (
            <div
              key={entry.school}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-landing-muted/20 py-2.5"
            >
              <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
                <span className="font-grotesk-bold text-base text-landing-ink md:text-[1.05rem]">
                  {entry.school}
                </span>
                <span className="font-grotesk text-[0.8rem] text-landing-muted md:text-sm">
                  {entry.degree}
                </span>
              </div>
              <span className="font-grotesk text-[0.7rem] uppercase tracking-[0.08em] text-landing-muted md:text-xs">
                {entry.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
