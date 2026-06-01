"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingSwissStage } from "@/components/landing/landing-swiss-stage";
import { LandingAbout } from "@/components/landing/landing-about";
import { LandingExperience } from "@/components/landing/landing-experience";
import { LandingWork } from "@/components/landing/landing-work";
import { LandingStack } from "@/components/landing/landing-stack";
import { LandingOffDuty } from "@/components/landing/landing-offduty";
import { LandingContact } from "@/components/landing/landing-contact";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface SocialLink {
  name: string;
  url: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  date: string;
  url?: string;
}

interface EducationItem {
  degree: string;
  school: string;
  location: string;
  date: string;
}

interface ProjectItem {
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
}

interface Hobby {
  name: string;
  icon: string;
}

interface Game {
  name: string;
  status: string;
}

interface LandingProfile {
  name: string;
  role: string;
  heroName?: string;
  heroDescription?: string;
  bio: string;
  ctaLabel?: string;
  ctaUrl?: string;
  avatar?: string;
  location: string;
  aboutHeadline: string;
  aboutHeadlineHighlight?: string;
  aboutBody: string;
  contactHeadline: string;
}

interface LandingSectionsProps {
  profile: LandingProfile;
  social: SocialLink[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  skills: string[];
  hobbies: Hobby[];
  games: Game[];
}

/**
 * K · Swiss Premium — the full scroll story.
 * Warm-paper hero (split-name reveal) → About → Experience → Selected Work →
 * Stack → a dark Off-Duty break → a full-red Contact sign-off.
 */
export function LandingSections({
  profile,
  social,
  experience,
  education,
  projects,
  skills,
  hobbies,
  games,
}: LandingSectionsProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const splitTopRef = useRef<HTMLDivElement | null>(null);
  const splitBottomRef = useRef<HTMLDivElement | null>(null);
  const splitWrapRef = useRef<HTMLDivElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const emailLink = social.find((item) => item.name.toLowerCase() === "email");
  const githubLink = social.find((item) => item.name.toLowerCase() === "github");
  const resumeLink = social.find((item) => item.name.toLowerCase() === "resume");
  const email = (emailLink?.url ?? "mailto:animulky@gmail.com").replace(/^mailto:/, "");
  // Everything except email + resume becomes the contact link row (GitHub, X, SoundCloud, Medium…)
  const contactLinks = social.filter(
    (item) => !["email", "resume"].includes(item.name.toLowerCase())
  );

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

  const story = (
    <>
      <LandingAbout
        headline={profile.aboutHeadline}
        highlight={profile.aboutHeadlineHighlight}
        body={profile.aboutBody}
        hobbies={hobbies}
        avatar={profile.avatar}
        prefersReducedMotion={prefersReducedMotion}
      />
      <LandingExperience
        experience={experience}
        education={education}
        prefersReducedMotion={prefersReducedMotion}
      />
      <LandingWork
        projects={projects}
        total={projects.length}
        allProjectsUrl={githubLink?.url}
        prefersReducedMotion={prefersReducedMotion}
      />
      <LandingStack skills={skills} prefersReducedMotion={prefersReducedMotion} />
      <LandingOffDuty games={games} hobbies={hobbies} prefersReducedMotion={prefersReducedMotion} />
      <LandingContact
        headline={profile.contactHeadline}
        email={email}
        location={profile.location}
        links={contactLinks}
        resumeUrl={resumeLink?.url ?? profile.ctaUrl}
        name={profile.name}
        prefersReducedMotion={prefersReducedMotion}
      />
    </>
  );

  if (prefersReducedMotion) {
    return (
      <main className="landing-canvas relative">
        <LandingHeader name={profile.name} />
        <LandingSwissStage
          name={profile.name}
          role={profile.role}
          heroDescription={profile.heroDescription ?? ""}
          bio={profile.bio}
          social={social}
          prefersReducedMotion
        />
        {story}
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
      {story}

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
              <h1 className="font-grotesk-bold text-[6rem] uppercase leading-none tracking-[-0.02em] text-landing-accent sm:text-[7.5rem] md:max-w-[78vw] md:text-[12rem] lg:text-[15rem]">
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
              <h1 className="font-grotesk-bold text-[6rem] uppercase leading-none tracking-[-0.02em] text-landing-accent sm:text-[7.5rem] md:max-w-[78vw] md:text-[12rem] lg:text-[14rem]">
                {heroName}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
