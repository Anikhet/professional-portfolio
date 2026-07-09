import Link from "next/link";
import GridBackground from "@/components/GridBackground";
import { PROJECTS } from "@/lib/projects";

const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/tehkinaa" },
  { label: "GitHub", href: "https://github.com/Anikhet" },
  { label: "Medium", href: "https://medium.com/@animu" },
  { label: "Resume", href: "https://drive.google.com/drive/folders/1JWtDnstCsVwS5FhZeWkuXmb8gdrVrWgT" },
];

const EXPERIENCE = [
  {
    company: "Clover Labs",
    href: "https://cloverlabs.ai/",
    role: "Software Engineer",
    period: "Oct 2025 - Present",
    current: true,
  },
  {
    company: "Peeker AI",
    href: "https://www.peeker.ai/",
    role: "Software & AI Engineering Co-op",
    period: "Aug 2024 - May 2025",
    current: false,
  },
  {
    company: "Bhabha Atomic Research Centre",
    role: "Software Engineer",
    period: "June 2020 - Dec 2020",
    current: false,
  },
];


export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white">
      <GridBackground />

      <main className="relative z-10 mx-auto max-w-2xl px-6 py-16 md:py-24">
        <h1 className="text-5xl tracking-tight text-neutral-900" style={{ fontFamily: '"Yuyu Short", sans-serif' }}>
          Anikhet Mulky
        </h1>

        <p className="mt-8 text-sm leading-7 text-neutral-700">
          Full-stack engineer who builds AI agents and the evals that prove they
          work. Anyone can demo an agent once; I care about measuring it at
          scale. Off the clock: video games and a telescope.
        </p>

        <p className="mt-4 text-sm leading-7 text-neutral-700">
          I am most active on:
        </p>

        <div className="mt-6 flex gap-6">
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
          {EXPERIENCE.map((job) => (
            <div key={job.company}>
              <h3 className="flex items-center gap-3 text-sm font-semibold text-neutral-900">
                {job.href ? (
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-neutral-300 underline-offset-4 hover:text-blue-600"
                  >
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
                {job.current && (
                  <span className="rounded-full bg-amber-200 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest text-amber-900">
                    Current
                  </span>
                )}
              </h3>
              <p className="mt-1 text-sm italic text-neutral-500">
                {job.role}
              </p>
              <p className="mt-1 font-mono text-xs text-neutral-400">
                {job.period}
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
      </main>
    </div>
  );
}
