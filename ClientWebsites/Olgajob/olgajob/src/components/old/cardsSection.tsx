"use client";
import React from "react";
import HorizontalScroll from "../animations/HorizontalScroll";

const cards = [
  {
    title: "nibh sit amet",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    svg: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z"
          fill="currentColor"
        ></path>
        <path
          d="M18 10H46L60 26L32 56L4 26L18 10Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M4 26H60"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ),
  },
  {
    title: "nibh sit amet",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    svg: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z"
          fill="currentColor"
        ></path>
        <path
          d="M18 10H46L60 26L32 56L4 26L18 10Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M4 26H60"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ),
  },
  {
    title: "nibh sit amet",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    svg: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z"
          fill="currentColor"
        ></path>
        <path
          d="M18 10H46L60 26L32 56L4 26L18 10Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M4 26H60"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ),
  },
  {
    title: "nibh sit amet",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    svg: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z"
          fill="currentColor"
        ></path>
        <path
          d="M18 10H46L60 26L32 56L4 26L18 10Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M4 26H60"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ),
  },
];

export default function CardsSection() {
  return (
    <section id="iconCards" className="flex">
      {/* Desktop */}
      <div className="hidden sm:flex w-full p-12 min-h-[100vh]">
        <div className="flex flex-row justify-between gap-8 w-full">
          {/* Left Card */}
          <div id="class_left" className="flex items-start ">
            <div
              id="cards_left"
              className="flex flex-col gap-12 sticky top-[72px] pt-12 max-w-[40ch]"
            >
              <div className="flex gap-8 flex-col">
                <p className="text-black font-medium text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lectus sit amet est placerat in egestas erat imperdiet. Diam
                  maecenas ultricies mi eget.
                </p>
                <h3
                  text-title=""
                  className="font-primary text-4xl md:text-7xl capitalize"
                >
                  proin fermentum leo vel orci porta non
                </h3>
              </div>
              <div className="flex">
                <a
                  button-style=""
                  href="/solutions"
                  className="flex flex-row justify-center gap-4 items-center border border-black max-w-60 p-4"
                >
                  <div className="btn__text--parent">Our Solutions</div>
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
          </div>

          {/* Right Card */}
          <div
            id="class_list"
            className="flex flex-col items-start justify-end overflow-clip gap-6 lg:mr-[10vw] pt-[75vh]"
          >
            {cards.map((card, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row items-center justify-between gap-4 lg:gap-12 border border-black px-4 lg:px-10 py-2 lg:py-4 max-h-[200px]"
                >
                  <div className="cards__content flex flex-col gap-1 lg:gap-2">
                    <div className="text-[20px]">
                      <div className="block text-start relative">
                        {card.title}
                      </div>
                    </div>
                    <p className="text-sm max-w-[25ch]">{card.paragraph}</p>
                  </div>
                  <div className="cards__icon">
                    <div className="svg w-embed min-w-2 max-w-16">
                      {card.svg}
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Class 1 */}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex sm:hidden w-full">
        <div className="flex flex-col justify-between gap-12 w-full">
          {/* Top Card */}
          <div className="flex px-12">
            <p className="text-black font-medium text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
              sit amet est placerat in egestas erat imperdiet. Diam maecenas
              ultricies mi eget.
            </p>
          </div>
          {/* Horizontal Scroll Section */}
          <div className={`relative h-[${cards.length}00vh] `}>
            <div
              id="horizontalScroll"
              className="flex flex-col justify-start sticky top-0 pb-12 h-[100vh] px-12 z-10 gap-2"
            >
              <h3 className="font-primary text-5xl capitalize">
                proin fermentum leo vel orci porta non
              </h3>

              {/* Button Mobile */}
              <div className="flex w-full mt-auto">
                <a
                  button-style=""
                  href="/solutions"
                  className="flex flex-row justify-center gap-4 items-center border border-black w-full p-4"
                >
                  <div className="btn__text--parent">Our Solutions</div>
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
            <div
              id="horizontalScroll"
              className="flex overflow-clip -mx-12 -mt-[100vh]"
            >
              <HorizontalScroll>
                {cards.map((card, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col-reverse items-start justify-between border border-black px-4 py-2 h-[40vh] mx-12"
                    >
                      <div className="cards__content flex flex-col gap-1 lg:gap-2">
                        <div className="text-[20px]">
                          <div className="block text-start relative">
                            {card.title}
                          </div>
                        </div>
                        <p className="text-sm">{card.paragraph}</p>
                      </div>
                      <div className="cards__icon">
                        <div className="svg w-embed min-w-2 max-w-16">
                          {card.svg}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </HorizontalScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
