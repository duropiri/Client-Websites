"use client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    library.add(fab);
  }, []);
  return (
    <footer className="bg-primary-foreground pt-[200px] px-[5vw] pb-[2vw]">
      <div className="flex flex-col lg:flex-row gap-[2vh] lg:gap-[7.5vw] justify-start pt-[5vh] lg:pt-[15vh] pb-[5vh] lg:pb-[10vh]">
        <div>
          <a
            className="-ml-2 flex items-center rounded-full px-2 font-melodrama text-3xl transition w-auto"
            href="/"
          >
            <img
              src="/img/logo.png/"
              alt="la cucina ristorante"
              loading="eager"
              className="h-auto w-[10rem] lg:w-[16rem]"
              width="516"
              height="516"
              decoding="async"
            />
          </a>
        </div>
        <div>
          <h2 className="font-primary font-bold uppercase text-[22px] lg:text-[2vw] mt-[1vh] lg:mb-[2vh]">
            La Cucina
          </h2>
          <div className="flex flex-col justify-between max-w-[50ch]">
            <div className="flex flex-col gap-x-8 text-white font-primary font-bold uppercase gap-[0.5vw]">
              <a href="/" className="cursor-pointer hover:underline">
                About
              </a>
              <a href="/" className="cursor-pointer hover:underline">
                In Store
              </a>
              <a href="/" className="cursor-pointer hover:underline">
                Corporate Events
              </a>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-primary font-bold uppercase text-[22px] lg:text-[2vw] mt-[1vh]  lg:mb-[2vh]">
            Talk to Us
          </h2>
          <ul className="flex flex-col gap-x-8 text-white font-primary font-bold uppercase gap-[0.5vw]">
            <li>
              <a href="/" className="cursor-pointer hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer hover:underline">
                Give Your Opinion
              </a>
            </li>
            <li>
              <div className="flex flex-row justify-start items-center text-[30px] gap-[20px] h-[2vw] w-full mt-[2vw]">
                {/* Social Media Icons */}
                <a href="/" aria-label="Instagram">
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </a>
                <a href="/" aria-label="Facebook">
                  <FontAwesomeIcon icon="fa-brands fa-facebook" />
                </a>
                <a href="/" aria-label="TikTok">
                  <FontAwesomeIcon icon="fa-brands fa-tiktok" />
                </a>
                <a href="/" aria-label="YouTube">
                  <FontAwesomeIcon icon="fa-brands fa-youtube" />
                </a>
                <a href="/" aria-label="LinkedIn">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* <div>
          <h2 className="font-primary font-bold uppercase text-[22px] lg:text-[2vw] mt-[1vh]  lg:mb-[2vh]">
            Talk to Us
          </h2>
          <ul className="flex flex-col gap-x-8 text-white font-primary font-bold uppercase gap-[0.5vw]">
            <li>
              <a href="/" className="cursor-pointer hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer hover:underline">
                Give Your Opinion
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="bg-foreground h-[1px] w-full"></div>
      <ul className="flex gap-[10px] py-[2vh]">
        <li>
          <a href="/" className="cursor-pointer hover:underline">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/" className="cursor-pointer hover:underline">
            La Cucina Terms and Conditions
          </a>
        </li>

        <li>
          <a href="/" className="cursor-pointer hover:underline">
            Employee portal
          </a>
        </li>
        <li>
          <a href="/" className="cursor-pointer hover:underline">
            Code of Ethics
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
