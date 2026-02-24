/**
 * Landing page hero section with name, role, and description.
 * Centered, bold typography.
 */

interface LandingHeroProps {
  heroName: string;
  role: string;
  heroDescription: string;
}

export function LandingHero({
  heroName,
  role: _role,
  heroDescription: _heroDescription,
}: LandingHeroProps) {
  return (
    <section className="flex flex-1 items-center justify-center px-6 text-center md:px-10">
      <h1 className="font-stolzl-bold text-[6.5rem] uppercase leading-none tracking-[-0.04em] text-landing-accent sm:text-[8rem] md:text-[13rem] lg:text-[17rem]">
        {heroName}
      </h1>
    </section>
  );
}
