import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin, PenLine } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import ProjectList from "@/components/home/project-list";
import ThemeButton from "@/components/home/theme-button";

const { profile, experience, education, projects, writing, games } = portfolioData;

const XIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Anikhet", Icon: Github },
  { label: "X", href: "https://x.com/tehkinaa", Icon: XIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anikhet-mulky/", Icon: Linkedin },
  { label: "Medium", href: "https://medium.com/@anikhetmulky", Icon: PenLine },
  { label: "Email", href: "mailto:animulky@gmail.com", Icon: Mail },
];

const SKY = [
  { src: "/thumb-saturn.jpg", caption: "Saturn & its rings" },
  { src: "/thumb-jupiter.jpg", caption: "Jupiter" },
  { src: "/astro-moon-terminator.jpg", caption: "Lunar terminator" },
  { src: "/astro-star-cluster.jpg", caption: "Star cluster" },
];

const COMPANY_TILE: Record<string, string> = {
  "Clover Labs": "bg-emerald-500/15 text-emerald-500",
  "Peeker AI": "bg-sky-500/15 text-sky-500",
  "Bhabha Atomic Research Centre": "bg-amber-500/15 text-amber-500",
};

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const muted = "text-[var(--muted)]";
const underline = "underline decoration-[var(--line)] underline-offset-4 transition-colors hover:decoration-[var(--fg)]";

/** Inline link in prose: readable text with an accent underline. */
function A({ href, children, internal }: { href: string; children: React.ReactNode; internal?: boolean }) {
  const cls =
    "font-medium text-[var(--fg)] underline decoration-[var(--accent)] decoration-[1.5px] underline-offset-4 transition-colors hover:text-[var(--accent)]";
  return internal ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <a href={href} {...ext} className={cls}>
      {children}
    </a>
  );
}

function Section({ title, aside, children }: { title: string; aside?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <div className="mb-5 flex items-baseline justify-between">
        <h2 className={`text-xs font-medium uppercase tracking-[0.14em] ${muted}`}>{title}</h2>
        {aside}
      </div>
      {children}
    </section>
  );
}

