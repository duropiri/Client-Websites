import React from "react";
import { CarouselPlugin } from "../animations/AutoPlayCarousel";

const items = [
  <span className="text-4xl font-semibold">1</span>,
  <span className="text-4xl font-semibold">2</span>,
  <span className="text-4xl font-semibold">3</span>,
  <span className="text-4xl font-semibold">4</span>,
  <span className="text-4xl font-semibold">5</span>,
];

function carouselSection() {
  return (
    <section className="flex flex-col items-center relative pt-12 min-h-[100vh] overflow-hidden ">
      <CarouselPlugin items={items} delay={3000} className="flex flex-col justify-center w-[40vw] " />
    </section>
  );
}

export default carouselSection;
