"use client";

import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { ArrowUpRight, Briefcase, GraduationCap, Code2, Terminal, Telescope, Music, Gamepad2, Trophy } from "lucide-react";

export default function Home() {
  const { profile, social, experience, projects, education, hobbies } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Telescope": return <Telescope className="w-4 h-4" />;
      case "Music": return <Music className="w-4 h-4" />;
      case "Gamepad2": return <Gamepad2 className="w-4 h-4" />;
      case "Trophy": return <Trophy className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <main className="min-h-screen text-zinc-900 selection:bg-cyan-500/30 p-4 md:p-8 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <BentoGrid className="grid-cols-1 md:grid-cols-4 md:grid-rows-[auto_auto_auto]">

          {/* 1. HERO - Spans 2 cols, 2 rows (Top Left) */}
          <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center gap-4 mb-6">
                 <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-black/5">
                    <Image src={profile.avatar} alt={profile.name} fill className="object-cover" />
                 </div>
                 <div>
                    <h1 className="font-serif text-3xl text-zinc-900">{profile.name}</h1>
                    <p className="text-zinc-500 text-sm font-mono bg-zinc-100 inline-block px-2 py-0.5 rounded mt-1 border border-black/5">{profile.role}</p>
                 </div>
              </div>
              <p className="text-zinc-900 font-medium text-lg mb-2">
                {profile.tagline}
              </p>
              <p className="text-zinc-600 leading-relaxed text-base font-light mb-6">
                {profile.bio.split("\n")[0]}
              </p>
            </div>
            
            <div>
              <div className="flex flex-wrap gap-3 mb-6">
                {social.map((link) => {
                   const Icon = link.icon;
                   return (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-50 hover:bg-zinc-100 rounded-full text-sm text-zinc-600 transition-colors border border-black/5 hover:border-black/10"
                    >
                      <Icon className="w-4 h-4" />
                      {link.name}
                    </Link>
                   )
                })}
              </div>

              <div className="pt-6 border-t border-black/5">
                 <h3 className="text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                   Off Duty
                 </h3>
                 <div className="flex flex-wrap gap-4">
                  {hobbies?.map((hobby) => (
                    <div key={hobby.name} className="flex items-center gap-2 text-sm text-zinc-600">
                      <div className="text-zinc-400">
                        {getIcon(hobby.icon)}
                      </div>
                      <span>{hobby.name}</span>
                    </div>
                  ))}
                 </div>
              </div>
            </div>
          </BentoCard>

          {/* 2. EXPERIENCE - Spans 2 cols, 2 rows (Top Right) */}
          <BentoCard title="Work Experience" icon={<Briefcase className="w-4 h-4" />} className="md:col-span-2 md:row-span-2 overflow-y-auto">
             <div className="space-y-6">
               {experience.map((job) => (
                 <div key={job.company} className="relative pl-4 border-l border-zinc-200 hover:border-zinc-400 transition-colors">
                    <div className="flex justify-between items-baseline mb-1">
                      {/* Check if URL exists for company */}
                      {job.url ? (
                         <Link href={job.url} target="_blank" className="text-zinc-900 font-medium hover:text-cyan-600 transition-colors flex items-center gap-1 group/link">
                           {job.company}
                           <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                         </Link>
                      ) : (
                         <h3 className="text-zinc-900 font-medium">{job.company}</h3>
                      )}
                      <span className="text-xs font-mono text-zinc-500">{job.date}</span>
                    </div>
                    <p className="text-sm text-zinc-600 mb-1">{job.role}</p>
                    <p className="text-xs text-zinc-400">{job.location}</p>
                 </div>
               ))}
               
               <div className="pt-4 mt-4 border-t border-black/5">
                 <h4 className="text-xs font-mono text-zinc-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <GraduationCap className="w-3 h-3" /> Education
                 </h4>
                 {education.map((edu) => (
                    <div key={edu.school} className="mb-4 last:mb-0">
                       <div className="flex justify-between items-baseline">
                         <span className="text-sm text-zinc-700">{edu.school}</span>
                         <span className="text-xs font-mono text-zinc-500">{edu.date}</span>
                       </div>
                       <p className="text-xs text-zinc-500">{edu.degree}</p>
                    </div>
                 ))}
               </div>
             </div>
          </BentoCard>

          {/* 3. TECH STACK - Spans 1 col */}
          <BentoCard title="Tech Stack" icon={<Terminal className="w-4 h-4" />} className="md:col-span-1 min-h-[200px]">
             <div className="flex flex-wrap gap-2">
               {portfolioData.skills.slice(0, 15).map(skill => (
                 <span key={skill} className="px-2 py-1 text-xs font-mono bg-zinc-50 text-zinc-600 rounded border border-black/5">
                   {skill}
                 </span>
               ))}
             </div>
          </BentoCard>

          {/* 4. PROJECTS - Spans 3 cols */}
          <BentoCard title="Selected Projects and Products I've worked on" icon={<Code2 className="w-4 h-4" />} className="md:col-span-3">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {projects.slice(0, 3).map((project) => (
                 <Link 
                    key={project.title} 
                    href={project.link}
                    target="_blank"
                    className="group/item block bg-zinc-50 p-4 rounded-xl border border-black/5 hover:border-black/10 transition-colors"
                 >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-medium text-zinc-900 group-hover/item:text-cyan-600 transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover/item:text-cyan-600 transition-colors" />
                    </div>
                    <p className="text-xs text-zinc-500 line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    <div className="flex gap-1 flex-wrap">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] px-1 bg-white rounded text-zinc-500 border border-black/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                 </Link>
               ))}
             </div>
          </BentoCard>

        </BentoGrid>
      </div>

    
    </main>
  );
}