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

import { renderStars } from "@/components/renderStars";

const testimonials = [
  {
    name: "Aldo P.",
    rating: 4.8,
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    headshot:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Aldo P.",
    rating: 4.8,
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    headshot:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },

  // More people...
];

export default function Reviews() {
  const averageRating =
    testimonials.reduce((acc, testimonial) => acc + testimonial.rating, 0) /
    testimonials.length;

  return (
    <div className="relative flex flex-col items-center w-full bg-[#E5F6F9] ">
      {/* Image Divider */}
      <div className="relative w-full">
        <div className="absolute w-full h-[400px] bg-gradient-to-t from-transparent to-white -top-1 z-10"></div>
        <div className="relative w-full h-[702px] overflow-hidden">
          <Image
            src="/img/image 71.png"
            alt=""
            loading="lazy"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32">
        <div className="overflow-hidden py-10 w-full">
          <div className="flex flex-row items-center justify-between lg:pt-4">
            {/* About Us Info */}
            <div className="lg:max-w-lg">
              <h1 className="text-[16px] leading-6 text-white uppercase font-extralight">
                <span className="bg-[#1493A4] px-6 py-1">
                  <span className="tracking-[0.4em]">Community Prais</span>e
                </span>
              </h1>
              <h2 className="mt-4 text-[38px] font-medium tracking-tight text-[#1C1C1C] font-outfit">
                What People think{" "}
                <span className="text-[#1493A4]">about us</span>
              </h2>
            </div>
            {/* Google Review */}
            <div className="flex flex-col bg-white w-[200px] h-full rounded-lg px-4 py-1 justify-between font-jakarta">
              <div className="flex flex-row text-[#FCD34D] justify-between items-center">
                <p className="text-[21px] font-extrabold leading-[1.0]">
                  {averageRating.toFixed(1)}
                </p>
                <div className="flex flex-row">
                  {renderStars(averageRating)}
                </div>
              </div>
              <div>
                <p className="text-[14px] text-[#6A6A6A] font-bold">Google</p>
                <p className="text-[10px] text-[#4285F4] font-regular">
                  Customer Reviews
                </p>
              </div>
            </div>
          </div>
          {/* Carousel */}
          <div className="flex flex-col items-center w-full overflow-hidden my-16">
            <Carousel
              opts={{
                align: "start",
              }}
              className="xl:w-[90%]"
            >
              <CarouselContent className="flex flex-row ml-1">
                {testimonials.map((person, index) => (
                  <CarouselItem
                    key={index}
                    className="max-w-[527px] max-h-[363px] pl-0 pr-2 xl:pr-4 flex flex-row justify-start items-center"
                  >
                    <Card className="flex flex-col items-start text-start rounded-3xl max-h-[333px]">
                      <CardHeader className="flex flex-row items-center px-4 gap-4">
                        <Avatar className=" w-10 h-10 border-2 border-white">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt=""
                          />
                          <AvatarFallback>?</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-black text-[16px] font-satoshi">
                            {person.name}
                          </CardTitle>
                          {/* Render the amount of stars that reflect the person's rating */}
                          <div className="flex flex-row text-[#FCD34D]">
                            {renderStars(person.rating)}
                          </div>
                        </div>
                      </CardHeader>
                      <CardFooter className="px-4">
                        <CardDescription className="text-black text-[16px] leading-tight font-manrope">
                          {person.review}
                        </CardDescription>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden xl:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input absolute h-10 w-10 -right-12 top-1/2 -translate-y-1/2 bg-[#1493A4] rounded-none text-white hover:bg-[#1493A4]/80 hover:text-white border-none" />
              <CarouselNext className="hidden xl:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input absolute h-10 w-10 -right-12 top-1/2 -translate-y-1/2 bg-[#1493A4] rounded-none text-white hover:bg-[#1493A4]/80 hover:text-white border-none" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}