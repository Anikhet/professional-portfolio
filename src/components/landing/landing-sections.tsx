"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingProjectsStage } from "@/components/landing/landing-projects-stage";
import { LandingSwissStage } from "@/components/landing/landing-swiss-stage";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface SocialLink {
  name: string;
  url: string;
}

interface LandingProfile {
  name: string;
  role: string;
  heroName?: string;
  heroDescription?: string;
  bio: string;
  ctaLabel?: string;
  ctaUrl?: string;
}

interface LandingSectionsProps {
  profile: LandingProfile;
  social: SocialLink[];
  projects: Array<{
    title: string;
    description: string;
    link?: string;
    tags?: string[];
  }>;
}

export function LandingSections({ profile, social, projects }: LandingSectionsProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const splitTopRef = useRef<HTMLDivElement | null>(null);
  const splitBottomRef = useRef<HTMLDivElement | null>(null);
  const splitWrapRef = useRef<HTMLDivElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const emailLink = social.find((item) => item.name === "Email");
  const linkedInLink = social.find((item) => item.name === "LinkedIn");

  const heroName = useMemo(
    () => profile.heroName ?? profile.name.split(" ")[0]?.toUpperCase() ?? "ANIKHET",
    [profile.heroName, profile.name]
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        return;
      }
      if (
        !overlayRef.current ||
        !splitWrapRef.current ||
        !splitTopRef.current ||
        !splitBottomRef.current
      ) {
        return;
      }

      const overlay = overlayRef.current;
      const splitWrap = splitWrapRef.current;
      const splitTop = splitTopRef.current;
      const splitBottom = splitBottomRef.current;

      gsap.set(overlay, { autoAlpha: 1, pointerEvents: "auto" });
      gsap.set(splitWrap, { autoAlpha: 1 });
      gsap.set([splitTop, splitBottom], { yPercent: 0, autoAlpha: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });

      tl.to(splitTop, { yPercent: -112, ease: "sine.inOut" }, 0)
        .to(splitBottom, { yPercent: 112, ease: "sine.inOut" }, 0);

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: rootRef, dependencies: [prefersReducedMotion] }
  );

  if (prefersReducedMotion) {
    return (
      <main className="landing-canvas relative">
        <section className="flex min-h-screen flex-col">
          <LandingHeader name={profile.name} />
          <LandingHero
            heroName={heroName}
            role={profile.role}
            heroDescription={profile.heroDescription ?? ""}
          />
          <LandingFooter
            primarySocial={{
              name: linkedInLink?.name ?? "LinkedIn",
              url: linkedInLink?.url ?? "https://www.linkedin.com/in/anikhetmulkyyy",
            }}
            emailUrl={emailLink?.url ?? "mailto:am9559@rit.edu"}
            ctaLabel={profile.ctaLabel ?? "View Resume"}
            ctaUrl={profile.ctaUrl ?? ""}
            role={profile.role}
            heroDescription={profile.heroDescription ?? ""}
          />
        </section>
        <LandingSwissStage
          name={profile.name}
          role={profile.role}
          heroDescription={profile.heroDescription ?? ""}
          bio={profile.bio}
          social={social}
          prefersReducedMotion
        />
        <LandingProjectsStage projects={projects} />
      </main>
    );
  }

  return (
    <main ref={rootRef} className="landing-canvas relative">
      <LandingSwissStage
        name={profile.name}
        role={profile.role}
        heroDescription={profile.heroDescription ?? ""}
        bio={profile.bio}
        social={social}
      />
      <LandingProjectsStage projects={projects} />

      <div ref={overlayRef} className="pointer-events-none fixed inset-0 z-30">
     



        <div ref={splitWrapRef} className="pointer-events-none absolute inset-0">
          <div
            ref={splitTopRef}
            className="landing-canvas absolute inset-0"
            style={{ clipPath: "inset(0 0 50% 0)" }}
          >
               <div className="pointer-events-auto">
          <LandingHeader name={profile.name} />
        </div>
            <div className="flex h-full items-center justify-center px-6 text-center md:px-10">
              <h1 className="font-stolzl-bold text-[6rem] uppercase leading-none tracking-[-0.02em] text-landing-accent sm:text-[7.5rem] md:max-w-[78vw] md:text-[12rem] lg:text-[15rem]">
                {heroName}
              </h1>
            </div>
          </div>
          <div
            ref={splitBottomRef}
            className="landing-canvas absolute inset-0"
            style={{ clipPath: "inset(50% 0 0 0)" }}
          >
            <div className="flex h-full items-center justify-center px-6 text-center md:px-10">
              <h1 className="font-stolzl-bold text-[6rem] uppercase leading-none tracking-[-0.02em] text-landing-accent sm:text-[7.5rem] md:max-w-[78vw] md:text-[12rem] lg:text-[14rem]">
                {heroName}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
