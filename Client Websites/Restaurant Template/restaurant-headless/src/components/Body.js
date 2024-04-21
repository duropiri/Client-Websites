"use client";
import React, { useRef, useEffect } from "react";
import Marquee from "./Marquee";
import { useGlobalState } from "./GlobalStateContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { ScrollSmoother } from "gsap";
import { TweenMax } from "gsap/all";
import { Skeleton } from "@nextui-org/react";
import SplitType from "split-type";

const Body = () => {
  const { state } = useGlobalState();
  const { isLoading, marqueeContent, homePageContent } = state;


  // console.log(marqueeContent);
  // console.log(homePageContent);

  const strapiBaseURL =
    process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "http://localhost:1337";

  // GSAP Animations
  useEffect(() => {
    const parallax = () => {
      gsap.registerPlugin(ScrollTrigger);

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

    const textUnderlineAnimation = () => {
      document.querySelectorAll(".hover-link").forEach((link) => {
        const underline = link.querySelector(".underline");

        // Set initial styles for GSAP to manage transform origin
        gsap.set(underline, { transformOrigin: "left center", scaleX: 0 });

        // Hover start: expand the underline from the left
        link.addEventListener("mouseenter", () => {
          gsap.to(underline, {
            scaleX: 1,
            duration: 0.3,
            ease: "power2.out",
            transformOrigin: "left center", // Ensures the origin is correct for expanding
          });
        });

        // Hover end: contract the underline to the right
        link.addEventListener("mouseleave", () => {
          gsap.to(underline, {
            scaleX: 0,
            duration: 0.3,
            ease: "power2.in",
            transformOrigin: "right center", // Shifts the origin to right for contraction
          });
        });
      });
    };

    const textFadeInAnimation = () => {
      const splitTypes = document.querySelectorAll(".text-fade-in");

      splitTypes.forEach((char, i) => {
        const text = new SplitType(char, { types: "chars" });

        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.1,
        });
      });
    };

    const textFadeInUpAnimation = () => {
      const splitTypes = document.querySelectorAll(".fade-in");

      splitTypes.forEach((words, i) => {
        const text = new SplitType(words, { types: "words" });

        gsap.from(text.words, {
          scrollTrigger: {
            trigger: words,
            start: "top 90%", // when the top of the trigger hits the 90% viewport height
            // end: "top 10%", // when the top of the trigger hits the 10% viewport height
            toggleActions: "play none none reverse", // play the animation when scrolling forward and reverse when scrolling back
            markers: false, // shows start and end markers in the viewport (useful for debugging)
          },
          opacity: 0, // start at 0 opacity
          y: 50,
          duration: 0.4, // animation lasts for 1 second
          ease: "linear", // use a gentle easing for a smooth effect
        });
      });
    };

    const textScrollInAnimation = () => {
      const splitTypes = document.querySelectorAll(".text-scroll-in");

      splitTypes.forEach((char, i) => {
        const text = new SplitType(char, { types: "chars,words" });

        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
            markers: false,
          },
          y: 100,
          opacity: 0,
          stagger: 0.1,
        });
      });
    };

    const textExpandInAnimation = () => {
      const splitTypes = document.querySelectorAll(".text-expand-in");

      splitTypes.forEach((char, i) => {
        const text = new SplitType(char, { types: "chars,words" });

        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 90%",
            // scrub: true,
            toggleActions: "restart pause restart pause",
            markers: false,
          },
          scaleY: 0,
          y: -20,
          opacity: 0,
          stagger: 0.01,
          duration: 0.05, // Duration of each character animation
        });
      });
    };

    // Parallax Animation
    parallax();
    window.addEventListener("resize", parallax);

    // Text Animations
    textUnderlineAnimation();
    window.addEventListener("DOMContentLoaded", textUnderlineAnimation);
    textFadeInAnimation();
    window.addEventListener("DOMContentLoaded", textFadeInAnimation);
    textFadeInUpAnimation();
    window.addEventListener("DOMContentLoaded", textFadeInUpAnimation);
    textScrollInAnimation();
    window.addEventListener("DOMContentLoaded", textScrollInAnimation);
    textExpandInAnimation();
    window.addEventListener("DOMContentLoaded", textExpandInAnimation);

    return () => {
      // Parallax Animation
      window.removeEventListener("resize", parallax);

      // Text Animations
      window.removeEventListener("DOMContentLoaded", textUnderlineAnimation);
      window.removeEventListener("DOMContentLoaded", textFadeInAnimation);
      window.removeEventListener("DOMContentLoaded", textFadeInUpAnimation);
      window.removeEventListener("DOMContentLoaded", textScrollInAnimation);
      window.removeEventListener("DOMContentLoaded", textExpandInAnimation);

      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [isLoading]);

  return (
    <>
      {!isLoading && homePageContent && (
        <section className="flex flex-col w-full h-full justify-center bg-background rounded-b-[75px] z-[99]">
          {/* Hero Subheadiing */}
          <div className="relative md:flex flex-col top-0 hidden md:bg-transparent px-[10vw]">
            <div
              id="hero-bottom"
              className="grid grid-cols-12 -mt-[50vh] max-h-[50vh] h-[50vh] items-end"
            >
              <div className="col-span-12 md:col-span-7 leading-none uppercase pb-[5vh] w-full pt-[5vh]">
                <p className="block text-start relative text-[22px] xl:text-[1vw] font-secondary font-semibold">
                  {homePageContent.heroHeading}
                </p>
                <h1 className="block text-start relative text-[38px] sm:text-[5vw] font-primary font-bold">
                  {homePageContent.heroSubheading}
                </h1>
              </div>
            </div>
          </div>

          <div className="relative flex flex-row justify-between px-[10vw] gap-[1vw] md:pl-[10vw] md:pr-[0]">
            <div className="flex flex-col">
              <div className="relative flex flex-col top-0 md:hidden">
                <div
                  id="hero-bottom"
                  className="grid grid-cols-12 z-10  max-h-[50vh] items-end"
                >
                  <div className="col-span-12 leading-none uppercase w-full pt-[5vh]">
                    <p className="block text-start relative text-[18px] xl:text-[1vw] font-secondary font-semibold">
                      {homePageContent.heroHeading}
                    </p>
                    <h1 className="block text-start relative text-[38px] sm:text-[5vw] font-primary font-bold">
                      {homePageContent.heroSubheading}
                    </h1>
                  </div>
                </div>
              </div>

              <div id="fade-in" className="pt-[5vh] pb-[10vh] w-full">
                <Skeleton isLoaded={!isLoading} className="w-full" />

                <p className="fade-in font-secondary font-normal mb-[2vh] text-[16px] max-w-[50ch] lg:max-w-[100ch]">
                  {homePageContent.mainDescription}
                </p>

                <div className="flex flex-row gap-x-8 text-white font-primary font-bold uppercase">
                  <div className="flex flex-col hover-link">
                    <a href="/" className="fade-in cursor-pointer text-[18px]">
                      Read More
                    </a>
                    <span className="underline bg-primary text-primary h-[1px]"></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hidden mr-[5vw] -mt-[20vw] w-auto md:block "
              data-speed="1.15"
            >
              <img
                src={`${strapiBaseURL}/uploads/04ad3e_0e7f4cc2e87e4e36ae46f5b208df7371_mv2_feba5adb93.webp`}
                alt=""
                loading="eager"
                className="w-[45vw] max-w-[45vw] object-cover z-20"
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
          <section className="px-[10vw] overflow-x-hidden mb-[10vh]">
            <h2 className="fade-in block text-start relative text-[38px] sm:text-[5vw] lg:text-[2vw] font-primary font-bold leading-none uppercase mb-[2vh]">
              {homePageContent && homePageContent.marqueeHeading}
            </h2>

            <MarqueeSection
              content={[homePageContent, marqueeContent]}
              strapiBaseURL={strapiBaseURL}
            />
          </section>

          {/* Info Section - Hosting */}
          <Skeleton isLoaded={!isLoading} className="w-full" />

          <InfoSection
            key={homePageContent.centeredContent[0].id}
            category={homePageContent.centeredContent[0].category}
            heading={homePageContent.centeredContent[0].heading}
            description={homePageContent.centeredContent[0].description}
            links={homePageContent.centeredContent[0].links}
            imageUrl={`${strapiBaseURL}/uploads/04ad3e_389803479c5b411ebc60e3a4610b3f33_mv2_3e9fd27d00.webp`} // Assuming an image URL needs to be constructed
          />

          {/* Info Section - Catering */}
          <Skeleton isLoaded={!isLoading} className="w-full" />

          <InfoSection
            key={homePageContent.centeredContent[1].id}
            category={homePageContent.centeredContent[1].category}
            heading={homePageContent.centeredContent[1].heading}
            description={homePageContent.centeredContent[1].description}
            links={homePageContent.centeredContent[1].links}
            imageUrl={`${strapiBaseURL}/uploads/04ad3e_5412b1d32cac43e2906ae9c0c08109a8_mv2_0aece42413.webp`} // Assuming an image URL needs to be constructed
          />

          {/* Fancy Section - Gift Cards */}
          <Skeleton isLoaded={!isLoading} className="w-full" />

          <InfoSectionStyled
            key={homePageContent.centeredContent[2].id}
            category={homePageContent.centeredContent[2].category}
            heading={homePageContent.centeredContent[2].heading}
            description={homePageContent.centeredContent[2].description}
            links={homePageContent.centeredContent[2].links}
            imageUrl={`${strapiBaseURL}/uploads/04ad3e_43c0cedee30d46539629dd7c662f1239_mv2_2030aaa428.webp`} // Assuming an image URL needs to be constructed
          />

          {/* Info Section - Menu */}
          <Skeleton isLoaded={!isLoading} className="w-full" />

          <InfoSection
            key={homePageContent.centeredContent[3].id}
            category={homePageContent.centeredContent[3].category}
            heading={homePageContent.centeredContent[3].heading}
            description={homePageContent.centeredContent[3].description}
            links={homePageContent.centeredContent[3].links}
            imageUrl={`${strapiBaseURL}/uploads/04ad3e_b19978f2e02e4f7b92cbd97f057ca619_mv2_1dd2fbd575.webp`} // Assuming an image URL needs to be constructed
          />

          {/* Fancy Section - Store Hours & Location */}
          <Skeleton isLoaded={!isLoading} className="w-full" />

          <InfoSectionStyled
            key={homePageContent.centeredContent[4].id}
            category={homePageContent.centeredContent[4].category}
            heading={homePageContent.centeredContent[4].heading}
            description={homePageContent.centeredContent[4].description}
            links={homePageContent.centeredContent[4].links}
            isMap={true}
          />
        </section>
      )}
    </>
  );
};

