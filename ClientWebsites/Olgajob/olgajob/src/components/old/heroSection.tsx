"use client";
import React from "react";
import HorizontalScroll from "../animations/HorizontalScroll";
import TextParallax from "../animations/TextParallax";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "../old/hero";
import CharByCharOnScroll from "../animations/CharByCharOnScroll";

const phrases = [
  {
    items: [
      {
        text: "Health",
        src: "/images/7EA67384-0315-4E66-BEF7-283CDDCB2CCF-2-scaled-600x628.jpg",
      },
      { text: "Wellness", src: "/images/IMG_4912-2-1024x1024.png" },
      { text: "Life", src: "/images/foto188-1-1-1024x574.jpg" },
    ],
    direction: "left",
    left: "-40%",
  },
  {
    items: [
      { text: "Nutrition", src: "/images/IMG_4488-scaled-600x359.jpg" },
      { text: "Supplements", src: "/images/IMG_4912-2-1024x1024.png" },
      { text: "Holistic Food", src: "/images/foto188-1-1-1024x574.jpg" },
    ],
    direction: "right",
    left: "-44%",
  },
  {
    items: [
      { text: "Mindfulness", src: "/images/foto188-1-1-1024x574.jpg" },
      {
        text: "Integrative Nutrition",
        src: "/images/IMG_4488-scaled-600x359.jpg",
      },
      {
        text: "Health Coaching",
        src: "/images/7EA67384-0315-4E66-BEF7-283CDDCB2CCF-2-scaled-600x628.jpg",
      },
    ],
    direction: "left",
    left: "10vw",
  },
  {
    items: [
      { text: "Emotional Support", src: "/images/foto188-1-1-1024x574.jpg" },
      { text: "Spiritual Healing", src: "/images/IMG_4912-2-1024x1024.png" },
    ],
    direction: "right",
    left: "-25%",
  },
  {
    items: [
      {
        text: "Health",
        src: "/images/7EA67384-0315-4E66-BEF7-283CDDCB2CCF-2-scaled-600x628.jpg",
      },
      { text: "Wellness", src: "/images/IMG_4912-2-1024x1024.png" },
      { text: "Life", src: "/images/foto188-1-1-1024x574.jpg" },
    ],
    direction: "left",
    left: "-40%",
  },
];

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.05], [10, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.05], [70, 2]);
  const opacity = useTransform(scrollYProgress, [0.04995, 0.05], [1, 0]);

  return (
    <div id="hero" className="relative h-full">
      <div
        id="hero_media"
        className="sticky top-0 h-[100vh] z-20 pointer-events-none"
      >
        <motion.svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full"
          style={{ opacity }}
        >
          <defs>
            <mask id="hero-mask">
              <rect width="100" height="100" fill="black" />
              <motion.circle cx="50" cy="50" r={radius} fill="white" />
            </mask>
          </defs>
          <g mask="url(#hero-mask)">
            <rect width="100" height="100" fill="white" />
            <foreignObject x="0" y="0" width="100" height="100">
              <div className="w-full h-full">
                <div className="w-full h-full">
                  <Hero
                    media="/images/Photo-Olga-2-1536x1024.jpg"
                    isVideo={false}
                  />
                </div>
              </div>
            </foreignObject>
          </g>
        </motion.svg>
      </div>
      <div id="hero_rows" className="relative z-10">
        <div className="relative h-[300vh] bg-transparent -mt-[100vh]">
          <div className="sticky top-0 h-[100vh] flex items-center overflow-clip">
            <motion.div
              style={{ scale }}
              className="w-[100vw] h-[100vh] absolute top-0 flex items-center justify-center"
            >
              <TextParallax phrases={phrases} />
            </motion.div>
          </div>
        </div>
      </div>
      <div id="hero_bottom" className="relative z-30 pointer-events-none">
        <div className="relative h-[300vh] bg-transparent -mt-[300vh]">
          <div className="sticky top-0 h-[100vh] flex flex-col justify-between items-start overflow-clip p-12 pt-[72px]">
            <div className="flex w-full justify-center mt-4">
              <h1 className="text-black font-semibold text-lg max-w-[24ch]">
                <CharByCharOnScroll
                  shadow={false}
                  lineStyles={{
                    marginTop: "0.8ch", // Custom line height
                    marginRight: "0.5ch", // Custom character spacing
                  }}
                  className="justify-center"
                >
                  Certified Health & Life Coach, Wellness Consultant &
                  Integrative Natural Health Consultant
                </CharByCharOnScroll>
              </h1>
            </div>
            <p className="text-black font-medium text-sm">
              Olga Job <br />
              Health & Lifestyle <br />
              MBA, CHC, INHC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
