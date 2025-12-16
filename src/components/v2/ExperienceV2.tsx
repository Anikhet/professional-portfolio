"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function ExperienceV2() {
  return (
    <section className="py-32 px-4 md:px-20 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
        {/* Experience Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-mono text-sm text-neutral-600 block mb-2">{`// work-history.log`}</span>
            <h2 className="text-4xl font-bold text-white flex items-center gap-3">
              <span className="text-cyan-400 font-mono text-2xl">{`>`}</span>
              Experience
              <span className="w-2 h-6 bg-cyan-400 cursor-blink" />
            </h2>
          </motion.div>

          <div className="space-y-8">
            {portfolioData.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Terminal-style card */}
                <div className="bg-neutral-900/50 border border-neutral-800 p-6 hover:border-cyan-500/30 transition-all duration-300">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-800">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-xs text-neutral-600">{job.company.toLowerCase().replace(/\s+/g, "-")}.sh</span>
                  </div>

                  {/* Command */}
                  <div className="font-mono text-sm text-neutral-500 mb-3">
                    <span className="text-green-400">$</span> cd ~/{job.company.toLowerCase().replace(/\s+/g, "-")}
                  </div>

                  {/* Role */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {job.role}
                  </h3>

                  {/* Company with link style */}
                  <p className="text-lg text-purple-400 font-mono mt-1">
                    @{job.company}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 mt-4 font-mono text-xs text-neutral-500">
                    <span className="flex items-center gap-1">
                      <span className="text-cyan-400">#</span> {job.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-cyan-400">@</span> {job.location}
                    </span>
                  </div>
                </div>

                {/* Connection line */}
                {index < portfolioData.experience.length - 1 && (
                  <div className="absolute left-6 top-full w-px h-8 bg-gradient-to-b from-neutral-800 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-mono text-sm text-neutral-600 block mb-2">{`// education.log`}</span>
            <h2 className="text-4xl font-bold text-white flex items-center gap-3">
              <span className="text-purple-400 font-mono text-2xl">{`>`}</span>
              Education
              <span className="w-2 h-6 bg-purple-400 cursor-blink" />
            </h2>
          </motion.div>

          <div className="space-y-8">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Terminal-style card */}
                <div className="bg-neutral-900/50 border border-neutral-800 p-6 hover:border-purple-500/30 transition-all duration-300">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-800">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-xs text-neutral-600">degree.config</span>
                  </div>

                  {/* Degree */}
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {edu.degree}
                  </h3>

                  {/* School */}
                  <p className="text-lg text-cyan-400 font-mono mt-1">
                    {edu.school}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 mt-4 font-mono text-xs text-neutral-500">
                    <span className="flex items-center gap-1">
                      <span className="text-purple-400">#</span> {edu.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-purple-400">@</span> {edu.location}
                    </span>
                  </div>
                </div>

                {/* Connection line */}
                {index < portfolioData.education.length - 1 && (
                  <div className="absolute left-6 top-full w-px h-8 bg-gradient-to-b from-neutral-800 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
