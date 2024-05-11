"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const posts = [
  {
    icon: "/img/Rectangle 100 (3).png",
    title: "Dental Crowns, Bridges, and Implants",
    href: "/services/dental-implants",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  {
    icon: "/img/Rectangle 100 (4).png",
    title: "Family and Children's dentistry",
    href: "/services/pediatric-dentistry",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  {
    icon: "/img/download.png",
    title: "CEREC dentistry",
    href: "/services/cosmetic-dentistry",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  {
    icon: "/img/Rectangle 100 (5).png",
    title: "Cosmetic dentistry",
    href: "/services/cosmetic-dentistry",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  {
    icon: "/img/Rectangle 100 (3).png",
    title: "Sedation dentistry",
    href: "#",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  {
    icon: "/img/Rectangle 100 (4).png",
    title: "Dentures",
    href: "/services/dentures",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  {
    icon: "/img/download.png",
    title: "Orthodontics",
    href: "/services/orthodontics",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  // More posts...
];

interface ServicesProps {
  className?: string;
}

const Services: React.FC<ServicesProps> = ({ className }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  return (
    <div
      id="services"
      className={`relative flex flex-col items-center w-full bg-[#E5F6F9] overflow-x-clip py-24`}
    >
      {/* Main Content */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-16 z-10">
        {/* Section Heading */}
        <motion.div
          className="flex flex-col items-center"
          ref={ref1}
          animate={isInView1 ? "animate" : "initial"}
          variants={staggeredAnimationFast}
        >
          <motion.h1
            className="text-[16px] leading-6 text-white uppercase font-extralight bg-[#1493A4] px-2 pointer-events-none"
            variants={bounceAnimation}
          >
            <span className="tracking-[0.4em]">Service</span>s
          </motion.h1>
          <motion.h2
            className="font-medium text-gray-900 text-[38px] mt-2 tracking-tight text-center"
            variants={bounceAnimation}
          >
            Feel Like Home in Our Spa-like Atmosphere
          </motion.h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="flex flex-col items-center w-full overflow-hidden my-16"
          ref={ref2}
          animate={isInView2 ? "animate" : "initial"}
          variants={staggeredAnimationFast}
        >
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full xl:w-[85%] mt-10 flex flex-row justify-between xl:gap-5"
          >
            <CarouselContent className="flex flex-row ml-1">
              {posts.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="sm:max-w-[285px] pl-0 pr-3 flex flex-row justify-center"
                >
                  <motion.div className="p-1" variants={bounceAnimation}>
                    <Card className="shadow-none bg-white rounded-xl sm:max-w-[285px] h-[320px] border-none">
                      <CardContent className="flex flex-col items-start justify-between h-full w-full py-10 gap-y-3">
                        <div className="relative w-[50px] h-[50px] overflow-hidden">
                          <Image
                            src={item.icon}
                            alt={item.title}
                            loading="lazy"
                            layout="fill"
                            objectFit="contain"
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 50px"
                          />
                        </div>
                        <h2 className="text-[18px] font-semibold">
                          {item.title}
                        </h2>
                        <p className="text-[16px] font-regular">
                          {item.description}
                        </p>
                        <a
                          href={item.href}
                          className="flex flex-row items-center gap-2 text-[16px] group"
                        >
                          <p className="font-medium group-hover:text-[#1493A4]">
                            Read More
                          </p>
                          <span className="flex rounded-full bg-[#C9C9C9] group-hover:bg-[#1493A4] w-4 h-4 items-center justify-center">
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.62757 8.40447V0.722656H5.15598V8.40447H3.62757ZM0.553711 5.32493V3.79652H8.23553V5.32493H0.553711Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden xl:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input absolute h-10 w-10 -right-12 top-1/2 -translate-y-1/2 bg-[#1493A4] rounded-none text-white hover:bg-[#1493A4]/80 hover:text-white border-none" />
            <CarouselNext className="hidden xl:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input absolute h-10 w-10 -right-12 top-1/2 -translate-y-1/2 bg-[#1493A4] rounded-none text-white hover:bg-[#1493A4]/80 hover:text-white border-none" />
          </Carousel>
        </motion.div>

        {/* More Button */}
        <motion.div
          className="flex items-center justify-center gap-x-6"
          ref={ref3}
          animate={isInView3 ? "animate" : "initial"}
          variants={staggeredAnimationFast}
        >
          <motion.a
            href="#"
            className="bg-[#1493A4] px-10 py-2.5 text-[16px] font-bold text-white shadow-sm hover:bg-[#1493A4]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            variants={bounceAnimation}
          >
            View Details
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
