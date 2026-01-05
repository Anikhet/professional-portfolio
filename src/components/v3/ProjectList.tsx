"use client";

import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProjectList() {
  const { projects } = portfolioData;

  return (
    <section className="flex flex-col gap-8 mb-24">
      <h2 className="font-serif text-2xl text-white mb-4 italic">Selected Projects</h2>
      <div className="grid gap-12">
        {projects.map((project) => (
          <div key={project.title} className="group flex flex-col gap-3">
            <div className="flex items-baseline justify-between">
              <Link 
                href={project.link}
                target="_blank"
                className="text-lg font-medium text-white hover:text-cyan-200 transition-colors flex items-center gap-2 group-visited:text-neutral-400"
              >
                {project.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            </div>
            
            <p className="text-neutral-400 leading-relaxed text-sm max-w-xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-1">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-neutral-600 px-1.5 py-0.5 rounded border border-neutral-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
