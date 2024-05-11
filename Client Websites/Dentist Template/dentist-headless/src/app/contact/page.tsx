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
              className="w-full h-64 p-3 border ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-[12px] text-[#3E3E3E] border-[#1493A4]"
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

export default function Page() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const isInView4 = useInView(ref4);
  const isInView5 = useInView(ref5);
  const isInView6 = useInView(ref6);

  return (
    <div className="relative flex flex-col items-center w-full bg-white overflow-clip">
      {/* Main Content */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 z-10">
        <div className="overflow-hidden py-12 lg:py-24 w-full">
          <div className="mx-auto flex flex-col lg:flex-row justify-between gap-x-12 gap-y-12">
            {/* Contact Form */}
            <motion.div
              className="flex flex-col justify-start lg:max-w-[50%] w-full"
              ref={ref1}
              animate={isInView1 ? "animate" : "initial"}
              variants={staggeredAnimationFast}
            >
              <motion.h2
                className="mt-4 sm:mb-8 text-4xl tracking-[2.5%] text-black sm:text-[45px] font-light lg:max-w-[12ch]"
                variants={bounceAnimation}
              >
                Contact <span className="text-[#1493A4]">us</span>
              </motion.h2>

              <ContactForm />
            </motion.div>
            {/* Info */}
            <motion.div className="flex flex-col lg:max-w-[50%] w-full justify-start lg:items-start lg:text-left">
              <motion.h2
                className="text-4xl tracking-[2.5%] leading-tight text-black sm:text-[56px] font-light"
                variants={bounceAnimation}
              >
                Location <span className="text-[#1493A4]">information</span>
              </motion.h2>
              <div className="mt-6 text-black">
                <h3 className="font-semibold text-[25px]">
                  Haimanot Trischuk Dental Clinic
                </h3>
                <p className="text-[19px]">Dentist in Bismarck, North Dakota</p>
                <div className="mt-4">
                  <h3 className="font-semibold text-[25px]">Address</h3>
                  <p className="text-[19px]">524 Broadway Street West</p>
                  <p className="text-[19px]">Yorkton, SK Canada</p>
                  <p className="text-[19px]">S3N 0P3</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-[25px]">Phone</h3>
                  <p className="text-[19px]">306-782-1224</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-[25px]">Fax</h3>
                  <p className="text-[19px]">306-783-8878</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-[25px]">Email</h3>
                  <p className="text-[19px]">trischukdental@sasktel.net</p>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Map */}
          <div id="map" className="flex w-full min-h-[500px] mt-12 lg:mt-24">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.560284494091!2d-102.49638452238771!3d51.208753571746904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52e3ad09555177bd%3A0x9257a84d2aae6d4e!2sTrischuk%20Dental!5e0!3m2!1sen!2sca!4v1715181248769!5m2!1sen!2sca"
              className="w-full h-[500px]"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
