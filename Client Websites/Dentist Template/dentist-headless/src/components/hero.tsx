"use client";
import React from "react";
import Image from "next/image";

interface HeroProps {
  className: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="relative isolate px-6 lg:px-8 max-w-screen-2xl mx-auto overflow-x-clip z-10">
        {/* SVG Decorations */}
        {/* <svg
          width="543"
          height="608"
          viewBox="0 0 543 608"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:inline absolute ml-[150px] mt-[50px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#E5F6F9] -z-10 pointer-events-none"
        >
          <path
            opacity="0.48"
            d="M393.338 9.06055C381.544 24.9374 382.996 71.1164 483.156 128.817C608.356 200.944 445.726 338.666 260.325 277.581C47.9801 185.858 -74.1073 430.037 93.832 596.794"
            stroke="currentColor"
            stroke-width="30"
          />
        </svg> */}
        {/* <div className="absolute w-[1200px] -mt-[270px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-20 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 200 200"
            className="text-white w-full h-full"
          >
            <circle cx="100" cy="100" r="100" fill="currentColor" />
          </svg>
        </div> */}

        {/* Headers and CTA */}
        <div className="mx-auto max-w-2xl py-32 z-10">
          <div className="text-center font-poppins">
            <h1 className=" text-5xl tracking-[2.5%] text-black sm:text-[64px]">
              Smiles that <span className="text-[#1493A4]">Inspire</span>
            </h1>
            <p className="mt-1 text-[21px] text-black font-medium">
              Yorkton's Most Gentle Dental Clinic
            </p>
            <div className="mt-12 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="bg-[#1493A4] px-10 py-2.5 text-[16px] font-bold text-white shadow-sm hover:bg-[#1493A4]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>

        {/* Image Decorations */}
        {/* <div className="absolute -top-36 left-0 grid grid-cols-2 grid-rows-1 justify-between w-full overflow-x-clip -z-10 mt-[150px] gap-[550px] pointer-events-none">
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
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
