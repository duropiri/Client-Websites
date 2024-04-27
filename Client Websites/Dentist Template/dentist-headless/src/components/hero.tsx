"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="isolate px-6 lg:px-8 max-w-screen-2xl mx-auto">
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

        {/* SVG Decorations */}
        {/* <svg
          width="543"
          height="608"
          viewBox="0 0 543 608"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-[50%] right-[50%] -z-10 text-[#E5F6F9] mt-[110px] -ml-[100px]"
        >
          <path
            d="M393.338 9.06055C381.544 24.9374 382.996 71.1164 483.156 128.817C608.356 200.944 445.726 338.666 260.325 277.581C47.9801 185.858 -74.1073 430.037 93.832 596.794"
            stroke="currentColor"
            stroke-width="30"
          />
        </svg>
        <svg
          viewBox="0 0 1440 776"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 -z-10 text-[#E5F6F9] left-0 w-[100vw] mt-[30vh]"
        >
          <path
            d="M0 0.41394L326.606 0.414024L504.62 225.36L726.422 346.864L973.686 237.452L1109.45 0.41394H1450V776H0V0.41394Z"
            fill="currentColor"
          />
          <path
            d="M682.255 130.636C541.576 128.518 386.621 42.6627 326.728 0C316.171 79.7524 294.471 241.085 292.125 248.398C289.779 255.71 421.156 337.772 487.138 377.889H1107.37C1130.34 295.472 1162.5 104.509 1107.37 0C984.202 83.7099 858.103 133.284 682.255 130.636Z"
            fill="currentColor"
          />
        </svg> */}

        {/* Image Decorations */}
        <div className="absolute top-0 left-0 grid grid-cols-2 grid-rows-1 justify-between w-full overflow-x-clip -z-10 mt-[150px] gap-[550px] pointer-events-none">
          <div className="flex flex-col items-end justify-between -mt-5">
            <div className="flex flex-col items-center gap-12">
              <div className="relative w-[245px] h-[179px] object-cover rounded-2xl shadow-xl">
                <Image
                  src="/img/Rectangle 95.png"
                  alt=""
                  loading="lazy"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <div className="relative w-[340px] h-[229px] object-cover rounded-2xl shadow-xl">
                <Image
                  src="/img/Rectangle 94.png"
                  alt=""
                  loading="lazy"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between ml-[0px]">
            <div className="flex flex-col items-center gap-20">
              <div className="relative w-[298px] h-[190px] object-cover rounded-2xl shadow-xl">
                <Image
                  src="/img/Rectangle 92.png"
                  alt=""
                  loading="lazy"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <div className="relative w-[291px] h-[281px] object-cover rounded-2xl shadow-xl ml-[60px]">
                <Image
                  src="/img/Frame 1000004307.png"
                  alt=""
                  loading="lazy"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
