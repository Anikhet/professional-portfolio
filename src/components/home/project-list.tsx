"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import ShowMore from "./show-more";

export type HomeProject = { title: string; description: string; link: string; tags: string[] };

/** Projects with clickable skill chips that filter the list (any selected skill matches). */
/** Curated chip order; only skills that appear in some project's tags are shown. */
const FEATURED = ["AI Agents", "TypeScript", "Next.js", "React", "React Native", "Python", "Node.js", "LLM", "RAG", "Supabase", "Docker", "Three.js"];

export default function ProjectList({ projects, maxSkills = 12 }: { projects: HomeProject[]; maxSkills?: number }) {
  const skills = useMemo(() => {
    const present = new Set(projects.flatMap((p) => p.tags));
    const curated = FEATURED.filter((s) => present.has(s));
    if (curated.length >= 6) return curated.slice(0, maxSkills);
    const count = new Map<string, number>();
    projects.forEach((p) => p.tags.forEach((t) => count.set(t, (count.get(t) ?? 0) + 1)));
    return [...count.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, maxSkills)
      .map(([t]) => t);
  }, [projects, maxSkills]);

  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (s: string) => setSelected((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));
  const shown = selected.length ? projects.filter((p) => p.tags.some((t) => selected.includes(t))) : projects;

  const cards = shown.map((p) => (
    <article key={p.title} className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-4 transition-colors hover:border-[var(--muted)]">
      <a href={p.link} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 font-semibold">
        <span className="group-hover:underline group-hover:underline-offset-4">{p.title}</span>
        <ArrowUpRight className="h-3.5 w-3.5 text-[var(--muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
      <p className="mt-1 text-sm leading-relaxed text-[var(--soft)]">{p.description}</p>
      <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
        <span className="uppercase tracking-wider text-[var(--muted)]">Built with</span>
        {p.tags.map((t) => (
          <span key={t} className={selected.includes(t) ? "font-semibold text-[var(--accent)]" : "text-[var(--fg)]"}>
            {t}
          </span>
        ))}
      </p>
    </article>
  ));

  return (
    <>
      <div className="mb-6">
        <p className="mb-2 text-xs text-[var(--muted)]">Filter by skill</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => {
            const on = selected.includes(s);
            return (
              <button
                key={s}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(s)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs transition-colors ${
                  on
                    ? "border-[var(--chip-on-bg)] bg-[var(--chip-on-bg)] text-[var(--chip-on-fg)]"
                    : "border-[var(--line)] text-[var(--soft)] hover:bg-[var(--hover)] hover:text-[var(--fg)]"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${on ? "bg-[var(--accent)]" : "border border-current"}`} />
                {s}
              </button>
            );
          })}
          {selected.length > 0 && (
            <button
              type="button"
              onClick={() => setSelected([])}
              className="inline-flex items-center gap-1 px-2 py-1 text-xs text-[var(--muted)] hover:text-[var(--fg)]"
            >
              <X className="h-3 w-3" /> Clear
            </button>
          )}
        </div>
      </div>

      {selected.length ? (
        <div className="space-y-3">
          {cards}
          <p className="text-xs text-[var(--muted)]">
            {shown.length} of {projects.length} projects
          </p>
        </div>
      ) : (
        <ShowMore initial={4} gap="space-y-3">
          {cards}
        </ShowMore>
      )}
    </>
  );
}
