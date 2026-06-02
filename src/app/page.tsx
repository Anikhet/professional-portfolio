import { portfolioData } from "@/data/portfolio";
import { WorkFirstGallery } from "@/components/gallery/work-first-gallery";

export default function Home() {
  const { profile, social, projects, experience, skills, hobbies } = portfolioData;

  return (
    <WorkFirstGallery
      profile={{
        name: profile.name,
        role: profile.role,
        tagline: profile.tagline,
        micro: profile.micro,
        avatar: profile.avatar,
      }}
      location={profile.location}
      projects={projects.map(({ title, description, image, link, tags }) => ({
        title,
        description,
        image,
        link,
        tags,
      }))}
      experience={experience}
      skills={skills}
      hobbies={hobbies}
      social={social.map(({ name, url }) => ({ name, url }))}
    />
  );
}
