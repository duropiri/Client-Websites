import Image from "next/image";
import * as React from "react";

const Bottom = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const cards = [
    {
      title: "Versatile Bookcases",
      description:
        "Our versatile bookcases offer the perfect blend of functionality and style. Organize your books and display decor items beautifully.",
    },
    {
      title: "Elegant Shelving Units",
      description:
        "Discover our elegant shelving units, combining modern design with practicality. Perfect for showcasing your favorite items.",
    },
    {
      title: "Innovative Storage Solutions",
      description:
        "Our innovative storage solutions maximize space and style. Ideal for organizing any room without compromising on aesthetics.",
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
                Enhance Your Home with Our Stylish Storage Solutions
              </h2>
              <ul className="flex flex-col items-start justify-between w-full h-full gap-5">
                {cards.map((card, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-start justify-start gap-2 border rounded-lg px-8 py-6 min-h-[166px]"
                  >
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
                Upgrade Your Home with Exceptional Savings
              </h2>
              <ul className="flex flex-col items-start justify-start w-full gap-6 xl:max-h-[40ch] overflow-y-scroll xl:text-start text-center">
                <li className="flex flex-col items-start justify-start gap-5 text-lg">
                  <p>
                    Don&apos;t miss out on our exclusive Black Friday deals! For one
                    week only, enjoy incredible discounts on our best-selling
                    furniture pieces. Whether you&apos;re looking to refresh your
                    living room, add functionality to your bedroom, or create a
                    cozy outdoor space, we have something for everyone.
                  </p>
                  <p>
                    Our Porch Set is perfect for relaxing outdoors, offering
                    both comfort and durability. The versatile Sofa Bed provides
                    a stylish solution for maximizing space, easily transforming
                    from a sofa to a bed. And our elegant Bedroom Set brings a
                    touch of luxury to any bedroom, crafted with high-quality
                    materials for a timeless appeal.
                  </p>
                  <p>
                    Shop now and save 20% to 50% on selected items. Hurry, these
                    deals won&apos;t last long! Experience the perfect blend of
                    style, comfort, and affordability with our Black Friday
                    Sale.
                  </p>
                  <p>
                    Upgrade your home today and take advantage of these
                    unbeatable offers. Enjoy fast delivery and exceptional
                    customer service on every purchase...
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
