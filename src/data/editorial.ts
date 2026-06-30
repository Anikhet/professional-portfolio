/**
 * Maps the canonical `portfolioData` source onto the Editorial Front Page
 * view-model (`EditorialContent`).
 *
 * Keeping this transform in one place means the presentational components in
 * `@/components/editorial` depend only on the stable view-model shape — if the
 * underlying portfolio data changes, only this file needs to follow.
 */
import { existsSync } from "node:fs";
import { join } from "node:path";
import { portfolioData } from "@/data/portfolio";
import type {
  EditorialContent,
  EditorialImage,
  LinkEntry,
  LinkIconName,
  NavItem,
  OffDutyEntry,
  OffDutyIconName,
  Picture,
} from "@/types/editorial";

/** Maps a hobby's stored icon name to an editorial off-duty icon key. */
const OFF_DUTY_ICON: Record<string, OffDutyIconName> = {
  Telescope: "telescope",
  Music: "music",
  Gamepad2: "game",
  Trophy: "trophy",
};

/** Maps a social entry name to an editorial link icon key. */
const LINK_ICON: Record<string, LinkIconName> = {
  Email: "mail",
  LinkedIn: "link",
  GitHub: "git",
  X: "link",
  Resume: "doc",
};

/** Social entries surfaced as sketch buttons, in this order. */
const LINK_ORDER = ["Email", "LinkedIn", "GitHub", "Resume"] as const;

/**
 * Resolves a public-relative image path to an `EditorialImage`, but only if
 * the asset actually exists in `public/`. Missing assets return `null` so the
 * layout can fall back to the wireframe's crossed placeholder instead of
 * emitting a broken next/image request.
 */
function resolveImage(src: string, alt: string): EditorialImage | null {
  const relative = src.startsWith("/") ? src.slice(1) : src;
  const onDisk = join(process.cwd(), "public", relative);
  return existsSync(onDisk) ? { src, alt } : null;
}

/**
 * Splits the skills list into the two editorial tiers. `core` keeps the
 * current daily stack (capped so the column stays front-page length);
 * `familiar` holds the brushing-up languages, in their source order.
 */
function toStack(): { core: string[]; familiar: string[] } {
  const familiarSet = new Set<string>(portfolioData.familiarSkills);
  const core: string[] = [];
  const familiar: string[] = [];
  for (const skill of portfolioData.skills) {
    if (familiarSet.has(skill)) familiar.push(skill);
    else if (core.length < 14) core.push(skill);
  }
  return { core, familiar };
}

/**
 * FRAMES gallery — real visual-astronomy shots taken through a telescope, plus
 * one travel portrait. Each tile carries a caption and a masonry row-span.
 */
const PICTURE_SOURCES: Picture[] = [
  { src: "/astro-full-moon.jpg", alt: "Full Moon through a telescope", span: 2, caption: "Full Moon" },
  { src: "/astro-saturn-rings.jpg", alt: "Saturn and its rings", span: 1, caption: "Saturn & its rings" },
  { src: "/astro-jupiter.jpg", alt: "Jupiter with cloud bands", span: 1, caption: "Jupiter & cloud bands" },
  { src: "/astro-moon-terminator.jpg", alt: "Moon craters along the terminator", span: 1, caption: "Lunar terminator" },
  { src: "/astro-moon-craters-closeup.jpg", alt: "Close-up of lunar craters", span: 1, caption: "Crater close-up" },
  { src: "/astro-saturn.jpg", alt: "Saturn through a telescope", span: 1, caption: "Saturn" },
  { src: "/astro-star-cluster.jpg", alt: "Open star cluster through the eyepiece", span: 1, caption: "Star cluster" },
  { src: "/astro-milky-way.jpg", alt: "Milky Way star field", span: 2, caption: "Milky Way" },
  { src: "/astro-moon-half-disc.jpg", alt: "Half-disc of the Moon", span: 1, caption: "Waxing Moon" },
  { src: "/astro-moon-disc.jpg", alt: "Bright lunar disc detail", span: 1, caption: "Lunar disc" },
  { src: "/astro-saturn-portrait.jpg", alt: "Saturn, portrait framing", span: 1, caption: "Saturn, framed" },
  { src: "/photo-sunset-boat.jpeg", alt: "Anikhet at an ocean sunset", span: 2, caption: "Off the clock" },
];

/** Builds the FRAMES masonry from picture sources that exist on disk. */
function toPictures(): Picture[] {
  return PICTURE_SOURCES.filter((p) => resolveImage(p.src, p.alt) !== null);
}

/** Maps one portfolio project onto a `WorkStory`. */
type ProjectShape = (typeof portfolioData.projects)[number];
function toWorkStory(p: ProjectShape) {
  return {
    name: p.title,
    blurb: p.description,
    image: resolveImage(p.image, p.title),
    tags: p.tags.slice(0, 3),
    url: p.link,
  };
}

/** Builds the left nav-rail items — internal routes plus the GitHub link. */
function toNav(): NavItem[] {
  const github = portfolioData.social.find((s) => s.name === "GitHub");
  const items: NavItem[] = [
    { label: "home", href: "/", hint: "h" },
    { label: "work", href: "/work", hint: "w" },
    { label: "off duty", href: "/off-duty", hint: "o" },
    { label: "frames", href: "/frames", hint: "f" },
  ];
  if (github) {
    items.push({ label: "github", href: github.url, hint: "g", external: true });
  }
  return items;
}

/** Selects and orders the contact links shown in THE TOOLKIT column. */
function toLinks(): LinkEntry[] {
  return LINK_ORDER.map((label): LinkEntry | null => {
    const match = portfolioData.social.find((s) => s.name === label);
    if (!match) return null;
    return { label, url: match.url, icon: LINK_ICON[label] ?? "link" };
  }).filter((l): l is LinkEntry => l !== null);
}

/** Maps the hobbies list onto editorial off-duty entries. */
function toOffDuty(): OffDutyEntry[] {
  return portfolioData.hobbies.map((h) => ({
    label: h.name,
    icon: OFF_DUTY_ICON[h.icon] ?? "trophy",
  }));
}

/** Builds the full editorial view-model from `portfolioData`. */
export function getEditorialContent(): EditorialContent {
  const { profile, experience, education, projects } = portfolioData;

  return {
    nav: toNav(),
    dateline: {
      origin: "Newark, CA · Est. 2025",
    },
    masthead: {
      name: profile.name,
      strapline: "SOFTWARE ENGINEER",
    },
    lead: {
      tagline: profile.tagline,
      portrait:
        resolveImage(profile.editorialPortrait, `${profile.name} at an ocean sunset`) ??
        resolveImage(profile.avatar, `${profile.name} portrait`),
      // Two-paragraph bio (career arc, then studies + personal).
      body: profile.editorialBio,
      micro: "Currently floundering in the shallow waters of Software Engineering.",
    },
    jobs: experience.map((e) => ({
      company: e.company,
      role: e.role,
      when: e.date,
      url: "url" in e ? e.url : undefined,
    })),
    schooling: education.map((e) => ({
      school: e.school,
      degree: e.degree,
    })),
    stack: toStack(),
    offDuty: toOffDuty(),
    links: toLinks(),
    // Three featured stories for any front-page teaser.
    work: projects.slice(0, 3).map(toWorkStory),
    // Full catalog for the dedicated /work page.
    allWork: projects.map(toWorkStory),
    games: portfolioData.games,
    pictures: toPictures(),
  };
}
