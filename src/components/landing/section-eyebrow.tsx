/**
 * Swiss-style section eyebrow used across the K · Swiss Premium scroll story.
 * Renders "0X · Label" on the left with an optional right-aligned meta string,
 * underlined by a hairline rule. The numeral always reads in the premium red.
 */

interface SectionEyebrowProps {
  index: string;
  label: string;
  right?: string;
  /** "warm" for paper sections, "dark" for the ink / full-red breaks */
  tone?: "warm" | "dark";
}

export function SectionEyebrow({ index, label, right, tone = "warm" }: SectionEyebrowProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={[
        "flex items-baseline justify-between gap-4 whitespace-nowrap pb-3 font-grotesk text-[0.62rem] uppercase tracking-[0.22em] md:text-xs",
        isDark
          ? "border-b border-[hsl(var(--landing-paper)/0.3)] text-[hsl(var(--landing-paper)/0.7)]"
          : "border-b border-[hsl(var(--landing-muted)/0.35)] text-landing-muted",
      ].join(" ")}
    >
      <span>
        <span className="mr-3.5 text-landing-accent">{index}</span>
        {label}
      </span>
      {right ? <span className="opacity-80">{right}</span> : null}
    </div>
  );
}
