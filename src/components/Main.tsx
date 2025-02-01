"use client";
// import "locomotive-scroll/bundled/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";
import { motion, useScroll, useSpring } from "framer-motion";
// import { InfiniteSliderHoverSpeed } from "./ui/Marquee";
import Floating from "./Floating";

import { SplashCursor } from "./ui/splash-cursor";

import { SpinningText } from "./ui/spinning-text";
import Hero from "./Hero";

/* Locomotive scroll instance */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const locomotiveScroll = new LocomotiveScroll();

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return (
    <div className="min-h-[200vh] ">
      {/* <div className="fixed card   top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <motion.div
        style={{ scaleX }}
        className="top-0 z-[99]  h-1 w-full fixed origin-left bg-gradient-to-r from-black  via-gray-700 to-white"
      ></motion.div>

      <Floating />
      <main className="flex w-full bg-red-300 relative flex-col items-center gap-10 justify-center min-h-screen py-2">
        <nav className="top-20 absolute left-20">
          <SpinningText
            radius={5}
            fontSize={0.8}
            className="font-medium leading-none text-white  "
          >
            {`Software Engineer • Web Developer • `}
          </SpinningText>
        </nav>

        <Hero />

        <SplashCursor />
      </main>
    </div>
  );
};

export default App;
