"use client";

/**
 * Sticky left nav rail (ported from the editorial NavRail, restyled for the
 * minimal grid-bg design). Internal items route to their own pages and
 * highlight when active; the external item opens in a new tab. Each row
 * shows a keyboard-hint letter that jumps to that page when pressed.
 */
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

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

function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  const rowClass =
    "flex items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors " +
    (active ? "bg-neutral-100 text-neutral-900 font-medium" : "text-neutral-600 hover:text-neutral-900");
  const hint = <span className="font-mono text-xs text-neutral-400">{item.hint}</span>;

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={rowClass}>
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
    <Link href={item.href} className={rowClass} aria-current={active ? "page" : undefined}>
      <span>{item.label}</span>
      {hint}
    </Link>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const shortcuts = useMemo(() => {
    const map = new Map<string, NavItem>();
    for (const item of NAV_ITEMS) map.set(item.hint, item);
    return map;
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
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
    <nav
      aria-label="Primary"
      className="sticky top-8 flex w-40 shrink-0 flex-col gap-1 self-start"
    >
      <Link href="/" className="mb-4 px-3 text-sm font-semibold text-neutral-900">
        Anikhet Mulky
      </Link>
      {NAV_ITEMS.map((item) => (
        <NavLink key={item.label} item={item} active={!item.external && pathname === item.href} />
      ))}
    </nav>
  );
}
