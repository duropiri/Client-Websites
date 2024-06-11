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

const Slideshow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const CarouselItems = [
    {
      src: "/images/chachacha/carousel1.jpg",
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
      title: "Kitchen Collection",
      description:
        "Create the kitchen of your dreams with our stylish and functional furniture. From cabinets to dining sets, we have everything you need to make your kitchen the heart of your home.",
    },
    {
      src: "/images/chachacha/carousel2.jpg",
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
      title: "Living Room Collection",
      description:
        "Transform your living space with our comfortable and stylish sofas, entertainment centers, and coffee tables. Make your living room a place where everyone wants to gather.",
    },
    {
      src: "/images/chachacha/carousel3.jpg",
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
      title: "Entryway Collection",
      description:
        "Make a great first impression with our beautifully crafted entryway furniture. Our range includes stylish storage solutions and welcoming decor that enhance the look and functionality of your home.",
    },
    {
      src: "/images/chachacha/carousel4.jpg",
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
      title: "Bathroom Collection",
      description:
        "Turn your bathroom into a relaxing retreat with our high-quality vanities, storage cabinets, and accessories. Enjoy a spa-like experience every day with our elegant and durable bathroom furniture.",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center w-full h-auto ">
      <div className="flex flex-col items-center justify-center mx-auto h-full w-full py-12 gap-10">
        <h2 className="text-4xl text-center max-w-[20ch]">
          Revamp Your Home with Our Exclusive Furniture Collections
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
export default Slideshow;
