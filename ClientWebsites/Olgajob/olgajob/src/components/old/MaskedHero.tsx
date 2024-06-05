"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/old/hero";
import React from "react";

const MaskedHero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const radius = useTransform(scrollYProgress, [0, 0.5], [70, 2]);
  const opacity = useTransform(scrollYProgress, [0.495, 0.5], [1, 0]);

  return (
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
  );
};

export default MaskedHero;
