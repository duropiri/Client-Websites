"use client";
import React from "react";
import HorizontalScroll from "./animations/HorizontalScroll";

export default function HorizontalSection() {
  return (
    <section id="horizontalScroll" className="">
      <HorizontalScroll>
        <div
          style={{
            width: "100vw",
            height: "100vh",
          }}
          className="flex flex-col items-center justify-center pt-[72px]"
        >
          <h1>Motivational Program</h1>
        </div>
        <div
          style={{
            width: "100vw",
            height: "100vh",
          }}
          className="flex flex-col items-center justify-center pt-[72px]"
        >
          <h2>20.4M</h2>
          Real people — real lives — we have built products and solutions for.
        </div>
        <div
          style={{
            width: "100vw",
            height: "100vh",
          }}
          className="flex flex-col items-center justify-center pt-[72px]"
        >
          <h2>49%</h2> Expert Women in Tech.
        </div>
      </HorizontalScroll>
    </section>
  );
}
