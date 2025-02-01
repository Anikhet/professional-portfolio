import { InfiniteSliderHoverSpeedportfolio } from "./ui/Marquee-portfolio";
import { InfiniteSliderHoverSpeed } from "./ui/Marquee-skills";
import { TextEffect } from "./ui/text-effect";
import { TextRoll } from "./ui/text-roll";
import { TextScramble } from "./ui/text-scramble";
// import { SplashCursor } from "./ui/splash-cursor";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { File } from "lucide-react";

const Hero = () => {
  return (
    <div className="text-white bg-black grid grid-cols-3 py-20 p-20 text-center  gap-14 overflow-hidden relative ">
      <Card className=" bg-transparent  w-96 row-span-2  border-neutral-700 hover:bg-neutral-900">
        <CardHeader>
          <CardTitle>
            <TextScramble className=" uppercase font-medium text-xl text-center text-white bg-gradient-to-t from-[#ffffff] to-[#b0a2ff] bg-clip-text text-transparent">
              Anikhet Mulky
            </TextScramble>
          </CardTitle>
          <CardDescription>About Me</CardDescription>
        </CardHeader>
        <CardContent>
          <TextEffect className="text-white" per="char" preset="fade">
            Highly driven Software and AI Engineer with proven experience in
            designing large-scale native applications in the cloud. Proficient
            in TypeScript, React, Next.js, Python, Docker, and AWS, with a track
            record of optimizing performance and reliability through data-driven
            solutions.
          </TextEffect>
        </CardContent>
      </Card>

   
        <Card className="row-span-1 bg-transparent flex relative justify-center items-center h-20 w-96 rounded-full overflow-hidden  border-neutral-700 hover:bg-neutral-900">
          <CardHeader>
            <CardTitle className="text-white flex justify-center gap-2 ">
              <InfiniteSliderHoverSpeedportfolio />
            </CardTitle>
          </CardHeader>
          <CardContent className="absolute top-0 left-0 translate-x-[-20%] translate-y-[100%] w-2 h-2 blur-xl z-40 bg-black ">
            {/* <CardContent className="absolute top-0 right-0 translate-x-[20%] translate-y-[100%] w-2 h-2   bg-red-500 "></CardContent> */}
          </CardContent>
        </Card>

        <Card className="row-span-1  bg-transparent flex justify-center items-center  h-20 w-96 rounded-2xl  border-neutral-700 hover:bg-neutral-900">
          <CardHeader>
            <CardTitle className="text-white flex justify-center gap-2">
              Resume <File className="size-4" />
            </CardTitle>
          </CardHeader>
        </Card>
  

      <Card className=" bg-transparent  h-72 w-96  border-neutral-700 hover:bg-neutral-900">
        <CardHeader>
          <CardTitle>
            <TextScramble className=" uppercase font-medium text-xl text-center text-white bg-gradient-to-t from-[#ffffff] to-[#b0a2ff] bg-clip-text text-transparent">
              Anikhet Mulky
            </TextScramble>
          </CardTitle>
          <CardDescription>About Me</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-white text-center">
            Highly driven Software and AI Engineer with proven experience in
            designing large-scale native applications in the cloud. Proficient
            in TypeScript, React, Next.js, Python, Docker, and AWS, with a track
            record of optimizing performance and reliability through data-driven
            solutions.
          </p>
        </CardContent>
      </Card>

      <Card className=" bg-transparent  h-72 w-96  border-neutral-700 hover:bg-neutral-900">
        <CardHeader>
          <CardTitle>
            <TextRoll
              className="text-4xl text-white dark:text-white"
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
              motion-primitives
            </TextRoll>
          </CardTitle>
          <CardDescription>About Me</CardDescription>
        </CardHeader>
        <CardContent className="overflow-hidden">
          <section className="w-full h-20 rounded-full  ">
            <InfiniteSliderHoverSpeed />
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default Hero;
