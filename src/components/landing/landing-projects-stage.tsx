"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ProjectItem {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
}

interface LandingProjectsStageProps {
  projects: ProjectItem[];
}

export function LandingProjectsStage({ projects }: LandingProjectsStageProps) {
  const featured = projects.slice(0, 4);
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion || !sectionRef.current || !viewportRef.current || !trackRef.current) {
        return;
      }

      const mm = gsap.matchMedia();

      const setupRail = (isDesktop: boolean) => {
        const section = sectionRef.current;
        const viewport = viewportRef.current;
        const track = trackRef.current;
        if (!section || !viewport || !track) return;

        const cards = gsap.utils.toArray<HTMLElement>("[data-project-card]", track);
        const gap = isDesktop ? 32 : 20;
        const cardWidth = isDesktop ? window.innerWidth * 0.8 : window.innerWidth * 0.9;
        cards.forEach((card) => {
          card.style.width = `${cardWidth}px`;
          card.style.minWidth = `${cardWidth}px`;
        });
        track.style.gap = `${gap}px`;

        ScrollTrigger.refresh();

        const getDistance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
        const getSnapStep = () => (cards.length > 1 ? 1 / (cards.length - 1) : 1);
        const snapDuration = isDesktop ? 0.28 : 0.38;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getDistance() + window.innerHeight * 0.35}`,
            pin: true,
            scrub: 2.1,
            invalidateOnRefresh: true,
            snap: {
              snapTo: getSnapStep(),
              duration: snapDuration,
              delay: 0.08,
              ease: "sine.inOut",
            },
          },
        });

        tl.to(track, {
          x: () => -getDistance(),
          ease: "none",
        });

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 22, autoAlpha: 0.55, rotateZ: 0.3, skewY: 1.5 },
            {
              y: 0,
              autoAlpha: 1,
              rotateZ: 0,
              skewY: 0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: tl,
                start: "left 90%",
                end: "left 38%",
                scrub: 1.8,
              },
            }
          );
        });
      };

      mm.add("(min-width: 1024px)", () => setupRail(true));
      mm.add("(max-width: 1023px)", () => setupRail(false));

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion, featured.length] }
  );

  if (prefersReducedMotion) {
    return (
      <section className="relative min-h-screen border-t border-landing-muted/20 px-5 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <p className="col-span-12 font-stolzl-book text-[0.7rem] uppercase tracking-[0.2em] text-landing-muted md:col-span-3 md:text-[0.85rem]">
            Selected Projects
          </p>

          <h2 className="col-span-12 font-stolzl-bold text-4xl uppercase leading-[0.9] tracking-[-0.03em] text-landing-accent md:col-span-9 md:text-7xl">
            Build Log
          </h2>

          {featured.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="col-span-12 border-t border-landing-muted/25 pt-5 md:col-span-6 md:pt-7"
            >
              <p className="font-stolzl-book text-[0.62rem] uppercase tracking-[0.2em] text-landing-muted md:text-[0.75rem]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-stolzl-bold text-xl uppercase tracking-tight text-landing-accent md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-landing-muted md:text-base">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(project.tags ?? []).slice(0, 4).map((tag) => (
                  <span
                    key={`${project.title}-${tag}`}
                    className="border border-landing-muted/30 px-2.5 py-1 font-stolzl-book text-[0.62rem] uppercase tracking-[0.12em] text-landing-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link ? (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-stolzl-book text-[0.72rem] uppercase tracking-[0.16em] text-landing-accent hover:underline md:text-[0.85rem]"
                >
                  Open Project
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen border-t border-landing-muted/20">
      <div ref={viewportRef} className="h-screen overflow-hidden px-5 py-14 md:px-10 md:py-20">
        <div className="mb-8 grid grid-cols-12 gap-6 md:mb-12 md:gap-8">
          <p className="col-span-12 font-stolzl-book text-[0.7rem] uppercase tracking-[0.2em] text-landing-muted md:col-span-3 md:text-[0.85rem]">
            Selected Projects
          </p>

          <h2 className="col-span-12 font-stolzl-bold text-4xl uppercase leading-[0.9] tracking-[-0.03em] text-landing-accent md:col-span-9 md:text-7xl">
            Build Log
          </h2>
        </div>

        <div ref={trackRef} className="flex h-[calc(100%-6rem)] items-stretch will-change-transform md:h-[calc(100%-7rem)]">
          {featured.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              data-project-card
              className="flex h-full flex-col justify-between border border-landing-muted/25 bg-landing-bg/70 p-5 backdrop-blur-[1px] md:p-7"
            >
              <div>
                <p className="font-stolzl-book text-[0.62rem] uppercase tracking-[0.2em] text-landing-muted md:text-[0.75rem]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-stolzl-bold text-xl uppercase tracking-tight text-landing-accent md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-landing-muted md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="mt-5">
                <div className="flex flex-wrap gap-2">
                  {(project.tags ?? []).slice(0, 4).map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className="border border-landing-muted/30 px-2.5 py-1 font-stolzl-book text-[0.62rem] uppercase tracking-[0.12em] text-landing-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block font-stolzl-book text-[0.72rem] uppercase tracking-[0.16em] text-landing-accent hover:underline md:text-[0.85rem]"
                  >
                    Open Project
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="px-5 pb-10 md:px-10">
        <p className="font-stolzl-book text-[0.62rem] uppercase tracking-[0.22em] text-landing-muted md:text-[0.78rem]">
          Scroll to traverse projects
        </p>
      </div>
    </section>
  );
}
