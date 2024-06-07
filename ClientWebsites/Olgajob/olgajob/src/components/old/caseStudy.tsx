import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel"; // Adjust the import path as needed
import { Card, CardContent } from "@/components/ui/card"; // Adjust the import path as needed

const CaseStudy: React.FC = () => {
  const caseStudies = [
    {
      title: "A Digital Platform to Unify Employee Health",
      description:
        "Significo created a unified, user-centric platform that streamlines health management and enhances employee well-being.",
      link: "/casestudies/a-digital-platform-to-unify-employee-health-and-wellbeing-tools",
      img: "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/6642796850b7b15735eb52fd_Untitled%20design-9.png",
    },
    {
      title: "Stop Smoking App for a Major Insurance Provider",
      description:
        "Significo built an app for a major insurance company designed to help insured users in quitting smoking.",
      link: "/casestudies/stop-smoking-app-for-a-major-insurance-provider",
      img: "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/6644f38f222464945e3f8a39_Untitled%20design-11.png",
    },
    {
      title:
        "Digital Engagement Platform for Mid-Sized Health Insurance Company",
      description:
        "Significo helped an insurance partner to offer a personalized experience and boost engagement with their digital platform by integrating personalized health recommendation content.",
      link: "/casestudies/digital-engagement-platform-for-mid-sized-health-insurance-company",
      img: "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/6644f414a0342488fb689d24_Untitled%20design-12.png",
    },
    {
      title: "A Smart Health and Wellness Coach for a Large Insurance Company",
      description:
        "Significo developed a digital personal coach providing tailored fitness, nutrition, and relaxation advice, all based on scientific principles to enhance health and wellbeing.",
      link: "/casestudies/a-smart-health-and-wellness-coach-for-a-large-insurance-company",
      img: "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/6644f35fe5aead2d9d274917_Untitled%20design-10.png",
    },
  ];

  return (
    <section className="flex flex-col items-center relative py-12 min-h-[100vh] overflow-hidden">
      <div className="container">
        <div className="mt-4 mb-20">
          <div className="">
            <div className="flex flex-row items-center justify-start gap-6">
              <div className="bg-black w-4 h-4 rounded-full"></div>
              <div className="uppercase text-base">category:</div>
            </div>
          </div>
          <div className="" mob-reverse="">
            <div className="">
              <h3 text-title="" className="text-6xl">
                <div
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      transform: "translate3d(0px, 0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    Case Study
                  </div>
                </div>
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Carousel className="w-full overflow-hidden outline outline-1 p-0">
            <CarouselContent className="flex w-full h-full p-0">
              {caseStudies.map((study, index) => (
                <CarouselItem
                  key={index}
                  className="flex items-center justify-between basis-auto p-0 w-full"
                >
                  <div className="flex items-center justify-between w-full p-0">
                    <Card className="flex items-center justify-between w-full p-0">
                      <CardContent className="relative flex flex-row items-center justify-between gap-40 w-full p-24">
                        <div className="flex flex-col items-start gap-12 w-1/2 max-w-[40ch]">
                          <div className="flex flex-col gap-3">
                            <h4 className="text-2xl font-bold">
                              {study.title}
                            </h4>
                            <p className="mt-2 text-lg">{study.description}</p>
                          </div>
                          <div className="flex bg-[#f5f19c]">
                            <a
                              button-style=""
                              href="/solutions"
                              className="flex flex-row justify-center gap-4 items-center border border-black max-w-60 p-4"
                            >
                              <div className="btn__text--parent">
                                Our Solutions
                              </div>
                              <div className="max-w-[20px]">
                                <div className="svg w-embed">
                                  <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 19 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5.53848 13.7123L12.9631 6.28769M12.9631 6.28769V13.7123M12.9631 6.28769H5.53848"
                                      stroke="currentColor"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="relative flex items-center justify-center aspect-square w-[30vw]">
                          <div className="flex h-full w-full overflow-hidden">
                            <img
                              src={study.img}
                              alt={study.title}
                              className="w-full h-full object-cover rounded-full"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex flex-row items-center justify-between outline outline-1">
              <CarouselPrevious className="flex flex-col p-2 w-[5vw] h-[5vw] outline outline-1" />
              <CarouselDots className="flex flex-row flex-grow h-[5vw]" />
              <CarouselNext className="flex flex-col p-2 w-[5vw] h-[5vw] outline outline-1" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
