"use client";
import React, { useRef } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

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

interface ComponentProps {
  infoCard?: string;
  pageTitle?: string;
  details?: string;
}

const formSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name"),
  lastName: z.string().min(1, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  telephone: z.string().min(1, "Please enter your telephone number"),
  message: z.string().min(1, "Please enter a message"),
});

export function ContactForm() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      message: "",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 my-4">
        <div className="flex flex-col gap-4 justify-between w-full">
          <div className="grid grid-cols-2 w-full gap-4">
            <div className="w-full">
              <input
                {...form.register("firstName")}
                className="flex h-10 w-full border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-[12px] text-[#3E3E3E] border-[#1493A4]"
                placeholder="First Name"
                name="firstName"
              />
            </div>
            <div className="w-full">
              <input
                {...form.register("firstName")}
                className="flex h-10 w-full border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-[12px] text-[#3E3E3E] border-[#1493A4]"
                placeholder="Last Name"
                name="lastName"
              />
            </div>
            <div className="w-full">
              <input
                {...form.register("email")}
                className="flex h-10 w-full border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-[12px] text-[#3E3E3E] border-[#1493A4]"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="w-full">
              <input
                {...form.register("telephone")}
                className="flex h-10 w-full border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-[12px] text-[#3E3E3E] border-[#1493A4]"
                placeholder="Telephone number"
                name="telephone"
              />
            </div>
          </div>
          <div className="w-full">
            <textarea
              {...form.register("message")}
              placeholder="Message To Haimanot Trischuk Dental Team"
              className="w-full h-32 p-3 border ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-[12px] text-[#3E3E3E] border-[#1493A4]"
            />
          </div>
        </div>
        <Button
          className="rounded-none uppercase text-[14px] font-bold px-4 py-3 leading-none h-auto w-full bg-[#1493A4]"
          type="submit"
        >
          Submit
        </Button>
        <FormMessage />
      </form>
    </Form>
  );
}

const Contact: React.FC<ComponentProps> = ({
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
    <div className="relative flex flex-col items-center w-full bg-white overflow-clip">
      {/* Main Content */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 z-10">
        <div className="overflow-hidden py-24 sm:py-32 w-full">
          <div className="mx-auto flex flex-col-reverse lg:flex-row justify-between gap-x-12">
            {/* Contact Form */}
            <div className="flex flex-col justify-between lg:max-w-[50%] w-full">
              <h2 className="mt-4 mb-8 text-3xl tracking-[2.5%] text-black sm:text-[45px] font-light lg:max-w-[12ch]">
                Contact <span className="text-[#1493A4]">us</span>
              </h2>
              <div className="flex flex-row justify-center lg:justify-between items-center bg-[#1493A4] gap-x-6 py-2 px-6 rounded-full">
                <p className="text-sm leading-6 text-white">Call Us On:</p>
                <a
                  href="#"
                  className="flex flex-row gap-2 items-center rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-[#1493A4] underline shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#1493A4]"
                  >
                    <path
                      d="M13.9141 10.6484C14.1328 10.7578 14.2969 11.0039 14.2969 11.2773C14.2969 11.3047 14.2969 11.3594 14.2969 11.4141L13.6406 14.2578C13.5586 14.5586 13.3125 14.75 13.0117 14.75C5.98438 14.75 0.324219 9.08984 0.324219 2.0625C0.324219 1.76172 0.515625 1.51562 0.816406 1.43359L3.66016 0.777344C3.71484 0.777344 3.76953 0.75 3.79688 0.75C4.07031 0.75 4.31641 0.914062 4.42578 1.16016L5.73828 4.22266C5.76562 4.30469 5.79297 4.38672 5.79297 4.46875C5.79297 4.6875 5.68359 4.87891 5.54688 4.98828L3.87891 6.35547C4.89062 8.48828 6.58594 10.1836 8.71875 11.1953L10.0859 9.52734C10.1953 9.39062 10.3867 9.28125 10.5781 9.28125C10.6875 9.28125 10.7695 9.30859 10.8516 9.33594L13.9141 10.6484Z"
                      fill="currentColor"
                    />
                  </svg>
                  306-782-1224
                </a>
              </div>
              <ContactForm />
            </div>
            {/* Separator */}
            <Separator
              orientation="vertical"
              className="bg-[#B6B6B6] h-auto hidden lg:block"
            />
            <Separator
              orientation="horizontal"
              className="bg-[#B6B6B6] my-24 h-[1px] block lg:hidden"
            />
            {/* Info */}
            <div className="flex flex-col lg:max-w-[50%] w-full justify-center lg:items-end lg:text-right">
              <h2 className="text-3xl tracking-[2.5%] leading-tight text-[#1493A4] sm:text-[56px] font-light lg:max-w-[12ch]">
                Contact our team today
              </h2>
              <p className="mt-12 text-[26px] text-[#484848] lg:max-w-[23ch]">
                every little detail matters, relationships matter, experience
                matters,
              </p>
              <p className="mt-8 text-[26px] font-medium text-[#1493A4] lg:max-w-[23ch]">
                first-class dental care matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
