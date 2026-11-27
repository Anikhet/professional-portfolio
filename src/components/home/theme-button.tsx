"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

/** Day/night toggle; shares the "editorial-theme" key the layout reads before paint. */
export default function ThemeButton() {
  const [night, setNight] = useState(false);

  useEffect(() => {
    setNight(document.documentElement.dataset.editorialTheme === "night");
  }, []);

  const toggle = () => {
    const next = night ? "day" : "night";
    document.documentElement.dataset.editorialTheme = next;
    try {
      localStorage.setItem("editorial-theme", next);
    } catch {}
    setNight(!night);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={night ? "Switch to light mode" : "Switch to dark mode"}
      title={night ? "Light mode" : "Dark mode"}
      className="grid h-9 w-9 place-items-center rounded-full text-[var(--soft)] transition-colors hover:bg-[var(--hover)] hover:text-[var(--fg)]"
    >
      {night ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}
