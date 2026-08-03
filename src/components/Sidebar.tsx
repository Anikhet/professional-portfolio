"use client";

/**
 * Primary nav: a sticky left rail on desktop, collapsing to a top bar with a
 * hamburger dropdown on mobile (all items were getting lost off-screen in the
 * old horizontal-scroll bar). Internal items route to their own pages and
 * highlight when active; the external item opens in a new tab. Each row shows
 * a keyboard-hint letter that jumps to that page when pressed.
 */
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  hint: string;
  external?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", hint: "h" },
  { label: "Work", href: "/work", hint: "w" },
  { label: "Writing", href: "/writing", hint: "r" },
  { label: "Frames", href: "/frames", hint: "f" },
  { label: "Off Duty", href: "/off-duty", hint: "o" },
  { label: "GitHub", href: "https://github.com/Anikhet", hint: "g", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anikhet-mulky/", hint: "l", external: true },
];

/** True when the user is typing into a field; shortcuts must not fire then. */
function isTypingTarget(el: EventTarget | null): boolean {
  if (!(el instanceof HTMLElement)) return false;
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
}

function NavLink({
  item,
  active,
  onNavigate,
}: {
  item: NavItem;
  active: boolean;
  onNavigate?: () => void;
}) {
  const rowClass =
    "flex items-center justify-between gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm transition-colors md:py-1.5 " +
    (active ? "bg-neutral-100 text-neutral-900 font-medium" : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 md:hover:bg-transparent");
  const hint = <span className="hidden font-mono text-xs text-neutral-400 md:inline">{item.hint}</span>;

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={rowClass} onClick={onNavigate}>
        <span>
          {item.label}
          <span aria-hidden="true" className="ml-1 text-xs text-neutral-400">
            ↗
          </span>
        </span>
        {hint}
      </a>
    );
  }

  return (
    <Link href={item.href} className={rowClass} aria-current={active ? "page" : undefined} onClick={onNavigate}>
      <span>{item.label}</span>
      {hint}
    </Link>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const shortcuts = useMemo(() => {
    const map = new Map<string, NavItem>();
    for (const item of NAV_ITEMS) map.set(item.hint, item);
    return map;
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey || isTypingTarget(e.target)) return;
      const match = shortcuts.get(e.key.toLowerCase());
      if (!match) return;
      e.preventDefault();
      if (match.external) {
        window.open(match.href, "_blank", "noopener,noreferrer");
      } else {
        router.push(match.href);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [shortcuts, router]);

  return (
    <>
      {/* Mobile: hamburger button floats top-right, on the same line as the
          page heading (no bar/background reserving its own row). */}
      <div className="absolute right-4 top-3 z-30 md:hidden">
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-8 w-8 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {menuOpen && (
          <nav
            aria-label="Primary"
            className="absolute right-0 top-10 flex w-48 flex-col gap-0.5 rounded-md border border-neutral-200 bg-white p-1.5 shadow-lg"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                active={!item.external && pathname === item.href}
                onNavigate={() => setMenuOpen(false)}
              />
            ))}
          </nav>
        )}
      </div>

      {/* Desktop: sticky vertical rail. */}
      <nav
        aria-label="Primary"
        className="hidden md:sticky md:top-8 md:flex md:w-40 md:shrink-0 md:flex-col md:items-stretch md:gap-1 md:self-start"
      >
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.label} item={item} active={!item.external && pathname === item.href} />
        ))}
      </nav>
    </>
  );
}
