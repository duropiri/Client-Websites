"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  className?: string;
}

const CTA: React.FC<HeroProps> = ({ className }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  return (
    <div
      id="cta"
      className="relative flex flex-col items-center w-full overflow-x-clip"
    >
      <motion.div
        className="sm:absolute isolate px-5 w-full sm:max-w-screen-2xl sm:mx-auto flex flex-col items-center xl:px-32 my-12 sm:-mt-32 z-[99]"
        ref={ref1}
        animate={isInView1 ? "animate" : "initial"}
        variants={staggeredAnimationFast}
      >
        <motion.div className="relative isolate w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full h-full gap-y-4 sm:gap-x-4 lg:gap-x-8">
            <div className="flex w-full sm:w-1/3 h-[290px] transition-transform duration-300 ease-in-out transform hover:-translate-y-2 rounded-3xl shadow-xl overflow-hidden">
              <motion.a
                className="flex flex-col justify-start items-center gap-y-3 bg-[#F3F3F3] w-full h-full"
                href="/team"
                variants={bounceAnimation}
              >
                <div className="relative w-full -mt-12 xl:mt-0 h-[200px] xl:h-[219px] rounded-3xl overflow-hidden">
                  <Image
                    src="/img/Rectangle 92.png"
                    alt=""
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 340px"
                  />
                </div>
                <h2 className="text-[28px]">
                  Meet <span className="text-[#1493A4]">our team</span>
                </h2>
              </motion.a>
            </div>
            <div className="flex w-full sm:w-1/3 h-[290px] transition-transform duration-300 ease-in-out transform hover:-translate-y-2 rounded-3xl shadow-xl overflow-hidden">
              <motion.a
                className="flex flex-col justify-start items-center gap-y-3 bg-[#F3F3F3] w-full h-full"
                href="/team/#join"
                variants={bounceAnimation}
              >
                <div className="relative w-full -mt-12 xl:mt-0 h-[200px] xl:h-[219px] rounded-3xl overflow-hidden">
                  <Image
                    src="/img/Rectangle 108.jpg"
                    alt=""
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 340px"
                  />
                </div>
                <h2 className="text-[28px]">
                  Join <span className="text-[#1493A4]">our team</span>
                </h2>
              </motion.a>
            </div>
            <div className="flex w-full sm:w-1/3 h-[290px] transition-transform duration-300 ease-in-out transform hover:-translate-y-2 rounded-3xl shadow-xl overflow-hidden">
              <motion.a
                className="flex flex-col justify-start items-center gap-y-3 bg-[#F3F3F3] w-full h-full"
                href="/"
                variants={bounceAnimation}
              >
                <div className="relative w-full -mt-12 xl:mt-0 h-[200px] xl:h-[219px] rounded-3xl overflow-hidden">
                  <Image
                    src="/img/Rectangle 108 (1).jpg"
                    alt=""
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 340px"
                  />
                </div>
                <h2 className="text-[28px]">
                  Patient <span className="text-[#1493A4]">forms</span>
                </h2>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CTA;
