"use client";
import React, { useRef } from "react";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import { Separator } from "@/components/ui/separator";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CharByCharOnScroll from "@/components/animations/CharByCharOnScroll";

interface ComponentProps {
  infoCard?: string;
  pageTitle?: string;
  details?: string;
}

const FAQ: React.FC<ComponentProps> = ({ infoCard, pageTitle, details }) => {
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
    <div
      id="faq"
      className="relative flex flex-col items-center w-full bg-white overflow-clip"
    >
      {/* Main Content */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 z-10">
        <div className="overflow-hidden pb-32 sm:pt-64 w-full">
          <div className="mx-auto flex flex-col items-center justify-center gap-x-12">
            <motion.h2
              className="mt-4 mb-20 text-3xl tracking-[2.5%] text-black sm:text-[45px] font-light"
              variants={bounceAnimation}
            >
              <CharByCharOnScroll
                shadow={true}
                lineStyles={{
                  marginTop: "0.6ch", // Custom line height
                  marginRight: "0.4ch", // Custom character spacing
                }}
                start={90}
                end={60}
              >
                General and Cosmetic{" "}
                <span className="text-[#1493A4]">Dentistry services</span>
              </CharByCharOnScroll>
            </motion.h2>

            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-y-4 w-full"
            >
              <AccordionItem value="item-1" className="rounded-xl">
                <AccordionTrigger>
                  General dentistry for all ages
                </AccordionTrigger>
                <AccordionContent>
                  Here at Haimanot Trischuk Dental clinic, our goal is to help
                  you minimize the fear and tension associated with your dental
                  care needs. Sedation dentistry can even be used for routine
                  procedures such as teeth cleaning and check-ups.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="rounded-xl">
                <AccordionTrigger>Sedation dentistry</AccordionTrigger>
                <AccordionContent>
                  Here at Haimanot Trischuk Dental clinic, our goal is to help
                  you minimize the fear and tension associated with your dental
                  care needs. Sedation dentistry can even be used for routine
                  procedures such as teeth cleaning and check-ups.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="rounded-xl">
                <AccordionTrigger>Cosmetic dentistry</AccordionTrigger>
                <AccordionContent>
                  Here at Haimanot Trischuk Dental clinic, our goal is to help
                  you minimize the fear and tension associated with your dental
                  care needs. Sedation dentistry can even be used for routine
                  procedures such as teeth cleaning and check-ups.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="rounded-xl">
                <AccordionTrigger>Dental Implants</AccordionTrigger>
                <AccordionContent>
                  Here at Haimanot Trischuk Dental clinic, our goal is to help
                  you minimize the fear and tension associated with your dental
                  care needs. Sedation dentistry can even be used for routine
                  procedures such as teeth cleaning and check-ups.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
