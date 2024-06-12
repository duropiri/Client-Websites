"use client";
import React from "react";
import HorizontalScroll from "../animations/HorizontalScroll";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HorizontalSection() {
  const { scrollYProgress } = useScroll();

  const start = 0.35;
  const end = 0.4;

  const frame2Width = useTransform(
    scrollYProgress,
    [start, end],
    ["25vw", "70vw"]
  );
  const frame2Margin = useTransform(
    scrollYProgress,
    [start, end],
    ["-40vw", "-40vw"]
  );

  const frame3Width = useTransform(
    scrollYProgress,
    [start, end],
    ["10vw", "70vw"]
  );
  const frame3Margin = useTransform(
    scrollYProgress,
    [start, end],
    ["-115vw", "-70vw"]
  );

  const frame4Width = useTransform(
    scrollYProgress,
    [start, end],
    ["5vw", "100vw"]
  );
  const frame4Margin = useTransform(
    scrollYProgress,
    [start, end],
    ["-205vw", "-100vw"]
  );
  return (
    <section id="horizontalScroll" className="">
      <HorizontalScroll>
        {/* Frame 1 */}
        <div className="justify-start items-center w-[60vw] h-[100vh] flex flex-col relative z-10">
          <div className="w-full ml-[20vw]">
            <Image
              src="/img/olga5.png"
              alt="Hero Media"
              width={1080}
              height={1080}
            />
          </div>
        </div>

        {/* Frame 2 */}
        <motion.div
          className="justify-start items-start h-[100vh] flex flex-col relative"
          style={{ width: frame2Width, marginLeft: frame2Margin }}
        >
          <div className="w-full">
            <Image
              src="/img/Pastel-Purple-and-Peach-Modern-Feminine-Internship-Program-Instagram-Post.png"
              alt="Hero Media"
              width={1080}
              height={1080}
            />
          </div>
        </motion.div>

        {/* Frame 3 */}
        <motion.div
          className="justify-start items-center h-[100vh] flex flex-col relative"
          style={{ width: frame3Width, marginLeft: frame3Margin }}
        >
          <div className="w-full">
            <Image
              src="/img/Modern-Bold-Upcoming-Event-Instagram-Story-1024x1024.png"
              alt="Hero Media"
              width={1080}
              height={1080}
            />
          </div>
        </motion.div>

        {/* Frame 4 */}
        <motion.div
          className="justify-start items-center h-[100vh] flex flex-col relative"
          style={{ width: frame4Width, marginLeft: frame4Margin }}
        >
          <div className="w-full">
            <Image
              src="/img/5a3500b2-53e9-4331-a946-593905a7b240.jpg"
              alt="Hero Media"
              width={1080}
              height={1080}
            />
          </div>
        </motion.div>
      </HorizontalScroll>
    </section>
  );
}
