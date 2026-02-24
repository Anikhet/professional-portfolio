import { portfolioData } from "@/data/portfolio";
import { LandingSections } from "@/components/landing/landing-sections";

export default function Home() {
  const { profile, social, projects } = portfolioData;
  const socialLinks = social.map(({ name, url }) => ({ name, url }));
  const projectCards = projects.map(({ title, description, link, tags }) => ({
    title,
    description,
    link,
    tags,
  }));

  return (
    <LandingSections profile={profile} social={socialLinks} projects={projectCards} />
  );
}
