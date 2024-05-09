"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface ComponentProps {
  infoCard?: string;
  pageTitle?: string;
  details?: object;
  people?: Person[];
}

interface Person {
  name: string;
  jobTitle: string;
  imageSrc: string;
}

const About: React.FC<ComponentProps> = ({
  infoCard,
  pageTitle,
  details,
  people,
}) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);

  return (
    <div className="relative flex flex-col items-center w-full bg-[#1493A4] overflow-x-clip">
      {/* Main Content */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-16 mb-56 ">
        {/* Info */}
        <div className="flex flex-col lg:flex-row w-full xl:w-auto gap-y-16 pt-12 xl:pt-32 z-10 text-white gap-x-8">
          <div className="flex flex-col gap-12 lg:max-w-[50%]">
            {/* Info Heading */}
            <h2 className="text-3xl font-regular tracking-tight leading-snug sm:text-[37px]">
              regular examinations are critical in preventative children&apos;s
              dentistry
            </h2>
            <p className="text-[16px] leading-8">
              {details ? (
                <>{details}</>
              ) : (
                <>
                  Similar to adults, your child should visit us for routine
                  children's dentistry services, which include checkups and
                  cleanings. These cleanings are most beneficial every six
                  months. Regular children's dentistry exams help your child,
                  you, and us prevent unnecessary cavities, tooth decay, and gum
                  disease. Just like a dental cleaning for you, at Haimanot
                  Trischuk Dental Clinic, we will remove damaging plaque and
                  debris from your child's teeth. We always include an oral exam
                  for your child to ensure their teeth are erupting properly. As
                  your child grows older, we will also monitor their adult teeth
                  to ensure they are coming in correctly.
                </>
              )}
            </p>
          </div>
          <div className="flex flex-col gap-12 lg:max-w-[50%]">
            {/* Info Heading */}
            <h2 className="text-3xl font-regular tracking-tight leading-snug sm:text-[37px]">
              simple tips to help avoid tooth decay
            </h2>
            <div className="text-[16px] leading-8">
              {details ? (
                <>{details}</>
              ) : (
                <>
                  <span>
                    As a parent, you can take early preventative measures to
                    protect your child against tooth decay, even before their
                    first dental visit:
                  </span>
                  <ol className="list-decimal pl-8">
                    <li>
                      <span>
                        Make an effort to rinse your baby's teeth with water or
                        gently wipe them down with a damp cloth after feeding,
                        especially before they fall asleep. Any residue from
                        milk or formula can promote decay. Untreated cavities
                        can cause discomfort and potentially lead to a harmful
                        infection.
                      </span>
                    </li>
                    <li>
                      Aim to wean your child off breastfeeding or bottle-feeding
                      by their first birthday. This effort helps prevent decay
                      and reduces the risk of jaw growth problems resulting from
                      excessive sucking.
                    </li>
                    <li>
                      Establish good habits from the start. Begin brushing their
                      teeth as soon as the first tooth appears. Even the tiniest
                      tooth can develop a cavity. Use a soft-bristled brush and
                      water, and consult us about when to introduce a small
                      amount of toothpaste.
                    </li>
                    <li>
                      When your child is old enough to start brushing on their
                      own, continue to supervise their brushing and assist them
                      in cleaning any areas they might have missed.
                    </li>
                    <li>
                      Avoid giving sugary drinks or milk before bedtime as part
                      of proper dental care.
                    </li>
                    <li>
                      Limit the consumption of sugary foods and drinks in your
                      child's diet.
                    </li>
                  </ol>
                </>
              )}
            </div>
          </div>
        </div>

        {/* People */}
        <div className="flex flex-col sm:flex-row justify-between w-full pt-12 xl:pt-32 z-10 text-white gap-x-8 gap-y-12">
          {people ? (
            people.map((person) => (
              <div className="flex flex-col items-center gap-2 sm:gap-12 w-full lg:max-w-[50%]">
                {/* Headshot */}
                <div className="relative w-full max-w-[631px] h-[300px] xl:h-[494px] rounded-3xl overflow-hidden">
                  <Image
                    src={person.imageSrc}
                    alt={person.name}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    className="opacity-70 xl:opacity-100"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 749px"
                  />
                </div>
                {/* Name Card */}
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-3xl font-semibold leading-snug sm:text-[64px]">
                    {person.name}
                  </h2>
                  <h2 className="text-2xl pt-6 leading-snug sm:text-[32px] text-center">
                    {person.jobTitle}
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="flex flex-col items-center gap-2 sm:gap-12 w-full lg:max-w-[50%]">
                {/* Headshot */}
                <div className="relative w-full max-w-[631px] h-[300px] xl:h-[494px] rounded-3xl overflow-hidden">
                  <Image
                    src="/img/Rectangle 113 (1).png"
                    alt=""
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 749px"
                  />
                </div>
                {/* Name Card */}
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-3xl font-semibold leading-snug sm:text-[64px]">
                    Megan N
                  </h2>
                  <h2 className="text-2xl pt-6 leading-snug sm:text-[32px] text-center">
                    Dental Assistant
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-12 w-full lg:max-w-[50%]">
                {/* Headshot */}
                <div className="relative w-full max-w-[631px] h-[300px] xl:h-[494px] rounded-3xl overflow-hidden">
                  <Image
                    src="/img/Rectangle 108.png"
                    alt=""
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 749px"
                  />
                </div>
                {/* Name Card */}
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-3xl font-semibold leading-snug sm:text-[64px]">
                    Tori S
                  </h2>
                  <h2 className="text-2xl pt-6 leading-snug sm:text-[32px] text-center">
                    Registered Dental Hygienist
                  </h2>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
