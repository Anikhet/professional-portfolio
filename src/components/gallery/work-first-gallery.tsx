"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  Mail,
  Github,
  Twitter,
  Music,
  PenLine,
  FileText,
  Telescope,
  Gamepad2,
  Trophy,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SOCIAL_ICONS: Record<string, LucideIcon> = {
  Email: Mail,
  GitHub: Github,
  X: Twitter,
  SoundCloud: Music,
  Medium: PenLine,
  Resume: FileText,
};

const HOBBY_ICONS: Record<string, LucideIcon> = {
  Telescope,
  Music,
  Gamepad2,
  Trophy,
};

interface SocialLink {
  name: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
}

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  date: string;
  url?: string;
}

interface Hobby {
  name: string;
  icon: string;
}

interface GalleryProfile {
  name: string;
  role: string;
  tagline: string;
  micro: string;
  avatar?: string;
}

interface WorkFirstGalleryProps {
  profile: GalleryProfile;
  projects: Project[];
  experience: ExperienceItem[];
  skills: string[];
  hobbies: Hobby[];
  social: SocialLink[];
  location?: string;
}

/**
 * A single image-forward project tile. Featured (first) tile is larger and
 * carries a blurb; the rest show title + a couple of tags. Real artwork is
 * rendered when present, otherwise a warm wireframe placeholder.
 */
