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

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const people = [
  {
    name: "Dr Simon Haimanot",
    recommendation: "Highly recommended",
    role: "Primary Care Doctor",
    location: "Yorkton, SK",
    rating: { stars: 4.54, reviews: 37 },
    description:
      "Very personable and good listener. Makes you feel comfortable and open immediately. Felt well taken care...",
    headshot:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dr Greg Trischuk",
    recommendation: "Highly recommended",
    role: "Primary Care Doctor",
    location: "Yorkton, SK",
    rating: { stars: 4.54, reviews: 37 },
    description:
      "Very personable and good listener. Makes you feel comfortable and open immediately. Felt well taken care...",
    headshot:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dr Simon Haimanot",
    recommendation: "Highly recommended",
    role: "Primary Care Doctor",
    location: "Yorkton, SK",
    rating: { stars: 4.54, reviews: 37 },
    description:
      "Very personable and good listener. Makes you feel comfortable and open immediately. Felt well taken care...",
    headshot:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dr Greg Trischuk",
    recommendation: "Highly recommended",
    role: "Primary Care Doctor",
    location: "Yorkton, SK",
    rating: { stars: 4.54, reviews: 37 },
    description:
      "Very personable and good listener. Makes you feel comfortable and open immediately. Felt well taken care...",
    headshot:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

export default function Team() {
  return (
    <div className="relative flex flex-col items-center w-full bg-[#1493A4] overflow-x-clip">
      {/* SVG Decorations */}
      <svg
        width="544"
        height="947"
        viewBox="0 0 544 947"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute text-[#E5F6F9]"
      >
        <path
          opacity="0.12"
          d="M394.148 -18.7671C382.354 -2.89022 383.805 43.2888 483.966 100.99C609.166 173.116 446.536 310.839 261.134 249.753C48.7897 158.03 -73.2978 402.21 94.6416 568.966C237.367 594.089 522.818 675.371 522.818 799.518C522.818 923.665 237.367 978.016 94.6416 989.673"
          stroke="currentColor"
          stroke-width="30"
        />
      </svg>

      {/* Main Content */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 mb-56 ">
        <div className="relative flex flex-col-reverse xl:flex-row w-full gap-y-10 xl:mb-40 mt-14">
          <div className="flex flex-row gap-3">
            <div className="relative w-[55.66px] h-[54.8px] rounded-xl overflow-hidden">
              <Image
                src="/img/download (1).png"
                alt=""
                layout="fill"
                loading="lazy"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col w-full text-white -mt-24 xl:m-0 z-10">
              <h1 className="text-3xl font-regular tracking-tight sm:text-[38px]">
                Top-rated primary care doctors
              </h1>
              <p className="mt-6 text-[16px] leading-8 ">
                90% of patients gave these primary care doctors 5 stars
              </p>
            </div>
          </div>
          <div className="inline opacity-40 xl:opacity-100 xl:absolute relative h-[300px] w-full xl:w-[524px] xl:h-[416px] shadow-xl xl:-mt-[150px] xl:-right-[100px] rounded-2xl overflow-hidden">
            <Image
              src="/img/cachedImage 1.jpg"
              alt=""
              loading="lazy"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Carousel */}
        <div className="flex flex-col justify-center items-start w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full xl:w-[110%] mt-10 flex flex-row justify-between xl:gap-5"
          >
            <CarouselContent className="flex flex-row ml-1">
              {people.map((person, index) => (
                <CarouselItem
                  key={index}
                  className="max-w-[334px] h-[379px] pl-0 pr-4 xl:pr-8 flex flex-row justify-center items-end"
                >
                  <Card className="flex flex-col items-center text-center rounded-3xl max-h-[333px]">
                    <CardHeader className="items-center">
                      <Avatar className="w-[70px] h-[70px] -mt-16 border-2 border-white">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt=""
                        />
                        <AvatarFallback>?</AvatarFallback>
                      </Avatar>

                      <CardTitle className="text-[#1493A4] text-[16px] pt-3">
                        {person.name}
                      </CardTitle>
                      <div className="text-[#4DA430] bg-[#EEF7EB] text-[14px] rounded-md px-2 py-1">
                        {person.recommendation}
                      </div>
                    </CardHeader>
                    <CardContent className="text-black/40 ">
                      <p>{person.role}</p>
                      <p>{person.location}</p>
                      <div className="flex flex-row gap-3 ">
                        <div className="text-[#FFB800] flex flex-row items-center gap-1">
                          <svg
                            width="15"
                            height="14"
                            viewBox="0 0 15 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p>{person.rating.stars}</p>
                        </div>
                        <p>{person.rating.reviews} reviews</p>
                      </div>
                    </CardContent>
                    <CardFooter className="px-4">
                      <CardDescription className="text-black text-[16px] leading-tight">
                        {person.description}
                      </CardDescription>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex flex-row gap-5 items-center mt-24">
              <CarouselPrevious className="hidden xl:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input static h-14 w-14 -right-0 left-[66vw] top-1/2 -translate-y-1/2 bg-[#6DA235] rounded-sm text-white hover:bg-[#6DA235]/80 hover:text-white border-none" />
              <CarouselNext className="hidden xl:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input static h-14 w-14 -right-40 top-1/2 -translate-y-1/2 bg-[#6DA235] rounded-sm text-white hover:bg-[#6DA235]/80 hover:text-white border-none" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* CTA Section */}
      <div className="absolute isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 my-12 -bottom-52 z-10">
        <div className="relative isolate overflow-hidden bg-[#1493A4] shadow-2xl rounded-3xl w-full">
          {/* Decorations */}
          <svg
            width="354"
            height="274"
            viewBox="0 0 354 274"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute text-[#1493A4] bottom-0 -z-10"
          >
            <path
              opacity="0.31"
              d="M251.88 86.6914V29.175L202.057 0.650635L152.469 29.175V86.6914L202.057 115.216L251.88 86.6914Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M150.118 86.0407V28.5244L100.296 0L50.707 28.5244V86.0407L100.296 114.565L150.118 86.0407Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M353.63 86.6914V29.175L303.807 0.650635L254.219 29.175V86.6914L303.807 115.216L353.63 86.6914Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M99.1375 174.836V117.32L49.3151 88.5618L-0.273438 117.32V174.836L49.3151 203.361L99.1375 174.836Z"
              fill="currentColor"
            />
            <path
              opacity="0.56"
              d="M200.887 174.836V117.32L151.299 88.5618L101.477 117.32V174.836L151.299 203.361L200.887 174.836Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M302.637 174.836V117.32L253.049 88.5618L203.227 117.32V174.836L253.049 203.361L302.637 174.836Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M150.13 262.747V205.465L100.307 176.707L50.7188 205.465V262.747L100.307 291.506L150.13 262.747Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M251.88 262.747V205.465L202.057 176.707L152.469 205.465V262.747L202.057 291.506L251.88 262.747Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M48.4109 86.9506V29.668L-1.4115 0.909851L-51 29.668V86.9506L-1.4115 115.709L48.4109 86.9506Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M353.63 262.747V205.465L303.807 176.707L254.219 205.465V262.747L303.807 291.506L353.63 262.747Z"
              fill="currentColor"
            />
          </svg>
          <svg
            width="405"
            height="266"
            viewBox="0 0 405 266"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:inline absolute text-[#1493A4] top-0 right-0 -z-10"
          >
            <path
              opacity="0.31"
              d="M302.88 60.6914V3.175L253.057 -25.3494L203.469 3.175V60.6914L253.057 89.2157L302.88 60.6914Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M201.118 60.0407V2.52436L151.296 -26L101.707 2.52436V60.0407L151.296 88.5651L201.118 60.0407Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M404.63 60.6914V3.175L354.807 -25.3494L305.219 3.175V60.6914L354.807 89.2157L404.63 60.6914Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M150.137 148.836V91.32L100.315 62.5618L50.7266 91.32V148.836L100.315 177.361L150.137 148.836Z"
              fill="currentColor"
            />
            <path
              opacity="0.56"
              d="M251.887 148.836V91.32L202.299 62.5618L152.477 91.32V148.836L202.299 177.361L251.887 148.836Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M353.637 148.836V91.32L304.049 62.5618L254.227 91.32V148.836L304.049 177.361L353.637 148.836Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M201.13 236.747V179.465L151.307 150.707L101.719 179.465V236.747L151.307 265.506L201.13 236.747Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M302.88 236.747V179.465L253.057 150.707L203.469 179.465V236.747L253.057 265.506L302.88 236.747Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M99.4109 60.9506V3.66802L49.5885 -25.0901L0 3.66802V60.9506L49.5885 89.7087L99.4109 60.9506Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M404.63 236.747V179.465L354.807 150.707L305.219 179.465V236.747L354.807 265.506L404.63 236.747Z"
              fill="currentColor"
            />
          </svg>

          {/* Background Image */}
          <div className="absolute w-full h-full shadow-xl -z-20 opacity-70 brightness-[25%] rounded-2xl overflow-hidden">
            <Image
              src="/img/Frame 216.png"
              alt=""
              loading="lazy"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* CTA Text */}
          <div className="text-center lg:mx-0 lg:flex-auto py-10 sm:py-20 px-5">
            <h2 className="text-[30px] font-semibold leading-tight text-white">
              Schedule an in-person or virtual
              <br /> appointment today
            </h2>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="bg-[#1493A4] px-10 py-2.5 text-[16px] font-bold text-white shadow-sm hover:bg-[#1493A4]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
