"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import Hero from "@/components/hero";
import Services from "@/components/services";
import Team from "@/components/team";
import AboutUs from "@/components/aboutUs";
import Reviews from "@/components/reviews";

export default function Body() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div className="bg-white relative">
      {/* Image Decorations */}
      <div
        className="absolute -top-36 left-0 grid grid-cols-2 grid-rows-1 justify-between w-full overflow-x-clip  mt-[150px] gap-[550px] pointer-events-none"
        ref={ref}
      >
        <motion.div
          className="flex flex-col items-end justify-between -mt-5 z-[13]"
          style={{ y: textY }}
        >
          <div className="flex flex-col items-center gap-12">
            <motion.div className="relative w-[245px] h-[179px] rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/img/Rectangle 95.png"
                alt=""
                loading="eager"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 60vw, (max-width: 1024px) 30vw, 245px"
              />
            </motion.div>
            <motion.div className="relative w-[340px] h-[229px] rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/img/Rectangle 94.png"
                alt=""
                loading="eager"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 340px"
              />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col items-start justify-between ml-[0px] z-20"
          style={{ y: backgroundY }}
        >
          <div className="flex flex-col items-center gap-20">
            <motion.div className="relative w-[298px] h-[190px] rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/img/Rectangle 92.png"
                alt=""
                loading="eager"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 70vw, (max-width: 1024px) 35vw, 298px"
              />
            </motion.div>
            <motion.div className="relative w-[291px] h-[281px] rounded-2xl shadow-xl ml-[60px] overflow-hidden">
              <Image
                src="/img/Frame 1000004307.png"
                alt=""
                loading="eager"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 68vw, (max-width: 1024px) 34vw, 291px"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* SVG Decorations */}
      <div className="relative top-0 overflow-x-clip">
        {/* Line */}
        <svg
          width="543"
          height="608"
          viewBox="0 0 543 608"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:inline absolute ml-[150px] mt-[275px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#E5F6F9] z-[2] pointer-events-none"
        >
          <path
            opacity="0.48"
            d="M393.338 9.06055C381.544 24.9374 382.996 71.1164 483.156 128.817C608.356 200.944 445.726 338.666 260.325 277.581C47.9801 185.858 -74.1073 430.037 93.832 596.794"
            stroke="currentColor"
            stroke-width="30"
          />
        </svg>
        {/* Circle */}
        <div className="absolute w-[1200px] -mt-[50px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 200 200"
            className="text-white w-full h-full"
          >
            <circle cx="100" cy="100" r="100" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Team Section */}
      <Team />

      {/* About Us Section */}
      <AboutUs />

      {/* Reviews Section */}
      <Reviews />
    </div>
  );
}
