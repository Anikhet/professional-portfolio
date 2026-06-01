import { portfolioData } from "@/data/portfolio";
import { LandingSections } from "@/components/landing/landing-sections";

export default function Home() {
  const { profile, social, experience, education, projects, skills, hobbies, games } = portfolioData;

  const socialLinks = social.map(({ name, url }) => ({ name, url }));
  const projectCards = projects.map(({ title, description, image, link, tags }) => ({
    title,
    description,
    image,
    link,
    tags,
  }));

  return (
    <LandingSections
      profile={profile}
      social={socialLinks}
      experience={experience}
      education={education}
      projects={projectCards}
      skills={skills}
      hobbies={hobbies}
      games={games}
    />
  );
}
