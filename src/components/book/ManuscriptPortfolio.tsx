"use client";

import HTMLFlipBook from 'react-pageflip';
import { useRef, useEffect } from 'react';
import { PageContent } from "./PageContent";
import { portfolioData } from "@/data/portfolio";

export function ManuscriptPortfolio() {
  const bioSegments = portfolioData.profile.bio.split("\n\n");
  const bioStart = bioSegments[0];
  const firstLetter = bioStart.charAt(0);
  const restOfBioFirstPar = bioStart.slice(1);
  const otherBioSegments = bioSegments.slice(1);

  const bookRef = useRef<any>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!bookRef.current) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        bookRef.current.pageFlip().flipNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        bookRef.current.pageFlip().flipPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-ink-black flex flex-col items-center justify-center p-0 md:p-8 overflow-hidden">
      <div className="text-center mb-4 md:mb-8 text-gold">
        <p className="font-pirata text-xl tracking-wider">Drag corners or click edges to turn pages</p>
      </div>

      <HTMLFlipBook 
        ref={bookRef}
        width={550} 
        height={733} 
        size="stretch" 
        minWidth={315} 
        maxWidth={700} 
        minHeight={400} 
        maxHeight={1000} 
        maxShadowOpacity={0.5} 
        showCover={false} 
        mobileScrollSupport={true}
        className="shadow-2xl mx-auto"
        style={{ margin: "0 auto" }}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startPage={0}
        swipeDistance={30}
        clickEventForward={true}
        useMouseEvents={true}
      >
        {/* Page 1: Title & Hook */}
        <PageContent>
          <div className="flex flex-col h-full justify-center">
            <h1 className="font-pirata text-[4rem] sm:text-[5rem] md:text-[6rem] tracking-tight text-ink-black mb-2 uppercase leading-none mt-2 text-center">{portfolioData.profile.heroName}</h1>
            <h2 className="font-uncial text-xl md:text-2xl mb-8 text-ink-red text-center">
               ~ {portfolioData.profile.role} ~
            </h2>
            <div className="w-4/5 h-px bg-ink-red/30 mb-8 mx-auto self-center"></div>
            
            <h3 className="font-pirata text-2xl md:text-3xl lg:text-4xl text-center text-ink-blue mx-auto max-w-[90%] mb-12 drop-shadow-sm leading-snug">
              &quot;{portfolioData.profile.tagline}&quot;
            </h3>

            <div className="text-xl leading-relaxed space-y-4 text-justify px-2 sm:px-4 md:px-6">
              <p className="block">
                <span className="drop-cap">{firstLetter}</span>{restOfBioFirstPar}
              </p>
              <div className="clear-both"></div>
            </div>
          </div>
        </PageContent>

        {/* Page 2: Lore & Chronicles of Experience */}
        <PageContent>
          <div className="text-xl leading-relaxed space-y-4 text-justify px-0 sm:px-4 mb-10 pt-4">
            {otherBioSegments.map((seg, idx) => (
              <p key={idx}>{seg}</p>
            ))}
          </div>

          <h2 className="font-pirata text-4xl text-ink-blue mb-8 border-b border-ink-red/30 pb-2 text-center">
            Chronicles of Experience
          </h2>
          <div className="space-y-8">
            {portfolioData.experience.map((exp, i) => (
              <div key={i}>
                <h3 className="font-uncial text-xl font-bold flex items-center gap-2 text-ink-red">
                  <span className="rubric text-2xl">❧</span> {exp.role}
                </h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-ink-black mb-1 mt-1">
                  <span className="font-bold text-lg">{exp.company}</span>
                  <span className="italic whitespace-nowrap">{exp.date}</span>
                </div>
                <p className="italic text-ink-blue font-bold">{exp.location}</p>
              </div>
            ))}
          </div>
        </PageContent>

        {/* Page 3: Scholarly Pursuits & Skills */}
        <PageContent>
           <h2 className="font-pirata text-4xl text-ink-blue mb-6 border-b border-ink-red/30 pb-2 text-center">
             Scholarly Pursuits
           </h2>
           <div className="space-y-6 mb-10">
             {portfolioData.education.map((edu, i) => (
              <div key={i}>
                <h3 className="font-uncial text-xl font-bold flex items-center gap-2 text-ink-red">
                  <span className="rubric text-2xl">❧</span> {edu.degree}
                </h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-ink-black mb-1 mt-1">
                  <span className="font-bold text-lg">{edu.school}</span>
                  <span className="italic whitespace-nowrap">{edu.date}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-pirata text-3xl text-ink-red mb-4 border-b border-ink-red/30 pb-2 text-center">
            Arsenal of Skills
          </h2>
          <p className="leading-relaxed font-bold text-lg text-center text-ink-blue">
            {portfolioData.skills.join(" • ")}
          </p>
        </PageContent>

        {/* Page 4: Projects (Part 1) */}
        <PageContent>
          <h2 className="font-pirata text-4xl text-ink-black mb-6 border-b border-ink-red/30 pb-2 text-center drop-shadow-md">
            The Grand Projects
          </h2>
          <div className="space-y-8 mt-4">
            {portfolioData.projects.slice(0, 3).map((proj, i) => (
              <div key={i}>
                <h3 className="font-uncial text-2xl font-bold mb-2 flex items-center gap-2 text-ink-red">
                  <span className="rubric">§</span> {proj.title}
                </h3>
                <p className="text-lg leading-relaxed mb-2 text-justify">{proj.description}</p>
                <p className="text-sm italic text-ink-blue font-bold text-right pt-2 border-t border-ink-black/10">
                  Inscribed with: {proj.tags?.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </PageContent>

        {/* Page 5: Projects (Part 2) */}
        <PageContent>
          <h2 className="font-pirata text-3xl text-ink-blue mb-6 border-b border-ink-red/30 pb-2 text-center">
            Further Expeditions
          </h2>
          <div className="space-y-8 mt-4">
            {portfolioData.projects.slice(3, 6).map((proj, i) => (
              <div key={i}>
                <h3 className="font-uncial text-2xl font-bold mb-2 flex items-center gap-2 text-ink-red">
                  <span className="rubric">§</span> {proj.title}
                </h3>
                <p className="text-lg leading-relaxed mb-2 text-justify">{proj.description}</p>
                <p className="text-sm italic text-ink-black font-bold text-right pt-2 border-t border-ink-blue/10">
                  Inscribed with: {proj.tags?.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </PageContent>

        {/* Page 6: Contact & Socials */}
        <PageContent>
          <h2 className="font-pirata text-4xl text-ink-red mb-6 border-b border-ink-red/30 pb-2 text-center">
            Heralds & Summons
          </h2>
          <p className="text-xl leading-relaxed mb-8 italic text-center">
            Should ye seek an alliance or discourse upon the mysterious arts of computation, dispatch your missives to the following locations across the realm.
          </p>
          <ul className="space-y-8 text-xl flex flex-col items-center justify-center mt-12 w-full">
            {portfolioData.social.map((soc, i) => {
              const Icon = soc.icon;
              return (
                <li key={i}>
                  <a href={soc.url} target="_blank" rel="noopener noreferrer" className="hover:text-ink-red transition-all flex items-center gap-4 group">
                    <span className="text-ink-blue group-hover:scale-110 group-hover:text-gold transition-all"><Icon className="w-10 h-10" /></span>
                    <span className="font-uncial text-4xl group-hover:underline underline-offset-4 decoration-ink-red">{soc.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </PageContent>
      </HTMLFlipBook>
    </div>
  );
}
