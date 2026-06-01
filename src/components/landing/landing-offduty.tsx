"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Telescope, Music, Gamepad2, Trophy, type LucideIcon } from "lucide-react";
import { SectionEyebrow } from "./section-eyebrow";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ICONS: Record<string, LucideIcon> = { Telescope, Music, Gamepad2, Trophy };

interface Game {
  name: string;
  status: string;
}

interface Hobby {
  name: string;
  icon: string;
}

interface LandingOffDutyProps {
  games: Game[];
  hobbies: Hobby[];
  prefersReducedMotion?: boolean;
}

/**
 * 05 · Off Duty — a deliberate dark break for the human behind the code:
 * the games being played, plus the wider off-duty markers.
 */
export function LandingOffDuty({ games, hobbies, prefersReducedMotion = false }: LandingOffDutyProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion || !sectionRef.current) return;
      gsap.utils.toArray<HTMLElement>("[data-tile]", sectionRef.current).forEach((tile, index) => {
        gsap.fromTo(
          tile,
          { y: 34, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            ease: "sine.out",
            duration: 0.7,
            delay: index * 0.06,
            scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
          }
        );
      });
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-landing-ink px-5 py-20 text-landing-paper md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow index="05" label="Off Duty" right="The Human" tone="dark" />

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {games.map((game) => (
            <div key={game.name} data-tile>
              <div className="landing-media-dark relative aspect-[4/3] w-full overflow-hidden border border-[hsl(var(--landing-paper)/0.4)] md:aspect-[16/9]">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#221b18] px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-[hsl(var(--landing-paper)/0.6)]">
                  {game.name}
                </span>
              </div>
              <div className="mt-2.5 flex flex-col gap-1">
                <span className="font-grotesk-bold text-[1.05rem] leading-tight">{game.name}</span>
                <span className="font-grotesk text-[0.62rem] uppercase tracking-[0.18em] text-landing-accent">
                  ● {game.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          data-tile
          className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-[hsl(var(--landing-paper)/0.2)] pt-6"
        >
          {hobbies.map((hobby) => {
            const Icon = ICONS[hobby.icon];
            return (
              <span key={hobby.name} className="flex items-center gap-2.5 font-grotesk text-sm md:text-[0.95rem]">
                {Icon ? <Icon className="h-[18px] w-[18px] text-landing-accent" strokeWidth={1.6} /> : null}
                {hobby.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
