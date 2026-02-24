interface LandingAboutProps {
  role: string;
  bio: string;
}

export function LandingAbout({ role, bio }: LandingAboutProps) {
  const paragraphs = bio
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <section className="min-h-screen px-7 pb-20 pt-28 md:px-12 md:pt-36">
      <div className="mx-auto max-w-4xl">
        <p className="font-stolzl-book text-xs uppercase tracking-[0.18em] text-landing-accent md:text-sm">
          About
        </p>
        <h2 className="mt-3 font-stolzl-bold text-2xl uppercase tracking-tight text-landing-accent md:text-4xl">
          {role}
        </h2>
        <div className="mt-8 space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={`${paragraph.slice(0, 16)}-${index}`}
              className="max-w-3xl text-base leading-relaxed text-landing-muted md:text-lg md:leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
