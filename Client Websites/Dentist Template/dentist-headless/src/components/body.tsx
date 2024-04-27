"use client";
import React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Separator } from "@/components/ui/separator";

const features = [
  {
    description: "36+ years of combined excellence and experience",
    svg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#1493A4]"
      >
        <path
          d="M18.5603 7.77176C18.2243 7.4269 17.8795 7.06436 17.7468 6.75488C17.6142 6.44539 17.623 5.98558 17.6142 5.51693C17.6054 4.65921 17.5877 3.6777 16.9068 2.99683C16.2259 2.31596 15.2444 2.29827 14.3867 2.28943C13.918 2.28059 13.4406 2.27174 13.1488 2.15679C12.8569 2.04184 12.4767 1.6793 12.1319 1.34328C11.5217 0.759682 10.8232 0.0964966 9.90356 0.0964966C8.98395 0.0964966 8.28539 0.759682 7.67526 1.34328C7.33041 1.6793 6.96787 2.02415 6.65838 2.15679C6.34889 2.28943 5.88908 2.28059 5.42043 2.28943C4.56271 2.29827 3.5812 2.31596 2.90033 2.99683C2.21946 3.6777 2.20177 4.65921 2.19293 5.51693C2.18409 5.98558 2.17525 6.46307 2.0603 6.75488C1.94534 7.04668 1.5828 7.4269 1.24679 7.77176C0.663185 8.38189 0 9.08044 0 10.0001C0 10.9197 0.663185 11.6182 1.24679 12.2284C1.5828 12.5732 1.92766 12.9358 2.0603 13.2452C2.19293 13.5547 2.18409 14.0145 2.19293 14.4832C2.20177 15.3409 2.21946 16.3224 2.90033 17.0033C3.5812 17.6842 4.56271 17.7019 5.42043 17.7107C5.88908 17.7195 6.36658 17.7284 6.65838 17.8433C6.95018 17.9583 7.33041 18.3208 7.67526 18.6568C8.28539 19.2404 8.98395 19.9036 9.90356 19.9036C10.8232 19.9036 11.5217 19.2404 12.1319 18.6568C12.4767 18.3208 12.8393 17.976 13.1488 17.8433C13.4582 17.7107 13.918 17.7195 14.3867 17.7107C15.2444 17.7019 16.2259 17.6842 16.9068 17.0033C17.5877 16.3224 17.6054 15.3409 17.6142 14.4832C17.623 14.0145 17.6319 13.537 17.7468 13.2452C17.8618 12.9534 18.2243 12.5732 18.5603 12.2284C19.1439 11.6182 19.8071 10.9197 19.8071 10.0001C19.8071 9.08044 19.1439 8.38189 18.5603 7.77176ZM14.2806 8.39073L9.0989 13.3425C8.96494 13.4685 8.78764 13.5382 8.60372 13.537C8.42251 13.5377 8.24813 13.468 8.11739 13.3425L5.52654 10.8666C5.45468 10.8039 5.39624 10.7273 5.35473 10.6415C5.31322 10.5556 5.2895 10.4623 5.28499 10.367C5.28048 10.2718 5.29528 10.1766 5.3285 10.0872C5.36172 9.99778 5.41267 9.91603 5.47829 9.84683C5.54391 9.77763 5.62285 9.72241 5.71035 9.68449C5.79786 9.64658 5.89213 9.62675 5.98749 9.62619C6.08285 9.62564 6.17735 9.64437 6.26528 9.68127C6.35322 9.71817 6.43279 9.77246 6.49921 9.8409L8.60372 11.8481L13.3079 7.36501C13.4455 7.245 13.6241 7.18281 13.8064 7.19144C13.9887 7.20007 14.1607 7.27884 14.2863 7.41129C14.4119 7.54375 14.4814 7.71962 14.4804 7.90216C14.4793 8.08469 14.4077 8.25975 14.2806 8.39073Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    description: "Professional Experts",
    svg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#1493A4]"
      >
        <path
          d="M18.5603 7.77176C18.2243 7.4269 17.8795 7.06436 17.7468 6.75488C17.6142 6.44539 17.623 5.98558 17.6142 5.51693C17.6054 4.65921 17.5877 3.6777 16.9068 2.99683C16.2259 2.31596 15.2444 2.29827 14.3867 2.28943C13.918 2.28059 13.4406 2.27174 13.1488 2.15679C12.8569 2.04184 12.4767 1.6793 12.1319 1.34328C11.5217 0.759682 10.8232 0.0964966 9.90356 0.0964966C8.98395 0.0964966 8.28539 0.759682 7.67526 1.34328C7.33041 1.6793 6.96787 2.02415 6.65838 2.15679C6.34889 2.28943 5.88908 2.28059 5.42043 2.28943C4.56271 2.29827 3.5812 2.31596 2.90033 2.99683C2.21946 3.6777 2.20177 4.65921 2.19293 5.51693C2.18409 5.98558 2.17525 6.46307 2.0603 6.75488C1.94534 7.04668 1.5828 7.4269 1.24679 7.77176C0.663185 8.38189 0 9.08044 0 10.0001C0 10.9197 0.663185 11.6182 1.24679 12.2284C1.5828 12.5732 1.92766 12.9358 2.0603 13.2452C2.19293 13.5547 2.18409 14.0145 2.19293 14.4832C2.20177 15.3409 2.21946 16.3224 2.90033 17.0033C3.5812 17.6842 4.56271 17.7019 5.42043 17.7107C5.88908 17.7195 6.36658 17.7284 6.65838 17.8433C6.95018 17.9583 7.33041 18.3208 7.67526 18.6568C8.28539 19.2404 8.98395 19.9036 9.90356 19.9036C10.8232 19.9036 11.5217 19.2404 12.1319 18.6568C12.4767 18.3208 12.8393 17.976 13.1488 17.8433C13.4582 17.7107 13.918 17.7195 14.3867 17.7107C15.2444 17.7019 16.2259 17.6842 16.9068 17.0033C17.5877 16.3224 17.6054 15.3409 17.6142 14.4832C17.623 14.0145 17.6319 13.537 17.7468 13.2452C17.8618 12.9534 18.2243 12.5732 18.5603 12.2284C19.1439 11.6182 19.8071 10.9197 19.8071 10.0001C19.8071 9.08044 19.1439 8.38189 18.5603 7.77176ZM14.2806 8.39073L9.0989 13.3425C8.96494 13.4685 8.78764 13.5382 8.60372 13.537C8.42251 13.5377 8.24813 13.468 8.11739 13.3425L5.52654 10.8666C5.45468 10.8039 5.39624 10.7273 5.35473 10.6415C5.31322 10.5556 5.2895 10.4623 5.28499 10.367C5.28048 10.2718 5.29528 10.1766 5.3285 10.0872C5.36172 9.99778 5.41267 9.91603 5.47829 9.84683C5.54391 9.77763 5.62285 9.72241 5.71035 9.68449C5.79786 9.64658 5.89213 9.62675 5.98749 9.62619C6.08285 9.62564 6.17735 9.64437 6.26528 9.68127C6.35322 9.71817 6.43279 9.77246 6.49921 9.8409L8.60372 11.8481L13.3079 7.36501C13.4455 7.245 13.6241 7.18281 13.8064 7.19144C13.9887 7.20007 14.1607 7.27884 14.2863 7.41129C14.4119 7.54375 14.4814 7.71962 14.4804 7.90216C14.4793 8.08469 14.4077 8.25975 14.2806 8.39073Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

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

const footer = [
  {
    title: "Useful Links",
    links: [
      { name: "Covid-19 Pre-Screening Form", href: "/" },
      { name: "Services", href: "/" },
      { name: "Cosmetic Dentistry", href: "/" },
      { name: "Dental Implants", href: "/" },
      { name: "Dentures", href: "/" },
      { name: "Sedation Dentistry", href: "/" },
    ],
  },
  {
    title: "Company & Appointments",
    links: [
      { name: "About Us", href: "/" },
      { name: "Contact Us", href: "/" },
      { name: "Appointment", href: "/" },
    ],
  },

  // More posts...
];

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Please enter a valid email address",
  }),
});

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="rounded-none text-[12px] text-[#3E3E3E]"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          className="rounded-none uppercase text-[14px] font-bold px-4 py-2 leading-none h-auto"
          type="submit"
        >
          Submit
        </Button>
        <FormMessage />
      </form>
    </Form>
  );
}

