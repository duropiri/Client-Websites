import Image from "next/image";
import * as React from "react";

const Bottom = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const cards = [
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet eget sit amet tellus.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet eget sit amet tellus.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet eget sit amet tellus.",
    },
  ];
  return (
    <section className="relative flex flex-col items-start justify-center w-full h-auto ">
      <div className="flex flex-col xl:flex-row-reverse items-start justify-center w-full h-auto">
        {/* Right Content */}
        <div className="relative flex flex-col items-center justify-center xl:w-[50vw] w-full h-full">
          <div className="relative flex flex-col items-center justify-center w-full xl:min-w-[50vw] min-h-[100vw] md:min-h-[738px] overflow-hidden">
            <Image
              alt="hero-content"
              src="/images/chachacha/item75.png"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h2>
              <ul className="flex flex-col items-start justify-between w-full h-full gap-5">
                {cards.map((card, index) => (
                  <li key={index} className="flex flex-col items-start justify-start gap-2 border rounded-lg px-8 py-6 min-h-[166px]">
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
              src="/images/chachacha/item74.jpg"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h2>
              <ul className="flex flex-col items-start justify-start w-full gap-6 xl:max-h-[40ch] overflow-y-scroll xl:text-start text-center">
                <li className="flex flex-col items-start justify-start gap-5 text-lg">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum
                    tellus. Eros in cursus turpis massa tincidunt.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum
                    tellus. Eros in cursus turpis massa tincidunt.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum
                    tellus. Eros in cursus turpis massa tincidunt.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden absolute xl:flex flex-col items-center justify-center left-1/2 transform -translate-x-1/2 mx-auto -bottom-10">
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
              fill="#152139"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center z-10 pointer-events-none">
          <a href="/">
            <Image
              alt="logo"
              src="/images/chachacha/logo.png"
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
export default Bottom;
