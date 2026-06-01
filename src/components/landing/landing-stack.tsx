"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SectionEyebrow } from "./section-eyebrow";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface LandingStackProps {
  skills: string[];
  prefersReducedMotion?: boolean;
}

/**
 * 04 · Stack — an infinite, velocity-reactive red marquee of the whole toolkit
 * (scroll faster → it speeds up; scroll up → it reverses), plus a tidy chip grid.
 */
export function LandingStack({ skills, prefersReducedMotion = false }: LandingStackProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const band = skills.join("   ✦   ") + "   ✦   ";

  useGSAP(
    () => {
      if (prefersReducedMotion || !sectionRef.current || !trackRef.current) return;
      const track = trackRef.current;
      let killed = false;
      let cleanup = () => {};

      const setup = () => {
        if (killed || !sectionRef.current) return;
        const half = track.scrollWidth / 2;
        if (!half) return;

        gsap.set(track, { x: 0 });
        const loop = gsap.to(track, { x: -half, duration: half / 70, ease: "none", repeat: -1 });

        const base = 1;
        let target = base;
        let current = base;

        const trigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            target = base + gsap.utils.clamp(-6, 6, self.getVelocity() / 180);
          },
        });

        const tick = () => {
          target += (base - target) * 0.05;
          current += (target - current) * 0.1;
          loop.timeScale(current);
        };
        gsap.ticker.add(tick);

        cleanup = () => {
          gsap.ticker.remove(tick);
          trigger.kill();
          loop.kill();
        };
      };

      if (typeof document !== "undefined" && document.fonts && document.fonts.status !== "loaded") {
        document.fonts.ready.then(setup);
      } else {
        setup();
      }

      return () => {
        killed = true;
        cleanup();
      };
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section ref={sectionRef} className="landing-warm-rev relative py-20 md:py-28">
      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow index="04" label="Stack" right={`${skills.length} Tools`} />
        </div>
      </div>

      <div className="my-10 overflow-hidden border-y-2 border-landing-accent bg-landing-paper py-4 md:my-12">
        <div
          ref={trackRef}
          className="flex w-max whitespace-nowrap font-grotesk-bold text-3xl tracking-[-0.01em] text-landing-accent will-change-transform md:text-[2.5rem]"
        >
          <span>{band}</span>
          <span>{band}</span>
        </div>
      </div>

      <div className="px-5 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-landing-muted/60 px-4 py-2 font-grotesk text-[0.78rem] tracking-[0.02em] text-landing-ink md:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
