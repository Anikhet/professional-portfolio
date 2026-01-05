"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  splitBy?: "char" | "word";
  animation?: "fadeUp" | "fadeIn" | "slideUp" | "blur" | "scale";
}

const animations: Record<string, { hidden: Variants["hidden"]; visible: Variants["visible"] }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 40, rotateX: -90 },
    visible: { opacity: 1, y: 0, rotateX: 0 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function SplitText({
  text,
  className = "",
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.03,
  as: Component = "p",
  splitBy = "char",
  animation = "fadeUp",
}: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const selectedAnimation = animations[animation];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: selectedAnimation.hidden,
    visible: {
      ...selectedAnimation.visible,
      transition: {
        duration,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const renderContent = () => {
    if (splitBy === "word") {
      const words = text.split(" ");
      return words.map((word, i) => (
        <motion.span
          key={i}
          variants={itemVariants}
          className="inline-block"
          style={{ marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ));
    }

    // Split by character, preserving words
    const words = text.split(" ");
    return words.map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block whitespace-nowrap" style={{ marginRight: "0.25em" }}>
        {word.split("").map((char, charIndex) => (
          <motion.span
            key={`${wordIndex}-${charIndex}`}
            variants={itemVariants}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </span>
    ));
  };

  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {renderContent()}
    </MotionComponent>
  );
}
