"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SplitText } from "@/components/ui/split-text";
import { MagneticButton } from "@/components/ui/magnetic";
import { Reveal, MaskReveal, LineReveal } from "@/components/ui/reveal";
import { Floating } from "@/components/ui/parallax";

export function HeroV2() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="h-screen w-full flex flex-col justify-center relative overflow-hidden bg-black text-white px-4 md:px-20 tech-grid noise">
      <motion.div style={{ y, opacity }} className="z-10 flex flex-col items-start max-w-7xl w-full">
        {/* Terminal-style role with typing animation */}
        <Reveal delay={0.2} direction="left">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-cyan-400 font-mono text-sm">$</span>
            <span className="font-mono text-sm text-neutral-500">whoami</span>
            <span className="text-cyan-400 font-mono text-sm">→</span>
            <motion.span
              className="font-mono text-lg text-cyan-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              {portfolioData.profile.role}
            </motion.span>
            <motion.span
              className="w-2 h-5 bg-cyan-400"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </Reveal>

        {/* Name with character-by-character reveal */}
        <div className="mb-8 overflow-hidden">
          <SplitText
            text={portfolioData.profile.name}
            as="h1"
            className="text-6xl md:text-[8rem] font-bold tracking-tight leading-[0.9] text-white"
            splitBy="char"
            animation="slideUp"
            delay={0.4}
            staggerChildren={0.04}
            duration={0.6}
          />
        </div>

        {/* Animated line */}
        <LineReveal className="w-32 mb-8" delay={1} />

        {/* Tagline with word reveal */}
        <div className="mb-8">
          <MaskReveal delay={1.2}>
            <p className="text-xl md:text-3xl font-light max-w-3xl leading-relaxed">
              <span className="text-neutral-400">{`{ `}</span>
              <span className="text-cyan-400 font-medium">{portfolioData.profile.tagline}</span>
              <span className="text-neutral-400">{` }`}</span>
            </p>
          </MaskReveal>
        </div>

        {/* Status indicator */}
        <Reveal delay={1.5} direction="up">
          <div className="flex gap-6 items-center mb-8">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="font-mono text-xs text-green-400 uppercase tracking-wider">Available for work</span>
            </div>
            <div className="h-4 w-px bg-neutral-700" />
            <p className="text-neutral-500 text-xs uppercase tracking-widest font-mono">Based in New York</p>
          </div>
        </Reveal>

        {/* Tech stack with staggered animation */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 1.8,
              },
            },
          }}
        >
          {["TypeScript", "React", "Next.js", "AWS", "Python"].map((tech) => (
            <MagneticButton key={tech} className="cursor-default">
              <motion.span
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
                  },
                }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(6, 182, 212, 0.1)" }}
                className="px-4 py-2 text-xs font-mono border border-neutral-800 text-neutral-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors inline-block"
              >
                {tech}
              </motion.span>
            </MagneticButton>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 right-10 flex flex-col items-center gap-2"
      >
        <Floating duration={2} distance={8}>
          <div
            className="w-px h-16"
            style={{ background: "linear-gradient(to bottom, transparent 0%, rgb(34,211,238) 50%, transparent 100%)" }}
          />
        </Floating>
        <motion.p
          className="text-neutral-600 text-xs uppercase tracking-widest font-mono"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.p>
      </motion.div>

      {/* Corner decorations with stagger */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-neutral-800" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-neutral-800" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-neutral-800" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-neutral-800" />
      </motion.div>

      {/* Bottom fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, rgb(9,9,11) 100%)" }} />
    </section>
  );
}
