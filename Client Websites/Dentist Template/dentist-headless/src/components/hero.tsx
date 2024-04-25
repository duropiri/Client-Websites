"use client";
import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32">
          <div className="text-center">
            <h1 className=" text-6xl tracking-[2.5%] text-gray-900 sm:text-6xl">
              Smiles that <span className="text-[#1493A4]">Inspire</span>
            </h1>
            <p className="mt-1 text-2xl leading-8 text-gray-600">
              Yorkton's Most Gentle Dental Clinic
            </p>
            <div className="mt-14 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="bg-[#1493A4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1493A4]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 grid grid-cols-2 grid-rows-2 justify-between w-full px-6 -z-10">
          <div className="flex flex-col items-start justify-between w-full">
            <img
              src="/img/Rectangle 95.png"
              alt=""
              loading="eager"
              className=""
              decoding="async"
            />
            <img
              src="/img/Rectangle 94.png"
              alt=""
              loading="eager"
              className=""
              decoding="async"
            />
          </div>
          <div className="flex flex-col items-end justify-between w-full">
            <img
              src="/img/Rectangle 92.png"
              alt=""
              loading="eager"
              className=""
              decoding="async"
            />
            <img
              src="/img/Rectangle 93.png"
              alt=""
              loading="eager"
              className=""
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
