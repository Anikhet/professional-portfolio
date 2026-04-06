import type { Config } from "tailwindcss";


export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        parchment: {
          light: "#f5e8c7",
          DEFAULT: "#e8d8b0",
          dark: "#d4b886",
        },
        ink: {
          black: "#1a1a1a",
          red: "#b32424",
          blue: "#2c4c94",
        },
        gold: {
          light: "#e5c56d",
          DEFAULT: "#c9a03c",
          dark: "#9c761e",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#b32424",
          foreground: "#f5e8c7",
        },
        secondary: {
          DEFAULT: "#2c4c94",
          foreground: "#f5e8c7",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "background-shine": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "background-shine": "background-shine 4s linear infinite",
        'text-pulse': 'text-pulse 1.5s ease-in-out infinite',
        
        
      },
      
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
        uncial: ["var(--font-uncial)", "serif"],
        fell: ["var(--font-fell)", "serif"],
        pirata: ["var(--font-pirata)", "serif"],
      },
    },
  },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
