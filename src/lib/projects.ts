import { portfolioData } from "@/data/portfolio";

/** Project images that actually exist in /public; everything else renders as "No image". */
const AVAILABLE_IMAGES = new Set(["/map.png", "/airbnb.png", "/apify.png", "/roi.png"]);

export type Project = {
  title: string;
  description: string;
  image?: string;
  href?: string;
  tags: string[];
};

export const PROJECTS: Project[] = portfolioData.projects.map((project) => ({
  title: project.title,
  description: project.description,
  image: AVAILABLE_IMAGES.has(project.image.toLowerCase()) ? project.image : undefined,
  href: project.link,
  tags: project.tags,
}));
