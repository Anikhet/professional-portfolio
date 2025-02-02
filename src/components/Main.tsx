"use client";
// import "locomotive-scroll/bundled/locomotive-scroll.css";
// import LocomotiveScroll from "locomotive-scroll";
import {  motion, useScroll, useSpring } from "framer-motion";
// import { InfiniteSliderHoverSpeed } from "./ui/Marquee";
import Floating from "./Floating";

import { SplashCursor } from "./ui/splash-cursor";

import { SpinningText } from "./ui/spinning-text";
import Hero from "./Hero";
import { Typewriter } from "./ui/typewriter-text";
import { useEffect, useState } from "react";

/* Locomotive scroll instance */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const locomotiveScroll = new LocomotiveScroll();

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5500); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);


 

  return (
    <div className="min-h-[200vh] relative">
      {/* Intro Div */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ y: -1000 }}
        transition={{ duration: 1, delay: 5.5, ease: [0.65, 0, 0.35, 1] }}
        className="min-h-screen card  bg-stone-950 bg- flex items-center justify-center absolute w-full z-50"
      >
        <Typewriter
          text={["Welcome to my Portfolio Page"]}
          speed={100}
          loop={true}
          className="text-3xl text-white font-bold"
        />
      </motion.div>
    {/* bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] */}

      <div className="fixed card   top-0 z-[-2] h-screen w-screen bg-zinc-950 "></div>

      {showContent && (
  <>

  
      <motion.div
        style={{ scaleX }}
        className="top-0 z-[99]  h-1 w-full fixed origin-left bg-gradient-to-r from-black  via-gray-700 to-white"
      ></motion.div>

      <Floating />

      <main className="flex w-full min-h-screen  relative items-center justify-center  ">
        <nav className="top-20 absolute left-20">
          <SpinningText
            radius={5}
            fontSize={0.8}
            className="font-medium leading-none text-white font-c "
          >
            {`Software Engineer • Web Developer • `}
          </SpinningText>
        </nav>

        <Hero />

        <SplashCursor />
      </main>
      </>
)}
    </div>
  );

};

export default App;