function GalleryTile({
  project,
  index,
  featured,
}: {
  project: Project;
  index: number;
  featured: boolean;
}) {
  const onImage = !!project.image;
  const rootClass =
    "wf-tile group relative block h-[220px] rounded-[8px] md:h-[230px]";

  const content = (
    <>
      {onImage ? (
        <>
          <Image
            src={project.image as string}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,39,34,0.82)] via-[rgba(44,39,34,0.3)] to-transparent" />
        </>
      ) : (
        <div className="wf-img-cross absolute inset-0 flex items-center justify-center">
          <span className="bg-wf-paper2 px-2 py-0.5 font-space-mono text-[11px] uppercase tracking-[1px] text-[rgba(44,39,34,0.55)]">
            {`project 0${index + 1}`}
          </span>
        </div>
      )}

      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <h3
              className={`font-caslon font-bold leading-[1.05] ${
                featured ? "text-2xl" : "text-lg"
              } ${onImage ? "text-wf-paper" : "text-wf-ink"}`}
            >
              {project.title}
            </h3>
            {featured ? (
              <p
                className={`mt-1.5 max-w-[320px] text-[13px] leading-snug ${
                  onImage ? "text-[rgba(247,242,232,0.85)]" : "text-[rgba(44,39,34,0.82)]"
                }`}
              >
                {project.description}
              </p>
            ) : null}
            <div className="mt-2 flex flex-wrap gap-1.5">
              {(project.tags ?? []).slice(0, featured ? 4 : 2).map((tag) => (
                <span
                  key={tag}
                  className="wf-chip"
                  style={onImage ? { borderColor: "rgba(247,242,232,0.6)", color: "var(--wf-paper)" } : undefined}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="wf-sk grid h-[30px] w-[30px] flex-none place-items-center bg-wf-paper transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <ArrowUpRight className="h-4 w-4 text-wf-ink" strokeWidth={1.8} />
          </span>
        </div>
      </div>
    </>
  );

  return project.link ? (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      data-reveal
      className={rootClass}
      aria-label={project.title}
    >
      {content}
    </Link>
  ) : (
    <div data-reveal className={rootClass}>
      {content}
    </div>
  );
}

/**
 * E · Work-First Gallery — projects are the hero (a three-tile gallery, first
 * tile larger with a blurb), followed by a compact identity strip and a
 * horizontal experience timeline beside the stack + off-duty markers.
 * Warm editorial wireframe language: cream paper, gold accent, Caslon serif,
 * Space Mono labels, a handwritten micro-line.
 */
export function WorkFirstGallery({
  profile,
  projects,
  experience,
  skills,
  hobbies,
  social,
  location,
}: WorkFirstGalleryProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const featured = projects.slice(0, 3);
  const timeline = [...experience].reverse(); // oldest → newest, left to right
  const stack = skills.slice(0, 16);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const blocks = gsap.utils.toArray<HTMLElement>("[data-reveal]", rootRef.current);
      blocks.forEach((block, index) => {
        gsap.fromTo(
          block,
          { y: 24, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "sine.out",
            delay: index * 0.05,
            scrollTrigger: { trigger: block, start: "top 94%" },
          }
        );
      });
    },
    { scope: rootRef }
  );

  return (
    <main ref={rootRef} className="min-h-screen w-full bg-wf-paper text-wf-ink">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-5 py-8 md:px-10 md:py-12">
        {/* header */}
        <div
          data-reveal
          className="mb-5 flex items-baseline justify-between gap-4 border-b border-[rgba(44,39,34,0.2)] pb-3"
        >
          <span className="wf-meta text-[12px] tracking-[3px]">Selected Work ——</span>
          {location ? (
            <span className="font-space-mono text-[10.5px] uppercase tracking-[2px] opacity-65">
              {location}
            </span>
          ) : null}
        </div>

        {/* hero gallery */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:[grid-template-columns:1.5fr_1fr_1fr]">
          {featured.map((project, index) => (
            <GalleryTile key={project.title} project={project} index={index} featured={index === 0} />
          ))}
        </div>

        {/* identity strip */}
        <div
          data-reveal
          className="mt-7 flex flex-col gap-4 border-t-2 border-wf-ink py-4 sm:flex-row sm:items-center sm:gap-5"
          style={{ borderBottom: "1px solid rgba(44,39,34,0.2)" }}
        >
          <div className="relative h-14 w-14 flex-none overflow-hidden rounded-full border-2 border-wf-ink">
            {profile.avatar ? (
              <Image src={profile.avatar} alt={profile.name} fill sizes="56px" className="object-cover" />
            ) : (
              <div className="wf-img-cross h-full w-full" />
            )}
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
              <span className="font-caslon text-[26px] font-bold leading-none">{profile.name}</span>
              <span className="wf-meta text-[11px] tracking-[2px] opacity-85">{profile.role} · AI</span>
            </div>
            <div className="mt-1 text-[13.5px] opacity-85">
              {profile.tagline}{" "}
              <span className="font-hand text-[17px] text-[var(--wf-accent)]">— {profile.micro}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {social.map((link) => {
              const Icon = SOCIAL_ICONS[link.name];
              const isEmail = link.name.toLowerCase() === "email";
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  className="wf-btn"
                >
                  {Icon ? <Icon className="h-3.5 w-3.5" strokeWidth={1.8} /> : null}
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* experience timeline + stack */}
        <div data-reveal className="mt-6 flex flex-col gap-8 md:flex-row md:gap-10">
          <div className="md:flex-[1.4]">
            <div className="wf-meta mb-4 text-[11px] tracking-[3px] opacity-85">Experience — A Timeline</div>
            <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">
              <div className="absolute left-0 right-0 top-[6px] hidden h-0.5 bg-wf-ink sm:block" />
              {timeline.map((entry) => (
                <div key={`${entry.company}-${entry.date}`} className="relative sm:pr-3">
                  <span className="wf-node mb-3 block" />
                  <div className="text-sm font-bold leading-tight">{entry.company}</div>
                  <div className="text-xs opacity-80">{entry.role}</div>
                  <div className="mt-0.5 font-space-mono text-[10.5px] opacity-55">{entry.date}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:min-w-0 md:flex-1">
            <div className="wf-meta mb-3.5 text-[11px] tracking-[3px] opacity-85">Stack</div>
            <div className="flex flex-wrap gap-1.5">
              {stack.map((skill, index) => (
                <span key={skill} className={index % 5 === 0 ? "wf-chip wf-chip-accent" : "wf-chip"}>
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {hobbies.map((hobby) => {
                const Icon = HOBBY_ICONS[hobby.icon];
                return (
                  <span key={hobby.name} className="flex items-center gap-1.5 text-[12.5px] opacity-80">
                    {Icon ? <Icon className="h-[15px] w-[15px]" strokeWidth={1.7} /> : null}
                    {hobby.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
