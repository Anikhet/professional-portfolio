import { portfolioData } from "@/data/portfolio";
import { LandingSections } from "@/components/landing/landing-sections";

export default function Home() {
  const { profile, social } = portfolioData;
  const socialLinks = social.map(({ name, url }) => ({ name, url }));

  return (
    <LandingSections profile={profile} social={socialLinks} />
  );
}
