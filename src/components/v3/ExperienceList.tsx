"use client";

import { portfolioData } from "@/data/portfolio";

export function ExperienceList() {
  const { experience } = portfolioData;

  return (
    <section className="flex flex-col gap-8 mb-24">
      <h2 className="font-serif text-2xl text-white mb-4 italic">Experience</h2>
      <div className="flex flex-col gap-12">
        {experience.map((job) => (
          <div key={`${job.company}-${job.role}`} className="group">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-lg font-medium text-white group-hover:text-cyan-200 transition-colors">
                {job.company}
              </h3>
              <span className="font-mono text-sm text-neutral-500">
                {job.date}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-neutral-300">{job.role}</span>
              <span className="text-neutral-500 text-sm">{job.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
