"use client";

import { useState } from "react";
import { BookLayout } from "./BookLayout";
import { PageContent } from "./PageContent";
import { portfolioData } from "@/data/portfolio";

export function ManuscriptPortfolio() {
  const [currentPage, setCurrentPage] = useState(0);

  const bioSegments = portfolioData.profile.bio.split("\\n\\n");
  const bioStart = bioSegments[0];
  const firstLetter = bioStart.charAt(0);
  const restOfBioFirstPar = bioStart.slice(1);
  const otherBioSegments = bioSegments.slice(1);

  const spreads = [
    // Spread 0: Intro & Experience
    [
      <PageContent key="1">
        <h1 className="font-pirata text-5xl md:text-6xl text-ink-red mb-2 uppercase leading-none">{portfolioData.profile.heroName}</h1>
        <h2 className="font-uncial text-xl md:text-2xl mb-8 border-b border-ink-red/30 pb-4 text-ink-blue">
          • {portfolioData.profile.role} •
        </h2>
        <div className="text-xl leading-relaxed mb-6 space-y-4 text-justify">
          <div className="block">
            <span className="drop-cap">{firstLetter}</span>{restOfBioFirstPar}
          </div>
          {otherBioSegments.map((seg, idx) => (
            <p key={idx}>{seg}</p>
          ))}
        </div>
      </PageContent>,
      <PageContent key="2">
        <h2 className="font-pirata text-4xl text-ink-red mb-8 border-b border-ink-red/30 pb-2">
          Chronicles of Experience
        </h2>
        <div className="space-y-8">
          {portfolioData.experience.map((exp, i) => (
            <div key={i}>
              <h3 className="font-uncial text-xl font-bold flex items-center gap-2">
                <span className="rubric text-2xl">❧</span> {exp.role}
              </h3>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-ink-blue mb-1 mt-1">
                <span className="font-bold text-lg">{exp.company}</span>
                <span className="italic whitespace-nowrap">{exp.date}</span>
              </div>
              <p className="italic text-black/70 font-bold">{exp.location}</p>
            </div>
          ))}
        </div>
      </PageContent>
    ],
    // Spread 1: Education, Skills & Top Projects
    [
      <PageContent key="3">
         <h2 className="font-pirata text-4xl text-ink-red mb-6 border-b border-ink-red/30 pb-2">
           Scholarly Pursuits
         </h2>
         <div className="space-y-6 mb-10">
           {portfolioData.education.map((edu, i) => (
            <div key={i}>
              <h3 className="font-uncial text-xl font-bold flex items-center gap-2">
                <span className="rubric text-2xl">❧</span> {edu.degree}
              </h3>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-ink-blue mb-1 mt-1">
                <span className="font-bold text-lg">{edu.school}</span>
                <span className="italic whitespace-nowrap">{edu.date}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-pirata text-3xl text-ink-red mb-4 border-b border-ink-red/30 pb-2">
          Arsenal of Skills
        </h2>
        <p className="leading-relaxed font-bold text-lg text-justify text-ink-blue">
          {portfolioData.skills.join(" • ")}
        </p>
      </PageContent>,
      <PageContent key="4">
        <h2 className="font-pirata text-4xl text-ink-red mb-6 border-b border-ink-red/30 pb-2">
          The Grand Projects
        </h2>
        <div className="space-y-8">
          {portfolioData.projects.slice(0, 3).map((proj, i) => (
            <div key={i}>
              <h3 className="font-uncial text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="rubric">§</span> {proj.title}
              </h3>
              <p className="text-lg leading-relaxed mb-2 text-justify">{proj.description}</p>
              <p className="text-sm italic text-ink-blue font-bold">
                Inscribed with: {proj.tags?.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </PageContent>
    ],
    // Spread 2: More Projects & Contact
    [
      <PageContent key="5">
        <h2 className="font-pirata text-3xl text-ink-red mb-6 border-b border-ink-red/30 pb-2">
          Further Expeditions
        </h2>
        <div className="space-y-8">
          {portfolioData.projects.slice(3, 6).map((proj, i) => (
            <div key={i}>
              <h3 className="font-uncial text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="rubric">§</span> {proj.title}
              </h3>
              <p className="text-lg leading-relaxed mb-2 text-justify">{proj.description}</p>
              <p className="text-sm italic text-ink-blue font-bold">
                Inscribed with: {proj.tags?.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </PageContent>,
      <PageContent key="6">
        <h2 className="font-pirata text-4xl text-ink-red mb-6 border-b border-ink-red/30 pb-2">
          Heralds & Summons
        </h2>
        <p className="text-xl leading-relaxed mb-8 italic">
          Should ye seek an alliance or discourse upon the mysterious arts of computation, dispatch your missives to the following locations across the realm.
        </p>
        <ul className="space-y-6 text-xl">
          {portfolioData.social.map((soc, i) => {
            const Icon = soc.icon;
            return (
              <li key={i}>
                <a href={soc.url} target="_blank" rel="noopener noreferrer" className="hover:text-ink-red transition-all flex items-center gap-4 group">
                  <span className="text-gold group-hover:scale-110 transition-transform"><Icon className="w-8 h-8" /></span>
                  <span className="font-uncial text-2xl group-hover:underline underline-offset-4 decoration-ink-red">{soc.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </PageContent>
    ]
  ];

  return (
    <div className="min-h-screen bg-ink-black flex flex-col items-center justify-center py-10 px-4 pattern-grid-lg">
      <BookLayout>
        {spreads[currentPage]}
      </BookLayout>
      
      <div className="mt-8 flex gap-8 items-center">
        <button 
          onClick={() => setCurrentPage(c => Math.max(0, c - 1))}
          disabled={currentPage === 0}
          className="px-6 py-2 bg-parchment-dark text-ink-black font-pirata text-2xl disabled:opacity-50 hover:bg-gold transition-colors rounded-sm border-2 border-gold outline-offset-2 hover:outline outline-gold"
        >
          Previous Page
        </button>
        <span className="font-uncial text-2xl text-gold flex items-center">
          {currentPage + 1} / {spreads.length}
        </span>
        <button 
          onClick={() => setCurrentPage(c => Math.min(spreads.length - 1, c + 1))}
          disabled={currentPage === spreads.length - 1}
          className="px-6 py-2 bg-parchment-dark text-ink-black font-pirata text-2xl disabled:opacity-50 hover:bg-gold transition-colors rounded-sm border-2 border-gold outline-offset-2 hover:outline outline-gold"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
