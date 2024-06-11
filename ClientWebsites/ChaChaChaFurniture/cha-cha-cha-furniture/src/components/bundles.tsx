import Image from "next/image";
import * as React from "react";

const Bundles = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const bundles = [
    {
      name: "bundle1",
      items: [
        {
          src: "/images/chachacha/item5.jpg",
          description: "Lorem ipsum dolor sit amet",
        },
        {
          src: "/images/chachacha/item5.jpg",
          description: "Lorem ipsum dolor sit amet",
        },
        {
          src: "/images/chachacha/item5.jpg",
          description: "Lorem ipsum dolor sit amet",
        },
      ],
    },
    {
      name: "bundle2",
      items: [
        {
          src: "/images/chachacha/item5.jpg",
          description: "Lorem ipsum dolor sit amet",
        },
        {
          src: "/images/chachacha/item5.jpg",
          description: "Lorem ipsum dolor sit amet",
        },
      ],
    },
  ];

  const firstBundle = bundles[0];
  const secondBundle = bundles[1];
  return (
    <section
      id="bundle"
      className="container flex flex-col items-center justify-center w-full h-auto "
    >
      <div className="relative flex flex-col items-center justify-center mx-auto h-full w-full py-12 pb-20 gap-10 max-w-[100vw]">
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full h-20">
          <h3 className="uppercase text-xl font-bold text-center hidden xl:flex lg:ml-[10vw]">
            Lorem ipsum
          </h3>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h2 className="text-4xl text-center max-w-[12ch]">
              Lorem ipsum dolor sit amet
            </h2>
          </div>
          <h3 className="uppercase text-xl font-bold text-center hidden xl:flex lg:mr-[10vw]">
            Lorem ipsum
          </h3>
        </div>
        <div className="relative flex flex-col xl:flex-row items-center justify-between w-full h-full md:gap-10 xl:gap-0">
          <div className="flex flex-col items-center justify-center w-auto h-full">
            <h3 className="uppercase text-xl font-bold text-center mt-12 mb-6 xl:hidden flex">
              Lorem ipsum
            </h3>
            <div className="flex flex-row items-center justify-center w-full h-full max-w-[100vw]">
              <ul className="flex flex-col items-center justify-center w-full h-full gap-6">
                {firstBundle.items.map((item, index) => (
                  <li key={index} className="flex flex-row items-center justify-center gap-6">
                    <div className="relative flex flex-col items-center justify-center rounded-full min-w-[20vw] min-h-[20vw] md:min-w-[110px] md:min-h-[110px] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={`Bundle ${item} item`}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    </div>
                    <p className="uppercase text-sm sm:text-xl text-start max-w-[16ch]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="relative flex flex-col items-center justify-center min-w-[30vw] min-h-[30vw] md:min-w-[280px] md:min-h-[280px] overflow-hidden rounded-full">
                <Image
                  src="/images/chachacha/item5.jpg"
                  alt="profile image"
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center left-1/2 transform -translate-x-1/2 z-10 w-[10px] mx-5">
            <p className="flex flex-col items-center justify-center text-9xl font-thin pointer-events-none">
              +
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-auto h-full">
            <h3 className="uppercase text-xl font-bold text-center mt-12 mb-6 xl:hidden flex">
              Lorem ipsum
            </h3>
            <div className="flex flex-row-reverse items-center justify-center w-full h-full  max-w-[100vw]">
              <ul className="flex flex-col items-center justify-center w-full h-full gap-6">
              {secondBundle.items.map((item, index) => (
                  <li key={index} className="flex flex-row items-center justify-center gap-6">
                    <div className="relative flex flex-col items-center justify-center rounded-full min-w-[20vw] min-h-[20vw] md:min-w-[110px] md:min-h-[110px] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={`Bundle ${item} item`}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    </div>
                    <p className="uppercase text-sm sm:text-xl text-start max-w-[16ch]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="relative flex flex-col items-center justify-center min-w-[30vw] min-h-[30vw] md:min-w-[292px] md:min-h-[292px] overflow-hidden rounded-full">
                <Image
                  src="/images/chachacha/item5.jpg"
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
export default Bundles;
