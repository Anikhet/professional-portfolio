"use client";

// import React, { useState, useEffect } from "react";
// If you're using the default import:
// import GridLayout from "react-grid-layout";

// For responsive layout, use:
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);

import { InfiniteSliderHoverSpeedportfolio } from "./ui/Marquee-portfolio";
import { InfiniteSliderHoverSpeed } from "./ui/Marquee-skills";
import { TextEffect } from "./ui/text-effect";
import { TextRoll } from "./ui/text-roll";
import { TextScramble } from "./ui/text-scramble";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { File, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  /**
   * Define layouts for different breakpoints.
   * Each key in `layouts` (lg, md, sm, xs, xxs) is an array
   * of layout items describing position/size for each card.
   */
  const layouts = {
    lg: [
      { i: "a", x: 2, y: 0, w: 4, h: 7 },
      { i: "b", x: 6, y: 0, w: 4, h: 2 }, // Portfolio
      { i: "c", x: 6, y: 2, w: 4, h: 2 }, // Resume
      { i: "e", x: 2, y: 7, w: 4, h: 4 }, // Tech Stack
      { i: "d", x: 6, y: 4, w: 4, h: 5 }, // Experience
      { i: "f", x: 6, y: 12, w: 4, h: 6 }, // Education
      { i: "g", x: 2, y: 11, w: 4, h: 3 }, // Contact
    ],
    md: [
      // Stacked for medium screens
      { i: "a", x: 0, y: 0, w: 10, h: 7 },
      { i: "b", x: 0, y: 7, w: 10, h: 2 },
      { i: "c", x: 0, y: 9, w: 10, h: 2 },
      { i: "e", x: 0, y: 11, w: 10, h: 4 },
      { i: "d", x: 0, y: 15, w: 10, h: 5 },
      { i: "f", x: 0, y: 20, w: 10, h: 6 },
      { i: "g", x: 0, y: 26, w: 10, h: 3 },
    ],
    sm: [
      // Stacked for small screens
      { i: "a", x: 0, y: 0, w: 6, h: 9 },
      { i: "b", x: 0, y: 7, w: 6, h: 2 },
      { i: "c", x: 0, y: 9, w: 6, h: 2 },
      { i: "e", x: 0, y: 11, w: 6, h: 4 },
      { i: "d", x: 0, y: 15, w: 6, h: 5 },
      { i: "f", x: 0, y: 20, w: 6, h: 6 },
      { i: "g", x: 0, y: 26, w: 6, h: 3 },
    ],
    xs: [
      // Extra-small screens
      { i: "a", x: 0, y: 0, w: 4, h: 7 },
      { i: "b", x: 0, y: 7, w: 4, h: 2 },
      { i: "c", x: 0, y: 9, w: 4, h: 2 },
      { i: "e", x: 0, y: 11, w: 4, h: 4 },
      { i: "d", x: 0, y: 15, w: 4, h: 5 },
      { i: "f", x: 0, y: 20, w: 4, h: 6 },
      { i: "g", x: 0, y: 26, w: 4, h: 3 },
    ],
    xxs: [
      // Very small mobile
      { i: "a", x: 0, y: 0, w: 2, h: 8 },
      { i: "b", x: 0, y: 8, w: 2, h: 2 },
      { i: "c", x: 0, y: 10, w: 2, h: 2 },
      { i: "e", x: 0, y: 12, w: 2, h: 4 },
      { i: "d", x: 0, y: 16, w: 2, h: 5 },
      { i: "f", x: 0, y: 20, w: 2, h: 6 },
      { i: "g", x: 0, y: 26, w: 2, h: 3 },
    ],
  };

  return (
    <div className="text-white w-full h-1/2 ">
      {/* 
        Use the ResponsiveGridLayout. It automatically applies
        layouts based on screen size. 
      */}
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 992, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={40}
        isDraggable={false}
        isResizable={false}
        autoSize={true}
      >
        {/* Card: Profile/About */}
        <Card
          key="a"
          className="bg-transparent bg-zinc-900 w-96 border-neutral-700 hover:bg-neutral-900 p-4"
        >
          <CardHeader>
            <CardTitle className="flex justify-center items-center">
              {/* Avatar */}
              <div className="w-28 h-28 flex-shrink-0 rounded-full mr-4">
                <Image
                  src={"/avatar1.jpg"}
                  alt="Anikhet Mulky"
                  width={400}
                  height={400}
                  className="h-28 object-cover rounded-full"
                />
              </div>
              {/* Name with text scramble */}
              <div className="w-full text-center">
              <TextScramble
  className="
    inline-flex
    font-ptags
    text-4xl
    bg-[linear-gradient(110deg,#ffffff,45%,#d4d4d4,55%,#ffffff)]
    bg-clip-text 
    text-transparent 
    animate-text-pulse
  "
>
  Anikhet Mulky
</TextScramble>
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <TextEffect
              className="text-white font-semibold font-"
              per="char"
              preset="fade"
            >
              Highly driven Software and AI Engineer with a Master&apos;s in
              Computer Science from RIT. Proficient in TypeScript, React,
              Next.js, Python, Docker, and AWS, with a track record of
              optimizing performance and reliability to build scalable web
              applications.
            </TextEffect>
          </CardContent>
        </Card>

        {/* Card: Portfolio */}
        <Card
          key="b"
          className="bg-transparent flex relative justify-center items-center h-20 w-96 rounded-2xl overflow-hidden bg-zinc-900 border-neutral-700 hover:bg-neutral-900"
        >
          <CardHeader>
            <CardTitle className="text-white flex justify-center gap-2">
              <InfiniteSliderHoverSpeedportfolio />
            </CardTitle>
          </CardHeader>
        </Card>

        {/* Card: Resume */}
        <Card
          key="c"
          className="bg-transparent flex justify-center items-center h-20 w-96 rounded-2xl bg-zinc-900 border-neutral-700 hover:bg-neutral-900"
        >
          <CardHeader>
            <CardTitle
              className="
                text-white flex justify-center gap-2 
             font-htags
              "
            >
              Resume <File className="size-4" />
            </CardTitle>
          </CardHeader>
        </Card>

        {/* Card: Experience - Currently Working */}
        <Card
          key=""
          className="bg-transparent flex h-72 w-96 bg-zinc-900 border-neutral-700 hover:bg-neutral-900"
        >
          <CardHeader>
            <CardTitle>
              <TextScramble
                className="
                  text-xl 
                  bg-gradient-to-t from-[#a78bfa] to-[#38bdf8]
                  bg-clip-text text-transparent
                "
              >
                Currently Working
              </TextScramble>
            </CardTitle>
            <CardDescription className=" text-white/60 font- font-thin w-full h-full text-center text-3xl flex justify-center items-center">
              <TextEffect
                className="font-semibold font-"
                per="char"
                preset="fade"
              >
                Software & AI Engineering Intern at Peeker.ai
              </TextEffect>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className=""></p>
          </CardContent>
        </Card>




        <Card
          key="d"
          className="bg-zinc-900 border border-neutral-700 p-4 w-96 
             hover:bg-neutral-900 transition-colors duration-300"
        >
          {/* Header */}
          <CardHeader>
            <CardTitle className="text-lg font-bold  font-htags
            text-white
             
                ">
              Experience
            </CardTitle>
          </CardHeader>

          {/* Content */}
          <CardContent>
            {/* Graduate Degree */}
            <div className="mb-4">
              <h4 className="text-base font-semibold text-white">
                Software & AI Engineer @ Peeker.AI
              </h4>
              <p className="text-sm text-neutral-400">
                New York
              </p>
             
            </div>

            {/* Undergraduate Degree */}
            <div>
              <h4 className="text-base font-semibold text-white">
               Software Intern
              </h4>
              <p className="text-sm text-neutral-400">
               Bhabha Atomic Research Centre
              </p>
      
            </div>
          </CardContent>
        </Card>





        {/* Card: Tech Stack */}
        <Card
          key="e"
          className="bg-transparent h-72 w-96 bg-zinc-900 border-neutral-700 hover:bg-neutral-900 relative overflow-hidden"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-20 pointer-events-none" />
          {/* Animated Blur Glow */}
          <div className="absolute top-[-20%] left-[-20%] w-40 h-40 bg-blue-400 blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-32 h-32 bg-purple-500 blur-2xl opacity-20 animate-pulse delay-200" />

          <CardHeader>
            <CardTitle>
              <TextRoll
                className="
                  text-white 
                  text-xl font-htags
                  bg-gradient-to-t from-[#a78bfa] to-[#38bdf8]
                  bg-clip-text text-transparent
                "
                variants={{
                  enter: {
                    initial: { rotateX: 0, filter: "blur(0px)" },
                    animate: { rotateX: 90, filter: "blur(2px)" },
                  },
                  exit: {
                    initial: { rotateX: 90, filter: "blur(2px)" },
                    animate: { rotateX: 0, filter: "blur(0px)" },
                  },
                }}
              >
                Tech Stack
              </TextRoll>
            </CardTitle>
            <CardDescription>About Me</CardDescription>
          </CardHeader>
          <CardContent className="overflow-hidden">
            <section className="w-full h-20 rounded-md">
              <InfiniteSliderHoverSpeed />
            </section>
          </CardContent>
        </Card>

        {/* Card: Education */}
        <Card
          key="f"
          className="bg-zinc-900 border border-neutral-700 p-4 w-96 
             hover:bg-neutral-900 transition-colors duration-300"
        >
          {/* Header */}
          <CardHeader>
            <CardTitle className="text-lg font-bold font-htags text-white">
              Education
            </CardTitle>
          </CardHeader>

          {/* Content */}
          <CardContent>
            {/* Graduate Degree */}
            <div className="mb-4">
              <h4 className="text-base font-semibold text-white">
                Master of Science in Computer Science
              </h4>
              <p className="text-sm text-neutral-400">
                Rochester Institute of Technology, Rochester, NY
              </p>
              <p className="text-sm text-neutral-500">
                Expected Graduation: May 2025
              </p>
            </div>

            {/* Undergraduate Degree */}
            <div>
              <h4 className="text-base font-semibold text-white">
                Bachelor of Technology in Computer Science
              </h4>
              <p className="text-sm text-neutral-400">
                SIES Grad School of Technology, Mumbai University
              </p>
              <p className="text-sm text-neutral-500">Graduated in 2022</p>
            </div>
          </CardContent>
        </Card>

        {/* Card: Contact */}
        <Card
          key="g"
          className="bg-transparent h-60 w-96 bg-zinc-900 border-neutral-700 hover:bg-neutral-900"
        >
          <CardHeader>
            <CardTitle>
              <TextScramble
                className="
                  text-xl
                  text-white
                "
              >
                Contact
              </TextScramble>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-6 text-white">
            <a href="mailto:am9559@rit.edu" aria-label="Email">
              <Mail size={30} />
            </a>
            <a
              href="https://linkedin.com/in/anikhet-mulky"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={30} />
            </a>
            <a
              href="https://github.com/Anikhet"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={30} />
            </a>
          </CardContent>
        </Card>
      </ResponsiveGridLayout>
    </div>
  );
}
