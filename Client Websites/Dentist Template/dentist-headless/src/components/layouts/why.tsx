"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface ComponentProps {
  infoCard?: string;
  pageTitle?: string;
  details?: string;
}

const Why: React.FC<ComponentProps> = ({ infoCard, pageTitle, details }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);

  const renderTitle = (title: string) => {
    const words = title.split(" ");
    // Map over words to apply conditional styling
    const formattedWords = words.map((word, index) => {
      // Check if the word is 'dentistry' or it is the second word (index 1)
      if (word.toLowerCase() === "dentistry" || index === 1) {
        return <span className="text-[#1493A4]">{word}</span>;
      }
      return word;
    });

    // Join the words with spaces to form the complete title
    return (
      <>
        {formattedWords.reduce(
          (prev, curr, index) => (
            <>
              {prev}
              {index > 0 ? " " : ""}
              {curr}
            </>
          ),
          ""
        )}
      </>
    );
  };

  return (
    <div className="relative flex flex-col items-center w-full bg-[#E5F6F9] overflow-clip py-24">
      {/* SVG Decorations */}
      <div className="relative overflow-x-clip w-full h-full">
        {/* Circle */}
        <div className="absolute w-[1200px] -mt-[500px] top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none">
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
        <div className="overflow-hidden py-24 sm:py-32 w-full">
          <div className="mx-auto flex flex-col lg:flex-row justify-between gap-x-12">
            {/* Info */}
            <div className="w-full">
              <h2 className="mt-4 text-5xl tracking-[2.5%] text-[#1493A4] sm:text-[45px] leading-snug max-w-[30ch]">
                {pageTitle ? (
                  renderTitle(pageTitle)
                ) : (
                  <>
                    Why is Haimanot Trischuk dental clinic your perfect
                    pediatric dentist?
                  </>
                )}
              </h2>
              <p className="mt-12 text-[16px] leading-8 text-black">
                {details ? (
                  <>{details}</>
                ) : (
                  <>
                    An essential aspect of pediatric dentistry is finding the
                    best dentist for both you and your child. It's crucial to
                    ensure that you select a dental team qualified to provide
                    proper pediatric dentistry consistently. Additionally, it's
                    beneficial to choose a pediatric dentist who is skilled in
                    working with children and is friendly. The entire team at
                    Haimanot Trischuk Dental clinic embodies these qualities. We
                    understand that dental appointments can be challenging for
                    children, which is why our team is dedicated to ensuring
                    their comfort throughout every visit
                    <br />
                    <br />
                    If you'd like to meet our family-friendly staff at Haimanot
                    Trischuk Dental clinic , we recommend scheduling an
                    appointment for yourself before your child's visit. This
                    will provide you with a firsthand experience of how we
                    operate, our mindfulness, the quality of our services, and
                    our overall demeanor. This experience will help define your
                    comfort zone when scheduling an appointment for your child.
                    Furthermore, scheduling your child's checkup and cleaning
                    allows us to establish a historical growth path. We are
                    dedicated to providing high-quality dental services for your
                    child, all delivered with a friendly smile.
                    <br />
                    <br />
                    One of the additional benefits of choosing Haimanot Trischuk
                    Dental Clinic is that your child can maintain the same
                    dental team as they transition from childhood to their
                    teenage and adult years. They can continue to visit us, a
                    team they know and trust.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Decorations */}
      <div className="relative overflow-x-clip w-full h-full">
        {/* Circle */}
        <div className="absolute w-[1200px] mt-[550px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none">
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
    </div>
  );
};

export default Why;
