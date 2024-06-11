import Image from "next/image";
import * as React from "react";

const Testimonials = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-auto  border-y">
      <div className="flex flex-col xl:flex-row items-center justify-center mx-auto h-full w-full p-4 gap-5">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-center gap-5">
          <p className="mt-[5px] text-center xl:text-start">
            sed adipiscing diam donec adipiscing tristique risus nec feugiat in
            ❤️
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
export default Testimonials;
