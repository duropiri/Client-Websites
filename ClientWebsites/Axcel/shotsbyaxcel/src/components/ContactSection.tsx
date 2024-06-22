import React from "react";
import CharByCharOnScroll from "./animations/CharByCharOnScroll";

interface ComponentProps {
  className?: string;
}

export default function ContactSection({ className }: ComponentProps) {
  return (
    <section className="relative flex flex-col items-start justify-start w-full min-h-screen bg-transparent overflow-hidden">
      {/* Header */}
      <header className="flex flex-col items-start justify-start w-full pt-4 sm:pt-10 px-4 sm:px-10 font-medium sm:font-medium z-20 text-white mix-blend-difference">
        <div className="flex flex-row items-start justify-between w-full uppercase small-text mb-6 sm:mb-[4vw] z-10">
          <CharByCharOnScroll className="-mt-1" shadow end={85}>
            Contact
          </CharByCharOnScroll>
          <p className="">[S.03]</p>
        </div>
      </header>
      <div className="flex flex-col flex-grow items-start justify-between w-full text-white mix-blend-difference px-4 sm:px-10 z-10">
        <CharByCharOnScroll
          className="flex sm:max-w-[24ch] md:translate-x-[50vw] sm:mr-[10vw] sm:items-end sm:justify-start medium-text uppercase sm:text-end"
          lineStyles={{ marginRight: "0.7ch", marginTop: "1ch" }}
          shadow
          end={80}
        >
          Keep up with the latest campaigns from Inkfish, or contact us to make
          your own.
        </CharByCharOnScroll>
        <a
          href="/contact"
          className="group mt-1 sm:mt-0 -mr-[2vw] flex flex-row large-text h-full uppercase mb-[2vw]"
          aria-label="Visit Contact Page"
        >
          <div className="flex flex-row w-full h-full items-start">
            <svg
              className="rotate-90 w-6 group-hover:-rotate-0 duration-300"
              fill="none"
              viewBox="0 0 9 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m8.31628 7.1891-8.31628 4.8014.00000042-9.6028z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="md:group-hover:translate-x-2 duration-300 md:font-semibold">
              Contact
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
