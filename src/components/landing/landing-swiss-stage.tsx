"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface SocialLink {
  name: string;
  url: string;
}

interface LandingSwissStageProps {
  name: string;
  role: string;
  heroDescription: string;
  bio: string;
  social: SocialLink[];
  prefersReducedMotion?: boolean;
}

function firstSentences(text: string, count: number): string[] {
  const sentences = text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (sentences.length === 0) return [text];
  return sentences.slice(0, count);
}

export function LandingSwissStage({
  name,
  role,
  heroDescription,
  bio,
  social,
  prefersReducedMotion = false,
}: LandingSwissStageProps) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const emailLink = social.find((entry) => entry.name.toLowerCase() === "email");
  const linkedInLink = social.find((entry) => entry.name.toLowerCase() === "linkedin");
  const bioLines = firstSentences(bio, 2);
  const descriptionLine = heroDescription
    .split(" ")
    .slice(0, 11)
    .join(" ");

  useGSAP(
    () => {
      if (prefersReducedMotion || !stageRef.current) return;

      const mm = gsap.matchMedia();

      const setupMotion = (yOffset: number, xOffset: number, skew: number) => {
        const targets = gsap.utils.toArray<HTMLElement>("[data-swiss-slat]", stageRef.current ?? undefined);
        targets.forEach((target, index) => {
          const direction = index % 2 === 0 ? 1 : -1;
          const rotation = window.matchMedia("(min-width: 1024px)").matches ? 0.45 : 0.35;
          gsap.fromTo(
            target,
            {
              autoAlpha: 0,
              y: yOffset,
              x: xOffset * direction,
              skewY: skew * direction,
              rotateZ: rotation * direction,
            },
            {
              autoAlpha: 1,
              y: 0,
              x: 0,
              skewY: 0,
              rotateZ: 0,
              ease: "sine.out",
              scrollTrigger: {
                trigger: target,
                start: "top 90%",
                end: "top 46%",
                scrub: 1.75,
              },
            }
          );
        });
      };

      mm.add("(min-width: 1024px)", () => setupMotion(32, 16, 4));
      mm.add("(max-width: 1023px)", () => setupMotion(18, 8, 2.5));

      return () => mm.revert();
    },
    { scope: stageRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section ref={stageRef} className="relative min-h-[180vh]">
      <div className="sticky top-0 grid h-screen grid-cols-12 grid-rows-12 px-5 py-5 md:px-10 md:py-8">
        <p
          data-swiss-slat
          className="col-span-7 row-span-1 self-start font-stolzl-book text-[0.65rem] uppercase tracking-[0.18em] text-landing-muted md:col-span-4 md:text-[0.85rem]"
        >
          {role}
        </p>

        <div
          data-swiss-slat
          className="col-span-5 col-start-8 row-span-1 row-start-1 justify-self-end text-right font-stolzl-book text-[0.65rem] uppercase tracking-[0.16em] text-landing-muted md:col-span-3 md:col-start-10 md:text-[0.85rem]"
        >
          {emailLink ? (
            <Link href={emailLink.url} className="hover:text-landing-accent">
              Email
            </Link>
          ) : null}
          {emailLink && linkedInLink ? <span className="mx-2 opacity-40">/</span> : null}
          {linkedInLink ? (
            <Link href={linkedInLink.url} className="hover:text-landing-accent">
              LinkedIn
            </Link>
          ) : null}
        </div>

        <h2
          data-swiss-slat
          className="col-span-12 row-span-2 row-start-3 self-end font-stolzl-bold text-[2.5rem] uppercase leading-[0.88] tracking-[-0.03em] text-landing-accent sm:text-[3.5rem] md:col-span-7 md:row-start-3 md:text-[8.5rem]"
        >
          {name.split(" ")[0]}
        </h2>

        <h3
          data-swiss-slat
          className="col-span-12 row-span-2 row-start-5 self-start justify-self-end text-right font-stolzl-bold text-[2.2rem] uppercase leading-[0.88] tracking-[-0.03em] text-landing-accent sm:text-[3.1rem] md:col-span-7 md:col-start-6 md:row-start-5 md:text-[7.6rem]"
        >
          {name.split(" ").slice(1).join(" ") || role}
        </h3>

        <p
          data-swiss-slat
          className="col-span-11 row-span-2 row-start-8 max-w-sm self-end font-stolzl-book text-[0.72rem] uppercase leading-[1.35] tracking-[0.08em] text-landing-muted md:col-span-4 md:row-start-8 md:max-w-md md:text-[0.9rem]"
        >
          {descriptionLine}
        </p>

        <div
          data-swiss-slat
          className="col-span-11 col-start-2 row-span-3 row-start-9 max-w-md self-start justify-self-end text-right font-stolzl-book text-[0.82rem] uppercase leading-[1.35] tracking-[0.07em] text-landing-muted md:col-span-5 md:col-start-8 md:row-start-8 md:text-[0.95rem]"
        >
          <p>{bioLines[0] ?? ""}</p>
          <p className="mt-2">{bioLines[1] ?? ""}</p>
        </div>

        <p
          data-swiss-slat
          className="col-span-4 row-span-1 row-start-12 self-end font-stolzl-book text-[0.62rem] uppercase tracking-[0.22em] text-landing-muted md:text-[0.8rem]"
        >
          Scroll
        </p>

        <p
          data-swiss-slat
          className="col-span-4 col-start-9 row-span-1 row-start-12 self-end justify-self-end font-stolzl-book text-[0.62rem] uppercase tracking-[0.22em] text-landing-muted md:text-[0.8rem]"
        >
          {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
