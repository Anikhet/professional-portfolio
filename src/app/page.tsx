import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { PROJECTS } from "@/lib/projects";

const LINKS = [
  { label: "Email", href: "mailto:animulky@gmail.com" },
  { label: "X", href: "https://x.com/tehkinaa" },
  { label: "GitHub", href: "https://github.com/Anikhet" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anikhet-mulky/" },
  { label: "Medium", href: "https://medium.com/@anikhetmulky" },
  { label: "Resume", href: portfolioData.profile.ctaUrl },
];

const PAGES = [
  { label: "Writing", href: "/writing" },
  { label: "Frames", href: "/frames" },
  { label: "Off duty", href: "/off-duty" },
];

const link =
  "underline decoration-neutral-300 underline-offset-[3px] transition-colors hover:decoration-neutral-800 [@media(prefers-color-scheme:dark)]:decoration-neutral-600 [@media(prefers-color-scheme:dark)]:hover:decoration-neutral-200";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="mb-5 text-neutral-400 [@media(prefers-color-scheme:dark)]:text-neutral-500">{title}</h2>
      {children}
    </section>
  );
}

function Row({
  title,
  href,
  meta,
  sub,
}: {
  title: string;
  href?: string;
  meta?: string;
  sub?: string;
}) {
  return (
    <li className="flex items-baseline gap-4">
      <div className="min-w-0 flex-1">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className={link}>
            {title}
          </a>
        ) : (
          <span>{title}</span>
        )}
        {sub && <p className="text-neutral-500 [@media(prefers-color-scheme:dark)]:text-neutral-400">{sub}</p>}
      </div>
      {meta && (
        <span className="shrink-0 tabular-nums text-neutral-400 [@media(prefers-color-scheme:dark)]:text-neutral-500">{meta}</span>
      )}
    </li>
  );
}

const year = (date: string) => {
  const [start, end] = date.split(" - ").map((s) => s.match(/\d{4}/)?.[0] ?? s);
  return start === end ? start : `${start} – ${end}`;
};

export default function Home() {
  const { profile, experience, education } = portfolioData;

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased [@media(prefers-color-scheme:dark)]:bg-neutral-950 [@media(prefers-color-scheme:dark)]:text-neutral-100">
      <main className="mx-auto max-w-[34rem] px-6 py-20 text-[15px] leading-relaxed sm:py-28">
        <h1 className="font-medium">{profile.name}</h1>
        <p className="text-neutral-500 [@media(prefers-color-scheme:dark)]:text-neutral-400">{profile.role}, Rochester NY</p>

        <p className="mt-8">{profile.editorialBio[0]}</p>

        <Section title="Work">
          <ul className="space-y-4">
            {experience.map((job) => (
              <Row key={job.company} title={job.company} href={job.url} sub={job.role} meta={year(job.date)} />
            ))}
          </ul>
        </Section>

        <Section title="Projects">
          <ul className="space-y-4">
            {PROJECTS.slice(0, 6).map((p) => (
              <Row key={p.title} title={p.title} href={p.href} sub={p.description} />
            ))}
          </ul>
          <Link href="/work" className={`mt-5 inline-block text-neutral-500 [@media(prefers-color-scheme:dark)]:text-neutral-400 ${link}`}>
            All projects
          </Link>
        </Section>

        <Section title="Education">
          <ul className="space-y-4">
            {education.map((e) => (
              <Row key={e.school} title={e.school} sub={e.degree} meta={year(e.date)} />
            ))}
          </ul>
        </Section>

        <Section title="Elsewhere">
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={link}>
                {l.label}
              </a>
            ))}
          </p>
          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-neutral-500 [@media(prefers-color-scheme:dark)]:text-neutral-400">
            {PAGES.map((l) => (
              <Link key={l.label} href={l.href} className={link}>
                {l.label}
              </Link>
            ))}
          </p>
        </Section>
      </main>
    </div>
  );
}
