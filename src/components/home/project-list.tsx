"use client";

import { useMemo, useState, type ComponentType } from "react";
import {
  ArrowUpRight,
  Bot,
  Boxes,
  Calculator,
  CarFront,
  Code,
  House,
  Map as MapIcon,
  MoonStar,
  Search,
  Shirt,
  Telescope,
  Video,
  X,
} from "lucide-react";
import ShowMore from "./show-more";

export type HomeProject = { title: string; description: string; link: string; tags: string[] };

type Look = {
  Icon: ComponentType<{ className?: string }>;
  tile: string;
  /** Bold fact + muted tail, shown on the right like a stat line. */
  fact: [string, string?];
  linkLabel: string;
};

/** Per-project presentation. Tailwind classes are literal so the JIT picks them up. */
const LOOK: Record<string, Look> = {
  Snoozy: { Icon: MoonStar, tile: "bg-violet-500/15 text-violet-500", fact: ["iOS", "on the App Store"], linkLabel: "App Store" },
  Drip: { Icon: Shirt, tile: "bg-amber-500/15 text-amber-500", fact: ["Web + iOS", "AI stylist"], linkLabel: "GitHub" },
  "DevInterview.AI": { Icon: Video, tile: "bg-sky-500/15 text-sky-500", fact: ["Real-time", "face tracking"], linkLabel: "GitHub" },
  AstroAgent: { Icon: Telescope, tile: "bg-indigo-500/15 text-indigo-400", fact: ["Live", "ephemeris data"], linkLabel: "Demo video" },
  "Racing Car Reinforcement Learning": { Icon: CarFront, tile: "bg-emerald-500/15 text-emerald-500", fact: ["Neuroevolution"], linkLabel: "GitHub" },
  "Discord Knowledge Bot": { Icon: Bot, tile: "bg-blue-500/15 text-blue-500", fact: ["RAG", "on GPT-4o"], linkLabel: "GitHub" },
  MicroCart: { Icon: Boxes, tile: "bg-orange-500/15 text-orange-500", fact: ["Microservices"], linkLabel: "GitHub" },
  "Apify Web Scraper": { Icon: Search, tile: "bg-lime-500/15 text-lime-600", fact: ["Scraping"], linkLabel: "Live" },
  "Distance Visualizer": { Icon: MapIcon, tile: "bg-teal-500/15 text-teal-500", fact: ["MapGL"], linkLabel: "Live" },
  "ROI Calculator": { Icon: Calculator, tile: "bg-rose-500/15 text-rose-500", fact: ["Finance"], linkLabel: "Live" },
  "AirBnb Clone": { Icon: House, tile: "bg-pink-500/15 text-pink-500", fact: ["Full-stack"], linkLabel: "Live" },
};
const DEFAULT_LOOK: Look = { Icon: Code, tile: "bg-neutral-500/15 text-neutral-500", fact: [""], linkLabel: "Link" };

/** Curated chip order; only skills that appear in some project's tags are shown. */
const FEATURED = ["AI Agents", "TypeScript", "Next.js", "React", "React Native", "Python", "Node.js", "LLM", "RAG", "Supabase", "Docker", "Three.js"];

export default function ProjectList({ projects }: { projects: HomeProject[] }) {
  const skills = useMemo(() => {
    const present = new Set(projects.flatMap((p) => p.tags));
    return FEATURED.filter((s) => present.has(s));
  }, [projects]);

  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (s: string) => setSelected((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));
  const shown = selected.length ? projects.filter((p) => p.tags.some((t) => selected.includes(t))) : projects;

  const rows = shown.map((p) => {
    const look = LOOK[p.title] ?? DEFAULT_LOOK;
    const { Icon } = look;
    return (
      <article key={p.title} className="group/row -mx-3 flex gap-4 rounded-xl p-3 transition-colors hover:bg-[var(--hover)]">
        <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${look.tile}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="group inline-flex min-w-0 items-center gap-1 font-semibold">
              <span className="truncate group-hover:underline group-hover:underline-offset-4">{p.title}</span>
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[var(--muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            {look.fact[0] && (
              <span className="hidden shrink-0 text-xs text-[var(--muted)] sm:inline">
                <span className="font-semibold text-[var(--fg)]">{look.fact[0]}</span>
                {look.fact[1] ? ` ${look.fact[1]}` : ""}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm leading-relaxed text-[var(--soft)]">{p.description}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--soft)] underline decoration-[var(--line)] underline-offset-4 hover:text-[var(--fg)] hover:decoration-[var(--fg)]"
            >
              {look.linkLabel}
            </a>
            <span className="text-[var(--line)]">|</span>
            {p.tags.slice(0, 4).map((t) => (
              <span key={t} className={selected.includes(t) ? "font-semibold text-[var(--accent)]" : "text-[var(--muted)]"}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    );
  });

  return (
    <>
      <div className="mb-5 flex flex-wrap gap-1.5">
        {skills.map((s) => {
          const on = selected.includes(s);
          return (
            <button
              key={s}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(s)}
              className={`rounded-full border px-2.5 py-0.5 text-xs transition-colors ${
                on
                  ? "border-[var(--chip-on-bg)] bg-[var(--chip-on-bg)] text-[var(--chip-on-fg)]"
                  : "border-[var(--line)] text-[var(--soft)] hover:bg-[var(--hover)] hover:text-[var(--fg)]"
              }`}
            >
              {s}
            </button>
          );
        })}
        {selected.length > 0 && (
          <button
            type="button"
            onClick={() => setSelected([])}
            className="inline-flex items-center gap-1 px-2 py-0.5 text-xs text-[var(--muted)] hover:text-[var(--fg)]"
          >
            <X className="h-3 w-3" /> Clear
          </button>
        )}
      </div>

      {selected.length ? (
        <div className="space-y-1">
          {rows}
          <p className="pt-2 text-xs text-[var(--muted)]">
            {shown.length} of {projects.length} projects
          </p>
        </div>
      ) : (
        <ShowMore initial={5} gap="space-y-1">
          {rows}
        </ShowMore>
      )}
    </>
  );
}
