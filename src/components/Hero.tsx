// "use client"

import { InfiniteSliderHoverSpeedportfolio } from "./ui/Marquee-portfolio";
import { InfiniteSliderHoverSpeed } from "./ui/Marquee-skills";
import { TextEffect } from "./ui/text-effect";
import { TextRoll } from "./ui/text-roll";
import { TextScramble } from "./ui/text-scramble";
import GridLayout from "react-grid-layout";

// import { SplashCursor } from "./ui/splash-cursor";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { File, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const layout = [
    { i: "a", x: 2, y: 0, w: 4, h: 7 },
    { i: "b", x: 6, y: 0, w: 4, h: 2 }, // Portfolio
    { i: "c", x: 6, y: 2, w: 4, h: 2 }, // Resume
    { i: "e", x: 2, y: 7, w: 4, h: 4 }, // Tech Stack
    { i: "d", x: 6, y: 4, w: 4, h: 5 }, // Experience
    { i: "f", x: 6, y: 12, w: 4, h: 6 }, // Education
    { i: "g", x: 2, y:11, w: 4, h: 3 }, // Experience #2
    // { i: "h", x: 2, y: 10, w: 4, h: 5 }, // Projects
    // { i: "i", x: 6, y: 10, w: 4, h: 5 }, // Skills
    // { i: "j", x: 4, y: 12, w: 4, h: 3 }, // Contact
  ];
  return (
    <div className="text-white w-full h-1/2 font-custom1  ">
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={40}
        width={window.innerWidth}
        autoSize={true}
        isDraggable={false}
        isResizable={false}
      >
        <Card
          key="a"
          className="bg-transparent bg-zinc-900 w-96 border-neutral-700 hover:bg-neutral-900 p-4"
        >
          <CardHeader>
            <CardTitle className="flex justify-center items-center gap-x-2">
              {/* Fixed width div to prevent movement */}
              <div className="w-24 h-24 flex-shrink-0">
                <Image
                  src={"/avatar.jpg"}
                  alt="Anikhet Mulky"
                  width={100}
                  height={200}
                  className="w-24 h-24 object-cover rounded-full"
                />
              </div>

              {/* Prevent text expansion from shifting the image */}
              <div className="w-full text-center">
                <TextScramble
                  className="inline-flex animate-background-shine 
            bg-[linear-gradient(110deg,#d1d5db,45%,#64748b,55%,#d1d5db)] 
            bg-[length:350%_100%] bg-clip-text 
            text-3xl text-transparent uppercase font-extrabold tracking-wide font-htags"
                >
                  Anikhet Mulky
                </TextScramble>
              </div>
            </CardTitle>
            <CardDescription className="text-center">About Me</CardDescription>
          </CardHeader>

          <CardContent>
            <TextEffect
              className="text-white font-semibold font-ptags"
              per="char"
              preset="fade"
            >
              Highly driven Software and AI Engineer with a Master&apos;s in
              Computer Science from RIT. Proficient in TypeScript, React,
              Next.js, Python, Docker, and AWS, with a track record of
              optimizing performance and reliability and building scalable web
              applications.
            </TextEffect>
          </CardContent>
        </Card>

        <Card
          key="b"
          className="bg-transparent flex relative justify-center items-center h-20 w-96 rounded-2xl overflow-hidden bg-zinc-900  border-neutral-700 hover:bg-neutral-900"
        >
          <CardHeader>
            <CardTitle className="text-white flex justify-center gap-2 ">
              <InfiniteSliderHoverSpeedportfolio />
            </CardTitle>
          </CardHeader>
          <CardContent className="absolute top-0 left-0 translate-x-[-20%] translate-y-[100%] w-2 h-2 blur-xl z-40 bg-black ">
            {/* <CardContent className="absolute top-0 right-0 translate-x-[20%] translate-y-[100%] w-2 h-2   bg-red-500 "></CardContent> */}
          </CardContent>
        </Card>

        <Card
          key="c"
          className=" bg-transparent flex justify-center items-center  h-20 w-96 rounded-2xl bg-zinc-900  border-neutral-700 hover:bg-neutral-900"
        >
          <CardHeader>
            <CardTitle className="text-white flex justify-center gap-2 bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
              Resume <File className="size-4" />
            </CardTitle>
          </CardHeader>
        </Card>

        <Card
          key="d"
          className=" bg-transparent flex   h-72 w-96 bg-zinc-900  border-neutral-700 hover:bg-neutral-900"
        >
          <CardHeader>
            <CardTitle>
              <TextScramble className="text-xl font-htags bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-transparent">
                Currently Working
              </TextScramble>
            </CardTitle>
            <CardDescription className=" text-white/60 font-ptags font-thin w-full h-full text-center text-3xl flex justify-center items-center">
    
              <TextEffect
                className=" font-semibold font-ptags"
                per="char"
                preset="fade"
              >
            
                Software & AI Engineering Intern at Peeker.ai
              </TextEffect>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="">
              <br />
            </p>
          </CardContent>
        </Card>

        <Card
          key="e"
          className=" bg-transparent  h-72 w-96 bg-zinc-900 border-neutral-700 hover:bg-neutral-900"
        >
          <CardHeader>
            <CardTitle>
              <TextRoll
                className="text-4xl text-white bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-transparent"
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
            <section className="w-full h-20 rounded-md  ">
              <InfiniteSliderHoverSpeed />
            </section>
          </CardContent>
        </Card>

        <Card
          key="f"
          className=" bg-transparent flex   h-72 w-96 bg-zinc-900  border-neutral-700 hover:bg-neutral-900"
        >
          <CardHeader>
            <CardTitle>
              <TextScramble className="text-4xl bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-transparent">
                Education
              </TextScramble>
            </CardTitle>
            <CardDescription className="text-white w-full h-full font-semibold text-center text-3xl flex justify-center items-center">
     
              <TextEffect
                className="text-white font-semibold font-ptags"
                per="char"
                preset="fade"
              >
           
                Software & AI Engineering Intern at Peeker.ai
              </TextEffect>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="">
              <br />
            </p>
          </CardContent>
        </Card>


              {/* Contact Info */}
              <Card key="g" className="bg-transparent h-60 w-96 bg-zinc-900 border-neutral-700 hover:bg-neutral-900">
          <CardHeader>
            <CardTitle>
              <TextScramble className="text-4xl bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-transparent">
                Contact
              </TextScramble>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-6">
            <a href="mailto:am9559@rit.edu"><Mail size={30} /></a>
            <a href="https://linkedin.com/in/anikhet-mulky" target="_blank"><Linkedin size={30} /></a>
            <a href="https://github.com/Anikhet" target="_blank"><Github size={30} /></a>
          </CardContent>
        </Card>


      </GridLayout>
    </div>
  );
};

export default Hero;
