"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type EditorialTheme = "day" | "night";

const STORAGE_KEY = "editorial-theme";

function getCurrentTheme(): EditorialTheme {
  if (typeof document === "undefined") return "day";
  return document.documentElement.dataset.editorialTheme === "night" ? "night" : "day";
}

function setTheme(theme: EditorialTheme) {
  document.documentElement.dataset.editorialTheme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
}

export function ThemeToggle() {
  const [theme, setThemeState] = useState<EditorialTheme>("day");

  useEffect(() => {
    setThemeState(getCurrentTheme());
  }, []);

  const isNight = theme === "night";

  return (
    <button
      type="button"
      className="ed-theme-toggle"
      aria-label={isNight ? "Switch to day mode" : "Switch to night mode"}
      aria-pressed={isNight}
      title={isNight ? "Day mode" : "Night mode"}
      onClick={() => {
        const nextTheme = isNight ? "day" : "night";
        setTheme(nextTheme);
        setThemeState(nextTheme);
      }}
    >
      {isNight ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    </button>
  );
}
