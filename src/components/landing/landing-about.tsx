"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Telescope, Music, Gamepad2, Trophy, type LucideIcon } from "lucide-react";
import { SectionEyebrow } from "./section-eyebrow";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ICONS: Record<string, LucideIcon> = { Telescope, Music, Gamepad2, Trophy };

interface Hobby {
  name: string;
  icon: string;
}

interface LandingAboutProps {
  headline: string;
  highlight?: string;
  body: string;
  hobbies: Hobby[];
  avatar?: string;
  prefersReducedMotion?: boolean;
}

/**
 * 01 · About — editorial statement beside a portrait slab, with off-duty markers.
 * GSAP slats rise + settle on scroll-in.
 */
export function LandingAbout({
  headline,
  highlight,
  body,
  hobbies,
  avatar,
  prefersReducedMotion = false,
}: LandingAboutProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const hasHighlight = !!highlight && headline.includes(highlight);
  const [lead, tail] = hasHighlight ? headline.split(highlight as string) : [headline, ""];

  useGSAP(
    () => {
      if (prefersReducedMotion || !sectionRef.current) return;
      const slats = gsap.utils.toArray<HTMLElement>("[data-about-slat]", sectionRef.current);
      slats.forEach((slat, index) => {
        gsap.fromTo(
          slat,
          { y: 36, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            ease: "sine.out",
            duration: 0.8,
            delay: index * 0.05,
            scrollTrigger: { trigger: slat, start: "top 88%" },
          }
        );
      });
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section ref={sectionRef} className="landing-warm relative px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow index="01" label="About" right="The Engineer" />

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[300px_1fr] md:items-center md:gap-12">
          <div
            data-about-slat
            className="landing-media relative aspect-[300/380] w-full max-w-[300px] overflow-hidden border border-landing-muted/60"
          >
            {avatar ? (
              <Image
                src={avatar}
                alt="Portrait of Anikhet Mulky"
                fill
                sizes="(min-width: 768px) 300px, 100vw"
                className="object-cover"
              />
            ) : (
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-landing-bg px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-landing-muted">
                portrait
              </span>
            )}
          </div>

          <div>
            <h2
              data-about-slat
              className="font-grotesk-bold text-2xl leading-[1.08] tracking-[-0.01em] text-landing-ink md:text-[2.75rem] md:leading-[1.04]"
            >
              {hasHighlight ? (
                <>
                  {lead}
                  <span className="text-landing-accent">{highlight}</span>
                  {tail}
                </>
              ) : (
                headline
              )}
            </h2>

            <p
              data-about-slat
              className="mt-6 max-w-2xl font-grotesk text-base leading-relaxed text-landing-muted md:text-lg"
            >
              {body}
            </p>

            <div data-about-slat className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
              {hobbies.map((hobby) => {
                const Icon = ICONS[hobby.icon];
                return (
                  <span
                    key={hobby.name}
                    className="flex items-center gap-2.5 font-grotesk text-[0.7rem] uppercase tracking-[0.14em] text-landing-ink md:text-xs"
                  >
                    {Icon ? <Icon className="h-4 w-4 text-landing-accent" strokeWidth={1.6} /> : null}
                    {hobby.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
