"use client";
import React from "react";
import Image from "next/image";

import Hero from "@/components/hero";
import Services from "@/components/services";
import Team from "@/components/team";
import AboutUs from "@/components/aboutUs";
import Reviews from "@/components/reviews";

export default function Body() {
  return (
    <div className="bg-white relative">
      {/* Image Decorations */}
      <div className="absolute -top-36 left-0 grid grid-cols-2 grid-rows-1 justify-between w-full overflow-x-clip z-20 mt-[150px] gap-[550px] pointer-events-none">
        <div className="flex flex-col items-end justify-between -mt-5">
          <div className="flex flex-col items-center gap-12">
            <div className="relative w-[245px] h-[179px] rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/img/Rectangle 95.png"
                alt=""
                loading="eager"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 60vw, (max-width: 1024px) 30vw, 245px"
              />
            </div>
            <div className="relative w-[340px] h-[229px] rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/img/Rectangle 94.png"
                alt=""
                loading="eager"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 340px"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between ml-[0px]">
          <div className="flex flex-col items-center gap-20">
            <div className="relative w-[298px] h-[190px] rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/img/Rectangle 92.png"
                alt=""
                loading="eager"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 70vw, (max-width: 1024px) 35vw, 298px"
              />
            </div>
            <div className="relative w-[291px] h-[281px] rounded-2xl shadow-xl ml-[60px] overflow-hidden">
              <Image
                src="/img/Frame 1000004307.png"
                alt=""
                loading="eager"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 68vw, (max-width: 1024px) 34vw, 291px"
              />
            </div>
          </div>
        </div>
      </div>

      

      {/* Hero Section */}
      <Hero className="" />

      {/* Services Section */}
      <Services className="" />

      {/* Team Section */}
      <Team />

      {/* About Us Section */}
      <AboutUs />

      {/* Reviews Section */}
      <Reviews />
    </div>
  );
}
