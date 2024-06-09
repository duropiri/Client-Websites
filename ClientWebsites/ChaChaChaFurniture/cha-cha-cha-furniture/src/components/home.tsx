"use client";

import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useEmblaCarousel from "embla-carousel-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <header className="flex flex-col items-start justify-between w-full h-full z-[999]">
      <div className="flex flex-row items-center justify-center w-full h-[50px] bg-black z-10"></div>
      <nav className="flex flex-row items-center justify-center lg:justify-between w-full h-[65px] bg-white">
        <div className="hidden lg:flex flex-row items-center justify-center h-full gap-24 uppercase px-24">
          <a href="#bundle">
            <p>The Bundle</p>
          </a>
          <a href="#reviews">
            <p>Reviews</p>
          </a>
        </div>
        <div className="relative flex flex-row items-center justify-center h-full top-3">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              width="308"
              height="114"
              viewBox="0 0 308 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-2xl"
            >
              <path
                d="M0 0.656738L83.9964 84.6532C122.658 123.315 185.342 123.315 224.004 84.6532L308 0.656738H0Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center z-10 pointer-events-none">
            <a href="/">
              <Image
                alt="logo"
                src="/images/logo.png"
                width={174.5}
                height={69.8}
              />
            </a>
          </div>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-center h-full gap-24 uppercase px-24">
          <a href="#compare">
            <p>Compare</p>
          </a>
          <a href="#shop">
            <p>Shop now</p>
          </a>
        </div>
        {/* Mobile Menu */}
        <div className="flex flex-row items-center justify-center absolute lg:hidden right-8">
          <svg
            width="28"
            height="19"
            viewBox="0 0 28 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.24585 1.56398C7.24585 0.970157 7.72724 0.48877 8.32106 0.48877H26.9247C27.5185 0.48877 27.9999 0.970157 27.9999 1.56398C27.9999 2.1578 27.5185 2.63919 26.9247 2.63919H8.32106C7.72724 2.63919 7.24585 2.1578 7.24585 1.56398Z"
              fill="#2D2D2D"
            />
            <path
              d="M0.75 9.71437C0.75 9.12055 1.23139 8.63916 1.82521 8.63916H26.9247C27.5185 8.63916 27.9999 9.12055 27.9999 9.71437C27.9999 10.3082 27.5185 10.7896 26.9247 10.7896H1.82521C1.23139 10.7896 0.75 10.3082 0.75 9.71437Z"
              fill="#2D2D2D"
            />
            <path
              d="M7.24585 17.8648C7.24585 17.2709 7.72724 16.7896 8.32106 16.7896H26.9247C27.5185 16.7896 27.9999 17.2709 27.9999 17.8648C27.9999 18.4586 27.5185 18.94 26.9247 18.94H8.32106C7.72724 18.94 7.24585 18.4586 7.24585 17.8648Z"
              fill="#2D2D2D"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
});
Header.displayName = "Header";

