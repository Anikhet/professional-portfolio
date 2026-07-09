export type Project = {
  title: string;
  href?: string;
  image?: string;
  description: string;
  tags: string[];
};

const GITHUB = "https://github.com/Anikhet";

export const PROJECTS: Project[] = [
  {
    title: "Drip",
    href: GITHUB,
    description: "AI streetwear stylist that builds head-to-toe fits from your own closet.",
    tags: ["Next.js", "SwiftUI", "GPT-5"],
  },
  {
    title: "Snoozy",
    href: "https://github.com/Anikhet/snoozy",
    description: "Personalized bedtime stories read aloud in a parent's cloned voice.",
    tags: ["React Native", "Expo", "LLM"],
  },
  {
    title: "DevInterview.AI",
    href: GITHUB,
    description: "AI mock-interview studio with a live VRM avatar interviewer.",
    tags: ["React", "Three.js", "MediaPipe"],
  },
  {
    title: "AstroAgent",
    href: "https://www.tella.tv/video/astroagent-18yh",
    description: "Point your phone at the sky and an AI identifies what you see.",
    tags: ["AI Agents", "Ephemeris", "Next.js"],
  },
  {
    title: "Racing Car Reinforcement Learning",
    href: GITHUB,
    description: "Autonomous cars learning to navigate a race track using neuroevolution.",
    tags: ["Python", "PyTorch", "Pygame"],
  },
  {
    title: "Red Rover",
    href: "https://app.tryredrover.com/login",
    description: "AI-driven Reddit OS for automated engagement and SEO.",
    tags: ["AI Agents", "SEO", "Automation"],
  },
  {
    title: "Discord Knowledge Bot",
    href: GITHUB,
    description: "Production-grade Q&A Discord bot using RAG with GPT-4o.",
    tags: ["Node.js", "GPT-4o", "Supabase"],
  },
  {
    title: "MicroCart",
    href: GITHUB,
    description: "Microservices e-commerce platform with SSR and GraphQL APIs.",
    tags: ["Next.js", "Node.js", "GraphQL"],
  },
  {
    title: "Apify Web Scraper",
    href: GITHUB,
    description: "A powerful web scraper built with Apify.",
    tags: ["Apify", "Web Scraping", "Node.js"],
  },
  {
    title: "Distance Visualizer",
    href: "https://map-wanderer-visualizer.vercel.app/",
    description: "Visualizing distances using MapGL.",
    tags: ["MapGL", "React", "Geolocation"],
  },
  {
    title: "ROI Calculator",
    href: GITHUB,
    description: "Calculate Return on Investment easily.",
    tags: ["React", "TypeScript", "Finance"],
  },
  {
    title: "AirBnb Clone",
    href: "https://roomie-three.vercel.app/",
    description: "A full-stack clone of AirBnb.",
    tags: ["Next.js", "MongoDB", "Tailwind"],
  },
];
