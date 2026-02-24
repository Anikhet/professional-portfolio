/**
 * Landing page header with initials and decorative nav dots.
 * Fixed at top, minimal design.
 */

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length < 2) return parts[0]?.charAt(0).toUpperCase() ?? "";
  const first = parts[0]?.charAt(0).toUpperCase() ?? "";
  const last = parts[parts.length - 1]?.charAt(0).toUpperCase() ?? "";
  return `${first} — ${last}`;
}

interface LandingHeaderProps {
  name: string;
}

export function LandingHeader({ name }: LandingHeaderProps) {
  const initials = getInitials(name);

  return (
    <header className="fixed left-0 right-0 top-0 z-20 flex items-center justify-between px-7 py-6 md:px-12 md:py-10">
      <span className="font-stolzl-book text-base tracking-wide text-landing-accent md:text-[2rem] md:tracking-[0.02em]">
        {initials}
      </span>
      <div className="flex h-4 w-4 items-center justify-center rounded-full border border-landing-accent md:h-5 md:w-5">
        <div className="h-1.5 w-1.5 rounded-full bg-landing-accent md:h-2 md:w-2" />
      </div>
    </header>
  );
}
