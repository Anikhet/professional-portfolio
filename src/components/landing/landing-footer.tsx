/**
 * Landing page footer with primary social link, CTA button, and email.
 */

import Link from "next/link";

interface SocialLink {
  name: string;
  url: string;
}

interface LandingFooterProps {
  primarySocial: SocialLink;
  emailUrl: string;
  ctaLabel: string;
  ctaUrl: string;
  role: string;
  heroDescription: string;
}

export function LandingFooter({
  primarySocial,
  emailUrl,
  ctaLabel,
  ctaUrl,
  role,
  heroDescription,
}: LandingFooterProps) {
  const highlightPhrase = "AI-DRIVEN";
  const hasHighlight = heroDescription.includes(highlightPhrase);
  const [beforeHighlight, afterHighlight] = hasHighlight
    ? heroDescription.split(highlightPhrase)
    : [heroDescription, ""];

  return (
    <footer className="pointer-events-none fixed bottom-0 left-0 right-0 z-20 px-7 pb-7 md:px-12 md:pb-9">
      <div className="grid grid-cols-3 items-end gap-4">
        <div className="pointer-events-auto flex flex-col items-start gap-4">
        <Link
          href={primarySocial.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-stolzl-bold text-sm uppercase tracking-tight text-landing-accent hover:underline md:text-[1.9rem]"
        >
          {primarySocial.name.toUpperCase()}
        </Link>
        <Link
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center rounded-md bg-neutral-200 px-5 py-2.5 text-[1rem] font-medium text-neutral-900 shadow-sm transition-colors hover:bg-neutral-300 md:text-2xl"
        >
          {ctaLabel}
        </Link>
        </div>

        <div className="mx-auto max-w-[46rem] text-center">
          <p className="font-stolzl-book text-[0.75rem] uppercase leading-[1.2] text-landing-muted md:text-[1.25rem]">
            {role}
          </p>
          <p className="mt-1 font-stolzl-bold text-[0.75rem] uppercase leading-[1.2] tracking-tight text-landing-muted md:mt-2 md:text-[1.45rem]">
            {beforeHighlight}
            {hasHighlight ? <span className="text-landing-accent">{highlightPhrase}</span> : null}
            {afterHighlight}
          </p>
        </div>

        <Link
          href={emailUrl}
          className="pointer-events-auto justify-self-end font-stolzl-bold text-sm uppercase tracking-tight text-landing-accent hover:underline md:text-[1.9rem]"
        >
          Email Me
        </Link>
      </div>
    </footer>
  );
}
