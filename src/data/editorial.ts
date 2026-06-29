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
  OffDutyEntry,
  OffDutyIconName,
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

/** Splits a multi-paragraph bio into trimmed, non-empty paragraphs. */
function toParagraphs(bio: string): string[] {
  return bio
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
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
  const paragraphs = toParagraphs(profile.bio);

  return {
    dateline: {
      publication: "The Anikhet Times",
      origin: "Newark, CA · Est. 2025",
    },
    masthead: {
      name: profile.name,
      strapline: "SOFTWARE ENGINEER",
    },
    lead: {
      tagline: profile.tagline,
      portrait: resolveImage(profile.avatar, `${profile.name} portrait`),
      // Cap at three paragraphs so THE LEAD column stays front-page length.
      body: paragraphs.slice(0, 3),
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
    // SELECTED WORK reads as three front-page stories.
    work: projects.slice(0, 3).map((p) => ({
      name: p.title,
      image: resolveImage(p.image, p.title),
      tags: p.tags.slice(0, 3),
    })),
  };
}
