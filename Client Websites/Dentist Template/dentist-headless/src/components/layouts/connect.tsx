"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface ComponentProps {
  infoCard?: string;
  pageTitle?: string;
  details?: string;
}

const Connect: React.FC<ComponentProps> = ({
  infoCard,
  pageTitle,
  details,
}) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);

  return (
    <div className="relative flex flex-col items-center w-full bg-white overflow-clip py-24">
      {/* Main Content */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 z-10">
        <div className="overflow-hidden w-full">
          <div className="mx-auto flex flex-col lg:flex-row justify-between gap-x-12">
            {/* Info */}
            <div className="flex flex-col justify-center items-center text-center lg:items-end lg:max-w-[50%] w-full lg:text-right gap-y-12">
              <div className="hidden lg:block relative w-full lg:max-w-[529px] h-[300px] xl:h-[290px] rounded-3xl overflow-hidden">
                <Image
                  src="/img/IMG_0079 1.jpg"
                  alt=""
                  layout="fill"
                  loading="lazy"
                  objectFit="cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 749px"
                />
              </div>
              <h2 className="text-3xl tracking-[2.5%] leading-tight text-[#1493A4] sm:text-[60px] font-light lg:max-w-[16ch]">
                Connect with our team today
              </h2>
              <p className="text-[26px] text-[#484848] lg:max-w-[23ch]">
                Experience Haimanot Trischuk Dental. Let us be your haven for
                optimal oral health
              </p>
            </div>

            {/* Separator */}
            <Separator
              orientation="vertical"
              className="bg-[#1493A4] h-auto hidden lg:block"
            />
            <Separator
              orientation="horizontal"
              className="bg-[#1493A4] my-12 h-[1px] block lg:hidden"
            />
            {/* Factoid */}
            <div className="lg:max-w-[50%] w-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.560284494091!2d-102.49638452238771!3d51.208753571746904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52e3ad09555177bd%3A0x9257a84d2aae6d4e!2sTrischuk%20Dental!5e0!3m2!1sen!2sca!4v1715181248769!5m2!1sen!2sca"
                className="w-full h-[500px] lg:h-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;