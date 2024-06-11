import Image from "next/image";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";

const SlideshowTestimonials = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const CarouselItems = [
    {
      title: "Transformational Quality and Style",
      description:
        "Absolutely love the quality and style! This storage unit has transformed my living room and provided much-needed organization. The sleek design fits perfectly with my decor. Perfect addition to my home.",
      name: "Ellie",
      status: "Verified Customer",
    },
    {
      title: "Exceeded My Expectations!",
      description:
        "Exceeded my expectations! The craftsmanship is outstanding, and the materials used are top-notch. Fantastic service and fast delivery. I was able to assemble it in no time, and it looks amazing.",
      name: "Sherlyn",
      status: "Verified Customer",
    },
    {
      title: "Best Purchase Ever!",
      description:
        "This is the best purchase I've ever made. The storage unit is not only functional but also adds a touch of elegance to my space. Highly recommend to anyone looking for quality furniture! ❤️",
      name: "Sarah",
      status: "Verified Customer",
    },
    {
      title: "Amazing Value and Versatility",
      description:
        "Amazing products and great value for the price. The versatility of this unit has made it a staple in my home. Will definitely shop here again. It's perfect for storing everything from books to clothes.",
      name: "Elyse",
      status: "Verified Customer",
    },
  ];
  return (
    <section
      id="reviews"
      className="flex flex-col items-center justify-center w-full h-auto bg-white"
    >
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
          What Our Customers Are Saying
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
export default SlideshowTestimonials;
