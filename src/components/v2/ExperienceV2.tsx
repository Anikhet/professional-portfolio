"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { SplitText } from "@/components/ui/split-text";
import { Reveal, LineReveal } from "@/components/ui/reveal";

export function ExperienceV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 md:px-20 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* Section transitions */}
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-20" style={{ background: "linear-gradient(to bottom, rgb(9,9,11) 0%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-20" style={{ background: "linear-gradient(to top, rgb(9,9,11) 0%, transparent 100%)" }} />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
        {/* Experience Column */}
        <div>
          <Reveal direction="up">
            <div className="mb-12">
              <span className="font-mono text-sm text-neutral-600 block mb-2">{`// work-history.log`}</span>
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 font-mono text-2xl">{`>`}</span>
                <SplitText
                  text="Experience"
                  as="h2"
                  className="text-4xl font-bold text-white inline"
                  splitBy="char"
                  animation="fadeUp"
                  staggerChildren={0.03}
                />
                <motion.span
                  className="w-2 h-6 bg-cyan-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </div>
          </Reveal>

          <LineReveal className="mb-8" delay={0.3} />

          <motion.div
            className="space-y-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.4,
                },
              },
            }}
          >
            {portfolioData.experience.map((job, index) => (
              <ExperienceCard key={index} job={job} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Education Column */}
        <div>
          <Reveal direction="up" delay={0.2}>
            <div className="mb-12">
              <span className="font-mono text-sm text-neutral-600 block mb-2">{`// education.log`}</span>
              <div className="flex items-center gap-3">
                <span className="text-purple-400 font-mono text-2xl">{`>`}</span>
                <SplitText
                  text="Education"
                  as="h2"
                  className="text-4xl font-bold text-white inline"
                  splitBy="char"
                  animation="fadeUp"
                  staggerChildren={0.03}
                  delay={0.2}
                />
                <motion.span
                  className="w-2 h-6 bg-purple-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </div>
          </Reveal>

          <LineReveal className="mb-8" delay={0.5} />

          <motion.div
            className="space-y-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.6,
                },
              },
            }}
          >
            {portfolioData.education.map((edu, index) => (
              <EducationCard key={index} edu={edu} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface Job {
  role: string;
  company: string;
  location: string;
  date: string;
}

function ExperienceCard({ job, index }: { job: Job; index: number }) {
  return (
    <motion.div
      className="group relative"
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
    >
      {/* Terminal-style card */}
      <motion.div
        className="bg-neutral-900/50 border border-neutral-800 p-6 transition-all duration-300"
        whileHover={{
          borderColor: "rgba(6, 182, 212, 0.3)",
          y: -4,
          transition: { duration: 0.2 },
        }}
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-800">
          <motion.div
            className="w-3 h-3 rounded-full bg-neutral-700"
            whileHover={{ backgroundColor: "rgb(239, 68, 68)" }}
          />
          <motion.div
            className="w-3 h-3 rounded-full bg-neutral-700"
            whileHover={{ backgroundColor: "rgb(234, 179, 8)" }}
          />
          <motion.div
            className="w-3 h-3 rounded-full bg-neutral-700"
            whileHover={{ backgroundColor: "rgb(34, 197, 94)" }}
          />
          <span className="ml-2 font-mono text-xs text-neutral-600">
            {job.company.toLowerCase().replace(/\s+/g, "-")}.sh
          </span>
        </div>

        {/* Command */}
        <motion.div
          className="font-mono text-sm text-neutral-500 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-green-400">$</span> cd ~/{job.company.toLowerCase().replace(/\s+/g, "-")}
        </motion.div>

        {/* Role */}
        <motion.h3
          className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors"
        >
          {job.role}
        </motion.h3>

        {/* Company */}
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
      </motion.div>

      {/* Connection line */}
      {index < portfolioData.experience.length - 1 && (
        <motion.div
          className="absolute left-6 top-full w-px h-6"
          style={{ background: "linear-gradient(to bottom, rgb(38,38,38) 0%, transparent 100%)" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}

interface Education {
  degree: string;
  school: string;
  location: string;
  date: string;
}

function EducationCard({ edu, index }: { edu: Education; index: number }) {
  return (
    <motion.div
      className="group relative"
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
    >
      {/* Terminal-style card */}
      <motion.div
        className="bg-neutral-900/50 border border-neutral-800 p-6 transition-all duration-300"
        whileHover={{
          borderColor: "rgba(168, 85, 247, 0.3)",
          y: -4,
          transition: { duration: 0.2 },
        }}
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-800">
          <motion.div
            className="w-3 h-3 rounded-full bg-neutral-700"
            whileHover={{ backgroundColor: "rgb(239, 68, 68)" }}
          />
          <motion.div
            className="w-3 h-3 rounded-full bg-neutral-700"
            whileHover={{ backgroundColor: "rgb(234, 179, 8)" }}
          />
          <motion.div
            className="w-3 h-3 rounded-full bg-neutral-700"
            whileHover={{ backgroundColor: "rgb(34, 197, 94)" }}
          />
          <span className="ml-2 font-mono text-xs text-neutral-600">degree.config</span>
        </div>

        {/* Degree */}
        <motion.h3
          className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors"
        >
          {edu.degree}
        </motion.h3>

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
      </motion.div>

      {/* Connection line */}
      {index < portfolioData.education.length - 1 && (
        <motion.div
          className="absolute left-6 top-full w-px h-6"
          style={{ background: "linear-gradient(to bottom, rgb(38,38,38) 0%, transparent 100%)" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}