const MarqueeSection = ({ content, strapiBaseURL }) => (
  <div className="-mx-[10vw]">
    <Marquee>
      {content[1] &&
        [...content[1].images.data].map(({ id, attributes }) => (
          <img
            key={id}
            src={`${strapiBaseURL}${attributes.url}`}
            alt={attributes.alternativeText || "Marquee Image"}
            className="w-64 h-54 object-cover rounded-[28px] mx-3"
            loading="eager"
            width="1728"
            height="992"
            decoding="async"
          />
        ))}
    </Marquee>
  </div>
);

const InfoSection = ({ category, heading, description, links, imageUrl }) => {
  // Split links string by comma and trim whitespace
  const linkItems = links.split(",").map((link) => link.trim());

  // Render each content section dynamically based on `content` prop
  return (
    <section className="flex flex-col lg:flex-row items-center justify-end my-[5vw]">
      <div className="ml-[9vw] lg:m-0">
        <img
          src={imageUrl}
          className="rounded-bl-[70px] w-[90vw] h-[75vw] lg:h-[33.3vw] lg:max-w-[60vw] max-h-[800px] object-cover"
          alt={heading}
        />
      </div>

      {/* Info */}
      <div className="lg:absolute -mt-[10vh] lg:mt-[0vh] px-[2vw] w-full">
        <div className="flex w-full gap-2">
          <p className="font-secondary font-semibold uppercase text-[18px] lg:text-[22px] z-10">
            {category}
          </p>
          <span className="flex basis-full flex-col justify-center relative before:bg-primary before:mb-1 before:h-1 after:bg-primary after:h-1"></span>
        </div>
        <div className="text-content pl-[8vw] mt-[5vh] lg:mt-[2vh] lg:max-w-[35vw]">
          <h2 className="fade-in block text-start relative text-[38px] sm:text-[5vw] lg:text-[4vw] font-primary font-bold uppercase mb-[2vh] leading-none">
            {heading}
          </h2>
          <div className="max-w-[50ch]">
            <p className="fade-in font-secondary font-normal mb-[2vh] text[16px]">
              {description}
            </p>
            <div className="flex flex-row gap-x-8 text-white font-primary font-bold uppercase text-[18px]">
              {linkItems.map((link, index) => (
                <div className="flex flex-col hover-link">
                  <a key={index} href="/" className="fade-in cursor-pointer">
                    {link}
                  </a>
                  <span className="underline bg-primary text-primary h-[1px]"></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoSectionStyled = ({
  category,
  heading,
  description,
  links,
  imageUrl = null,
  isMap = false,
}) => {
  // Split links string by comma and trim whitespace
  const linkItems = links.split(",").map((link) => link.trim());

  // Render each content section dynamically based on `content` prop
  return (
    <section className="flex flex-col lg:flex-row-reverse items-start justify-center mt-[5vw] mb-[1vh]">
      <div className="flex flex-col w-full">
        {isMap ? (
          <div id="map" className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.3675950849456!2d-106.66545552254475!3d52.12763446520408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f7b9fd7a7e5b%3A0xa0331f6e08a8a18e!2sLa%20Cucina%20Ristorante!5e0!3m2!1sen!2sca!4v1712587547418!5m2!1sen!2sca"
              width="600" // Adjust width as needed or use Tailwind's width classes
              height="450" // Adjust height as needed or use Tailwind's height classes
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[80vw] lg:h-[50vw] max-h-[820px] object-cover"
            />
          </div>
        ) : (
          <div className="lg:m-0">
            <img
              src={imageUrl}
              className="w-full h-[50vw] max-h-[820px] object-cover"
              alt={heading}
            />
          </div>
        )}

        <div className="mt-[5vh] lg:-mt-[5vh] w-full" data-speed="1.15">
          <div className="flex flex-col bg-primary-foreground rounded-bl-[40px] ml-[10vw] pl-[5vw] py-[10vw] lg:pt-[5vw]">
            <p className="font-secondary font-semibold uppercase text-[18px] lg:text-[22px] z-10">
              {category}
            </p>
            <h2 className="fade-in block text-start relative text-[38px] sm:text-[5vw] lg:text-[4vw] font-primary font-bold uppercase mb-[2vh] leading-none">
              {heading}
            </h2>
            <div className="flex flex-col  justify-between max-w-[50ch]">
              <p className="fade-in font-secondary font-normal mb-[2vh] text[16px]">
                {description}
              </p>
              <div className="flex flex-row gap-x-8 text-white font-primary font-bold uppercase text-[18px]">
                {linkItems.map((link, index) => (
                  <div className="flex flex-col hover-link">
                    <a key={index} href="/" className="fade-in cursor-pointer">
                      {link}
                    </a>
                    <span className="underline bg-primary text-primary h-[1px]"></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
