"use client";
import React from "react";
import Image from "next/image";

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
    href: "#",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  {
    icon: "/img/Rectangle 100 (4).png",
    title: "Family and Children's dentistry",
    href: "#",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  {
    icon: "/img/download.png",
    title: "CEREC dentistry",
    href: "#",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  {
    icon: "/img/Rectangle 100 (5).png",
    title: "Cosmetic dentistry",
    href: "#",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  {
    icon: "/img/Rectangle 100 (3).png",
    title: "Dental Crowns, Bridges, and Implants",
    href: "#",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  {
    icon: "/img/Rectangle 100 (4).png",
    title: "Family and Children's dentistry",
    href: "#",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  {
    icon: "/img/download.png",
    title: "CEREC dentistry",
    href: "#",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  {
    icon: "/img/Rectangle 100 (5).png",
    title: "Cosmetic dentistry",
    href: "#",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  // More posts...
];

interface ServicesProps {
  className: string;
}

const Services: React.FC<ServicesProps> = ({ className }) => {
  return (
    <div
      className={`${className} relative flex flex-col items-center w-full bg-[#E5F6F9] overflow-x-clip pt-24`}
    >
      {/* SVG Decorations */}
      <div className="relative -top-80 ">
        <svg
          width="543"
          height="608"
          viewBox="0 0 543 608"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:inline absolute ml-[150px] mt-[50px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#E5F6F9] z-[2] pointer-events-none"
        >
          <path
            opacity="0.48"
            d="M393.338 9.06055C381.544 24.9374 382.996 71.1164 483.156 128.817C608.356 200.944 445.726 338.666 260.325 277.581C47.9801 185.858 -74.1073 430.037 93.832 596.794"
            stroke="currentColor"
            stroke-width="30"
          />
        </svg>
        <div className="absolute w-[1200px] -mt-[270px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none">
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

      {/* Main Content */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center">
          <h1 className="text-[16px] leading-6 text-white uppercase font-extralight bg-[#1493A4] px-2">
            <span className="tracking-[0.4em]">Service</span>s
          </h1>
          <h2 className="font-medium text-gray-900 text-[38px] mt-2 tracking-tight text-center">
            Feel Like Home in Our Spa-like Atmosphere
          </h2>
        </div>

        {/* Carousel */}
        <div className="flex flex-col items-center w-full overflow-hidden my-16">
          <Carousel
            opts={{
              align: "start",
            }}
            className="xl:w-[85%]"
          >
            <CarouselContent className="flex flex-row ">
              {posts.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="max-w-[285px] pl-1 flex flex-row justify-center md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="shadow-none bg-white rounded-xl max-w-[285px] h-[320px] ">
                    <CardContent className="flex flex-col items-start justify-between h-full w-full py-10 gap-y-3 ">
                      <div className="relative w-[50px] h-[50px] overflow-hidden">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          loading="lazy"
                          layout="fill"
                          objectFit="contain"
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
                        className="flex flex-row items-center gap-2 text-[16px]"
                      >
                        <p className="font-medium">Read More</p>
                        <span className="flex rounded-full bg-[#C9C9C9] w-4 h-4 items-center justify-center">
                          <svg
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden xl:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input absolute h-10 w-10 -right-12 top-1/2 -translate-y-1/2 bg-[#1493A4] rounded-none text-white hover:bg-[#1493A4]/80 hover:text-white border-none" />
            <CarouselNext className="hidden xl:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input absolute h-10 w-10 -right-12 top-1/2 -translate-y-1/2 bg-[#1493A4] rounded-none text-white hover:bg-[#1493A4]/80 hover:text-white border-none" />
          </Carousel>
          <div className="mt-12 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="bg-[#1493A4] px-10 py-2.5 text-[16px] font-bold text-white shadow-sm hover:bg-[#1493A4]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
