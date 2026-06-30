"use client";

/**
 * Left nav rail — a slim, always-visible navigation column in the editorial
 * paper/ink palette. Internal items route to their own pages (and highlight
 * when active); the external item (GitHub) opens in a new tab. Each row shows
 * an optional keyboard-hint chip.
 *
 * The rail is sticky so it stays on screen as the main content scrolls.
 */
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import type { CSSProperties } from "react";
import type { NavItem } from "@/types/editorial";

/** True when the user is typing into a field — shortcuts must not fire then. */
function isTypingTarget(el: EventTarget | null): boolean {
  if (!(el instanceof HTMLElement)) return false;
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
}

const LINK_STYLE: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "7px 12px",
  fontSize: "var(--ed-fs-title)",
  color: "inherit",
  textDecoration: "none",
  borderRadius: 6,
};

/** The label plus an "↗" affordance for external links. */
function NavLabel({ item }: { item: NavItem }) {
  return (
    <span>
      {item.label}
      {item.external ? (
        <span aria-hidden="true" style={{ marginLeft: 4, opacity: 0.55, fontSize: "var(--ed-fs-cap)" }}>
          ↗
        </span>
      ) : null}
    </span>
  );
}

/** A single nav row — internal routes use next/link; external use a plain anchor. */
function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  const hint = item.hint ? <span className="ed-nav-hint">{item.hint}</span> : null;

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="ed-nav-link mono" style={LINK_STYLE}>
        <NavLabel item={item} />
        {hint}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      className="ed-nav-link mono"
      style={LINK_STYLE}
      aria-current={active ? "page" : undefined}
    >
      <NavLabel item={item} />
      {hint}
    </Link>
  );
}

export function NavRail({ nav }: { nav: NavItem[] }) {
  const pathname = usePathname();
  const router = useRouter();

  // Stable lookup of hint letter → nav item (nav content is static at runtime).
  const shortcuts = useMemo(() => {
    const map = new Map<string, NavItem>();
    for (const item of nav) {
      if (item.hint) map.set(item.hint.toLowerCase(), item);
    }
    return map;
  }, [nav]);

  // Keyboard shortcuts: each nav item's `hint` letter jumps to that page.
  // Ignored while typing or when a modifier key is held.
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
      className="ed-nav-rail"
      style={{ position: "sticky", top: 24, alignSelf: "start", display: "flex", flexDirection: "column", gap: 2 }}
    >
      {nav.map((item) => (
        <NavLink key={item.label} item={item} active={!item.external && pathname === item.href} />
      ))}
    </nav>
  );
}
