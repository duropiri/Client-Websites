"use client";
import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";

const Images = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const images = [
    "/images/chachacha/item11.jpg",
    "/images/chachacha/item12.jpg",
    "/images/chachacha/item13.jpg",
    "/images/chachacha/item14.jpg",
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section className="flex flex-row items-start justify-start w-full h-auto">
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
export default Images;
