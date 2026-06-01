"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SectionEyebrow } from "./section-eyebrow";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Project {
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
}

interface LandingWorkProps {
  projects: Project[];
  total: number;
  allProjectsUrl?: string;
  prefersReducedMotion?: boolean;
}

/**
 * 03 · Selected Work — editorial project rows (index numeral, big title, blurb,
 * red tags, thumbnail that slides in on scroll). Featured set is the first four.
 */
export function LandingWork({
  projects,
  total,
  allProjectsUrl,
  prefersReducedMotion = false,
}: LandingWorkProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const featured = projects.slice(0, 4);

  useGSAP(
    () => {
      if (prefersReducedMotion || !sectionRef.current) return;

      gsap.utils.toArray<HTMLElement>("[data-row]", sectionRef.current).forEach((row) => {
        gsap.fromTo(
          row,
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            ease: "sine.out",
            duration: 0.7,
            scrollTrigger: { trigger: row, start: "top 88%" },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-thumb]", sectionRef.current).forEach((thumb) => {
        gsap.fromTo(
          thumb,
          { x: 48, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            ease: "power2.out",
            duration: 0.8,
            scrollTrigger: { trigger: thumb, start: "top 86%" },
          }
        );
      });
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section ref={sectionRef} className="landing-warm relative px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow index="03" label="Selected Work" right={`${total} Projects`} />

        <div className="mt-4">
          {featured.map((project, index) => {
            const inner = (
              <article
                data-row
                className="grid grid-cols-1 items-center gap-5 border-b border-landing-muted/30 py-6 md:grid-cols-[3.5rem_1fr_200px] md:gap-7 md:py-7"
              >
                <span className="font-grotesk text-xs text-landing-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="font-grotesk-bold text-xl tracking-[-0.01em] text-landing-ink transition-colors group-hover:text-landing-accent md:text-[1.875rem]">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-xl font-grotesk text-sm leading-relaxed text-landing-muted">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-3.5 gap-y-1.5 font-grotesk text-[0.6rem] uppercase tracking-[0.12em] text-landing-accent md:text-[0.65rem]">
                    {(project.tags ?? []).slice(0, 4).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div
                  data-thumb
                  className="landing-media relative aspect-[200/110] w-full overflow-hidden border border-landing-muted/60 md:w-[200px]"
                >
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-landing-bg px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-landing-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            );

            return project.link ? (
              <Link
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {inner}
              </Link>
            ) : (
              <div key={project.title} className="group">
                {inner}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-end">
          <Link
            href={allProjectsUrl ?? "#"}
            target={allProjectsUrl ? "_blank" : undefined}
            rel={allProjectsUrl ? "noopener noreferrer" : undefined}
            className="inline-block border-b-2 border-landing-accent pb-1 font-grotesk text-[0.72rem] uppercase tracking-[0.16em] text-landing-ink transition-colors hover:text-landing-accent md:text-sm"
          >
            All projects ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
