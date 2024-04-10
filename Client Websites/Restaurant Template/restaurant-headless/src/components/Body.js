"use client";
import React, { useRef, useEffect } from "react";
import Marquee from "./Marquee";
import { useGlobalState } from "./GlobalStateContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from "gsap";
import { TweenMax } from "gsap/all";

const Body = () => {
  const { isLoading } = useGlobalState();
  const { marqueeContent } = useGlobalState(); // Destructuring marqueeContent directly from the global state
  const { homePageContent } = useGlobalState();

  // console.log(marqueeContent);
  console.log(homePageContent);
  const strapiBaseURL =
    process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "http://localhost:1337";

  // GSAP Animations
  useEffect(() => {
    const fadeInUp = () => {
      var content = document.getElementById("fade-in");

      TweenMax.fromTo(content, 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
    };

    const parallax = () => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      let effectElements = gsap.utils.toArray("[data-speed]");
      effectElements.forEach((el) => {
        let speed = parseFloat(el.getAttribute("data-speed"));
        gsap.fromTo(
          el,
          { y: 0 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              onRefresh: (self) => {
                let start = Math.max(0, self.start); // ensure no negative values
                let distance = self.end - start;
                let end = start + distance / speed;
                self.setPositions(start, end);
                self.animation.vars.y = (end - start) * (1 - speed);
                self.animation.invalidate().progress(1).progress(self.progress);
              },
            },
          }
        );
      });
    };
    fadeInUp();
    parallax();
    window.addEventListener("resize", parallax);

    return () => {
      window.removeEventListener("resize", parallax);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Placeholder loading state
  }

  return (
    <div className="flex flex-col w-full h-full justify-center bg-background rounded-b-[75px] z-[10]">
      <div className="content-over-video relative mt-[25vh] flex flex-col top-0 md:hidden">
        <div
          id="hero-bottom"
          className="grid grid-cols-12 z-10 -mt-[50vh] max-h-[50vh] h-[50vh] items-end"
        >
          <div className="col-span-12 leading-none uppercase pb-[5vh] w-full pt-[5vh] px-[5vw]">
            <p className="block text-start relative text-[22px] xl:text-[1vw] font-ciutadela font-semibold">
              Rustic - Authentic - Italian
            </p>
            <h2 className="block text-start relative text-[38px] sm:text-[5vw] font-primary font-bold">
              Enjoy a little taste of Italy! Buon Appetito!
            </h2>
          </div>
        </div>
      </div>
      <div className="relative flex flex-row justify-between">
        <div
          id="fade-in"
          className="pt-[5vh] pb-[10vh] pl-[5vw] pr-[2vw] w-full"
        >
          <p className="font-secondary font-normal mb-[2vh] text-[16px] max-w-[50ch] lg:max-w-[100ch]">
            We are a locally owned & Italian owned, casual and authentic Italian
            restaurant located in the heart of downtown Saskatoon. The magic at
            La Cucina happens in “the kitchen”. We use simple and fresh
            ingredients to create classic, home-style Italian dishes.
          </p>
          <div className="flex flex-row gap-x-8 text-white font-primary font-bold uppercase">
            <a href="/" className="cursor-pointer hover:underline text-[18px]">
              Menu
            </a>
          </div>
        </div>
        <div
          className="hidden mr-[3vw] -mt-[20vw] w-[45vw] md:block"
          data-speed="1.15"
        >
          <img
            src="/img/marquee/04ad3e_f0871b248bd04a0cae7c0aea80899dd8~mv2.webp"
            alt="la cucina ristorante"
            loading="eager"
            className="object-cover z-20"
            style={{
              width: "100%", // Takes the full width of the container
              height: "auto", // Height is set automatically to maintain the aspect ratio
              aspectRatio: "0.833", // Force the aspect ratio of 0.833
            }}
            decoding="async"
          />
        </div>
      </div>
      {/* Marquee */}
      {/* <section className="px-[2vw] overflow-x-hidden mb-[10vh]">
        <h2 className="block text-start relative text-[38px] lg:text-[2vw] font-primary font-bold uppercase mb-[2vh]">
          saskatoons premiere italian dining room
        </h2>
        <div className="-mx-[10vw]">
          <Marquee>
            {marqueeContent &&
              [...marqueeContent.images.data].map(({ id, attributes }) => (
                <img
                  key={id}
                  src={`${strapiBaseURL}${attributes.url}`}
                  alt={attributes.alternativeText || "Marquee Image"}
                  className="sm:h-54 h-[40vw] w-64 border-y-2 border-card-foreground md:h-72 object-cover "
                  loading="eager"
                  width="1728"
                  height="992"
                  decoding="async"
                />
              ))}
          </Marquee>
        </div>
      </section> */}
      <MarqueeSection
        content={[homePageContent, marqueeContent]}
        strapiBaseURL={strapiBaseURL}
      />

      {/* Info Section - Hosting */}
      <section className="flex flex-col lg:flex-row-reverse items-start justify-center my-[5vw]">
        <div className="ml-[9vw] lg:m-0">
          <img
            src="https://assets.cage.ca/production/page-contenu/pagebuilder/_1920x1080_crop_center-center_70_none/BlondeCage-Canette-32.jpg"
            className="rounded-bl-[70px] w-[90vw] lg:max-w-[60vw] lg:max-h-[800px] object-cover"
            alt="Blonde Cage Canette 32"
          />
        </div>

        {/* Info */}
        <div className="-mt-[5vh] lg:mt-[0vh] px-[2vw] w-full">
          <div className="flex w-full gap-2">
            <span className="font-secondary font-semibold uppercase text-[22px] lg:px-[1vw] z-10">
              Hosting
            </span>
            <span className="lines "></span>
          </div>

          <div className="text-content ml-[5vw] mt-[2vh]">
            <h2 className="block text-start relative text-[4vw] font-primary font-bold uppercase mb-[2vh] leading-none">
              Private Parties
            </h2>
            <div className="max-w-[50ch]">
              <p className="font-secondary font-normal mb-[2vh] text[16px]">
                Host your group exclusively in our dining room! <br />
                Luncheons available{" "}
                <span className="font-bold underline">
                  Monday to Friday
                </span>{" "}
                for a minimum of 20 guests.
              </p>
              <div className="flex flex-row gap-x-8 text-white font-primary font-bold uppercase text-[18px]">
                <a href="/" className="cursor-pointer hover:underline">
                  Group &amp; Event Bookings
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section - Catering */}
      <section className="flex flex-col lg:flex-row-reverse items-start justify-center my-[5vw]">
        <div className="ml-[9vw] lg:m-0">
          <img
            src="https://assets.cage.ca/production/page-contenu/pagebuilder/_1920x1080_crop_center-center_70_none/BlondeCage-Canette-32.jpg"
            className="rounded-bl-[70px] w-[90vw] lg:max-w-[60vw] max-h-[800px] object-cover"
            alt="Blonde Cage Canette 32"
          />
        </div>

        {/* Info */}
        <div className="-mt-[5vh] lg:mt-[0vh] px-[2vw] w-full">
          <div className="flex w-full gap-2">
            <span className="font-secondary font-semibold uppercase text-[22px] lg:px-[1vw] z-10">
              Catering
            </span>
            <span className="lines"></span>
          </div>
          <div className="text-content ml-[5vw] mt-[2vh]">
            <h2 className="block text-start relative text-[4vw] font-primary font-bold uppercase mb-[2vh] leading-none">
              Catering available for events in your office
            </h2>
            <div className="max-w-[50ch]">
              <p className="font-secondary font-normal mb-[2vh] text[16px]">
                - Luncheons
                <br /> - Special Events
                <br /> - Group Gatherings
              </p>
              <div className="flex flex-row gap-x-8 text-white font-primary font-bold uppercase text-[18px]">
                <a href="/" className="cursor-pointer hover:underline">
                  Group Catering
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fancy Section - Gift Cards */}
      <section className="flex flex-col lg:flex-row-reverse items-start justify-center mt-[5vw] mb-[1vh]">
        <div className="flex flex-col w-full">
          <div className="lg:m-0">
            <img
              src="https://assets.cage.ca/production/page-contenu/pagebuilder/_1920x1080_crop_center-center_70_none/BlondeCage-Canette-32.jpg"
              className="w-full h-[50vw] max-h-[820px] object-cover"
              alt="Blonde Cage Canette 32"
            />
          </div>

          <div className="mt-[5vh] lg:-mt-[5vh] w-full" data-speed="1.15">
            <div className="flex flex-col bg-primary-foreground rounded-bl-[40px] ml-[5vw] pl-[5vw] py-[5vw]">
              <span className="font-secondary font-semibold uppercase text-[22px] lg:text-[2vw] mb-[2vh]">
                Gift Cards
              </span>
              <h2 className="block text-start relative text-[4vw] font-primary font-bold uppercase mb-[2vh] leading-none">
                Gift cards available in-store
              </h2>
              <div className="flex flex-col  justify-between max-w-[50ch]">
                <p className="font-secondary font-normal mb-[2vh] text[16px]">
                  No gift would do until you found La Cucina&apos;s gift cards!
                  What&apos;s better than giving the best atmosphere in the city
                  as a gift? Everyone will be satisfied — that&apos;s our
                  promise.
                </p>
                <div className="flex flex-row gap-x-8 text-white font-primary font-bold uppercase text-[18px]">
                  <a href="/" className="cursor-pointer hover:underline">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section - Menu */}
      <section className="flex flex-col lg:flex-row-reverse items-start justify-center my-[5vw]">
        <div className="ml-[9vw] lg:m-0">
          <img
            src="https://assets.cage.ca/production/page-contenu/pagebuilder/_1920x1080_crop_center-center_70_none/BlondeCage-Canette-32.jpg"
            className="rounded-bl-[70px] w-[90vw] lg:max-w-[60vw] max-h-[800px] object-cover"
            alt="Blonde Cage Canette 32"
          />
        </div>

        {/* Info */}
        <div className="-mt-[5vh] lg:mt-[0vh] px-[2vw] w-full">
          <div className="flex w-full gap-2">
            <span className="font-secondary font-semibold uppercase text-[22px] lg:px-[1vw] z-10">
              Menu
            </span>
            <span className="lines"></span>
          </div>
          <div className="text-content ml-[5vw] mt-[2vh]">
            <h2 className="block text-start relative text-[4vw] font-primary font-bold uppercase mb-[2vh] leading-none">
              Enjoy a little taste of Italy! Buon Appetito!
            </h2>
            <div className="max-w-[50ch]">
              <p className="font-secondary font-normal mb-[2vh] text[16px]">
                We are a locally owned & Italian owned, casual and authentic
                Italian restaurant located in the heart of downtown Saskatoon.
                The magic at La Cucina happens in “the kitchen”. We use simple
                and fresh ingredients to create classic, home-style Italian
                dishes.
              </p>
              <div className="flex flex-row gap-x-8 text-white font-primary font-bold uppercase text-[18px]">
                <a href="/" className="cursor-pointer hover:underline">
                  Dinner Menu
                </a>
                <a href="/" className="cursor-pointer hover:underline">
                  Cocktail Menu
                </a>
                <a href="/" className="cursor-pointer hover:underline">
                  Wine List
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fancy Section - Store Hours & Location */}
      <section className="flex flex-col lg:flex-row-reverse items-start justify-center mt-[5vw] pb-[5vw]">
        <div className="flex flex-col w-full">
          <div id="map" className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.3675950849456!2d-106.66545552254475!3d52.12763446520408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f7b9fd7a7e5b%3A0xa0331f6e08a8a18e!2sLa%20Cucina%20Ristorante!5e0!3m2!1sen!2sca!4v1712587547418!5m2!1sen!2sca"
              width="600" // Adjust width as needed or use Tailwind's width classes
              height="450" // Adjust height as needed or use Tailwind's height classes
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[50vw] max-h-[820px] object-cover"
            />
          </div>

          <div className="mt-[5vh] lg:-mt-[5vh] w-full" data-speed="1.15">
            <div className="flex flex-col bg-primary-foreground rounded-bl-[40px] ml-[5vw] pl-[5vw] py-[5vw]">
              <span className="font-secondary font-semibold uppercase text-[22px] lg:text-[2vw] mb-[2vh]">
                Store Hours
              </span>
              <h2 className="block text-start relative text-[4vw] font-primary font-bold uppercase mb-[2vh] leading-none">
                La Cucina Ristorante, 145 3rd avenue south Saskatoon, SK
              </h2>
              <div className="flex flex-col  justify-between max-w-[50ch]">
                <p className="font-secondary font-normal mb-[2vh] text[16px]">
                  Sunday CLOSED
                  <br /> MONDAY to THURSDAY 5PM - 9:30PM
                  <br /> FRIDAY & SATURDAY 5PM - 10:30PM
                </p>
                <div className="flex flex-row gap-x-8 text-white font-primary font-bold uppercase text-[18px]">
                  <a href="/" className="cursor-pointer hover:underline">
                    la.cucina.yxe@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const MarqueeSection = ({ content, strapiBaseURL }) => (
  <section className="px-[2vw] overflow-x-hidden mb-[10vh]">
    <h2 className="block text-start relative text-[38px] lg:text-[2vw] font-primary font-bold uppercase mb-[2vh]">
      {content[0] && content[0].marqueeHeading}
    </h2>
    <div className="-mx-[10vw]">
      <Marquee>
        {content[1] &&
          [...content[1].images.data].map(({ id, attributes }) => (
            <img
              key={id}
              src={`${strapiBaseURL}${attributes.url}`}
              alt={attributes.alternativeText || "Marquee Image"}
              className="sm:h-54 h-[40vw] w-64 border-y-2 border-card-foreground md:h-72 object-cover "
              loading="eager"
              width="1728"
              height="992"
              decoding="async"
            />
          ))}
      </Marquee>
    </div>
  </section>
);

const InfoSection = ({ content }) => (
  // Render each content section dynamically based on `content` prop
  <></>
  // Similar to the hardcoded sections, but fill data dynamically
);

const MapSection = ({ storeHoursContent }) => (
  // Render map section based on `storeHoursContent`
  <></>
);

export default Body;
