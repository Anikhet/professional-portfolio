import { portfolioData } from "@/data/portfolio";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingHero } from "@/components/landing/landing-hero";

export default function Home() {
  const { profile, social } = portfolioData;

  const emailLink = social.find((s) => s.name === "Email");
  const linkedInLink = social.find((s) => s.name === "LinkedIn");

  return (
    <main className="flex min-h-screen flex-col bg-landing-bg">
      <LandingHeader name={profile.name} />
      <LandingHero
        heroName={profile.heroName ?? profile.name.split(" ")[0]?.toUpperCase() ?? "ANIKHET"}
        role={profile.role}
        heroDescription={profile.heroDescription ?? ""}
      />
      <LandingFooter
        primarySocial={{
          name: linkedInLink?.name ?? "LinkedIn",
          url: linkedInLink?.url ?? "https://www.linkedin.com/in/anikhetmulkyyy",
        }}
        emailUrl={emailLink?.url ?? "mailto:am9559@rit.edu"}
        ctaLabel={profile.ctaLabel ?? "View Resume"}
        ctaUrl={profile.ctaUrl ?? ""}
        role={profile.role}
        heroDescription={profile.heroDescription ?? ""}
      />
    </main>
  );
}