const Hero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <section className="flex flex-col xl:flex-row items-start justify-center w-full h-auto bg-[#EBF9FC]">
      {/* Left Content */}
      <div className="relative flex flex-col items-center justify-center xl:w-[50vw] w-full h-full">
        <div className="relative flex flex-col items-center justify-center w-full xl:min-w-[50vw] min-h-[100vw] md:min-h-[738px] overflow-hidden">
          <Image
            alt="hero-content"
            src="/images/hero-image.png"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="relative flex flex-col items-center justify-center xl:w-[50vw] w-full h-full">
        <div className="relative flex flex-col items-center justify-center w-full min-w-[100vw] xl:min-w-[50vw] min-h-[738px] overflow-hidden">
          <div className="flex flex-col items-center justify-center w-[100vw] xl:w-[50vw] h-full absolute xl:pointer-events-none">
            <Image
              alt="hero-content"
              src="/images/hero-right.png"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-10 py-6 px-16">
            <h2 className="text-4xl text-center max-w-[20ch]">
              Turn Your Bath into a{" "}
              <span className="font-bold">Five-Star Spa Experience</span>
            </h2>
            <ul className="flex flex-col items-center justify-center gap-6 max-w-[36ch]">
              <li className="flex flex-row items-center justify-start gap-10">
                <div className="flex flex-col w-[50px]">
                  <svg
                    width="49"
                    height="47"
                    viewBox="0 0 49 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3.99175"
                      y="1.53277"
                      width="40.4559"
                      height="11.992"
                      rx="5.67077"
                      stroke="#577C84"
                      stroke-width="1.62022"
                    />
                    <rect
                      x="13.9898"
                      y="21.1314"
                      width="3.03451"
                      height="3.0882"
                      rx="1.51725"
                      stroke="#577C84"
                      stroke-width="1.62022"
                    />
                    <rect
                      x="14.8199"
                      y="28.8492"
                      width="3.03451"
                      height="3.0882"
                      rx="1.51725"
                      stroke="#577C84"
                      stroke-width="1.62022"
                    />
                    <rect
                      x="25.6109"
                      y="21.1314"
                      width="3.03451"
                      height="3.0882"
                      rx="1.51725"
                      stroke="#577C84"
                      stroke-width="1.62022"
                    />
                    <rect
                      x="25.0308"
                      y="28.8492"
                      width="3.03451"
                      height="3.0882"
                      rx="1.51725"
                      stroke="#577C84"
                      stroke-width="1.62022"
                    />
                    <path
                      d="M5.01151 20.6403C4.53641 17.2302 7.18501 14.1871 10.628 14.1871H40.2935C42.4249 14.1871 44.0645 16.0709 43.7704 18.1819L41.4546 34.8042C41.0642 37.6067 38.6676 39.6925 35.8381 39.6925H12.6013C9.77181 39.6925 7.37526 37.6067 6.98482 34.8042L5.01151 20.6403Z"
                      stroke="#577C84"
                      stroke-width="1.62022"
                    />
                    <path
                      d="M38.6694 1.42285C37.2313 3.45349 35.2179 8.78378 38.6694 13.8598"
                      stroke="#577C84"
                      stroke-width="1.62022"
                    />
                    <path
                      d="M38.5538 14.0981C35.221 14.2322 35.0063 30.0991 36.3839 39.4945"
                      stroke="#577C84"
                      stroke-width="1.62022"
                    />
                  </svg>
                </div>
                <p>Get support for your neck, back, and shoulders.</p>
              </li>
              <li className="flex flex-row items-center justify-start gap-10">
                <div className="flex flex-col w-[50px]">
                  <svg
                    width="55"
                    height="47"
                    viewBox="0 0 55 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M53.8628 23.5896H51.1545V7.72789C51.1523 5.72686 50.3564 3.80843 48.9415 2.39346C47.5266 0.978483 45.6082 0.182517 43.6072 0.180176H41.4217C41.3275 0.180176 41.2341 0.19874 41.1471 0.23481C41.06 0.270879 40.9809 0.323746 40.9142 0.390393C40.8476 0.457041 40.7947 0.536162 40.7586 0.623241C40.7226 0.71032 40.704 0.80365 40.704 0.897904C40.704 0.992157 40.7226 1.08549 40.7586 1.17257C40.7947 1.25964 40.8476 1.33877 40.9142 1.40541C40.9809 1.47206 41.06 1.52493 41.1471 1.561C41.2341 1.59707 41.3275 1.61563 41.4217 1.61563H43.6072C45.2276 1.61754 46.7812 2.26213 47.927 3.408C49.0728 4.55387 49.7173 6.10744 49.7191 7.72789V23.5896C32.2144 23.5896 15.7873 23.5896 1.69429 23.5896C1.50394 23.5896 1.32138 23.6652 1.18678 23.7998C1.05218 23.9344 0.976562 24.117 0.976562 24.3074C0.976562 24.4977 1.05218 24.6803 1.18678 24.8149C1.32138 24.9495 1.50394 25.0251 1.69429 25.0251H4.4026V33.8467C4.40473 35.7486 5.16123 37.572 6.50612 38.9169C7.85102 40.2617 9.67447 41.0181 11.5764 41.0201H12.6686C12.4965 42.1441 11.928 43.1694 11.066 43.9108C10.2039 44.6523 9.10513 45.0609 7.9681 45.063H6.55719C6.36683 45.063 6.18428 45.1386 6.04968 45.2732C5.91508 45.4078 5.83946 45.5904 5.83946 45.7807C5.83946 45.9711 5.91508 46.1536 6.04968 46.2882C6.18428 46.4228 6.36683 46.4984 6.55719 46.4984H7.96812C9.48613 46.4961 10.9506 45.9373 12.0842 44.9277C13.2178 43.918 13.9418 42.5278 14.1191 41.0201H41.4388C41.6161 42.5278 42.3401 43.918 43.4737 44.9277C44.6072 45.9373 46.0717 46.4962 47.5897 46.4984H49.0006C49.191 46.4984 49.3736 46.4228 49.5082 46.2882C49.6428 46.1536 49.7184 45.9711 49.7184 45.7807C49.7184 45.5904 49.6428 45.4078 49.5082 45.2732C49.3736 45.1386 49.191 45.063 49.0006 45.063H47.5897C46.4527 45.0609 45.3539 44.6523 44.4918 43.9109C43.6298 43.1694 43.0613 42.1441 42.8892 41.0202H43.9814C45.8832 41.018 47.7065 40.2615 49.0513 38.9167C50.3961 37.5719 51.1524 35.7485 51.1545 33.8467V25.0251H53.8628C54.0532 25.0251 54.2358 24.9495 54.3703 24.8149C54.505 24.6803 54.5806 24.4977 54.5806 24.3074C54.5806 24.117 54.505 23.9344 54.3703 23.7998C54.2358 23.6652 54.0532 23.5896 53.8628 23.5896ZM49.7191 33.8467C49.7174 35.368 49.1124 36.8264 48.0367 37.9021C46.9611 38.9778 45.5027 39.5829 43.9814 39.5847H11.5764C10.0551 39.5829 8.59656 38.9779 7.52079 37.9022C6.44503 36.8265 5.83986 35.368 5.83805 33.8467V25.0251H49.7191V33.8467Z"
                      fill="#577C84"
                    />
                    <line
                      x1="5.22852"
                      y1="27.2148"
                      x2="50.2576"
                      y2="27.2148"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <path
                      d="M5.36419 24.0301C4.50166 23.2025 2.03155 20.8127 3.39768 20.1503C5.10534 19.3222 5.46774 18.8054 6.81288 20.1503C7.889 21.2262 9.64113 23.1851 10.3827 24.0301"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <path
                      d="M19.9516 23.9968C19.9516 21.4343 17.8742 19.3569 15.3117 19.3569C12.7492 19.3569 10.6719 21.4343 10.6719 23.9968"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <path
                      d="M33.1211 24.0303L39.5065 16.5033"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <path
                      d="M24.7864 2.99072C25.1681 4.61353 24.7287 7.85915 19.918 7.85915"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <path
                      d="M24.7864 12.7275C25.1681 11.1047 24.7287 7.85911 19.918 7.85911"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <path
                      d="M25.2449 2.99072C24.8632 4.61353 25.3025 7.85915 30.1133 7.85915"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <path
                      d="M25.2449 12.7275C24.8632 11.1047 25.3025 7.85911 30.1133 7.85911"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <path
                      d="M11.7115 7.85889C11.9694 8.95544 11.6726 11.1485 8.42188 11.1485"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <path
                      d="M11.7115 14.439C11.9694 13.3424 11.6726 11.1493 8.42188 11.1493"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <path
                      d="M12.0209 7.85889C11.763 8.95544 12.0599 11.1485 15.3105 11.1485"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <path
                      d="M12.0209 14.439C11.763 13.3424 12.0599 11.1493 15.3105 11.1493"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
                <p>Reduce stress, lift your mood, and sleep better</p>
              </li>
              <li className="flex flex-row items-center justify-start gap-10">
                <div className="flex flex-col w-[50px]">
                  <svg
                    width="65"
                    height="46"
                    viewBox="0 0 65 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.39844 23.061C4.05397 29.2581 10.7692 41.6522 24.3859 41.6522H41.4069C43.0078 41.7433 46.5834 42.6023 48.0776 45.3096M21.7948 41.4742C20.4606 41.587 17.4988 42.3992 16.3247 44.7456M62.9055 23.061C61.25 29.2581 54.5347 41.6522 40.918 41.6522"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <path
                      d="M19.7442 2.82666C19.7442 2.1363 20.3038 1.57666 20.9942 1.57666H44.2816C44.9719 1.57666 45.5316 2.1363 45.5316 2.82666V19.0574C45.5316 19.7503 44.968 20.311 44.2751 20.3074L20.9877 20.1872C20.2999 20.1836 19.7441 19.625 19.7441 18.9372L19.7442 2.82666Z"
                      fill="#F5F4F0"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <rect
                      x="1.25586"
                      y="20.001"
                      width="62.7651"
                      height="3.2128"
                      rx="1.25"
                      fill="#F5F4F0"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <line
                      x1="41.668"
                      y1="1.82324"
                      x2="41.668"
                      y2="19.4467"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <circle
                      cx="43.6391"
                      cy="10.9472"
                      r="0.78361"
                      fill="#577C84"
                    />
                    <path
                      d="M10.7374 15.1891V19.4277M10.7374 15.1891C7.72134 14.1968 6.75702 12.9181 6.25195 9.16627M10.7374 15.1891C13.8395 13.6939 14.8729 12.3345 15.1241 9.16627M6.25195 9.16627C7.88073 10.5282 11.9355 12.435 15.1241 9.16627M6.25195 9.16627C9.93422 6.77813 13.701 8.17121 15.1241 9.16627"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
                <p>
                  Get a place to store your favorite refreshments and
                  entertainment.
                </p>
              </li>
              <li className="flex flex-row items-center justify-start gap-10">
                <div className="flex flex-col w-[50px]">
                  <svg
                    width="68"
                    height="51"
                    viewBox="0 0 68 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.52117"
                      y="31.4577"
                      width="62.3924"
                      height="20.5392"
                      rx="3.25"
                      transform="rotate(-28.1849 1.52117 31.4577)"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <path
                      d="M20.0631 15.7671C19.5099 15.1661 19.6724 14.2046 20.3924 13.8187L31.3344 7.95541C32.0581 7.56758 32.9529 7.97103 33.1414 8.77021L34.7739 15.6907C34.9046 16.2449 34.6442 16.8174 34.1406 17.0832L26.3322 21.2037C25.8305 21.4684 25.2134 21.3621 24.8292 20.9447L20.0631 15.7671Z"
                      fill="#F5F4F0"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <path
                      d="M46.0661 11.9851L53.8811 7.79735C54.4896 7.47128 55.2472 7.70024 55.5733 8.30873L60.5129 17.5269C60.8389 18.1354 60.61 18.893 60.0015 19.2191L52.1865 23.4068L46.0661 11.9851Z"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <path
                      d="M24.3127 26.8881C23.9867 26.2796 24.2156 25.522 24.8241 25.1959L39.4928 17.3357C40.1013 17.0096 40.8589 17.2385 41.1849 17.847L45.5335 25.9623C45.8596 26.5708 45.6306 27.3284 45.0221 27.6545L30.3535 35.5147C29.745 35.8408 28.9874 35.6118 28.6613 35.0033L24.3127 26.8881Z"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <line
                      x1="30.4704"
                      y1="22.483"
                      x2="35.649"
                      y2="32.1933"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <line
                      x1="37.3083"
                      y1="18.7511"
                      x2="42.4868"
                      y2="28.4614"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <line
                      x1="34.2047"
                      y1="20.9479"
                      x2="39.3833"
                      y2="30.6582"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <line
                      x1="27.0407"
                      y1="24.0592"
                      x2="32.2193"
                      y2="33.7695"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <line
                      x1="10.7716"
                      y1="26.3914"
                      x2="21.014"
                      y2="44.4633"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                    <circle
                      cx="19.2161"
                      cy="29.2664"
                      r="2.74145"
                      fill="#F5F4F0"
                      stroke="#577C84"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
                <p>Universally designed products that fit any tub surface</p>
              </li>
              <a
                href="/"
                className="relative flex flex-col items-center justify-center bg-[#577C84] w-full py-4 rounded-lg mt-8 overflow-hidden"
              >
                <svg
                  width="425"
                  height="45"
                  viewBox="0 0 425 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full absolute bottom-0 pointer-events-none"
                >
                  <path
                    d="M57.5225 11.2547C30.2087 -1.26413 8.20554 7.93534 0.618186 14.0999L0.320682 14.5229C0.224601 18.0778 0.0900884 27.1709 0.320682 35.1033C0.551276 43.0358 7.33458 44.9239 10.6974 44.8764C141.617 44.8662 405.653 44.852 414.44 44.8764C423.227 44.9008 425.001 37.9869 424.789 34.5269V17.4192C402.739 27.8515 381.637 18.1305 367.886 10.7804C354.134 3.43035 325.919 3.43035 298.415 14.8111C270.912 26.1919 252.892 23.821 205.235 6.98697C167.11 -6.48028 136.081 2.64015 125.333 8.88377C114.11 14.8903 84.8363 23.7735 57.5225 11.2547Z"
                    fill="#4A737B"
                  />
                </svg>

                <div className="flex flex-col z-10">
                  <p className="text-white">Make My Bath Better</p>
                </div>
              </a>
            </ul>
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-8">
              <div className="flex flex-row items-center justify-center gap-3">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12.3656"
                    cy="12.5883"
                    r="12.0863"
                    fill="#7FBAC6"
                  />
                  <path
                    d="M6.00781 12.9465L10.0085 16.9465L18.7245 8.23047"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
                <p>30-day satisfaction guaranteed</p>
              </div>

              <div className="flex flex-row items-center justify-center gap-3">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12.3201" cy="12.4167" r="12.2576" fill="white" />
                  <path
                    d="M15.2988 24.3091C15.9349 24.1505 16.5551 23.9415 17.156 23.6831C17.2435 23.6454 17.2997 23.5586 17.2997 23.4633V18.4019C17.2997 18.2697 17.1925 18.1625 17.0603 18.1625H15.2408C15.1086 18.1625 15.0014 18.2697 15.0014 18.4019V24.0764C15.0014 24.2321 15.1478 24.3468 15.2988 24.3091Z"
                    fill="#7FBAC6"
                  />
                  <path
                    d="M24.5776 12.4167C24.5776 11.017 24.3465 9.6586 23.8909 8.36203C23.8573 8.26656 23.7663 8.20321 23.6651 8.20321H0.975019C0.873846 8.20321 0.782776 8.26656 0.749259 8.36203C0.293718 9.65851 0.0625 11.0169 0.0625 12.4167C0.0625 13.8165 0.29367 15.1749 0.749259 16.4715C0.782824 16.5669 0.873846 16.6303 0.975019 16.6303H23.6651C23.7663 16.6303 23.8574 16.5669 23.8909 16.4715C24.3464 15.175 24.5776 13.8166 24.5776 12.4167ZM8.48958 13.1828C8.48958 14.4501 7.45855 15.4811 6.19128 15.4811C4.92401 15.4811 3.89299 14.4501 3.89299 13.1828V10.1185C3.89299 9.69538 4.23601 9.35236 4.65909 9.35236C5.08217 9.35236 5.42519 9.69538 5.42519 10.1185V13.1828C5.42519 13.6053 5.76888 13.9489 6.19128 13.9489C6.61369 13.9489 6.95738 13.6053 6.95738 13.1828V10.1185C6.95738 9.69538 7.3004 9.35236 7.72348 9.35236C8.14656 9.35236 8.48958 9.69538 8.48958 10.1185V13.1828ZM11.937 11.6507H12.7031C13.7592 11.6507 14.6184 12.5098 14.6184 13.5659C14.6184 14.622 13.7592 15.4811 12.7031 15.4811H10.7879C10.3648 15.4811 10.0218 15.1381 10.0218 14.715C10.0218 14.292 10.3648 13.9489 10.7879 13.9489H12.7031C12.9143 13.9489 13.0862 13.7771 13.0862 13.5659C13.0862 13.3547 12.9143 13.1828 12.7031 13.1828H11.937C10.881 13.1828 10.0218 12.3237 10.0218 11.2676C10.0218 10.2115 10.881 9.35236 11.937 9.35236H13.8523C14.2754 9.35236 14.6184 9.69538 14.6184 10.1185C14.6184 10.5415 14.2754 10.8846 13.8523 10.8846H11.937C11.7258 10.8846 11.554 11.0564 11.554 11.2676C11.554 11.4788 11.7258 11.6507 11.937 11.6507ZM19.944 15.4803C19.532 15.4609 19.215 15.1059 19.215 14.6934V14.1883C19.215 14.0561 19.1077 13.9489 18.9755 13.9489H17.9222C17.79 13.9489 17.6828 14.0561 17.6828 14.1883V14.6934C17.6828 15.1059 17.3657 15.4609 16.9537 15.4803C16.5137 15.501 16.1506 15.1504 16.1506 14.715V11.6892C16.1506 10.4307 17.1462 9.37658 18.4045 9.35274C19.692 9.32837 20.7471 10.3686 20.7471 11.6507V14.715C20.7471 15.1504 20.384 15.501 19.944 15.4803Z"
                    fill="#7FBAC6"
                  />
                  <path
                    d="M7.48412 23.6831C8.08503 23.9415 8.70523 24.1505 9.34129 24.3091C9.49235 24.3467 9.63868 24.232 9.63868 24.0764V18.4019C9.63868 18.2697 9.53147 18.1625 9.39927 18.1625H7.57979C7.44759 18.1625 7.34038 18.2697 7.34038 18.4019V23.4633C7.34043 23.5586 7.39664 23.6454 7.48412 23.6831Z"
                    fill="#7FBAC6"
                  />
                  <path
                    d="M18.4103 10.8855C17.9987 10.9058 17.6828 11.2608 17.6828 11.6729V12.1773C17.6828 12.3095 17.79 12.4167 17.9222 12.4167H18.9755C19.1077 12.4167 19.215 12.3095 19.215 12.1773V11.6507C19.215 11.2154 18.8501 10.8638 18.4103 10.8855Z"
                    fill="#7FBAC6"
                  />
                  <path
                    d="M13.2298 18.1625H11.4103C11.2781 18.1625 11.1709 18.2697 11.1709 18.4019V24.4C11.1709 24.5256 11.2682 24.6295 11.3935 24.639C11.7019 24.6622 12.0113 24.6743 12.3201 24.6743C12.6289 24.6743 12.9383 24.6622 13.2467 24.639C13.372 24.6295 13.4692 24.5256 13.4692 24.4V18.4019C13.4692 18.2697 13.362 18.1625 13.2298 18.1625Z"
                    fill="#7FBAC6"
                  />
                  <path
                    d="M5.56883 18.1625H1.8952C1.71033 18.1625 1.59637 18.3624 1.68845 18.5227C2.61595 20.1378 3.89093 21.5119 5.43333 22.5586C5.59272 22.6668 5.80824 22.5535 5.80824 22.3609V18.4019C5.80824 18.2697 5.70103 18.1625 5.56883 18.1625Z"
                    fill="#7FBAC6"
                  />
                  <path
                    d="M22.7443 6.67101C22.9291 6.67101 23.0432 6.47101 22.9511 6.3108C21.971 4.607 20.5942 3.15965 18.9287 2.09161C16.9573 0.827409 14.672 0.15918 12.3201 0.15918C9.9681 0.15918 7.68288 0.827409 5.71147 2.09161C4.04607 3.1596 2.66929 4.60686 1.68907 6.3108C1.5969 6.47101 1.71105 6.67101 1.89592 6.67101H22.7443ZM16.9167 3.98967C17.3398 3.98967 17.6828 4.33264 17.6828 4.75577C17.6828 5.17889 17.3398 5.52187 16.9167 5.52187C16.4935 5.52187 16.1506 5.17889 16.1506 4.75577C16.1506 4.33264 16.4935 3.98967 16.9167 3.98967ZM12.3201 3.22357C12.7432 3.22357 13.0862 3.56654 13.0862 3.98967C13.0862 4.4128 12.7432 4.75577 12.3201 4.75577C11.8969 4.75577 11.554 4.4128 11.554 3.98967C11.554 3.56654 11.8969 3.22357 12.3201 3.22357ZM7.72348 3.98967C8.14661 3.98967 8.48958 4.33264 8.48958 4.75577C8.48958 5.17889 8.14661 5.52187 7.72348 5.52187C7.30035 5.52187 6.95738 5.17889 6.95738 4.75577C6.95738 4.33264 7.30035 3.98967 7.72348 3.98967Z"
                    fill="#7FBAC6"
                  />
                  <path
                    d="M18.8319 18.4019V22.3609C18.8319 22.5535 19.0475 22.6668 19.2068 22.5586C20.7492 21.5119 22.024 20.1379 22.9516 18.5227C23.0437 18.3624 22.9297 18.1625 22.7449 18.1625H19.0713C18.9391 18.1625 18.8319 18.2697 18.8319 18.4019Z"
                    fill="#7FBAC6"
                  />
                </svg>
                <p>4-7 Days Delivery From USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
