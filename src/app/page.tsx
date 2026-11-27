import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, PenLine, ArrowUpRight, MapPin, FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import ProjectList from "@/components/home/project-list";
import ThemeButton from "@/components/home/theme-button";

const { profile, experience, education, projects, writing } = portfolioData;

const XIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SOCIALS = [
  { label: "X", href: "https://x.com/tehkinaa", Icon: XIcon },
  { label: "GitHub", href: "https://github.com/Anikhet", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anikhet-mulky/", Icon: Linkedin },
  { label: "Medium", href: "https://medium.com/@anikhetmulky", Icon: PenLine },
  { label: "Email", href: "mailto:animulky@gmail.com", Icon: Mail },
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const muted = "text-[var(--muted)]";
const underline =
  "underline decoration-[var(--line)] underline-offset-4 transition-colors hover:decoration-[var(--fg)]";

function Label({ children }: { children: React.ReactNode }) {
  return <h2 className={`mb-6 text-xs font-medium uppercase tracking-[0.14em] ${muted}`}>{children}</h2>;
}

/** "Oct 2025 - Present" -> "2025 – now" */
const span = (date: string) => {
  const [a, b] = date.split(" - ").map((s) => s.match(/\d{4}/)?.[0] ?? "now");
  return a === b ? a : `${a} – ${b}`;
};

export default function Home() {
  return (
    <div className="home min-h-screen bg-[var(--bg)] text-[var(--fg)] antialiased transition-colors">
      <main className="mx-auto max-w-[38rem] px-5 pb-24 pt-12 sm:pt-16">
        {/* Header */}
        <header>
          <div className="flex items-start justify-between">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-[var(--line)]">
              <Image src="/avatar-portrait.jpg" alt={profile.name} fill sizes="160px" className="object-cover" priority />
            </div>
            <ThemeButton />
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-[2rem]">Hi, I&apos;m {profile.name}</h1>
          <p className={`mt-2 flex items-center gap-1.5 text-sm ${muted}`}>
            <MapPin className="h-3.5 w-3.5" /> Rochester, NY · open to remote
          </p>
          <p className="mt-3">
            {experience[0].role} @{" "}
            <a href={experience[0].url} {...ext} className="font-semibold text-[var(--accent)] hover:underline hover:underline-offset-4">
              {experience[0].company}
            </a>
          </p>
        </header>

        <nav className="mt-5 flex flex-wrap items-center gap-2">
          <a
            href={profile.ctaUrl}
            {...ext}
            className="inline-flex h-9 items-center gap-2 rounded-lg bg-[var(--chip-on-bg)] px-3.5 text-sm font-medium text-[var(--chip-on-fg)] transition-opacity hover:opacity-85"
          >
            <FileText className="h-4 w-4" /> Resume
          </a>
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              {...ext}
              aria-label={label}
              title={label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--line)] text-[var(--soft)] transition-colors hover:bg-[var(--hover)] hover:text-[var(--fg)]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </nav>

        <p className="mt-8 leading-relaxed text-[var(--soft)]">
          Full-stack engineer who ships. Hand me an ambiguous problem and I&apos;ll scope it, build it, and get it in
          front of users. Mostly AI agents and the evals that prove they work. Off the clock: video games and a
          telescope.
        </p>

        {/* Projects */}
        <section className="mt-16">
          <Label>Projects</Label>
          <ProjectList projects={projects} />
        </section>

        {/* Experience */}
        <section className="mt-16">
          <Label>Experience</Label>
          <ul className="space-y-4">
            {experience.map((job, i) => (
              <li key={job.company} className="flex gap-4 sm:gap-6">
                <span className={`w-24 shrink-0 pt-px font-mono text-sm tabular-nums ${muted}`}>{span(job.date)}</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    {"url" in job && job.url ? (
                      <a href={job.url} {...ext} className={underline}>
                        {job.company}
                      </a>
                    ) : (
                      <span>{job.company}</span>
                    )}
                    {i === 0 && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" aria-label="current" />}
                  </div>
                  <p className={`text-sm ${muted}`}>
                    {job.role} · {job.location}
                  </p>
                  {"products" in job && job.products && (
                    <ul className="mt-3 space-y-2 border-l border-[var(--line)] pl-4">
                      {job.products.map((p) => (
                        <li key={p.name} className="text-sm">
                          <a href={p.url} {...ext} className="group inline-flex items-center gap-1 font-medium">
                            <span className="group-hover:underline group-hover:underline-offset-4">{p.name}</span>
                            <ArrowUpRight className={`h-3 w-3 ${muted}`} />
                          </a>
                          <p className="leading-relaxed text-[var(--soft)]">{p.description}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Writing */}
        <section className="mt-16">
          <Label>Writing</Label>
          <ul className="space-y-4">
            {writing.map((w) => (
              <li key={w.title}>
                <a href={w.url} {...ext} className="group flex items-baseline gap-4 sm:gap-6">
                  <span className={`w-24 shrink-0 font-mono text-sm ${muted}`}>Medium</span>
                  <span className="min-w-0 group-hover:underline group-hover:underline-offset-4">
                    {w.title}
                    <ArrowUpRight className={`ml-1 inline h-3.5 w-3.5 ${muted}`} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <Link href="/writing" className={`mt-5 inline-block text-sm ${muted} ${underline}`}>
            All writing
          </Link>
        </section>

        {/* Education */}
        <section className="mt-16">
          <Label>Education</Label>
          <ul className="space-y-4">
            {education.map((e) => (
              <li key={e.school} className="flex gap-4 sm:gap-6">
                <span className={`w-24 shrink-0 pt-px font-mono text-sm tabular-nums ${muted}`}>{span(e.date)}</span>
                <div className="min-w-0">
                  <p>{e.school}</p>
                  <p className={`text-sm ${muted}`}>{e.degree}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Reach me */}
        <section className="mt-16">
          <Label>Reach me</Label>
          <p className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="mailto:animulky@gmail.com" className={underline}>
              animulky@gmail.com
            </a>
            <a href={profile.ctaUrl} {...ext} className={underline}>
              Résumé
            </a>
          </p>
        </section>

        {/* Elsewhere on the site */}
        <section className="mt-16">
          <Label>Off duty</Label>
          <p className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/frames" className={underline}>
              Frames <span className={`text-sm ${muted}`}>(astrophotography)</span>
            </Link>
            <Link href="/off-duty" className={underline}>
              Off duty <span className={`text-sm ${muted}`}>(games)</span>
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
