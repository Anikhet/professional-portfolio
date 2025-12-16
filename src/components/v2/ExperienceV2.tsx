"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function ExperienceV2() {
  return (
    <section className="py-32 px-4 md:px-20 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Experience Column */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-neutral-200">Experience</h2>
          <div className="space-y-16 border-l border-neutral-800 pl-8 relative">
            {portfolioData.experience.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-neutral-800 border-4 border-zinc-950" />
                <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                <p className="text-xl text-neutral-400 mt-1">{job.company}</p>
                <p className="text-sm text-neutral-600 mt-2 uppercase tracking-widest">{job.date} | {job.location}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-neutral-200">Education</h2>
          <div className="space-y-16 border-l border-neutral-800 pl-8 relative">
            {portfolioData.education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-neutral-800 border-4 border-zinc-950" />
                <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                <p className="text-xl text-neutral-400 mt-1">{edu.school}</p>
                <p className="text-sm text-neutral-600 mt-2 uppercase tracking-widest">{edu.date} | {edu.location}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
