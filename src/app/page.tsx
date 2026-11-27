import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import ThemeButton from "@/components/home/theme-button";
import { CodeGlyph, PROJECT_GLYPHS, SaturnMark } from "@/components/home/icons";
import { EmailIcon, GitHubIcon, LinkedInIcon, MediumIcon, XIcon, linkIcon } from "@/components/home/brand";

const { profile, experience, projects, writing } = portfolioData;

const LINKS = [
  { label: "Email", href: "mailto:animulky@gmail.com", Icon: EmailIcon },
  { label: "GitHub", href: "https://github.com/Anikhet", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anikhet-mulky/", Icon: LinkedInIcon },
  { label: "X", href: "https://x.com/tehkinaa", Icon: XIcon },
  { label: "Medium", href: "https://medium.com/@anikhetmulky", Icon: MediumIcon },
];

/** The personal projects shown on the homepage, in order, with a one-word kind. */
const FEATURED: [string, string][] = [
  ["Snoozy", "iOS app"],
  ["AstroAgent", "Agent"],
  ["DevInterview.AI", "Web app"],
  ["Drip", "Web + iOS"],
  ["Racing Car Reinforcement Learning", "RL"],
  ["Discord Knowledge Bot", "RAG"],
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const link = "underline decoration-[var(--line)] decoration-1 underline-offset-[5px] transition-colors hover:decoration-[var(--accent)]";

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 text-sm text-[var(--muted)]">{children}</h2>;
}

/** "Oct 2025 - Present" -> "2025 – now" */
const years = (date: string) => {
  const [a, b] = date.split(" - ").map((s) => s.match(/\d{4}/)?.[0] ?? "now");
  return a === b ? a : `${a}–${b}`;
};

export default function Home() {
  const clover = experience[0];
  const products = "products" in clover && clover.products ? clover.products : [];
  const featured = FEATURED.flatMap(([title, kind]) => {
    const p = projects.find((x) => x.title === title);
    return p ? [{ ...p, kind }] : [];
  });

  return (
    <div className="home min-h-screen bg-[var(--bg)] text-[15px] text-[var(--fg)] antialiased">
      <main className="mx-auto max-w-[36rem] px-5 pb-20 pt-14 sm:pt-24">
        {/* Header */}
        <header className="flex items-start justify-between">
          <div className="flex items-center gap-3.5">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
              <Image src="/avatar-portrait.jpg" alt={profile.name} fill sizes="96px" className="object-cover" priority />
            </div>
            <div>
              <h1 className="flex items-center gap-2 font-semibold">
                {profile.name}
                <SaturnMark className="h-[18px] w-[18px] text-[var(--accent)]" />
              </h1>
              <p className="text-sm text-[var(--muted)]">
                Software engineer · {profile.location}
              </p>
            </div>
          </div>
          <ThemeButton />
        </header>

        {/* About */}
        <section className="mt-10 space-y-4 leading-relaxed text-[var(--soft)]">
          <p>
            I build AI products at{" "}
            <a href={clover.url} {...ext} className={`text-[var(--fg)] ${link}`}>
              {clover.company}
            </a>
            . Mostly agents, and the evals that prove they work.
          </p>
          <p>
            Off the clock I point a telescope at Saturn and{" "}
            <Link href="/frames" className={`text-[var(--fg)] ${link}`}>
              photograph what I find
            </Link>
            .
          </p>
        </section>

        <nav className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {LINKS.map(({ label, href, Icon }) => (
            <a key={label} href={href} {...ext} className="group inline-flex items-center gap-1.5 text-[var(--soft)] hover:text-[var(--fg)]">
              <Icon className="h-3.5 w-3.5 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" />
              {label}
            </a>
          ))}
          <a href={profile.ctaUrl} {...ext} className={`text-[var(--soft)] hover:text-[var(--fg)] ${link}`}>
            Resume
          </a>
        </nav>

        {/* Projects */}
        <section className="mt-16">
          <Heading>Projects</Heading>
          <ul className="space-y-5">
            {featured.map((p) => {
              const Glyph = PROJECT_GLYPHS[p.title] ?? CodeGlyph;
              const brand = linkIcon(p.link);
              return (
                <li key={p.title} className="flex gap-3.5">
                  <Glyph className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <a href={p.link} {...ext} className={`font-medium ${link}`}>
                        {p.title === "Racing Car Reinforcement Learning" ? "Racing RL" : p.title}
                      </a>
                      <span className="inline-flex shrink-0 items-center gap-1.5 text-xs text-[var(--muted)]">
                        {brand && <brand.Icon className="h-3 w-3" />}
                        {p.kind}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm leading-relaxed text-[var(--soft)]">{p.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <Link href="/work" className="group mt-6 inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--fg)]">
            All projects
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </section>

        {/* Work */}
        <section className="mt-16">
          <Heading>Work</Heading>
          <ul className="space-y-4">
            {experience.map((job) => (
              <li key={job.company}>
                <div className="flex items-baseline justify-between gap-3">
                  <span>
                    {"url" in job && job.url ? (
                      <a href={job.url} {...ext} className={`font-medium ${link}`}>
                        {job.company}
                      </a>
                    ) : (
                      <span className="font-medium">{job.company}</span>
                    )}
                    <span className="text-[var(--muted)]"> · {job.role}</span>
                  </span>
                  <span className="shrink-0 text-xs tabular-nums text-[var(--muted)]">{years(job.date)}</span>
                </div>
                {job === clover && products.length > 0 && (
                  <p className="mt-0.5 text-sm text-[var(--soft)]">
                    Worked on{" "}
                    {products.map((pr, i) => (
                      <span key={pr.name}>
                        {i > 0 && " and "}
                        <a href={pr.url} {...ext} className={link}>
                          {pr.name}
                        </a>
                      </span>
                    ))}
                    : AI short-form video and Reddit growth agents.
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Writing */}
        <section className="mt-16">
          <Heading>Writing</Heading>
          <ul className="space-y-3">
            {writing.map((w) => (
              <li key={w.title}>
                <a href={w.url} {...ext} className="group flex items-start gap-3.5">
                  <MediumIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" />
                  <span className={`text-[var(--fg)] ${link}`}>{w.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-20 flex items-center gap-2 text-xs text-[var(--muted)]">
          <SaturnMark className="h-3.5 w-3.5" />
          {profile.name} · MS CS, RIT
        </footer>
      </main>
    </div>
  );
}
