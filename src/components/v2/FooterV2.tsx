"use client";

import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SplitText } from "@/components/ui/split-text";
import { MagneticButton, Magnetic } from "@/components/ui/magnetic";
import { Reveal, LineReveal } from "@/components/ui/reveal";

export function FooterV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="h-screen bg-black flex flex-col justify-between p-8 md:p-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* Top transition */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20" style={{ background: "linear-gradient(to bottom, rgb(24,24,27) 0%, transparent 100%)" }} />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10">
        {/* Code comment */}
        <Reveal delay={0}>
          <p className="font-mono text-sm text-neutral-600 mb-4">
            {`// let's build something together`}
          </p>
        </Reveal>

        {/* Terminal prompt */}
        <Reveal delay={0.1} direction="up">
          <div className="flex items-center gap-2 mb-8">
            <motion.span
              className="text-green-400 font-mono"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              $
            </motion.span>
            <span className="font-mono text-neutral-500">contact</span>
            <span className="text-cyan-400 font-mono">--init</span>
            <motion.span
              className="w-2 h-4 bg-green-400"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </Reveal>

        {/* Main CTA with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <MagneticButton href="mailto:animulky@gmail.com" className="group relative inline-block">
            <SplitText
              text="Let's Talk"
              as="span"
              className="text-5xl md:text-8xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
              splitBy="char"
              animation="slideUp"
              delay={0.4}
              staggerChildren={0.05}
            />
            {/* Animated underline */}
            <motion.span
              className="absolute -bottom-2 left-0 h-1 bg-cyan-400"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </MagneticButton>
        </motion.div>

        {/* Email display */}
        <Reveal delay={0.6} direction="up">
          <p className="font-mono text-sm text-neutral-600 mt-8 flex items-center gap-2">
            <span className="text-cyan-400">{`>`}</span>
            <motion.span
              whileHover={{ color: "rgb(6, 182, 212)" }}
              transition={{ duration: 0.2 }}
            >
              animulky@gmail.com
            </motion.span>
          </p>
        </Reveal>

        <LineReveal className="w-32 mt-8" delay={0.8} />
      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 pt-8">
        {/* Social links with stagger */}
        <motion.div
          className="flex gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 1,
              },
            },
          }}
        >
          {portfolioData.social.map((social, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
                },
              }}
            >
              <Magnetic strength={0.3}>
                <Link
                  href={social.url}
                  target="_blank"
                  className="group flex items-center gap-2 text-neutral-500 hover:text-cyan-400 transition-colors font-mono text-sm"
                >
                  <motion.span
                    className="text-neutral-700 group-hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    [
                  </motion.span>
                  <span className="uppercase tracking-wider">{social.name}</span>
                  <motion.span
                    className="text-neutral-700 group-hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    ]
                  </motion.span>
                </Link>
              </Magnetic>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright */}
        <Reveal delay={1.2} direction="up">
          <div className="flex items-center gap-4 font-mono text-xs text-neutral-700">
            <span className="text-neutral-600">{`/*`}</span>
            <span>© {new Date().getFullYear()} {portfolioData.profile.name}</span>
            <span className="text-neutral-600">{`*/`}</span>
          </div>
        </Reveal>
      </div>

      {/* Decorative corner elements with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="absolute top-8 left-8 w-20 h-20 border-l border-t border-neutral-800"
          initial={{ scaleX: 0, scaleY: 0 }}
          animate={isInView ? { scaleX: 1, scaleY: 1 } : {}}
          transition={{ delay: 1.6, duration: 0.3 }}
          style={{ transformOrigin: "top left" }}
        />
        <motion.div
          className="absolute top-8 right-8 w-20 h-20 border-r border-t border-neutral-800"
          initial={{ scaleX: 0, scaleY: 0 }}
          animate={isInView ? { scaleX: 1, scaleY: 1 } : {}}
          transition={{ delay: 1.7, duration: 0.3 }}
          style={{ transformOrigin: "top right" }}
        />
        <motion.div
          className="absolute bottom-8 left-8 w-20 h-20 border-l border-b border-neutral-800"
          initial={{ scaleX: 0, scaleY: 0 }}
          animate={isInView ? { scaleX: 1, scaleY: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.3 }}
          style={{ transformOrigin: "bottom left" }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-20 h-20 border-r border-b border-neutral-800"
          initial={{ scaleX: 0, scaleY: 0 }}
          animate={isInView ? { scaleX: 1, scaleY: 1 } : {}}
          transition={{ delay: 1.9, duration: 0.3 }}
          style={{ transformOrigin: "bottom right" }}
        />
      </motion.div>

      {/* ASCII art decoration */}
      <motion.div
        className="absolute bottom-1/3 left-8 font-mono text-[8px] text-neutral-800 leading-none hidden md:block"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <pre>{`
  ██████╗ ██████╗ ██████╗ ███████╗
 ██╔════╝██╔═══██╗██╔══██╗██╔════╝
 ██║     ██║   ██║██║  ██║█████╗
 ██║     ██║   ██║██║  ██║██╔══╝
 ╚██████╗╚██████╔╝██████╔╝███████╗
  ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
        `}</pre>
      </motion.div>
    </footer>
  );
}
