import Link from "next/link";
import PageShell from "@/components/PageShell";
import { portfolioData } from "@/data/portfolio";
import { PROJECTS } from "@/lib/projects";

const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/anikhetmulkyy" },
  { label: "GitHub", href: "https://github.com/Anikhet" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anikhet-mulky/" },
  { label: "Medium", href: "https://medium.com/@animu" },
  { label: "Resume", href: portfolioData.profile.ctaUrl },
];

export default function Home() {
  const experience = portfolioData.experience;

  return (
    <PageShell>
      <h1 className="text-4xl tracking-tight text-neutral-900 sm:text-5xl" style={{ fontFamily: '"Yuyu Short", sans-serif' }}>
        {portfolioData.profile.name}
      </h1>

      <p className="mt-8 text-sm leading-7 text-neutral-700">
        {portfolioData.profile.editorialBio[0]}
      </p>

      <p className="mt-4 text-sm leading-7 text-neutral-700">
        I am most active on:
      </p>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-neutral-800 underline underline-offset-4 hover:text-neutral-600"
          >
            {link.label}
          </a>
        ))}
      </div>

      <h2 className="mt-12 text-sm font-semibold text-neutral-900">
        Work
      </h2>

      <div className="mt-6 space-y-8">
        {experience.map((job, i) => (
          <div key={job.company}>
            <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-neutral-900">
              {job.url ? (
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-neutral-300 underline-offset-4 hover:text-blue-600"
                >
                  {job.company}
                </a>
              ) : (
                job.company
              )}
              {i === 0 && (
                <span className="rounded-full bg-amber-200 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest text-amber-900">
                  Current
                </span>
              )}
            </h3>
            <p className="mt-1 text-sm italic text-neutral-500">
              {job.role}
            </p>
            <p className="mt-1 font-mono text-xs text-neutral-400">
              {job.date}
            </p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-sm font-semibold text-neutral-900">
        Notable Work
      </h2>

      <div className="mt-6 space-y-8">
        {PROJECTS.slice(0, 3).map((project) => (
          <div key={project.title}>
            <h3 className="text-sm font-semibold text-neutral-900">
              {project.title}
            </h3>
            <p className="mt-1 text-sm leading-6 text-neutral-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      <Link
        href="/work"
        className="mt-10 inline-block text-sm text-neutral-800 underline underline-offset-4 hover:text-neutral-600"
      >
        More Work
      </Link>
    </PageShell>
  );
}
