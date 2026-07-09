import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "X", href: "https://x.com/tehkinaa" },
  { label: "GitHub", href: "https://github.com/Anikhet" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5">
      <Link href="/" className="text-sm font-semibold text-neutral-900">
        Anikhet Mulky
      </Link>
      <div className="flex items-center gap-6">
        {NAV_LINKS.map((link) => {
          const isExternal = link.href.startsWith("http");
          return isExternal ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 hover:text-neutral-900"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-neutral-600 hover:text-neutral-900"
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