Hero.displayName = "Hero";

const Testimonials = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-auto bg-white border-y">
      <div className="flex flex-col xl:flex-row items-center justify-center mx-auto h-full w-full p-4 gap-5">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-center gap-5">
          <p className="mt-[5px] text-center xl:text-start">
            Love it, It's great. So nice to take a relaxing bath and you can
            have whatever you want with you ❤️
          </p>

          <div className="relative flex flex-col items-center justify-center rounded-full w-[40px] h-[40px] overflow-hidden">
            <Image
              src="/images/profile1.png"
              alt="profile image"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          <p className="">Sarah</p>
          <div className="flex flex-row items-center justify-center py-1 px-4 gap-2 bg-[#D4F8FF] rounded-full">
            <svg
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.36328 4.18366L5.90817 8.72855L13.4395 1.19727"
                stroke="#454545"
                stroke-width="2"
              />
            </svg>
            <p>Verified Customer</p>
          </div>
        </div>
      </div>
    </section>
  );
});
Testimonials.displayName = "Testimonials";

const Slideshow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const CarouselItems = [
    {
      src: "/images/carousel1.png",
      svg: (
        <svg
          width="65"
          height="66"
          viewBox="0 0 65 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="32.5"
            cy="33"
            r="31"
            fill="#EFDA8B"
            stroke="white"
            stroke-width="3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47.5891 23.4461C47.5891 23.4461 51.2172 30.5161 46.7283 38.0906C44.5315 41.7958 41.6263 44.5297 38.993 45.766C36.8491 46.771 34.831 46.8165 33.2819 45.9461C31.7328 45.0737 30.7644 43.3487 30.5857 41.0362C30.3685 38.1975 31.345 34.3776 33.5398 30.6724C38.0286 23.0979 46.1273 22.6231 46.1273 22.6231C46.7405 22.5836 47.3171 22.908 47.5891 23.4461Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.3802 45.9461C23.695 45.4832 21.9165 44.7591 20.1624 43.774C12.689 39.5684 12.2221 31.984 12.2221 31.984C12.1815 31.3846 12.5144 30.8228 13.0667 30.5577C13.0667 30.5577 14.5447 29.8534 16.8734 29.4835C16.7922 32.2629 17.3343 35.6258 19.3828 39.0797C21.1044 41.9877 23.2423 44.3378 25.3802 45.9461ZM50.9918 29.4341C53.4484 29.7882 55.0198 30.5577 55.0198 30.5577C55.5721 30.8228 55.905 31.3846 55.8644 31.984C55.8644 31.984 55.3975 39.5684 47.9241 43.774C46.0522 44.8264 44.1519 45.5801 42.3673 46.0371C44.5437 44.4248 46.7303 42.0431 48.4865 39.0797C50.5452 35.604 51.0811 32.2233 50.9918 29.4341Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.6153 23.2186C31.3714 20.8606 33.1987 19.6875 33.1987 19.6875C33.7103 19.3551 34.3762 19.3551 34.8878 19.6875C34.8878 19.6875 36.6704 20.8309 38.4042 23.1295C36.8998 23.998 35.3487 25.1691 33.9336 26.7457C32.5673 25.2225 31.073 24.0771 29.6153 23.2186Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.6568 46.3892C30.0782 46.2586 29.4813 46.0509 28.8742 45.766C26.241 44.5297 23.3357 41.7958 21.141 38.0906C16.6521 30.5161 20.2781 23.4461 20.2781 23.4461C20.5502 22.908 21.1268 22.5836 21.7419 22.6231C21.7419 22.6231 28.0885 22.995 32.6586 28.3381C32.3561 28.7615 32.0617 29.2105 31.7815 29.6833C29.3493 33.79 28.32 38.0372 28.5616 41.1845C28.7301 43.3724 29.4894 45.137 30.6568 46.3892Z"
            fill="white"
          />
        </svg>
      ),
      title: "Bye-Bye Stress",
      description:
        "Our Luxurious Bath Pillow and Bath Bridge Bundle turns bath time into 'aaaaah' time. It's like having a zen garden but with more bubbles and less raking.",
    },
    {
      src: "/images/carousel2.png",
      svg: (
        <svg
          width="65"
          height="66"
          viewBox="0 0 65 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="32.5"
            cy="33"
            r="31"
            fill="#FF7777"
            stroke="white"
            stroke-width="3"
          />
          <path
            d="M32.502 48.701C32.3417 48.701 32.1815 48.6596 32.038 48.5767C31.882 48.4868 28.1771 46.3356 24.419 43.0943C22.1916 41.1733 20.4136 39.268 19.1345 37.4313C17.4793 35.0547 16.6469 32.7686 16.6603 30.6366C16.676 28.1557 17.5646 25.8227 19.1625 24.0671C20.7874 22.2819 22.9559 21.2988 25.2686 21.2988C28.2326 21.2988 30.9425 22.9591 32.5021 25.5892C34.0617 22.9592 36.7716 21.2988 39.7355 21.2988C41.9205 21.2988 44.0051 22.1858 45.6056 23.7965C47.3621 25.5641 48.3601 28.0615 48.3437 30.6484C48.3302 32.7767 47.4823 35.0593 45.8234 37.4326C44.5403 39.2684 42.7648 41.1728 40.5461 43.0933C36.8018 46.3342 33.1234 48.4853 32.9687 48.5753C32.8244 48.6591 32.6632 48.701 32.502 48.701Z"
            fill="white"
          />
        </svg>
      ),
      title: "Romance Booster",
      description:
        "Our plush bath pillow doesn't just cradle bodies, it cradles relationships. Watch as the spark in your love life turns into a full-blown fireworks display.",
    },
    {
      src: "/images/carousel3.png",
      svg: (
        <svg
          width="65"
          height="66"
          viewBox="0 0 65 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M63.5 33.4352C63.5 50.5947 49.618 64.5001 32.5 64.5001C15.382 64.5001 1.5 50.5947 1.5 33.4352C1.5 16.2758 15.382 2.37036 32.5 2.37036C49.618 2.37036 63.5 16.2758 63.5 33.4352Z"
            fill="#B5C6E5"
            stroke="white"
            stroke-width="3"
          />
          <path
            d="M44.4762 26.8773L38.0709 25.9447L35.2063 20.129C34.1003 17.8832 30.901 17.8824 29.7945 20.1289L26.9299 25.9447L20.5245 26.8773C18.0512 27.2374 17.0619 30.2858 18.8522 32.0346L23.4872 36.5615L22.393 42.9536C21.9705 45.4217 24.558 47.3066 26.7713 46.1411L32.5004 43.1229L38.2295 46.1411C40.4455 47.3081 43.0293 45.4162 42.6076 42.9536L41.5135 36.5615L46.1485 32.0346C47.9381 30.2864 46.9505 27.2376 44.4762 26.8773Z"
            fill="white"
          />
          <path
            d="M23.311 19.0932L21.7643 16.9602C21.3444 16.3813 20.5357 16.2529 19.958 16.6737C19.3802 17.0943 19.2521 17.9047 19.6719 18.4836L21.2186 20.6166C21.6387 21.1958 22.4475 21.3237 23.0249 20.9031C23.6027 20.4826 23.7308 19.6721 23.311 19.0932Z"
            fill="white"
          />
          <path
            d="M18.1783 38.2085C17.9576 37.5279 17.2282 37.1551 16.5488 37.3765L13.9955 38.2079C13.3162 38.4289 12.9445 39.16 13.1652 39.8407C13.3863 40.5226 14.1172 40.8935 14.7948 40.6727L17.3481 39.8413C18.0274 39.6203 18.3991 38.8892 18.1783 38.2085Z"
            fill="white"
          />
          <path
            d="M45.0429 16.6737C44.4651 16.2529 43.6564 16.3813 43.2365 16.9602L41.6898 19.0932C41.2699 19.6721 41.3981 20.4826 41.9759 20.9031C42.5539 21.3239 43.3625 21.1953 43.7822 20.6166L45.3289 18.4836C45.7488 17.9047 45.6206 17.0943 45.0429 16.6737Z"
            fill="white"
          />
          <path
            d="M51.0053 38.2079L48.452 37.3765C47.7727 37.155 47.0431 37.5279 46.8224 38.2085C46.6017 38.8891 46.9733 39.6201 47.6527 39.8413L50.206 40.6727C50.8839 40.8936 51.6146 40.5222 51.8356 39.8407C52.0563 39.1601 51.6846 38.4291 51.0053 38.2079Z"
            fill="white"
          />
          <path
            d="M32.5004 48.2536C31.7862 48.2536 31.2072 48.8338 31.2072 49.5494V52.1794C31.2072 52.895 31.7862 53.4752 32.5004 53.4752C33.2146 53.4752 33.7936 52.895 33.7936 52.1794V49.5494C33.7937 48.8338 33.2146 48.2536 32.5004 48.2536Z"
            fill="white"
          />
        </svg>
      ),
      title: "Care Package",
      description:
        "Show her your love isn't just skin deep, it goes bathtub deep! With our Bath Bridge, all her essentials are within reach, making bath time less of a balancing act and more of a royal pampering session.",
    },
    {
      src: "/images/carousel4.png",
      svg: (
        <svg
          width="65"
          height="66"
          viewBox="0 0 65 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="32.5"
            cy="33"
            r="31"
            fill="#BDB39F"
            stroke="white"
            stroke-width="3"
          />
          <g clip-path="url(#clip0_1_8560)">
            <path
              d="M43.7845 37.6634C43.5241 37.8687 43.2476 38.0633 42.9546 38.2464C40.8329 39.573 37.8687 40.2743 34.3828 40.2743C30.9477 40.2743 27.3091 39.6216 24.4002 38.4835C22.9831 37.9292 21.8933 37.3176 21.0566 36.6907C20.7352 36.8289 20.4287 36.9762 20.1383 37.1327C17.7921 38.3971 16.5 40.2478 16.5 42.3442C16.5 44.4407 17.7921 46.2914 20.1383 47.5557C22.4989 48.8277 25.9054 49.5001 29.9896 49.5001C34.2074 49.5001 38.6594 48.8148 42.2038 47.6197C46.3228 46.231 48.5 44.4068 48.5 42.3442C48.5 40.5641 46.8768 38.9618 43.7845 37.6634Z"
              fill="white"
            />
            <path
              d="M25.1023 36.7993C27.7966 37.8534 31.1792 38.4579 34.3828 38.4579C37.5073 38.4579 40.1198 37.857 41.9379 36.7202C43.7413 35.5927 44.7344 33.9563 44.7344 32.1125C44.7344 30.2688 43.7412 28.6324 41.9379 27.5049C41.7894 27.412 41.6352 27.3232 41.4763 27.2375C40.7417 28.0695 39.7226 28.8086 38.4436 29.4207C36.3447 30.4252 33.7209 31.0013 31.2448 31.0013C28.6435 31.0013 26.4164 30.3495 24.8041 29.1163C24.3853 28.7959 24.0129 28.4413 23.6889 28.0578C21.469 29.1933 20.2656 30.6046 20.2656 32.1125C20.2656 33.9147 21.9833 35.5792 25.1023 36.7993Z"
              fill="white"
            />
            <path
              d="M25.966 27.6907C27.2439 28.6682 29.0693 29.1849 31.2448 29.1849C33.4425 29.1849 35.7636 28.6773 37.613 27.7922C39.777 26.7565 40.9687 25.3538 40.9687 23.8425C40.9687 22.3311 39.777 20.9284 37.613 19.8928C35.7636 19.0076 33.4425 18.5 31.2448 18.5C29.0693 18.5 27.2439 19.0167 25.966 19.9942C24.7184 20.9485 24.0312 22.3152 24.0312 23.8425C24.0312 25.3698 24.7184 26.7364 25.966 27.6907Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_8560">
              <rect
                width="32"
                height="31"
                fill="white"
                transform="translate(16.5 18.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Your Home, The Spa",
      description:
        "With our Bath Bridge's sleek design, you're not just upgrading your bathroom, you're promoting it to a full-fledged spa. Goodbye, pricey memberships; hello, home relaxation.",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center w-full h-auto bg-white">
      <div className="flex flex-col items-center justify-center mx-auto h-full w-full py-12 gap-10">
        <h2 className="text-4xl text-center max-w-[20ch]">
          It's Not Just a Bath, It's a Lifestyle Upgrade
        </h2>
        <Carousel className="w-full overflow-hidden">
          <CarouselContent className="-ml-1">
            {CarouselItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/4 flex flex-col items-start justify-start min-w-[20vw] h-[450px]"
              >
                <div className="p-1 flex flex-col w-full h-full">
                  <Card className="flex flex-col w-full h-full rounded-lg overflow-hidden">
                    <CardContent className="relative flex flex-col items-center aspect-square justify-start w-full h-full p-0">
                      {/* Image and Icon */}
                      <div className="relative flex flex-col items-center justify-start w-full h-auto z-10">
                        <div className="relative flex flex-col items-center justify-start w-full h-[220px] overflow-hidden">
                          <Image
                            src={item.src}
                            alt={item.title}
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-center absolute -bottom-8">
                          {item.svg}
                        </div>
                      </div>

                      {/* Text */}
                      <div className="relative flex flex-col items-center justify-start w-full h-full pt-12 max-w-[32ch]">
                        <h3 className="uppercase text-xl font-bold text-center">
                          {item.title}
                        </h3>
                        <p className="text-center mt-6">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex flex-row items-center justify-center gap-10 mt-12">
            <CarouselPrevious className="flex flex-col p-2 w-[5vw] h-[5vw] border-none" />
            <CarouselDots
              itemCount={CarouselItems.length}
              className="flex flex-row h-[11px]"
            />
            <CarouselNext className="flex flex-col p-2 w-[5vw] h-[5vw] border-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
});
Slideshow.displayName = "Slideshow";

const VideoTestimonials = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const Videos = [
    {
      src: "/images/video1.png",
      title: "Bye-Bye Stress",
    },
    {
      src: "/images/video2.png",
      title: "Romance Booster",
    },
    {
      src: "/images/video3.png",
      title: "Care Package",
    },
    {
      src: "/images/video4.png",
      title: "Your Home, The Spa",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center w-full h-auto bg-white">
      <div className="flex flex-col items-center justify-center mx-auto h-full w-full py-12 gap-10">
        <h2 className="text-4xl text-center max-w-[20ch]">
          See What Others Say About It
        </h2>
        <Carousel className="flex flex-col items-center justify-center w-full overflow-hidden">
          <div className="flex flex-col xl:flex-row items-center justify-center mt-12 w-[90vw]">
            <div className="hidden xl:flex flex-col items-center justify-center z-10">
              <CarouselPrevious className="flex flex-col p-2 w-[5vw] h-[5vw] border-none" />
            </div>
            <CarouselContent className="-ml-1">
              {Videos.map((video, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex flex-col items-start justify-start min-w-[20vw] min-h-[497px] aspect-[9/16]"
                >
                  <div className="p-1 flex flex-col w-full h-full">
                    <Card className="flex flex-col w-full h-full rounded-lg overflow-hidden">
                      <CardContent className="relative flex flex-col items-center aspect-square justify-start w-full h-full p-0">
                        {/* Image and Icon */}
                        <div className="relative flex flex-col items-center justify-start w-full h-full z-10">
                          <div className="relative flex flex-col items-center justify-start w-full h-full overflow-hidden">
                            <Image
                              src={video.src}
                              alt={video.title}
                              layout="fill"
                              objectFit="cover"
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden xl:flex flex-col items-center justify-center z-10">
              <CarouselNext className="flex flex-col p-2 w-[5vw] h-[5vw] border-none" />
            </div>
            <div className="xl:hidden flex flex-row items-center justify-center gap-10 mt-12">
              <CarouselPrevious className="flex flex-col p-2 w-[5vw] h-[5vw] border-none" />
              <CarouselDots
                itemCount={Videos.length}
                className="flex flex-row h-[11px]"
              />
              <CarouselNext className="flex flex-col p-2 w-[5vw] h-[5vw] border-none" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
});
VideoTestimonials.displayName = "VideoTestimonials";

const Bundles = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <section id="bundle" className="container flex flex-col items-center justify-center w-full h-auto bg-white">
      <div className="relative flex flex-col items-center justify-center mx-auto h-full w-full py-12 pb-20 gap-10 max-w-[100vw]">
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full h-20">
          <h3 className="uppercase text-xl font-bold text-center hidden xl:flex lg:ml-[10vw]">
            Bath Pillow
          </h3>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h2 className="text-4xl text-center max-w-[12ch]">
              Meet The Ultimate Bundle
            </h2>
          </div>
          <h3 className="uppercase text-xl font-bold text-center hidden xl:flex lg:mr-[10vw]">
            Bamboo Bath Bridge
          </h3>
        </div>
        <div className="relative flex flex-col xl:flex-row items-center justify-between w-full h-full md:gap-10 xl:gap-0">
          <div className="flex flex-col items-center justify-center w-auto h-full">
            <h3 className="uppercase text-xl font-bold text-center mt-12 mb-6 xl:hidden flex">
              Bath Pillow
            </h3>
            <div className="flex flex-row items-center justify-center w-full h-full max-w-[100vw]">
              <ul className="flex flex-col items-center justify-center w-full h-full gap-6">
                <li className="flex flex-row items-center justify-center gap-6">
                  <div className="relative flex flex-col items-center justify-center rounded-full min-w-[20vw] min-h-[20vw] md:min-w-[110px] md:min-h-[110px] overflow-hidden">
                    <Image
                      src="/images/bundle1.png"
                      alt="profile image"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="uppercase text-sm sm:text-xl text-start max-w-[16ch]">
                    Universal fit on all tub surfaces
                  </p>
                </li>
                <li className="flex flex-row items-center justify-center gap-6">
                  <div className="relative flex flex-col items-center justify-center rounded-full min-w-[20vw] min-h-[20vw] md:min-w-[110px] md:min-h-[110px] overflow-hidden">
                    <Image
                      src="/images/bundle2.png"
                      alt="profile image"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="uppercase text-sm sm:text-xl text-start max-w-[16ch]">
                    Machine Washable
                  </p>
                </li>
                <li className="flex flex-row items-center justify-center gap-6">
                  <div className="relative flex flex-col items-center justify-center rounded-full min-w-[20vw] min-h-[20vw] md:min-w-[110px] md:min-h-[110px] overflow-hidden">
                    <Image
                      src="/images/bundle3.png"
                      alt="profile image"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="uppercase text-sm sm:text-xl text-start max-w-[16ch]">
                    ultra soft and breathable
                  </p>
                </li>
              </ul>
              <div className="relative flex flex-col items-center justify-center min-w-[30vw] min-h-[30vw] md:min-w-[321px] md:min-h-[280px] overflow-hidden">
                <Image
                  src="/images/bundle-main1.png"
                  alt="profile image"
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center left-1/2 transform -translate-x-1/2 z-10 w-[10px] mx-5">
            {/* <svg
              width="94"
              height="94"
              viewBox="0 0 94 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.8337 0.820312L47.8337 93.8203M0.898438 46.8851H93.8984"
                stroke="#454545"
                stroke-width="1.5"
              />
            </svg> */}<p className="flex flex-col items-center justify-center text-9xl font-thin pointer-events-none">+</p>
          </div>
          <div className="flex flex-col items-center justify-center w-auto h-full">
            <h3 className="uppercase text-xl font-bold text-center mt-12 mb-6 xl:hidden flex">
              Bamboo Bath Bridge
            </h3>
            <div className="flex flex-row-reverse items-center justify-center w-full h-full  max-w-[100vw]">
              <ul className="flex flex-col items-center justify-center w-full h-full gap-6">
                <li className="flex flex-row items-center justify-center gap-6">
                  <div className="relative flex flex-col items-center justify-center rounded-full min-w-[20vw] min-h-[20vw] md:min-w-[110px] md:min-h-[110px] overflow-hidden">
                    <Image
                      src="/images/bundle4.png"
                      alt="profile image"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="uppercase text-sm sm:text-xl text-start max-w-[16ch]">
                    Strong, durable, and resistant to water damage.
                  </p>
                </li>
                <li className="flex flex-row items-center justify-center gap-6">
                  <div className="relative flex flex-col items-center justify-center rounded-full min-w-[20vw] min-h-[20vw] md:min-w-[110px] md:min-h-[110px] overflow-hidden">
                    <Image
                      src="/images/bundle5.png"
                      alt="profile image"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="uppercase text-sm sm:text-xl text-start max-w-[16ch]">
                    Adjustable Length To Fit On All Tubs
                  </p>
                </li>
              </ul>
              <div className="relative flex flex-col items-center justify-center min-w-[30vw] min-h-[30vw] md:min-w-[292px] md:min-h-[290px] overflow-hidden">
                <Image
                  src="/images/bundle-main2.png"
                  alt="profile image"
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
Bundles.displayName = "Bundles";

const Products = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [selectedImage, setSelectedImage] = React.useState(
    "/images/gallery1.png"
  );
  const images = [
    "/images/gallery1.png",
    "/images/gallery2.png",
    "/images/gallery3.png",
    "/images/gallery4.png",
    "/images/gallery5.png",
    "/images/gallery6.png",
  ];
  return (
    <section className="flex flex-col xl:flex-row items-start justify-center w-full h-auto bg-white border-t">
      {/* Left Content */}
      <div className="relative flex flex-col items-center justify-center xl:w-[50vw] w-full h-full">
        <div className="relative flex flex-col items-center justify-center w-full min-w-[50vw] min-h-[100vw] md:min-h-[738px] overflow-hidden">
          <Image
            src={selectedImage}
            alt="Selected gallery image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-row items-start justify-start w-full h-full gap-5 p-5 overflow-x-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center min-w-[122px] h-[117px] overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="relative flex flex-col items-start justify-start xl:w-[50vw] h-full">
        <div className="flex flex-col items-start justify-center max-w-[100vw] xl:w-[555px] h-full py-6 xl:px-0 px-8 w-full xl:mx-12 mx-auto">
          <div className="flex flex-col items-center xl:items-start justify-center w-full">
            <h2 className="text-4xl text-center xl:text-start max-w-[18ch] xl:max-w-[20ch] font-bold">
              Luxurious Bath Pillow and Bath Bridge Bundle
            </h2>
            <div className="flex flex-col sm:flex-row items-center sm:items-start xl:justify-start justify-center w-full h-full gap-4 mt-6">
              <div className="flex flex-row">
                <div className="relative flex flex-col items-center justify-center rounded-full min-w-[50px] min-h-[50px] overflow-hidden">
                  <Image
                    src="/images/rating1.png"
                    alt="profile image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="relative flex flex-col items-center justify-center rounded-full min-w-[50px] min-h-[50px] overflow-hidden -ml-3">
                  <Image
                    src="/images/rating2.png"
                    alt="profile image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="relative flex flex-col items-center justify-center rounded-full min-w-[50px] min-h-[50px] overflow-hidden -ml-3">
                  <Image
                    src="/images/rating3.png"
                    alt="profile image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="relative flex flex-col items-center justify-center rounded-full min-w-[50px] min-h-[50px] overflow-hidden -ml-3">
                  <Image
                    src="/images/rating4.png"
                    alt="profile image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="relative flex flex-col items-center justify-center rounded-full min-w-[50px] min-h-[50px] overflow-hidden -ml-3">
                  <Image
                    src="/images/rating5.png"
                    alt="profile image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-between h-full">
                <svg
                  width="106"
                  height="17"
                  viewBox="0 0 106 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0504 1.44352L11.8559 5.10187C11.9949 5.38348 12.2638 5.57894 12.5745 5.62385L16.6119 6.21051C17.3945 6.32433 17.7072 7.28638 17.1409 7.83857L14.2195 10.6863C13.9946 10.9055 13.8918 11.2215 13.9449 11.5311L14.6347 15.5521C14.7683 16.3317 13.95 16.9263 13.2498 16.5582L9.63863 14.6599C9.36069 14.5138 9.02853 14.5138 8.75031 14.6599L5.13941 16.5582C4.43921 16.9263 3.62094 16.3317 3.75454 15.5521L4.44429 11.5311C4.49739 11.2215 4.39486 10.9055 4.16975 10.6863L1.24832 7.83857C0.681716 7.28638 0.994393 6.32433 1.77736 6.21051L5.81476 5.62385C6.12574 5.57866 6.39436 5.38348 6.53333 5.10187L8.33877 1.44352C8.68902 0.733996 9.70049 0.733996 10.0504 1.44352Z"
                    fill="#FCE340"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31.9638 1.44352L33.7693 5.10187C33.9082 5.38348 34.1771 5.57894 34.4878 5.62385L38.5252 6.21051C39.3079 6.32433 39.6206 7.28638 39.0543 7.83857L36.1329 10.6863C35.908 10.9055 35.8052 11.2215 35.8583 11.5311L36.5481 15.5521C36.6817 16.3317 35.8634 16.9263 35.1632 16.5582L31.552 14.6599C31.2741 14.5138 30.9416 14.5138 30.6637 14.6599L27.0525 16.5582C26.3523 16.9263 25.534 16.3317 25.6676 15.5521L26.3574 11.5311C26.4105 11.2215 26.3077 10.9055 26.0828 10.6863L23.1614 7.83857C22.5951 7.28638 22.9075 6.32433 23.6905 6.21051L27.7279 5.62385C28.0388 5.57866 28.3075 5.38348 28.4464 5.10187L30.2519 1.44352C30.6021 0.733996 31.6136 0.733996 31.9638 1.44352Z"
                    fill="#FCE340"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M53.8769 1.44352L55.6827 5.10187C55.8216 5.38348 56.0905 5.57894 56.4012 5.62385L60.4386 6.21051C61.2213 6.32433 61.534 7.28638 60.9677 7.83857L58.0462 10.6863C57.8214 10.9055 57.7186 11.2215 57.7717 11.5311L58.4614 15.5521C58.595 16.3317 57.7768 16.9263 57.0766 16.5582L53.4654 14.6599C53.1875 14.5138 52.855 14.5138 52.5771 14.6599L48.9659 16.5582C48.2657 16.9263 47.4474 16.3317 47.581 15.5521L48.2708 11.5311C48.3239 11.2215 48.2213 10.9055 47.9962 10.6863L45.0748 7.83857C44.5082 7.28638 44.8209 6.32433 45.6038 6.21051L49.6412 5.62385C49.9522 5.57866 50.2208 5.38348 50.3598 5.10187L52.1653 1.44352C52.5152 0.733996 53.527 0.733996 53.8769 1.44352Z"
                    fill="#FCE340"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M75.79 1.44352L77.5955 5.10187C77.7344 5.38348 78.0033 5.57894 78.314 5.62385L82.3514 6.21051C83.1341 6.32433 83.4468 7.28638 82.8805 7.83857L79.9591 10.6863C79.7342 10.9055 79.6314 11.2215 79.6845 11.5311L80.3743 15.5521C80.5079 16.3317 79.6896 16.9263 78.9894 16.5582L75.3782 14.6599C75.1003 14.5138 74.7678 14.5138 74.4899 14.6599L70.8787 16.5582C70.1785 16.9263 69.3602 16.3317 69.4938 15.5521L70.1836 11.5311C70.2367 11.2215 70.1339 10.9055 69.909 10.6863L66.9876 7.83857C66.421 7.28638 66.7337 6.32433 67.5167 6.21051L71.5541 5.62385C71.865 5.57866 72.1337 5.38348 72.2726 5.10187L74.0781 1.44352C74.4286 0.733996 75.4401 0.733996 75.79 1.44352Z"
                    fill="#FCE340"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M97.7034 1.44352L99.5089 5.10187C99.6478 5.38348 99.9167 5.57894 100.227 5.62385L104.265 6.21051C105.048 6.32433 105.36 7.28638 104.794 7.83857L101.872 10.6863C101.648 10.9055 101.545 11.2215 101.598 11.5311L102.288 15.5521C102.421 16.3317 101.603 16.9263 100.903 16.5582L97.2916 14.6599C97.0137 14.5138 96.6812 14.5138 96.4033 14.6599L92.7921 16.5582C92.0919 16.9263 91.2736 16.3317 91.4072 15.5521L92.097 11.5311C92.1501 11.2215 92.0473 10.9055 91.8224 10.6863L88.901 7.83857C88.3347 7.28638 88.6471 6.32433 89.43 6.21051L93.4674 5.62385C93.7784 5.57866 94.047 5.38348 94.186 5.10187L95.9915 1.44352C96.3417 0.733996 97.3532 0.733996 97.7034 1.44352Z"
                    fill="#FCE340"
                  />
                </svg>

                <p>
                  <span className="font-bold">Rated 4.8</span> by 458 Customers
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-4 mt-6">
            <div className="flex flex-row items-center justify-between w-full xl:gap-0 rounded-xl border-[1.5px] border-[#8FC3CD] bg-white py-4 xl:px-4 px-12">
              <div className="flex flex-col xl:flex-row items-center justify-center gap-4">
                <div className="relative flex flex-col items-center justify-center min-w-[65px] min-h-[65px] overflow-hidden">
                  <Image
                    src="/images/product1.png"
                    alt="profile image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-center xl:items-start justify-center">
                  <p className="text-lg font-bold">Bath Pillow</p>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p className="line-through">$75.00</p>
                    <p className="font-semibold">$49.99</p>
                  </div>
                </div>
              </div>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20.8926"
                  cy="20.7639"
                  r="19.75"
                  stroke="#25CA85"
                  stroke-width="1.5"
                />
                <path
                  d="M20.5989 9.36658V20.764M20.5989 32.1614V20.764M20.5989 20.764H9.42188H32.3638"
                  stroke="#25CA85"
                  stroke-width="2"
                />
              </svg>
              <div className="flex flex-col xl:flex-row items-center justify-center gap-4">
                <div className="relative flex flex-col items-center justify-center min-w-[85px] min-h-[31px] overflow-hidden">
                  <Image
                    src="/images/product2.png"
                    alt="profile image"
                    layout="fill"
                    objectFit="contain"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-center xl:items-start justify-center">
                  <p className="text-lg text-center xl:text-start font-bold max-w-[10ch] leading-tight">
                    Bamboo Bath Bridge
                  </p>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p className="line-through">$200.00</p>
                    <p className="font-semibold">$119.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-row items-center justify-between w-full rounded-xl border-[3px] border-[#45C1DC] bg-white">
              <div className="flex flex-row items-center xl:justify-start justify-center gap-4 p-4 w-full">
                <div className="relative flex flex-col items-center justify-center min-w-[65px] min-h-[65px] overflow-hidden">
                  <Image
                    src="/images/product3.png"
                    alt="profile image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-center md:items-start justify-center">
                  <p className="text-lg font-bold">
                    Free gift is a pack of dried roses
                  </p>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p className="line-through">$30.00</p>
                    <p className="font-semibold">$00</p>
                    <div className="flex flex-col items-center justify-center bg-[#25CA85] rounded-lg px-2">
                      <p className="font-bold text-white">FREE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-1 -top-1">
                <svg
                  width="104"
                  height="31"
                  viewBox="0 0 104 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9762 30.2556L0.138672 0.487983C28.9363 -0.0345183 84.8124 0.48733 90.1941 0.487983C95.5758 0.488637 102.228 3.08629 102.859 9.10585C103.489 15.1254 102.859 30.2556 102.859 30.2556H27.9762Z"
                    fill="#45C1DC"
                  />
                </svg>
              </div>
              <div className="absolute right-5 -top-[3px]">
                <p className="text-xl font-bold text-white">GIFT</p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between w-full mt-6 md:gap-0 gap-5">
              <div className="flex flex-row items-center justify-between gap-4">
                <p>QTY</p>
                <Select>
                  <SelectTrigger className="w-[108px]">
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-row items-center justify-between gap-4">
                <p className="text-4xl text-start max-w-[20ch] line-through">
                  $275
                </p>
                <p className="text-4xl text-start max-w-[20ch] font-bold">
                  $169
                </p>
              </div>
              <div className="md:absolute right-0">
                <svg
                  width="124"
                  height="37"
                  viewBox="0 0 124 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.953125 0.546143V18.5372V36.9371H123.586L109.204 18.5372L123.586 0.546143H0.953125Z"
                    fill="#25CA85"
                  />
                </svg>
              </div>
              <p className="text-sm leading-tight text-white font-semibold max-w-[10ch] mx-5 z-10 md:mt-0 -mt-14">
                YOU SAVE $106 TODAY!
              </p>
            </div>
          </div>
          <a
            href="/"
            className="relative flex flex-col items-center justify-center bg-[#577C84] h-[82px] w-full xl:w-[555px] py-4 rounded-lg mt-8 overflow-hidden"
          >
            <svg
              width="555"
              height="53"
              viewBox="0 0 555 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 pointer-events-none"
            >
              <path
                d="M74.9336 13.5757C39.2323 -1.03929 10.4725 9.70055 0.555282 16.8973L0.166421 17.3911C0.0408357 21.5413 -0.134983 32.157 0.166421 41.4176C0.467824 50.6782 9.33412 52.8825 13.7296 52.8271C184.852 52.8152 529.967 52.7986 541.452 52.8271C552.937 52.8555 555.256 44.7839 554.98 40.7446V20.7724C526.158 32.9515 498.577 21.6028 480.602 13.022C462.627 4.44123 425.748 4.44124 389.799 17.7276C353.85 31.014 330.297 28.2462 268.006 8.59339C218.173 -7.12884 177.616 3.51872 163.567 10.8078C148.898 17.82 110.635 28.1907 74.9336 13.5757Z"
                fill="#4A737B"
              />
            </svg>

            <div className="flex flex-col z-10">
              <p className="text-white text-2xl">Make My Bath Better</p>
            </div>
          </a>
          <ul className="flex flex-col items-start justify-center w-full gap-6 mt-6">
            <div className="flex flex-row items-center xl:items-start justify-between xl:justify-start w-full gap-5">
              <li className="flex flex-row items-center justify-start gap-5 w-1/2">
                <div className="flex flex-col w-[45px]">
                  <svg
                    width="43"
                    height="44"
                    viewBox="0 0 43 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.4987 8.1311C13.8595 8.1311 7.64453 14.3461 7.64453 21.9853C7.64453 29.6245 13.8595 35.8395 21.4987 35.8395C29.1379 35.8395 35.3529 29.6245 35.3529 21.9853C35.3529 14.3461 29.138 8.1311 21.4987 8.1311ZM21.4987 33.3205C15.2485 33.3205 10.1635 28.2355 10.1635 21.9853C10.1635 15.735 15.2485 10.65 21.4987 10.65C27.749 10.65 32.8339 15.735 32.8339 21.9853C32.8339 28.2355 27.749 33.3205 21.4987 33.3205Z"
                      fill="#7FBAC6"
                    />
                    <path
                      d="M26.9051 17.3163L20.2388 23.9825L16.0914 19.8352C15.5997 19.3434 14.8022 19.3434 14.3103 19.8352C13.8184 20.3271 13.8184 21.1245 14.3103 21.6164L19.3482 26.6543C19.5941 26.9002 19.9165 27.0232 20.2387 27.0232C20.561 27.0232 20.8834 26.9003 21.1292 26.6543L28.6861 19.0974C29.1779 18.6056 29.1779 17.8082 28.6861 17.3163C28.1944 16.8244 27.3969 16.8244 26.9051 17.3163Z"
                      fill="#7FBAC6"
                    />
                    <path
                      d="M41.1965 13.1548C41.1923 13.1522 36.7976 10.5216 36.7976 10.5216L35.8111 6.43605C35.3734 4.62317 33.7064 3.41147 31.8467 3.55572L26.8387 3.9433C26.8387 3.9433 23.9539 1.39733 23.9482 1.39254C22.5286 0.183281 20.4676 0.183281 19.048 1.39254C19.0423 1.39733 16.1575 3.9433 16.1575 3.9433L11.1495 3.55572C9.3047 3.41248 7.65051 4.60301 7.19627 6.39088L5.82294 10.7668C5.82294 10.7668 1.80884 13.1515 1.80355 13.1548C0.214685 14.1313 -0.422187 16.0913 0.289329 17.8153L2.00288 21.9678L0.289329 26.1201C-0.422187 27.8441 0.214685 29.8041 1.80363 30.7806C1.8085 30.7836 6.19465 33.3971 6.19465 33.3971L7.18527 37.4994C7.59938 39.2147 9.11394 40.3915 10.8508 40.3913C11.1165 40.3913 10.8181 40.4014 16.1055 39.9962C16.1055 39.9962 19.0433 42.5742 19.048 42.5782C19.7579 43.1828 20.628 43.4851 21.4982 43.4851C22.3684 43.4851 23.2386 43.1828 23.9484 42.5782C23.9531 42.5741 26.8909 39.9962 26.8909 39.9962L31.8468 40.3797C33.7059 40.5234 35.3736 39.3123 35.8112 37.4994L36.7977 33.4137C42.1754 30.1947 41.0351 30.8802 41.1966 30.7805C42.7854 29.804 43.4222 27.844 42.7107 26.1201L40.9972 21.9676L42.7107 17.8151C43.4222 16.0913 42.7854 14.1314 41.1965 13.1548ZM38.4703 22.4482L40.3822 27.0811C40.6187 27.6539 40.4085 28.305 39.8826 28.6315L35.0505 31.524C34.7605 31.6976 34.5525 31.9805 34.4731 32.309L33.3625 36.9084C33.2167 37.5126 32.6618 37.9162 32.0411 37.8684L26.5562 37.4439C26.2184 37.4178 25.8833 37.5291 25.6283 37.753L22.309 40.6658C21.8379 41.0623 21.1584 41.0623 20.6873 40.6656L17.3682 37.753C17.1131 37.5291 16.7779 37.4175 16.4403 37.4439L10.9554 37.8684C10.3351 37.9163 9.77978 37.5126 9.63393 36.9083L8.51896 32.2908C8.43945 31.9614 8.23046 31.6779 7.93935 31.5045L3.1165 28.6308C2.59139 28.304 2.38165 27.6535 2.61792 27.081L4.5298 22.4481C4.65684 22.1404 4.65684 21.795 4.5298 21.4872L2.61767 16.8543C2.38156 16.2822 2.59105 15.632 3.11558 15.3051L7.52373 12.6863C7.7904 12.5279 7.98923 12.2766 8.08209 11.9807C9.70664 6.80113 9.61495 7.10516 9.63376 7.02716C9.77961 6.42295 10.3334 6.01874 10.9552 6.06711L16.4943 6.49583C16.8342 6.52203 17.1696 6.40968 17.4249 6.18441L20.6885 3.30408C21.1589 2.90894 21.837 2.90894 22.3076 3.30391L25.5713 6.18441C25.8266 6.40985 26.1628 6.52203 26.5019 6.49583L32.041 6.06711C32.6606 6.01925 33.2166 6.42287 33.3624 7.02724L34.473 11.6265C34.5524 11.955 34.7604 12.2379 35.0505 12.4116L39.8825 15.304C40.4084 15.6305 40.6187 16.2815 40.3821 16.8543L38.4703 21.4872C38.3433 21.795 38.3433 22.1405 38.4703 22.4482Z"
                      fill="#7FBAC6"
                    />
                  </svg>
                </div>
                <p className="max-w-[18ch] font-semibold">
                  30-day satisfaction guaranteed
                </p>
              </li>
              <li className="flex flex-row items-center justify-start gap-5 w-1/2">
                <div className="flex flex-col w-[45px]">
                  <svg
                    width="44"
                    height="45"
                    viewBox="0 0 44 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3125 20.0051H24.7499C25.5093 20.0051 26.1249 19.3894 26.1249 18.6301C26.1249 17.8708 25.5093 17.2551 24.7499 17.2551H21.3125C19.417 17.2551 17.875 18.7972 17.875 20.6926C17.875 22.588 19.417 24.13 21.3125 24.13H22.6874C23.0665 24.13 23.3749 24.4385 23.3749 24.8175C23.3749 25.1966 23.0665 25.505 22.6874 25.505H19.25C18.4906 25.505 17.875 26.1207 17.875 26.88C17.875 27.6393 18.4906 28.255 19.25 28.255H22.6874C24.5829 28.255 26.1249 26.713 26.1249 24.8175C26.1249 22.9221 24.5829 21.3801 22.6874 21.3801C22.2065 21.3801 21.7934 21.3801 21.3125 21.3801C20.9334 21.3801 20.625 21.0717 20.625 20.6926C20.625 20.3135 20.9334 20.0051 21.3125 20.0051Z"
                      fill="#7FBAC6"
                    />
                    <path
                      d="M33 17.2551C30.7254 17.2551 28.875 19.1056 28.875 21.3801V26.88C28.875 27.6393 29.4906 28.255 30.25 28.255C31.0094 28.255 31.625 27.6393 31.625 26.88V25.505H34.3749V26.88C34.3749 27.6393 34.9905 28.255 35.7499 28.255C36.5093 28.255 37.1249 27.6393 37.1249 26.88V21.3801C37.1249 19.1056 35.2745 17.2551 33 17.2551ZM31.625 22.7551V21.3801C31.625 20.6219 32.2418 20.0051 33 20.0051C33.7581 20.0051 34.3749 20.6219 34.3749 21.3801V22.7551H31.625Z"
                      fill="#7FBAC6"
                    />
                    <path
                      d="M13.7499 17.2551C12.9906 17.2551 12.3749 17.8708 12.3749 18.6301V24.13C12.3749 24.8882 11.7581 25.505 11 25.505C10.2418 25.505 9.62497 24.8882 9.62497 24.13V18.6301C9.62497 17.8708 9.00932 17.2551 8.24998 17.2551C7.49065 17.2551 6.875 17.8708 6.875 18.6301V24.13C6.875 26.4045 8.72547 28.255 11 28.255C13.2744 28.255 15.1249 26.4045 15.1249 24.13V18.6301C15.1249 17.8708 14.5093 17.2551 13.7499 17.2551Z"
                      fill="#7FBAC6"
                    />
                    <path
                      d="M43.9657 21.5099C43.3298 9.96324 33.7481 0.755493 22 0.755493C9.47049 0.755493 -0.667781 11.2494 0.0344056 24.0006C0.673171 35.6006 10.2943 44.7551 22 44.7551C34.5533 44.755 44.667 34.2442 43.9657 21.5099ZM39.7071 30.3176C38.5716 30.3176 4.9602 30.3176 4.29307 30.3176C2.16469 25.3482 2.3076 19.8297 4.29299 15.1928H39.707C41.7397 19.9433 41.7915 25.4463 39.7071 30.3176ZM30.9374 39.8086C29.6556 40.4817 28.3027 41.013 26.8442 41.3906C26.7967 41.4029 26.8125 42.0429 26.8125 33.0676H30.9374V39.8086ZM17.1876 41.3985C15.7977 41.0425 14.4148 40.5169 13.0921 39.8244C13.0491 39.8019 13.0626 40.3133 13.0626 33.0676H17.1876V41.3985ZM22 3.50546C28.5932 3.50546 34.7527 6.951 38.2559 12.4429H5.74437C9.24766 6.95083 15.4071 3.50546 22 3.50546ZM5.74007 33.0676H10.3127V38.0546C8.50293 36.6738 6.95882 34.9899 5.74007 33.0676ZM19.9376 41.8948V33.0676H24.0625V41.8948C22.6953 42.0395 21.3045 42.0395 19.9376 41.8948ZM33.6874 38.0545V33.0676H38.2599C37.0411 34.9899 35.4971 36.6738 33.6874 38.0545Z"
                      fill="#7FBAC6"
                    />
                    <path
                      d="M29.5625 10.3802C30.3219 10.3802 30.9375 9.76464 30.9375 9.00525C30.9375 8.24586 30.3219 7.63025 29.5625 7.63025C28.8031 7.63025 28.1875 8.24586 28.1875 9.00525C28.1875 9.76464 28.8031 10.3802 29.5625 10.3802Z"
                      fill="#7FBAC6"
                    />
                    <path
                      d="M22 9.00525C22.7594 9.00525 23.375 8.38964 23.375 7.63025C23.375 6.87086 22.7594 6.25525 22 6.25525C21.2406 6.25525 20.625 6.87086 20.625 7.63025C20.625 8.38964 21.2406 9.00525 22 9.00525Z"
                      fill="#7FBAC6"
                    />
                    <path
                      d="M14.4375 10.3802C15.1969 10.3802 15.8125 9.76464 15.8125 9.00525C15.8125 8.24586 15.1969 7.63025 14.4375 7.63025C13.6781 7.63025 13.0625 8.24586 13.0625 9.00525C13.0625 9.76464 13.6781 10.3802 14.4375 10.3802Z"
                      fill="#7FBAC6"
                    />
                  </svg>
                </div>
                <p className="max-w-[15ch] font-semibold">
                  4-7 Days Delivery From USA
                </p>
              </li>
            </div>

            <div className="bg-[#E6E6E6] w-full h-[1px]" />
            <div className="flex flex-row items-center xl:items-start justify-between xl:justify-start w-full gap-5">
              <li className="flex flex-row items-center justify-start gap-5 w-1/2">
                <div className="flex flex-col w-[45px]">
                  <svg
                    width="40"
                    height="42"
                    viewBox="0 0 40 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 0.214111C16.2205 0.214111 12.5865 1.29813 9.45312 3.30681V1.41528C9.45312 0.751916 8.92844 0.214111 8.28125 0.214111C7.63406 0.214111 7.10938 0.751916 7.10938 1.41528V5.63052C7.10938 6.09249 7.36781 6.51346 7.77414 6.71341C8.18039 6.91329 8.66258 6.85675 9.0143 6.56775C12.1602 3.98283 15.959 2.61646 20 2.61646C29.7357 2.61646 37.6562 10.735 37.6562 20.7141C37.6562 24.5761 36.3805 28.4437 34.0639 31.6047C33.6752 32.1352 33.7795 32.8881 34.297 33.2865C34.8145 33.6849 35.5491 33.578 35.9378 33.0476C38.5573 29.4732 40 25.0931 40 20.7141C40 9.42638 31.0118 0.214111 20 0.214111Z"
                      fill="#7FBAC6"
                    />
                    <path
                      d="M20 41.2141C23.7795 41.2141 27.4135 40.1301 30.5469 38.1214V40.0129C30.5469 40.6763 31.0716 41.2141 31.7188 41.2141C32.3659 41.2141 32.8906 40.6763 32.8906 40.0129V35.7977C32.8906 35.3357 32.6322 34.9148 32.2259 34.7148C31.8195 34.5149 31.3373 34.5715 30.9857 34.8605C27.8398 37.4455 24.041 38.8118 20 38.8118C10.2643 38.8118 2.34375 30.6932 2.34375 20.7141C2.34375 16.8521 3.61953 12.9845 5.93609 9.82349C6.32484 9.29305 6.22047 8.54007 5.70297 8.14169C5.18539 7.74322 4.45086 7.85028 4.06219 8.38064C1.44266 11.955 0 16.3351 0 20.7141C0 32.0018 8.9882 41.2141 20 41.2141Z"
                      fill="#7FBAC6"
                    />
                    <path
                      d="M20 36.4094C20.6472 36.4094 21.1719 35.8716 21.1719 35.2083V31.5908C23.6085 31.5286 25.5976 31.2343 27.2101 30.291C29.4554 28.9773 30.5469 26.6305 30.5469 23.1165C30.5469 17.4826 24.3862 9.26326 20.8554 5.39901C20.6338 5.15645 20.3241 5.0188 20 5.0188C19.6759 5.0188 19.3662 5.15645 19.1446 5.39901C15.6584 9.21441 9.45312 17.4569 9.45312 23.1165C9.45312 26.6305 10.5446 28.9773 12.7899 30.291C14.4024 31.2343 16.3915 31.5286 18.8281 31.5908V35.2083C18.8281 35.8716 19.3528 36.4094 20 36.4094ZM13.9518 28.2045C13.0267 27.6633 11.7969 26.5471 11.7969 23.1165C11.7969 18.1615 17.7502 10.6751 20.0046 8.01804C22.8994 11.4101 28.2031 18.5658 28.2031 23.1165C28.2031 26.5471 26.9733 27.6633 26.0482 28.2045C24.809 28.9296 23.0266 29.1376 21.1719 29.1881V26.0164L25.5161 21.5636C25.9737 21.0945 25.9737 20.334 25.5161 19.8649C25.0585 19.3958 24.3165 19.3958 23.8588 19.8649L21.1719 22.6189V18.8093L23.1723 16.7588C23.63 16.2897 23.63 15.5292 23.1723 15.0601C22.7148 14.591 21.9727 14.591 21.5151 15.0601L20 16.6131L18.4848 15.06C18.0273 14.5909 17.2852 14.5909 16.8276 15.06C16.3699 15.5291 16.3699 16.2896 16.8276 16.7587L18.8281 18.8093V22.6189L16.1411 19.8647C15.6835 19.3956 14.9415 19.3956 14.4838 19.8647C14.0262 20.3338 14.0262 21.0943 14.4838 21.5634L18.8281 26.0163V29.188C16.9734 29.1376 15.1909 28.9295 13.9518 28.2045Z"
                      fill="#7FBAC6"
                    />
                  </svg>
                </div>
                <p className="max-w-[18ch] font-semibold">
                  Eco-friendly, made from bamboo
                </p>
              </li>
              <li className="flex flex-row items-center justify-start gap-5 w-1/2">
                <div className="flex flex-col w-[45px]">
                  <svg
                    width="39"
                    height="43"
                    viewBox="0 0 39 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.7889 26.4343C38.3886 25.7805 38.7539 24.9176 38.7539 23.9734C38.7539 21.9382 37.0583 20.282 34.9746 20.282H27.6394C28.3659 18.1287 28.6758 15.2715 28.6758 14.0468V12.8171C28.6758 10.1035 26.4149 7.89526 23.6367 7.89526H22.377C21.7991 7.89526 21.2952 8.27917 21.155 8.82714L20.4688 11.5087C19.5072 15.2641 16.4544 19.4075 13.2949 20.1606C12.7414 18.7923 11.375 17.821 9.7793 17.821H2.2207C1.52531 17.821 0.960938 18.3723 0.960938 19.0515V41.2C0.960938 41.8792 1.52531 42.4304 2.2207 42.4304H9.7793C11.2818 42.4304 12.5819 41.5699 13.1907 40.3263L17.5193 41.7356C18.9344 42.1966 20.4092 42.4304 21.9016 42.4304H32.4551C34.5387 42.4304 36.2344 40.7742 36.2344 38.739C36.2344 38.2591 36.1403 37.7998 35.969 37.3789C37.5714 36.9516 38.7539 35.5168 38.7539 33.8171C38.7539 32.873 38.3886 32.01 37.7889 31.3562C38.3886 30.7024 38.7539 29.8394 38.7539 28.8953C38.7539 27.9511 38.3886 27.0881 37.7889 26.4343ZM11.0391 38.739C11.0391 39.4174 10.4738 39.9695 9.7793 39.9695H3.48047V20.282H9.7793C10.4738 20.282 11.0391 20.8341 11.0391 21.5125V38.739ZM32.4551 27.6648H34.9746C35.6692 27.6648 36.2344 28.2169 36.2344 28.8953C36.2344 29.5737 35.6692 30.1257 34.9746 30.1257H32.4551C31.7597 30.1257 31.1953 30.677 31.1953 31.3562C31.1953 32.0354 31.7597 32.5867 32.4551 32.5867H34.9746C35.6692 32.5867 36.2344 33.1387 36.2344 33.8171C36.2344 34.4955 35.6692 35.0476 34.9746 35.0476H32.4551C31.7597 35.0476 31.1953 35.5989 31.1953 36.2781C31.1953 36.9573 31.7597 37.5085 32.4551 37.5085C33.1496 37.5085 33.7148 38.0606 33.7148 38.739C33.7148 39.4174 33.1496 39.9695 32.4551 39.9695H21.9016C20.6805 39.9695 19.4736 39.7783 18.3155 39.401L13.5586 37.8523V22.6264C15.5347 22.2598 17.4689 21.0375 19.2149 19.0367C20.9198 17.0828 22.3022 14.4922 22.9128 12.1059L23.3604 10.3562H23.6367C25.0258 10.3562 26.1562 11.4603 26.1562 12.8171V14.0468C26.1562 15.6989 25.6271 18.8678 24.9502 20.282H22.377C21.6816 20.282 21.1172 20.8332 21.1172 21.5125C21.1172 22.1917 21.6816 22.7429 22.377 22.7429H34.9746C35.6692 22.7429 36.2344 23.295 36.2344 23.9734C36.2344 24.6518 35.6692 25.2039 34.9746 25.2039H32.4551C31.7597 25.2039 31.1953 25.7551 31.1953 26.4343C31.1953 27.1135 31.7597 27.6648 32.4551 27.6648Z"
                      fill="#7FBAC6"
                    />
                    <path
                      d="M7.25977 37.5085C7.95551 37.5085 8.51953 36.9576 8.51953 36.2781C8.51953 35.5985 7.95551 35.0476 7.25977 35.0476C6.56402 35.0476 6 35.5985 6 36.2781C6 36.9576 6.56402 37.5085 7.25977 37.5085Z"
                      fill="#7FBAC6"
                    />
                    <path
                      d="M24.8965 0.43042C24.2008 0.43042 23.6367 0.981342 23.6367 1.66089V4.20386C23.6367 4.8834 24.2008 5.43433 24.8965 5.43433C25.5922 5.43433 26.1562 4.8834 26.1562 4.20386V1.66089C26.1562 0.981342 25.5922 0.43042 24.8965 0.43042Z"
                      fill="#7FBAC6"
                    />
                    <path
                      d="M19.5517 5.85662L17.7702 4.11649C17.2783 3.63596 16.4806 3.63596 15.9886 4.11649C15.4966 4.59703 15.4966 5.37608 15.9886 5.85662L17.7702 7.59675C18.2621 8.07721 19.0598 8.07729 19.5517 7.59675C20.0437 7.11621 20.0437 6.33716 19.5517 5.85662Z"
                      fill="#7FBAC6"
                    />
                    <path
                      d="M33.8044 4.11649C33.3125 3.63596 32.5148 3.63596 32.0228 4.11649L30.2413 5.85654C29.7493 6.33708 29.7493 7.11613 30.2413 7.59667C30.7331 8.07721 31.5308 8.07729 32.0228 7.59675L33.8044 5.85662C34.2964 5.37608 34.2964 4.59703 33.8044 4.11649Z"
                      fill="#7FBAC6"
                    />
                  </svg>
                </div>
                <p className="max-w-[20ch] font-semibold">
                  Hypoallergenic, suitable for sensitive skin
                </p>
              </li>
            </div>
            <div className="bg-[#E6E6E6] w-full h-[1px]" />
          </ul>
          <div className="flex flex-col items-start justify-start w-full gap-2 mt-6">
            <h3 className="capitalize text-xl font-bold text-start">
              We Stand By Our Bath Goodies
            </h3>
            <p>
              Listen, if, for some odd reason, our bath bundle doesn't float
              your boat, no worries! You&apos;ve got full 30 days to return it.
              Just drop our friendly support team a line at
              shopluxebath@gmail.com, and we'll handle it from there. Easy as
              pie!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
Products.displayName = "Product";

const Images = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section className="flex flex-row items-start justify-start w-full h-auto bg-white">
      <Carousel
        plugins={[plugin.current]}
        className="flex flex-col items-center justify-center w-full overflow-hidden p-4"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <div className="flex flex-row items-center justify-center mt-12 w-full">
          <div className="md:hidden flex flex-col items-center justify-center z-10">
            <CarouselPrevious className="flex flex-col p-2 w-[5vw] h-[5vw] border-none" />
          </div>
          <CarouselContent className="relative flex flex-row items-start justify-evenly w-full h-full p-0 gap-4">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 lg:basis-1/4 relative flex flex-col items-center justify-center min-w-[369px] min-h-[389px] overflow-hidden p-0"
              >
                <Image
                  src={image}
                  alt="images"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="md:hidden flex flex-col items-center justify-center z-10">
            <CarouselNext className="flex flex-col p-2 w-[5vw] h-[5vw] border-none" />
          </div>
        </div>
      </Carousel>
    </section>
  );
});
Images.displayName = "Images";

const SlideshowTestimonials = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const CarouselItems = [
    {
      title: "Bath Relaxation",
      description:
        "It's a beautiful piece well crafted and sturdy built, brought two one for a birthday gift and one for myself. Birthday person has really enjoyed it.",
      name: "Ellie",
      status: "Verified Customer",
    },
    {
      title: "Great gift",
      description:
        "Brought this for my daughter as christmas gift. whith some wine glasses and a candle she absolutely loved it",
      name: "Sherlyn",
      status: "Verified Customer",
    },
    {
      title: "Love it",
      description:
        "It's great. So nice to take a relaxing bath and you can have whatever you want with you ❤️",
      name: "Sarah",
      status: "Verified Customer",
    },
    {
      title: "So happy with it!",
      description:
        "Love it! I will say that folding it up and storing is a little annoying since the side trays don't really have a place to put them when you fold the piece up. It doesn't stop me from using it nearly every evening though ...",
      name: "Elyse",
      status: "Verified Customer",
    },
  ];
  return (
    <section id="reviews" className="flex flex-col items-center justify-center w-full h-auto bg-[#EBF9FC]">
      <div className="relative flex flex-col items-center justify-center mx-auto h-full w-full py-12 gap-10">
        <div className="flex flex-col items-center justify-center w-full h-full absolute">
          <Image
            alt="slideshowtestimonials"
            src="/images/slideshowtestimonials.png"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <h2 className="text-4xl text-center max-w-[20ch]">
          It's Not Just a Bath, It's a Lifestyle Upgrade
        </h2>
        <Carousel className="w-full overflow-hidden">
          <CarouselContent className="-ml-1 md:pl-20 lg:pl-40">
            {CarouselItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="pr-4 md:basis-1/2 lg:basis-[29%] flex flex-col items-start justify-start min-w-[353px] h-[344px]"
              >
                <div className="p-1 flex flex-col w-full h-full">
                  <Card className="flex flex-col w-full h-full rounded-lg overflow-hidden">
                    <CardContent className="relative flex flex-col items-center aspect-square justify-start w-full h-full p-0">
                      {/* Text */}
                      <div className="relative flex flex-col items-start justify-start w-full h-full p-6 max-w-[32ch]">
                        <h3 className="uppercase text-xl text-start">
                          {item.title}
                        </h3>
                        <div className="flex flex-col items-center justify-center mt-2">
                          <svg
                            width="105"
                            height="17"
                            viewBox="0 0 105 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.88834 0.975504L11.6938 4.63385C11.8328 4.91546 12.1017 5.11092 12.4124 5.15583L16.4498 5.74249C17.2324 5.85632 17.5451 6.81836 16.9788 7.37056L14.0574 10.2183C13.8325 10.4374 13.7297 10.7535 13.7828 11.0631L14.4726 15.0841C14.6062 15.8637 13.7879 16.4582 13.0877 16.0902L9.47652 14.1918C9.19858 14.0458 8.86642 14.0458 8.5882 14.1918L4.9773 16.0902C4.2771 16.4582 3.45883 15.8637 3.59243 15.0841L4.28218 11.0631C4.33528 10.7535 4.23275 10.4374 4.00764 10.2183L1.08621 7.37056C0.519607 6.81836 0.832283 5.85632 1.61525 5.74249L5.65265 5.15583C5.96363 5.11064 6.23225 4.91546 6.37122 4.63385L8.17666 0.975504C8.52691 0.265978 9.53838 0.265978 9.88834 0.975504Z"
                              fill="#FCE340"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M31.8017 0.975504L33.6072 4.63385C33.7461 4.91546 34.015 5.11092 34.3257 5.15583L38.3631 5.74249C39.1458 5.85632 39.4585 6.81836 38.8922 7.37056L35.9707 10.2183C35.7459 10.4374 35.6431 10.7535 35.6962 11.0631L36.386 15.0841C36.5196 15.8637 35.7013 16.4582 35.0011 16.0902L31.3899 14.1918C31.112 14.0458 30.7795 14.0458 30.5016 14.1918L26.8904 16.0902C26.1902 16.4582 25.3719 15.8637 25.5055 15.0841L26.1953 11.0631C26.2484 10.7535 26.1456 10.4374 25.9207 10.2183L22.9993 7.37056C22.433 6.81836 22.7454 5.85632 23.5283 5.74249L27.5658 5.15583C27.8767 5.11064 28.1453 4.91546 28.2843 4.63385L30.0898 0.975504C30.44 0.265978 31.4515 0.265978 31.8017 0.975504Z"
                              fill="#FCE340"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M53.7148 0.975504L55.5206 4.63385C55.6595 4.91546 55.9284 5.11092 56.2391 5.15583L60.2765 5.74249C61.0592 5.85632 61.3719 6.81836 60.8056 7.37056L57.8841 10.2183C57.6593 10.4374 57.5565 10.7535 57.6096 11.0631L58.2993 15.0841C58.4329 15.8637 57.6147 16.4582 56.9145 16.0902L53.3033 14.1918C53.0253 14.0458 52.6929 14.0458 52.415 14.1918L48.8038 16.0902C48.1036 16.4582 47.2853 15.8637 47.4189 15.0841L48.1087 11.0631C48.1618 10.7535 48.0592 10.4374 47.8341 10.2183L44.9127 7.37056C44.3461 6.81836 44.6588 5.85632 45.4417 5.74249L49.4791 5.15583C49.7901 5.11064 50.0587 4.91546 50.1977 4.63385L52.0031 0.975504C52.3531 0.265978 53.3649 0.265978 53.7148 0.975504Z"
                              fill="#FCE340"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M75.6279 0.975504L77.4334 4.63385C77.5723 4.91546 77.8412 5.11092 78.1519 5.15583L82.1893 5.74249C82.972 5.85632 83.2847 6.81836 82.7184 7.37056L79.797 10.2183C79.5721 10.4374 79.4693 10.7535 79.5224 11.0631L80.2122 15.0841C80.3458 15.8637 79.5275 16.4582 78.8273 16.0902L75.2161 14.1918C74.9382 14.0458 74.6057 14.0458 74.3278 14.1918L70.7166 16.0902C70.0164 16.4582 69.1981 15.8637 69.3317 15.0841L70.0215 11.0631C70.0746 10.7535 69.9718 10.4374 69.7469 10.2183L66.8255 7.37056C66.2589 6.81836 66.5716 5.85632 67.3545 5.74249L71.392 5.15583C71.7029 5.11064 71.9715 4.91546 72.1105 4.63385L73.916 0.975504C74.2665 0.265978 75.278 0.265978 75.6279 0.975504Z"
                              fill="#FCE340"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M97.5413 0.975504L99.3467 4.63385C99.4857 4.91546 99.7546 5.11092 100.065 5.15583L104.103 5.74249C104.885 5.85632 105.198 6.81836 104.632 7.37056L101.71 10.2183C101.485 10.4374 101.383 10.7535 101.436 11.0631L102.126 15.0841C102.259 15.8637 101.441 16.4582 100.741 16.0902L97.1295 14.1918C96.8515 14.0458 96.5191 14.0458 96.2412 14.1918L92.63 16.0902C91.9298 16.4582 91.1115 15.8637 91.2451 15.0841L91.9349 11.0631C91.988 10.7535 91.8851 10.4374 91.6603 10.2183L88.7389 7.37056C88.1726 6.81836 88.485 5.85632 89.2679 5.74249L93.3053 5.15583C93.6163 5.11064 93.8849 4.91546 94.0239 4.63385L95.8293 0.975504C96.1796 0.265978 97.1911 0.265978 97.5413 0.975504Z"
                              fill="#FCE340"
                            />
                          </svg>
                        </div>
                        <p className="text-start mt-6">{item.description}</p>
                        <div className="flex flex-col items-center justify-center w-full mt-auto">
                          <div className="bg-[#EAE9E6] w-full h-[1px]" />
                          <div className="flex flex-row items-center justify-center w-full gap-4 my-2">
                            <p className="font-bold">{item.name}</p>
                            <div className="flex flex-row items-center justify-center gap-2">
                              <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="9.47083"
                                  cy="8.98352"
                                  r="8.67395"
                                  fill="#25CA85"
                                />
                                <path
                                  d="M5.69336 9.10323L8.58984 11.9995L14.3823 6.20703"
                                  stroke="white"
                                  stroke-width="2"
                                />
                              </svg>
                              <p>{item.status}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex flex-row items-center justify-center gap-10 mt-12">
            <CarouselPrevious className="flex flex-col p-2 w-[5vw] h-[5vw] border-none" />
            <CarouselDots
              itemCount={CarouselItems.length}
              className="flex flex-row h-[11px]"
            />
            <CarouselNext className="flex flex-col p-2 w-[5vw] h-[5vw] border-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
});
SlideshowTestimonials.displayName = "SlideshowTestimonials";

const Bottom = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const cards = [
    {
      title: "Let's talk comfort.",
      description:
        "ur bath pillow? It's like a cozy bear hug for your back and neck, thanks to the primo polyester we use. It's soft, cushy, and has a PhD in Ergonomics.",
    },
    {
      title: "Stability? We've got you.",
      description:
        "This little gem sticks to your tub like peanut butter to jelly, courtesy of six heavy-duty suction cups. It's like your clingy ex, but in a good way. No sliding around or unexpected dips.",
    },
    {
      title: "Let's not forget about convenience.",
      description:
        "Our pillow is a cinch to clean. After your bath, just hang it up with the built-in hook, easy peasy. And guess what? It's washing machine friendly.",
    },
  ];
  return (
    <section className="relative flex flex-col items-start justify-center w-full h-auto bg-white">
      <div className="flex flex-col xl:flex-row-reverse items-start justify-center w-full h-auto">
        {/* Right Content */}
        <div className="relative flex flex-col items-center justify-center xl:w-[50vw] w-full h-full">
          <div className="relative flex flex-col items-center justify-center w-full xl:min-w-[50vw] min-h-[100vw] md:min-h-[738px] overflow-hidden">
            <Image
              alt="hero-content"
              src="/images/bottom1.png"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Left Content */}
        <div className="container relative flex flex-col items-center justify-center xl:w-[50vw] w-full h-full">
          <div className="relative flex flex-col items-center justify-center w-full xl:min-w-[50vw] min-h-[738px] overflow-hidden">
            <div className="flex flex-col items-start justify-start w-full h-full gap-5 py-6 m-auto xl:max-w-[35vw]">
              <h2 className="text-4xl text-center xl:text-start w-full">
                Upgrade Your Bathing with these Game-Changers
              </h2>
              <ul className="flex flex-col items-start justify-between w-full h-full gap-5">
                {cards.map((card, index) => (
                  <li className="flex flex-col items-start justify-start gap-2 border rounded-lg px-8 py-6 min-h-[166px]">
                    <h3 className="capitalize text-2xl font-bold text-start">
                      {card.title}
                    </h3>
                    <p className="text-base">{card.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-start justify-center w-full h-auto">
        {/* Left Content */}
        <div className="relative flex flex-col items-center justify-center xl:w-[50vw] w-full h-full">
          <div className="relative flex flex-col items-center justify-center w-full xl:min-w-[50vw] min-h-[100vw] md:min-h-[738px] overflow-hidden">
            <Image
              alt="hero-content"
              src="/images/bottom2.png"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="container relative flex flex-col items-start xl:items-center justify-start xl:justify-center xl:w-[50vw] w-full h-full">
          <div className="relative flex flex-col items-start xl:items-center justify-start xl:justify-center xl:min-w-[50vw] min-h-[738px] overflow-hidden">
            <div className="flex flex-col items-start xl:items-center justify-start xl:justify-center h-full gap-5 py-6 my-8 xl:my-auto xl:mx-auto xl:max-w-[35vw]">
              <h2 className="text-4xl text-center xl:text-start w-full">
                LuxeBath: Because You Deserve the Best
              </h2>
              <ul className="flex flex-col items-start justify-start w-full gap-6 xl:max-h-[40ch] overflow-y-scroll xl:text-start text-center">
                <li className="flex flex-col items-start justify-start gap-5 text-lg">
                  <p>
                    At LuxeBath, we've cultivated an esteemed legacy in the
                    world of bath elegance, refining our expertise over the
                    years. As connoisseurs of bath excellence, we have
                    meticulously woven quality into every creation of ours.
                  </p>
                  <p>
                    Our commitment extends beyond mere products. We view every
                    interaction with our esteemed clients as an opportunity to
                    offer unparalleled service. Whether it's an inquiry, a
                    suggestion, or simply sharing your favorite relaxation
                    mantra, our dedicated support team is here to assist you.
                  </p>
                  <p>
                    Positioned in the heart of the USA, our warehouse embodies
                    excellence and efficiency. This strategic location is not
                    just a point on a map—it's a promise. A promise to deliver
                    luxury promptly anywhere in the country.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden absolute xl:flex flex-col items-center justify-center left-1/2 transform -translate-x-1/2 mx-auto bottom-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            width="308"
            height="113"
            viewBox="0 0 308 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            <path
              d="M308 113L224.004 29.0036C185.342 -9.65832 122.658 -9.65832 83.9964 29.0036L0 113L308 113Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center z-10 pointer-events-none">
          <a href="/">
            <Image
              alt="logo"
              src="/images/logo.png"
              width={174.5}
              height={69.8}
            />
          </a>
        </div>
      </div>
    </section>
  );
});
Bottom.displayName = "Bottom";

const FAQ = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const faqs = [
    {
      question: "Q: How comfortable is the bath pillow, really?",
      answer:
        "A: Let's put it this way: If clouds were a pillow, they'd be our bath pillow. Its soft, premium polyester contours to your body, promoting relaxation and stress relief.",
    },
    {
      question: "Q: Does the bath pillow really stay put?",
      answer:
        "A: Let's put it this way: If clouds were a pillow, they'd be our bath pillow. Its soft, premium polyester contours to your body, promoting relaxation and stress relief.",
    },
    {
      question: "Q: Can I really wash the bath pillow in my washing machine?",
      answer:
        "A: Let's put it this way: If clouds were a pillow, they'd be our bath pillow. Its soft, premium polyester contours to your body, promoting relaxation and stress relief.",
    },
    {
      question: "Q: What's the deal with the Bath Bridge?",
      answer:
        "A: Let's put it this way: If clouds were a pillow, they'd be our bath pillow. Its soft, premium polyester contours to your body, promoting relaxation and stress relief.",
    },
    {
      question: "Q: Will the Bath Pillow support heavier people?",
      answer:
        "A: Let's put it this way: If clouds were a pillow, they'd be our bath pillow. Its soft, premium polyester contours to your body, promoting relaxation and stress relief.",
    },
    {
      question: "Q: Will the Bath Pillow fit my tub?",
      answer:
        "A: Let's put it this way: If clouds were a pillow, they'd be our bath pillow. Its soft, premium polyester contours to your body, promoting relaxation and stress relief.",
    },
    {
      question: "Q: How big is the Bath Bridge? Will it fit my tub?",
      answer:
        "A: Let's put it this way: If clouds were a pillow, they'd be our bath pillow. Its soft, premium polyester contours to your body, promoting relaxation and stress relief.",
    },
    {
      question: "Q: How long is the money-back guarantee?",
      answer:
        "A: Let's put it this way: If clouds were a pillow, they'd be our bath pillow. Its soft, premium polyester contours to your body, promoting relaxation and stress relief.",
    },
  ];
  return (
    <section id="faq" className="container relative flex flex-col items-start justify-center w-full h-auto bg-white">
      <div className="relative flex flex-col items-center justify-center mx-auto h-full w-full py-12 gap-10">
        <h2 className="text-4xl text-center max-w-[30ch]">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-screen-lg">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} className="p-3">
              <AccordionTrigger>
                <p className="text-lg font-semibold text-start">
                  {faq.question}
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
});
FAQ.displayName = "FAQ";

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <footer className="relative flex flex-col items-start justify-center w-full h-auto bg-[#212121]">
      <div className="container flex flex-col lg:flex-row items-center justify-between w-full min-h-[65px] text-white text-sm py-4 lg:py-0">
        <div className="flex flex-col sm:flex-row items-center justify-center h-full gap-5 uppercase">
          <p className="hidden md:flex">© LUXEBATH.CO</p>
          <a href="#bundle">
            <p>Terms of Service</p>
          </a>
          <a href="#reviews">
            <p>Privacy Policy</p>
          </a>
          <a href="#reviews">
            <p>Terms & Conditions</p>
          </a>
        </div>
        <div className="flex flex-row items-center justify-center gap-24 uppercase">
          <div className="relative flex flex-col items-center justify-center w-[491px] h-[42px] overflow-hidden">
            <Image
              alt="hero-content"
              src="/images/footerpay.png"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";

export {
  Header,
  Hero,
  Testimonials,
  Slideshow,
  VideoTestimonials,
  Bundles,
  Products,
  Images,
  SlideshowTestimonials,
  Bottom,
  FAQ,
  Footer,
};
