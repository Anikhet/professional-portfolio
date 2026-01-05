"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitText } from "@/components/ui/split-text";
import { Reveal, LineReveal, StaggerReveal, StaggerItem } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";

export function AboutSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={container} className="min-h-screen flex items-center justify-center px-4 md:px-20 bg-zinc-950 py-32 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 dot-grid opacity-50" />

      {/* Section transitions */}
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgb(9,9,11) 0%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgb(9,9,11) 0%, transparent 100%)" }} />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 bg-cyan-400/30 rounded-full"
        animate={{ y: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400/20 rounded-full"
        animate={{ y: [10, -10, 10], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div style={{ y }} className="max-w-5xl relative z-10">
        {/* Code comment header */}
        <Reveal delay={0} direction="left">
          <div className="font-mono text-sm text-neutral-600 mb-4">
            {`// about.tsx`}
          </div>
        </Reveal>

        {/* Title with split text animation */}
        <div className="mb-12">
          <motion.span
            className="text-purple-400 font-mono text-3xl md:text-4xl inline-block mr-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            const
          </motion.span>
          <SplitText
            text="aboutMe"
            as="span"
            className="text-4xl md:text-6xl font-bold text-cyan-400 inline"
            splitBy="char"
            animation="fadeUp"
            delay={0.2}
            staggerChildren={0.05}
          />
          <motion.span
            className="text-neutral-500 font-mono text-3xl md:text-4xl ml-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            = {`{`}
          </motion.span>
        </div>

        <div className="space-y-10 pl-4 md:pl-8 border-l-2 border-neutral-800">
          {/* Background */}
          <Reveal delay={0.1} direction="left">
            <div className="group">
              <motion.span
                className="font-mono text-cyan-400 text-sm block mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                background:
              </motion.span>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed pl-4">
                Software Engineer with a{" "}
                <motion.span
                  className="text-white font-medium border-b border-cyan-500/50 pb-0.5 inline-block"
                  whileHover={{ scale: 1.02, borderColor: "rgb(6, 182, 212)" }}
                >
                  startup hustle mindset
                </motion.span>,
                currently building full-stack products with{" "}
                <span className="text-cyan-400 font-mono">AI at the core</span>.
                From migrating frontends to Next.js and integrating LLM APIs, to scaling backend architectures —
                I enjoy solving tough problems and shipping fast, reliable code.
              </p>
            </div>
          </Reveal>

          {/* Experience */}
          <Reveal delay={0.2} direction="left">
            <div className="group">
              <motion.span
                className="font-mono text-cyan-400 text-sm block mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                experience:
              </motion.span>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed pl-4">
                My experience spans{" "}
                <span className="text-purple-400">scrappy startups</span> to{" "}
                <span className="text-purple-400">structured engineering teams</span>,
                with a focus on modern web tech (
                <code className="text-green-400 font-mono text-base">Next.js</code>,{" "}
                <code className="text-green-400 font-mono text-base">TypeScript</code>,{" "}
                <code className="text-green-400 font-mono text-base">Go</code>),
                automation, and cloud-native development (
                <code className="text-green-400 font-mono text-base">AWS</code>).
              </p>
            </div>
          </Reveal>

          {/* Current */}
          <Reveal delay={0.3} direction="left">
            <div className="group">
              <motion.span
                className="font-mono text-cyan-400 text-sm block mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                current:
              </motion.span>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed pl-4">
                Pursuing my{" "}
                <span className="text-white font-medium">Master&apos;s in Computer Science at RIT</span>,
                looking to join a team where I can push technical boundaries and learn from strong builders.
              </p>
            </div>
          </Reveal>

          {/* Interests */}
          <Reveal delay={0.4} direction="left">
            <div className="group">
              <motion.span
                className="font-mono text-cyan-400 text-sm block mb-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                interests:
              </motion.span>
              <StaggerReveal className="flex flex-wrap gap-3 pl-4" stagger={0.08} delay={0.5}>
                {["AI/ML", "Product", "Video Games", "FL Studio", "Visual Astronomy"].map((interest) => (
                  <StaggerItem key={interest}>
                    <Magnetic strength={0.2}>
                      <motion.span
                        className="px-4 py-2 text-sm font-mono bg-neutral-900 border border-neutral-800 text-neutral-400 cursor-default inline-block"
                        whileHover={{
                          borderColor: "rgba(168, 85, 247, 0.5)",
                          color: "rgb(192, 132, 252)",
                          scale: 1.05,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        &quot;{interest}&quot;
                      </motion.span>
                    </Magnetic>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          </Reveal>
        </div>

        {/* Closing brace with line reveal */}
        <div className="mt-10 flex items-center gap-4">
          <LineReveal className="flex-1 max-w-[100px]" delay={0.8} />
          <motion.span
            className="text-neutral-500 font-mono text-3xl md:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            {`};`}
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