function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-1 text-xs ${muted} hover:text-[var(--fg)]`}>
      {children}
      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

/** "Oct 2025 - Present" -> "2025 – now" */
const span = (date: string) => {
  const [a, b] = date.split(" - ").map((s) => s.match(/\d{4}/)?.[0] ?? "now");
  return a === b ? a : `${a} – ${b}`;
};

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export default function Home() {
  const clover = experience[0];
  const [echos, redRover] = "products" in clover && clover.products ? clover.products : [];
  const snoozy = projects.find((p) => p.title === "Snoozy");
  const astro = projects.find((p) => p.title === "AstroAgent");
  const peeker = experience[1];

  return (
    <div className="home min-h-screen bg-[var(--bg)] text-[var(--fg)] antialiased transition-colors">
      <main className="mx-auto max-w-[40rem] px-5 pb-20 pt-10 sm:pt-16">
        {/* Header */}
        <header className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-[var(--line)]">
              <Image src="/avatar-portrait.jpg" alt={profile.name} fill sizes="128px" className="object-cover" priority />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-[1.7rem]">{profile.name}</h1>
              <p className={`mt-0.5 flex flex-wrap items-center gap-x-2 text-sm ${muted}`}>
                <span>
                  {clover.role} @{" "}
                  <a href={clover.url} {...ext} className="font-medium text-[var(--accent)] hover:underline hover:underline-offset-4">
                    {clover.company}
                  </a>
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {profile.location}
                </span>
              </p>
            </div>
          </div>
          <ThemeButton />
        </header>

        {/* Story */}
        <div className="mt-8 space-y-4 leading-relaxed text-[var(--soft)]">
          <p>
            I build AI products at <A href={clover.url ?? "#"}>{clover.company}</A>, where I work on{" "}
            {echos && <A href={echos.url}>{echos.name}</A>}, an engine that turns ideas into short-form video and
            publishes it everywhere, and {redRover && <A href={redRover.url}>{redRover.name}</A>}, agents that grow
            brands on Reddit.
          </p>
          <p>
            On my own, I shipped {snoozy && <A href={snoozy.link}>Snoozy</A>} to the App Store: bedtime stories read
            in a parent&apos;s own cloned voice. I also built {astro && <A href={astro.link}>AstroAgent</A>}, which tells
            you what you&apos;re pointing your phone at in the night sky.
          </p>
          <p>
            I care most about AI agents and the evals that prove they work. Before this: an AI engineering co-op at{" "}
            <A href={("url" in peeker && peeker.url) || "#"}>{peeker.company}</A> and an MS in Computer Science at RIT.
          </p>
          <p className="text-sm">
            Off the clock I photograph planets through a backyard telescope (
            <A href="/frames" internal>
              see the sky
            </A>
            ) and play too much {games[0].name}.
          </p>
        </div>

        <nav className="mt-7 flex flex-wrap items-center gap-2">
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

        {/* Projects */}
        <Section title="Projects" aside={<MoreLink href="/work">All work</MoreLink>}>
          <ProjectList projects={projects} />
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <ul className="space-y-1">
            {experience.map((job, i) => (
              <li key={job.company} className="-mx-3 flex gap-4 rounded-xl p-3">
                <div
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-bold ${
                    COMPANY_TILE[job.company] ?? "bg-neutral-500/15 text-neutral-500"
                  }`}
                >
                  {initials(job.company)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2">
                      {"url" in job && job.url ? (
                        <a href={job.url} {...ext} className={`font-semibold ${underline}`}>
                          {job.company}
                        </a>
                      ) : (
                        <span className="font-semibold">{job.company}</span>
                      )}
                      {i === 0 && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-500">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Now
                        </span>
                      )}
                    </div>
                    <span className={`shrink-0 font-mono text-xs tabular-nums ${muted}`}>{span(job.date)}</span>
                  </div>
                  <p className={`text-sm ${muted}`}>
                    {job.role} · {job.location}
                  </p>
                  {"products" in job && job.products && (
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {job.products.map((p) => (
                        <a
                          key={p.name}
                          href={p.url}
                          {...ext}
                          className="group rounded-lg border border-[var(--line)] p-3 transition-colors hover:border-[var(--muted)] hover:bg-[var(--hover)]"
                        >
                          <span className="inline-flex items-center gap-1 text-sm font-semibold">
                            {p.name}
                            <ArrowUpRight className={`h-3 w-3 ${muted} transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5`} />
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-[var(--soft)]">{p.description}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Through the telescope */}
        <Section title="Through my telescope" aside={<MoreLink href="/frames">All frames</MoreLink>}>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {SKY.map((s) => (
              <Link key={s.src} href="/frames" className="group relative aspect-square overflow-hidden rounded-xl bg-black">
                <Image
                  src={s.src}
                  alt={s.caption}
                  fill
                  sizes="(min-width: 640px) 160px, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2.5 pb-2 pt-6 text-xs font-medium text-white">
                  {s.caption}
                </span>
              </Link>
            ))}
          </div>
        </Section>

        {/* Currently playing */}
        <Section title="Currently playing" aside={<MoreLink href="/off-duty">Off duty</MoreLink>}>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {games.slice(0, 6).map((g) => (
              <Link key={g.name} href="/off-duty" className="group">
                <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-[var(--card)] ring-1 ring-[var(--line)]">
                  <Image
                    src={g.cover.src}
                    alt={g.cover.alt}
                    fill
                    sizes="(min-width: 640px) 100px, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-1.5 truncate text-xs font-medium">{g.name}</p>
                <p className={`truncate text-[11px] ${muted}`}>{g.status}</p>
              </Link>
            ))}
          </div>
        </Section>

        {/* Writing */}
        <Section title="Writing" aside={<MoreLink href="/writing">All writing</MoreLink>}>
          <ul>
            {writing.map((w) => (
              <li key={w.title}>
                <a
                  href={w.url}
                  {...ext}
                  className="group -mx-3 flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[var(--hover)]"
                >
                  <span className="mt-0.5 shrink-0 rounded-md border border-[var(--line)] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--muted)]">
                    Medium
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium leading-snug">{w.title}</span>
                    <span className={`mt-1 block text-sm ${muted}`}>{w.blurb}</span>
                  </span>
                  <ArrowUpRight className={`mt-1 h-4 w-4 shrink-0 ${muted} transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5`} />
                </a>
              </li>
            ))}
          </ul>
        </Section>

        {/* Education */}
        <Section title="Education">
          <ul className="space-y-3">
            {education.map((e) => (
              <li key={e.school} className="flex items-baseline justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-medium">{e.school}</p>
                  <p className={`text-sm ${muted}`}>{e.degree}</p>
                </div>
                <span className={`shrink-0 font-mono text-xs tabular-nums ${muted}`}>{span(e.date)}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Reach me */}
        <section className="mt-16 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6">
          <h2 className="text-lg font-semibold">Let&apos;s talk</h2>
          <p className="mt-1 text-sm text-[var(--soft)]">
            Building something with agents, or want a second pair of eyes on your evals? Email me.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <a href="mailto:animulky@gmail.com" className={`font-medium ${underline}`}>
              animulky@gmail.com
            </a>
            <a href={profile.ctaUrl} {...ext} className={underline}>
              Résumé
            </a>
            <a href="https://www.linkedin.com/in/anikhet-mulky/" {...ext} className={underline}>
              LinkedIn
            </a>
          </div>
        </section>

        <footer className={`mt-10 text-center text-xs ${muted}`}>
          {profile.name} · {profile.location}
        </footer>
      </main>
    </div>
  );
}