export default function Body() {
  const averageRating =
    testimonials.reduce((acc, testimonial) => acc + testimonial.rating, 0) /
    testimonials.length;

  return (
    <div className="bg-white">
      {/* bg-[#E5F6F9] */}
      <div className="relative isolate pt-24 px-5 xl:px-16 max-w-screen-2xl mx-auto flex flex-col items-center">
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
                      <div className="relative w-[50px] h-[50px]">
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

      {/* Team Section */}
      <div className="relative flex flex-col items-center w-full bg-[#1493A4] ">
        {/* Team Section */}
        <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 mb-56">
          <div className="relative flex flex-col-reverse xl:flex-row w-full gap-y-10 xl:mb-40 mt-14">
            <div className="flex flex-col w-full text-white -mt-24 xl:m-0 z-10">
              <h1 className="text-3xl font-regular tracking-tight sm:text-[38px]">
                Top-rated primary care doctors
              </h1>
              <p className="mt-6 text-[16px] leading-8 ">
                90% of patients gave these primary care doctors 5 stars
              </p>
            </div>
            <div className="inline opacity-40 xl:opacity-100 xl:absolute relative h-[300px] w-full xl:w-[524px] xl:h-[416px] shadow-xl xl:-mt-[150px] xl:-right-[100px]">
              <Image
                src="/img/cachedImage 1.jpg"
                alt=""
                loading="lazy"
                layout="fill"
                className="rounded-2xl"
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
                          <AvatarImage src="https://github.com/shadcn.png" />
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
            <div className="absolute w-full h-full shadow-xl -z-20 opacity-70 brightness-[25%]">
              <Image
                src="/img/Frame 216.png"
                alt=""
                loading="lazy"
                layout="fill"
                className=" rounded-2xl"
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

      {/* About Us Section */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 py-24 overflow-hidden">
        {/* Features Section */}
        <div className="overflow-hidden py-24 sm:py-32 w-full">
          <div className="">
            <div className="mx-auto flex flex-col lg:flex-row justify-between">
              {/* About Us Info */}
              <div className="lg:pt-4 z-10">
                <div className="lg:max-w-lg">
                  <h1 className="text-[16px] leading-6 text-white uppercase font-extralight">
                    <span className="bg-[#1493A4] px-6 py-1">
                      <span className="tracking-[0.4em]">About U</span>s
                    </span>
                  </h1>
                  <h2 className="mt-4 text-[30px] font-bold tracking-tight text-[#1C1C1C]">
                    Faster Treatment with CERC
                  </h2>
                  <p className="mt-6 text-[16px] leading-8 text-black">
                    At Trischuk Dental Clinic, we are proud to offer you more
                    efficient cosmetic treatment options through our CEREC
                    systems. CEREC can be a good option for patients in need of
                    restoration treatments such as bridges, inlays, onlays,
                    veneers, and crowns, and the materials used are designed to
                    ensure a more natural look.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-black lg:max-w-none">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="relative flex flex-row items-center gap-2"
                      >
                        {feature.svg}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="mt-12 flex items-center justify-start gap-x-6">
                  <a
                    href="#"
                    className="bg-[#1493A4] px-10 py-2.5 text-[16px] font-bold text-white shadow-sm hover:bg-[#1493A4]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    About Us
                  </a>
                </div>
              </div>
              {/* Image Grid Decoration */}
              <div className="absolute right-0 opacity-20 pointer-events-none lg:opacity-100 lg:static flex flex-col gap-4">
                <div className="flex flex-row items-end justify-end gap-4">
                  <div className="relative w-[207px] h-[150px]">
                    <Image
                      src="/img/Rectangle 94 (1).png"
                      alt=""
                      layout="fill"
                      loading="lazy"
                      className="rounded-xl"
                      objectFit="cover"
                    />
                  </div>
                  <div className="relative w-[167px] h-[241px]">
                    <Image
                      src="/img/Frame 1000004307.png"
                      alt=""
                      layout="fill"
                      loading="lazy"
                      className="rounded-xl"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end gap-4">
                  <div className="relative w-[206px] h-[140px] max-w-none">
                    <Image
                      src="/img/image 65 (1).png"
                      alt=""
                      loading="lazy"
                      layout="fill"
                      className="rounded-xl"
                      objectFit="cover"
                    />
                  </div>
                  <div className="relative w-[313px] h-[207px] max-w-none">
                    <Image
                      src="/img/image 67 (2).png"
                      alt=""
                      loading="lazy"
                      layout="fill"
                      className="rounded-xl"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            width="408"
            height="427"
            viewBox="0 0 408 427"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#1493A4] absolute top-[5%] left-[40%] pointer-events-none"
          >
            <path
              opacity="0.41"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M373.828 241.956C373.828 323.104 358.465 426.168 311.694 426.168C235.042 426.168 270.344 268.272 204.288 268.272C138.232 268.272 160.568 427 97.4542 427C53.0808 427 35.4295 321.95 35.4295 241.956C35.4295 193.482 -29.7551 113.97 18.5409 43.6599C77.7599 -42.5581 134.8 25.5257 202.817 25.5257C271.87 25.5257 325.723 -41.1363 388.81 43.6599C438.822 110.966 373.828 194.313 373.828 241.956Z"
              fill="url(#paint0_linear_109_155)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_109_155"
                x1="204.223"
                y1="0"
                x2="204.223"
                y2="427"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="currentColor" stop-opacity="0.94" />
                <stop
                  offset="0.0001"
                  stop-color="currentColor"
                  stop-opacity="0.12"
                />
                <stop
                  offset="0.855651"
                  stop-color="currentColor"
                  stop-opacity="0.07"
                />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Decorations */}
        <svg
          width="1223"
          height="960"
          viewBox="0 0 1223 960"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute text-[#1493A4] mt-64 -z-10 pointer-events-none"
        >
          <g opacity="0.25">
            <path
              opacity="0.31"
              d="M228.581 498.853L280.875 522.799L327.553 489.376L322.264 432.414L269.969 408.468L223.389 441.678L228.581 498.853Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M271.54 406.601L323.834 430.547L370.512 397.124L365.223 340.161L312.928 316.215L266.348 349.426L271.54 406.601Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M186.219 591.365L238.514 615.311L285.191 581.888L279.902 524.926L227.608 500.98L181.028 534.191L186.219 591.365Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M212.03 323.281L264.325 347.227L311.215 313.901L305.713 256.841L253.419 232.895L206.838 266.106L212.03 323.281Z"
              fill="currentColor"
            />
            <path
              opacity="0.56"
              d="M169.668 415.793L221.963 439.739L268.756 406.626L263.351 349.353L211.057 325.407L164.379 358.831L169.668 415.793Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M127.307 508.305L179.601 532.251L226.394 499.138L220.989 441.866L168.695 417.919L122.017 451.343L127.307 508.305Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M110.871 333.042L162.953 356.891L209.843 323.565L204.342 266.506L152.26 242.657L105.467 275.77L110.871 333.042Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M68.509 425.555L120.591 449.403L167.481 416.077L161.979 359.018L109.897 335.169L63.1046 368.283L68.509 425.555Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M313.056 313.749L365.138 337.598L412.028 304.272L406.527 247.212L354.445 223.364L307.652 256.477L313.056 313.749Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M26.1467 518.067L78.2286 541.916L125.119 508.59L119.617 451.53L67.535 427.681L20.7423 460.795L26.1467 518.067Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M534.624 471.815L586.918 495.761L633.596 462.337L628.307 405.375L576.012 381.429L529.432 414.64L534.624 471.815Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M577.583 379.562L629.877 403.508L676.555 370.085L671.266 313.123L618.971 289.177L572.391 322.387L577.583 379.562Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M492.261 564.327L544.556 588.273L591.233 554.849L585.944 497.887L533.65 473.941L487.07 507.152L492.261 564.327Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M518.073 296.242L570.368 320.188L617.258 286.862L611.756 229.803L559.462 205.856L512.881 239.067L518.073 296.242Z"
              fill="currentColor"
            />
            <path
              opacity="0.56"
              d="M475.711 388.754L528.005 412.7L574.798 379.587L569.394 322.315L517.099 298.369L470.422 331.792L475.711 388.754Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M433.349 481.266L485.643 505.213L532.436 472.099L527.031 414.827L474.737 390.881L428.059 424.304L433.349 481.266Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M416.914 306.004L468.996 329.853L515.886 296.527L510.384 239.467L458.302 215.618L411.509 248.732L416.914 306.004Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M374.552 398.516L426.633 422.365L473.524 389.039L468.022 331.979L415.94 308.131L369.147 341.244L374.552 398.516Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M619.099 286.711L671.181 310.559L718.071 277.233L712.57 220.174L660.488 196.325L613.695 229.438L619.099 286.711Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M332.189 491.028L384.271 514.877L431.161 481.551L425.659 424.492L373.577 400.643L326.785 433.756L332.189 491.028Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M752.666 632.15L804.96 656.096L851.638 622.673L846.349 565.711L794.054 541.764L747.474 574.975L752.666 632.15Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M795.625 539.898L847.919 563.844L894.597 530.42L889.308 473.458L837.013 449.512L790.433 482.723L795.625 539.898Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M710.303 724.662L762.598 748.608L809.275 715.185L803.986 658.223L751.692 634.277L705.112 667.487L710.303 724.662Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M736.115 456.577L788.41 480.523L835.3 447.197L829.798 390.138L777.504 366.192L730.923 399.403L736.115 456.577Z"
              fill="currentColor"
            />
            <path
              opacity="1"
              d="M693.753 549.09L746.047 573.036L792.84 539.922L787.436 482.65L735.141 458.704L688.464 492.128L693.753 549.09Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M651.392 641.602L703.686 665.548L750.479 632.435L745.074 575.162L692.78 551.216L646.102 584.64L651.392 641.602Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M634.956 466.339L687.038 490.188L733.928 456.862L728.426 399.803L676.344 375.954L629.551 409.067L634.956 466.339Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M592.594 558.852L644.675 582.7L691.566 549.374L686.064 492.315L633.982 468.466L587.189 501.58L592.594 558.852Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M837.141 447.046L889.223 470.895L936.113 437.569L930.612 380.509L878.53 356.661L831.737 389.774L837.141 447.046Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M550.231 651.364L602.313 675.213L649.203 641.887L643.701 584.827L591.619 560.978L544.827 594.092L550.231 651.364Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M1015.33 697.435L1067.63 721.381L1114.3 687.957L1109.02 630.995L1056.72 607.049L1010.14 640.26L1015.33 697.435Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M1058.29 605.182L1110.59 629.128L1157.26 595.705L1151.97 538.743L1099.68 514.797L1053.1 548.008L1058.29 605.182Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M972.97 789.947L1025.26 813.893L1071.94 780.47L1066.65 723.507L1014.36 699.561L967.779 732.772L972.97 789.947Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M998.782 521.862L1051.08 545.808L1097.97 512.482L1092.47 455.423L1040.17 431.477L993.59 464.687L998.782 521.862Z"
              fill="currentColor"
            />
            <path
              opacity="0.56"
              d="M956.42 614.374L1008.71 638.32L1055.51 605.207L1050.1 547.935L997.808 523.989L951.131 557.412L956.42 614.374Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M914.058 706.886L966.352 730.833L1013.14 697.719L1007.74 640.447L955.446 616.501L908.768 649.924L914.058 706.886Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M897.623 531.624L949.705 555.473L996.595 522.147L991.093 465.087L939.011 441.238L892.218 474.352L897.623 531.624Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M855.26 624.136L907.342 647.985L954.232 614.659L948.731 557.599L896.649 533.751L849.856 566.864L855.26 624.136Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M1099.81 512.331L1151.89 536.179L1198.78 502.853L1193.28 445.794L1141.2 421.945L1094.4 455.059L1099.81 512.331Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M812.898 716.648L864.98 740.497L911.87 707.171L906.368 650.112L854.286 626.263L807.494 659.376L812.898 716.648Z"
              fill="currentColor"
            />
          </g>
        </svg>
        <div className="relative w-full">
          <div className="flex flex-col justify-between w-full">
            <div className="flex flex-row items-center justify-between">
              <div className="relative w-1/2">
                <div className="relative w-[529px] h-[424px]">
                  <Image
                    src="/img/Image 68.png"
                    alt=""
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                    style={{ clipPath: "url(#hexagon-clip1)" }}
                  />
                </div>
                <svg
                  width="565"
                  height="446"
                  viewBox="0 0 565 446"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#1493A4] absolute top-0 pointer-events-none"
                >
                  <clipPath id="hexagon-clip1">
                    <path
                      d="M147.793 192.068L192.839 212.695L233.046 183.904L228.49 134.838L183.444 114.211L143.321 142.818L147.793 192.068Z"
                      fill="currentColor"
                    />
                    <path
                      d="M184.797 112.603L229.843 133.23L270.05 104.439L265.494 55.3728L220.448 34.7459L180.325 63.3532L184.797 112.603Z"
                      fill="currentColor"
                    />
                    <path
                      d="M111.302 271.757L156.348 292.383L196.556 263.593L192 214.526L146.954 193.9L106.83 222.507L111.302 271.757Z"
                      fill="currentColor"
                    />
                    <path
                      d="M213.022 414.674L258.068 435.301L298.458 406.594L293.719 357.444L248.673 336.817L208.55 365.424L213.022 414.674Z"
                      fill="currentColor"
                    />
                    <path
                      d="M60.5558 200.21L105.602 220.836L145.908 192.313L141.253 142.979L96.2071 122.353L55.9997 151.143L60.5558 200.21Z"
                      fill="currentColor"
                    />
                    <path
                      d="M301.304 407.406L346.167 427.949L386.557 399.242L381.818 350.092L336.955 329.549L296.649 358.073L301.304 407.406Z"
                      fill="currentColor"
                    />
                    <path
                      d="M374.051 248.303L419.097 268.93L459.304 240.139L454.748 191.073L409.702 170.446L369.579 199.053L374.051 248.303Z"
                      fill="currentColor"
                    />
                    <path
                      d="M411.055 168.838L456.101 189.465L496.308 160.675L491.752 111.608L446.706 90.9813L406.583 119.589L411.055 168.838Z"
                      fill="currentColor"
                    />
                    <path
                      d="M337.561 327.992L382.607 348.619L422.814 319.828L418.258 270.762L373.212 250.135L333.088 278.742L337.561 327.992Z"
                      fill="currentColor"
                    />
                    <path
                      d="M424.923 319.461L469.969 340.088L510.176 311.297L505.62 262.231L460.574 241.604L420.451 270.211L424.923 319.461Z"
                      fill="currentColor"
                    />
                    <path
                      d="M461.101 240.213L506.147 260.84L546.354 232.049L541.798 182.983L496.752 162.356L456.629 190.963L461.101 240.213Z"
                      fill="currentColor"
                    />
                    <path
                      d="M359.795 97.0672L404.84 117.694L445.231 88.9874L440.492 39.8371L395.446 19.2103L355.322 47.8176L359.795 97.0672Z"
                      fill="currentColor"
                    />
                    <path
                      d="M323.304 176.756L368.35 197.383L408.657 168.859L404.001 119.526L358.956 98.8991L318.748 127.69L323.304 176.756Z"
                      fill="currentColor"
                    />
                    <path
                      d="M286.814 256.445L331.86 277.072L372.167 248.548L367.511 199.215L322.465 178.588L282.258 207.378L286.814 256.445Z"
                      fill="currentColor"
                    />
                    <path
                      d="M250.061 335.827L295.107 356.454L335.414 327.93L330.758 278.597L285.713 257.97L245.505 286.761L250.061 335.827Z"
                      fill="currentColor"
                    />
                    <path
                      d="M161.339 344.441L206.384 365.068L246.691 336.544L242.036 287.211L196.99 266.584L156.782 295.375L161.339 344.441Z"
                      fill="currentColor"
                    />
                    <path
                      d="M272.657 105.476L317.52 126.019L357.911 97.3124L353.171 48.1621L308.309 27.6191L268.002 56.1426L272.657 105.476Z"
                      fill="currentColor"
                    />
                    <path
                      d="M235.274 184.756L280.476 205.454L321.173 176.53L316.398 127.007L271.195 106.308L230.583 135.048L235.274 184.756Z"
                      fill="currentColor"
                    />
                    <path
                      d="M446.817 88.8569L491.679 109.4L532.07 80.6932L527.331 31.543L482.468 11L442.161 39.5234L446.817 88.8569Z"
                      fill="currentColor"
                    />
                    <path
                      d="M198.815 264.854L243.677 285.397L284.068 256.69L279.329 207.54L234.466 186.997L194.159 215.52L198.815 264.854Z"
                      fill="currentColor"
                    />
                    <path
                      d="M97.046 120.521L142.092 141.148L182.399 112.624L177.743 63.2906L132.697 42.6638L92.49 71.4543L97.046 120.521Z"
                      fill="currentColor"
                    />
                    <path
                      d="M22.34 279.086L67.3858 299.713L107.692 271.19L103.037 221.856L57.9913 201.23L17.7839 230.02L22.34 279.086Z"
                      fill="currentColor"
                    />
                  </clipPath>
                </svg>
              </div>
              <h2 className="text-[60px] font-semibold tracking-tight text-[#1C1C1C] w-1/2">
                Embrace
              </h2>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-[60px] font-semibold tracking-tight text-[#1C1C1C] w-1/2 text-center">
                Gentle
              </h2>
              <div className="relative w-1/2">
                <div className="relative w-[490px] h-[472px]">
                  <Image
                    src="/img/Image 72.png"
                    alt=""
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                    style={{ clipPath: "url(#hexagon-clip2)" }}
                  />
                </div>
                <svg
                  width="527"
                  height="494"
                  viewBox="0 0 527 494"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#1493A4] absolute top-0 pointer-events-none"
                >
                  <clipPath id="hexagon-clip2">
                    <path
                      d="M109.793 239.838L154.839 260.464L195.046 231.674L190.49 182.607L145.444 161.981L105.321 190.588L109.793 239.838Z"
                      fill="currentColor"
                    />
                    <path
                      d="M146.797 160.373L191.843 181L232.05 152.209L227.494 103.143L182.448 82.5158L142.325 111.123L146.797 160.373Z"
                      fill="currentColor"
                    />
                    <path
                      d="M73.3029 319.526L118.349 340.153L158.556 311.363L154 262.296L108.954 241.669L68.8307 270.277L73.3029 319.526Z"
                      fill="currentColor"
                    />
                    <path
                      d="M175.022 462.444L220.068 483.07L260.458 454.364L255.719 405.213L210.673 384.587L170.55 413.194L175.022 462.444Z"
                      fill="currentColor"
                    />
                    <path
                      d="M22.5563 247.979L67.6021 268.606L107.909 240.083L103.253 190.749L58.2076 170.122L18.0002 198.913L22.5563 247.979Z"
                      fill="currentColor"
                    />
                    <path
                      d="M263.304 455.176L308.167 475.719L348.557 447.012L343.818 397.862L298.955 377.319L258.649 405.843L263.304 455.176Z"
                      fill="currentColor"
                    />
                    <path
                      d="M336.051 296.073L381.097 316.7L421.304 287.909L416.748 238.843L371.702 218.216L331.579 246.823L336.051 296.073Z"
                      fill="currentColor"
                    />
                    <path
                      d="M373.055 216.608L418.101 237.235L458.308 208.444L453.752 159.378L408.706 138.751L368.583 167.358L373.055 216.608Z"
                      fill="currentColor"
                    />
                    <path
                      d="M299.561 375.762L344.607 396.389L384.814 367.598L380.258 318.532L335.212 297.905L295.088 326.512L299.561 375.762Z"
                      fill="currentColor"
                    />
                    <path
                      d="M386.923 367.231L431.969 387.858L472.176 359.067L467.62 310.001L422.574 289.374L382.451 317.981L386.923 367.231Z"
                      fill="currentColor"
                    />
                    <path
                      d="M423.102 287.983L468.148 308.61L508.355 279.819L503.799 230.753L458.753 210.126L418.63 238.733L423.102 287.983Z"
                      fill="currentColor"
                    />
                    <path
                      d="M321.795 144.837L366.84 165.464L407.231 136.757L402.492 87.607L357.446 66.9801L317.322 95.5874L321.795 144.837Z"
                      fill="currentColor"
                    />
                    <path
                      d="M285.304 224.526L330.35 245.153L370.657 216.629L366.001 167.296L320.956 146.669L280.748 175.459L285.304 224.526Z"
                      fill="currentColor"
                    />
                    <path
                      d="M248.814 304.215L293.86 324.842L334.167 296.318L329.511 246.985L284.465 226.358L244.258 255.148L248.814 304.215Z"
                      fill="currentColor"
                    />
                    <path
                      d="M212.061 383.597L257.107 404.224L297.414 375.7L292.758 326.367L247.713 305.74L207.505 334.53L212.061 383.597Z"
                      fill="currentColor"
                    />
                    <path
                      d="M123.339 392.211L168.384 412.838L208.691 384.314L204.036 334.981L158.99 314.354L118.782 343.144L123.339 392.211Z"
                      fill="currentColor"
                    />
                    <path
                      d="M234.657 153.246L279.52 173.789L319.911 145.082L315.171 95.9319L270.309 75.3889L230.002 103.912L234.657 153.246Z"
                      fill="currentColor"
                    />
                    <path
                      d="M197.274 232.526L242.476 253.224L283.173 224.3L278.398 174.777L233.195 154.078L192.583 182.818L197.274 232.526Z"
                      fill="currentColor"
                    />
                    <path
                      d="M408.818 136.627L453.68 157.17L494.071 128.463L489.332 79.3128L444.469 58.7698L404.162 87.2932L408.818 136.627Z"
                      fill="currentColor"
                    />
                    <path
                      d="M160.815 312.624L205.677 333.167L246.068 304.46L241.329 255.31L196.466 234.767L156.159 263.29L160.815 312.624Z"
                      fill="currentColor"
                    />
                    <path
                      d="M59.0465 168.291L104.092 188.917L144.399 160.394L139.744 111.06L94.6979 90.4336L54.4905 119.224L59.0465 168.291Z"
                      fill="currentColor"
                    />
                    <path
                      d="M96.3405 88.857L141.386 109.484L181.693 80.9604L177.038 31.6269L131.992 11L91.7844 39.7905L96.3405 88.857Z"
                      fill="currentColor"
                    />
                  </clipPath>
                </svg>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="relative w-1/2">
                <div className="relative w-[526px] h-[344px]">
                  <Image
                    src="/img/Image 67 (2).png"
                    alt=""
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                    style={{ clipPath: "url(#hexagon-clip3)" }}
                  />
                </div>
                <svg
                  width="563"
                  height="366"
                  viewBox="0 0 563 366"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#1493A4] absolute top-0 pointer-events-none"
                >
                  <clipPath id="hexagon-clip3">
                    <path
                      d="M146.34 114.087L191.386 134.714L231.593 105.923L227.037 56.8566L181.991 36.2297L141.868 64.837L146.34 114.087Z"
                      fill="currentColor"
                    />
                    <path
                      d="M109.302 191.775L154.348 212.402L194.556 183.612L190 134.545L144.954 113.918L104.83 142.526L109.302 191.775Z"
                      fill="currentColor"
                    />
                    <path
                      d="M211.021 334.692L256.067 355.319L296.457 326.613L291.718 277.462L246.672 256.835L206.549 285.443L211.021 334.692Z"
                      fill="currentColor"
                    />
                    <path
                      d="M58.5563 120.228L103.602 140.855L143.909 112.332L139.253 62.9983L94.2076 42.3715L54.0002 71.162L58.5563 120.228Z"
                      fill="currentColor"
                    />
                    <path
                      d="M299.304 327.425L344.167 347.968L384.557 319.261L379.818 270.111L334.955 249.568L294.649 278.091L299.304 327.425Z"
                      fill="currentColor"
                    />
                    <path
                      d="M370.34 168.087L415.386 188.714L455.593 159.923L451.037 110.857L405.991 90.2297L365.868 118.837L370.34 168.087Z"
                      fill="currentColor"
                    />
                    <path
                      d="M409.055 88.8571L454.101 109.484L494.308 80.6934L489.752 31.627L444.706 11.0001L404.583 39.6074L409.055 88.8571Z"
                      fill="currentColor"
                    />
                    <path
                      d="M335.56 248.011L380.606 268.638L420.813 239.847L416.257 190.781L371.211 170.154L331.088 198.761L335.56 248.011Z"
                      fill="currentColor"
                    />
                    <path
                      d="M422.923 239.48L467.969 260.106L508.176 231.316L503.62 182.249L458.574 161.623L418.451 190.23L422.923 239.48Z"
                      fill="currentColor"
                    />
                    <path
                      d="M459.101 160.232L504.147 180.859L544.354 152.068L539.798 103.002L494.752 82.375L454.629 110.982L459.101 160.232Z"
                      fill="currentColor"
                    />
                    <path
                      d="M320.339 98.0866L365.385 118.713L405.692 90.19L401.037 40.8565L355.991 20.2296L315.783 49.0201L320.339 98.0866Z"
                      fill="currentColor"
                    />
                    <path
                      d="M284.814 176.464L329.86 197.091L370.167 168.567L365.511 119.234L320.465 98.6068L280.258 127.397L284.814 176.464Z"
                      fill="currentColor"
                    />
                    <path
                      d="M248.061 255.846L293.107 276.473L333.414 247.949L328.758 198.616L283.713 177.989L243.505 206.779L248.061 255.846Z"
                      fill="currentColor"
                    />
                    <path
                      d="M160.34 263.087L205.386 283.713L245.692 255.19L241.037 205.856L195.991 185.23L155.784 214.02L160.34 263.087Z"
                      fill="currentColor"
                    />
                    <path
                      d="M234.419 104.47L279.075 126.323L320.502 98.4539L317.001 48.8247L272.345 26.9713L231.007 54.6581L234.419 104.47Z"
                      fill="currentColor"
                    />
                    <path
                      d="M195.053 185.323L241.932 206.79L284.139 176.793L279.5 126.519L231.5 104.519L190.188 133.772L195.053 185.323Z"
                      fill="currentColor"
                    />
                    <path
                      d="M22.3059 199.041L67.2821 219.82L107.684 191.432L103.195 142.083L58.2188 121.305L17.9148 149.96L22.3059 199.041Z"
                      fill="currentColor"
                    />
                    <path
                      d="M72.34 271.087L117.386 291.713L157.692 263.19L153.037 213.856L107.991 193.23L67.7839 222.02L72.34 271.087Z"
                      fill="currentColor"
                    />
                  </clipPath>
                </svg>
              </div>
              <h2 className="text-[60px] font-semibold tracking-tight text-[#1C1C1C] w-1/2">
                Dentistry
              </h2>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 pointer-events-none">
            <svg
              width="351"
              height="490"
              viewBox="0 0 351 490"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" text-[#1493A4]"
            >
              <g opacity="0.3">
                <path
                  opacity="0.31"
                  d="M228.582 360.653L280.876 384.599L327.554 351.176L322.265 294.214L269.97 270.268L223.39 303.478L228.582 360.653Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.31"
                  d="M271.541 268.401L323.835 292.347L370.513 258.924L365.224 201.961L312.929 178.015L266.349 211.226L271.541 268.401Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.31"
                  d="M186.219 453.165L238.514 477.112L285.191 443.688L279.902 386.726L227.608 362.78L181.028 395.991L186.219 453.165Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.31"
                  d="M212.031 185.081L264.326 209.027L311.216 175.701L305.714 118.641L253.42 94.6951L206.839 127.906L212.031 185.081Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.56"
                  d="M169.669 277.593L221.963 301.539L268.756 268.426L263.352 211.153L211.057 187.207L164.38 220.631L169.669 277.593Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.31"
                  d="M127.307 370.105L179.601 394.051L226.394 360.938L220.989 303.666L168.695 279.72L122.017 313.143L127.307 370.105Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.31"
                  d="M110.872 194.843L162.954 218.691L209.844 185.365L204.342 128.306L152.26 104.457L105.467 137.57L110.872 194.843Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.31"
                  d="M68.5095 287.355L120.591 311.203L167.482 277.877L161.98 220.818L109.898 196.969L63.1051 230.083L68.5095 287.355Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.31"
                  d="M313.057 175.549L365.139 199.398L412.029 166.072L406.528 109.012L354.446 85.1637L307.653 118.277L313.057 175.549Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.31"
                  d="M26.1472 379.867L78.2291 403.716L125.119 370.39L119.617 313.33L67.5355 289.482L20.7428 322.595L26.1472 379.867Z"
                  fill="currentColor"
                />
              </g>
            </svg>
            <div className="absolute bg-gradient-to-r from-transparent to-white h-full w-[100px] top-0 -right-1"></div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="relative flex flex-col items-center w-full bg-[#E5F6F9] ">
        {/* Image Divider */}
        <div className="relative w-full">
          <div className="absolute w-full h-[400px] bg-gradient-to-t from-transparent to-white -top-1 z-10"></div>
          <div className="relative w-full h-[702px]">
            <Image
              src="/img/Image 71.png"
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
                <h2 className="mt-4 text-[38px] font-medium tracking-tight text-[#1C1C1C]">
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
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>?</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-black text-[16px]">
                              {person.name}
                            </CardTitle>
                            {/* Render the amount of stars that reflect the person's rating */}
                            <div className="flex flex-row text-[#FCD34D]">
                              {renderStars(person.rating)}
                            </div>
                          </div>
                        </CardHeader>
                        <CardFooter className="px-4">
                          <CardDescription className="text-black text-[16px] leading-tight">
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

      {/* Footer */}
      <div className="relative flex flex-col items-center w-full bg-[#1493A4] ">
        <div className="isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 mb-12">
          <div className="mx-auto w-full">
            <div className="mx-auto mt-10 flex flex-col md:flex-row justify-between gap-y-10">
              {footer.map((item, index) => (
                <div key={index} className="flex max-w-xl flex-col items-start">
                  <h2 className="text-[18px] text-white">{item.title}</h2>
                  <div className="w-[41px] border-2 border-white mt-2"></div>
                  <ul className="flex flex-col gap-4 mt-6">
                    {item.links.map((links, index) => (
                      <li key={index} className="text-white text-[14px]">
                        <a href={links.href}>{links.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex max-w-xl flex-col items-start">
                <h2 className="text-[18px] text-white">Newsletter</h2>
                <div className="w-[41px] border-2 border-white mt-2"></div>
                <ul className="flex flex-col gap-2 mt-6">
                  <li className="text-white text-[14px]">
                    Join our newsletter to get in touch
                  </li>
                  <li className="mt-6">
                    <ProfileForm />
                  </li>
                </ul>
              </div>
            </div>
            <Separator className="absolute mt-10 left-0 bg-white" />
            <div className="relative flex flex-col md:flex-row mt-24 justify-between gap-4">
              <div className="flex flex-row gap-8">
                <svg
                  width="29"
                  height="34"
                  viewBox="0 0 29 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#242424]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.5 33.9706C14.5 33.9706 28.375 24.7206 28.375 13.929C28.375 10.2491 26.9132 6.71992 24.3111 4.11785C21.709 1.51578 18.1799 0.0539551 14.5 0.0539551C10.8201 0.0539551 7.29096 1.51578 4.68889 4.11785C2.08683 6.71992 0.625 10.2491 0.625 13.929C0.625 24.7206 14.5 33.9706 14.5 33.9706ZM19.125 13.929C19.125 16.4833 17.0543 18.554 14.5 18.554C11.9457 18.554 9.875 16.4833 9.875 13.929C9.875 11.3746 11.9457 9.30396 14.5 9.30396C17.0543 9.30396 19.125 11.3746 19.125 13.929Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="flex flex-col">
                  <h2 className="text-[12px] font-bold uppercase tracking-wider text-white">
                    Yorkton
                  </h2>
                  <ul className="flex flex-col gap-2 mt-1 text-white text-[12px]">
                    <li className="">
                      Monday to Thursday: 8 AM to 3:30 PM <br />
                      Friday: 8 AM to 2 PM
                      <br />
                      Closed for lunch 12 PM - 1 PM
                    </li>
                    <li className="flex flex-row gap-2">
                      <a href="">Map it</a>
                      <Separator orientation="vertical" />
                      <a href=""> Get Directions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-row gap-8">
                <div className="flex flex-col">
                  <h2 className="text-[18px] sm:text-[26px] font-semibold italic tracking-wider text-white">
                    Love...Kindness...and Excellence.
                  </h2>
                  <p className="text-[11px] text-white italic mt-8">
                    © 2023 Copyright{" "}
                    <span className="underline">
                      <a href="">Trischuk Dental Clinic</a>
                    </span>{" "}
                    - Legal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Function to render stars based on rating
const renderStars = (rating: number) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating > i && rating >= i + 1) {
      // Full star
      stars.push(
        <svg
          key={`full-${i}`}
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Full star SVG path */}
          <path d="M10.0997 1.05825C10.4162 0.421263 11.3248 0.421264 11.6413 1.05825L14.2261 6.2605C14.3514 6.51275 14.5922 6.68771 14.8709 6.72896L20.6172 7.57963C21.3208 7.68379 21.6016 8.54799 21.0936 9.04583L16.9447 13.1117C16.7436 13.3088 16.6516 13.5919 16.6984 13.8696L17.6651 19.5976C17.7835 20.299 17.0484 20.8331 16.4179 20.5038L11.269 17.8144C11.0193 17.684 10.7217 17.684 10.472 17.8144L5.32309 20.5038C4.69263 20.8331 3.9575 20.299 4.07587 19.5976L5.04256 13.8696C5.08943 13.5919 4.99745 13.3088 4.79628 13.1117L0.647375 9.04583C0.139365 8.54799 0.420161 7.68379 1.12377 7.57963L6.87014 6.72896C7.14877 6.68771 7.38959 6.51275 7.51492 6.2605L10.0997 1.05825Z" />
        </svg>
      );
    } else if (rating > i && rating < i + 1) {
      // Half star
      stars.push(
        <svg
          key={`half-${i}`}
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="star"
        >
          <defs>
            <mask id={`half-mask-${i}`}>
              <rect width="22" height="21" fill="#000" />
              <rect width="11" height="21" fill="#fff" />
            </mask>
          </defs>
          <path
            d="M10.0997 1.05825C10.4162 0.421263 11.3248 0.421264 11.6413 1.05825L14.2261 6.2605C14.3514 6.51275 14.5922 6.68771 14.8709 6.72896L20.6172 7.57963C21.3208 7.68379 21.6016 8.54799 21.0936 9.04583L16.9447 13.1117C16.7436 13.3088 16.6516 13.5919 16.6984 13.8696L17.6651 19.5976C17.7835 20.299 17.0484 20.8331 16.4179 20.5038L11.269 17.8144C11.0193 17.684 10.7217 17.684 10.472 17.8144L5.32309 20.5038C4.69263 20.8331 3.9575 20.299 4.07587 19.5976L5.04256 13.8696C5.08943 13.5919 4.99745 13.3088 4.79628 13.1117L0.647375 9.04583C0.139365 8.54799 0.420161 7.68379 1.12377 7.57963L6.87014 6.72896C7.14877 6.68771 7.38959 6.51275 7.51492 6.2605L10.0997 1.05825Z"
            fill="currentColor"
            mask={`url(#half-mask-${i})`}
          />
          <path
            d="M10.0997 1.05825C10.4162 0.421263 11.3248 0.421264 11.6413 1.05825L14.2261 6.2605C14.3514 6.51275 14.5922 6.68771 14.8709 6.72896L20.6172 7.57963C21.3208 7.68379 21.6016 8.54799 21.0936 9.04583L16.9447 13.1117C16.7436 13.3088 16.6516 13.5919 16.6984 13.8696L17.6651 19.5976C17.7835 20.299 17.0484 20.8331 16.4179 20.5038L11.269 17.8144C11.0193 17.684 10.7217 17.684 10.472 17.8144L5.32309 20.5038C4.69263 20.8331 3.9575 20.299 4.07587 19.5976L5.04256 13.8696C5.08943 13.5919 4.99745 13.3088 4.79628 13.1117L0.647375 9.04583C0.139365 8.54799 0.420161 7.68379 1.12377 7.57963L6.87014 6.72896C7.14877 6.68771 7.38959 6.51275 7.51492 6.2605L10.0997 1.05825Z"
            stroke="currentColor"
          />
        </svg>
      );
    } else {
      // Empty star
      stars.push(
        <svg
          key={`empty-${i}`}
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          stroke="#94A3B8"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Empty star SVG path */}
          <path
            d="M10.0997 1.05825C10.4162 0.421263 11.3248 0.421264 11.6413 1.05825L14.2261 6.2605C14.3514 6.51275 14.5922 6.68771 14.8709 6.72896L20.6172 7.57963C21.3208 7.68379 21.6016 8.54799 21.0936 9.04583L16.9447 13.1117C16.7436 13.3088 16.6516 13.5919 16.6984 13.8696L17.6651 19.5976C17.7835 20.299 17.0484 20.8331 16.4179 20.5038L11.269 17.8144C11.0193 17.684 10.7217 17.684 10.472 17.8144L5.32309 20.5038C4.69263 20.8331 3.9575 20.299 4.07587 19.5976L5.04256 13.8696C5.08943 13.5919 4.99745 13.3088 4.79628 13.1117L0.647375 9.04583C0.139365 8.54799 0.420161 7.68379 1.12377 7.57963L6.87014 6.72896C7.14877 6.68771 7.38959 6.51275 7.51492 6.2605L10.0997 1.05825Z"
            stroke="currentColor"
          />
        </svg>
      );
    }
  }
  return stars;
};
