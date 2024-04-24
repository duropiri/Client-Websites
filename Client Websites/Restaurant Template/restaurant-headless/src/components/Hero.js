"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

import { TweenMax } from "gsap/all";
import { useGlobalState } from "./GlobalStateContext";

const Hero = () => {
  const { state } = useGlobalState();
  const { isLoading, heroContent } = state;

  console.log(heroContent);

  const strapiBaseURL =
    process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "http://localhost:1337";

  const setVideoFixed = (isFixed) => {
    // Obtain a reference to the video element
    const video = document.querySelector(".video-background video");
    if (video) {
      video.style.position = isFixed ? "fixed" : "absolute";
    }
  };

  // GSAP Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const videoParallax = () => {
      // The querySelector is used to target the video element.
      const video = document.querySelector(".video-background video");

      // Ensure the video exists to avoid errors.
      if (!video) return;

      const vhInPixels = window.innerHeight / 2;

      ScrollTrigger.create({
        start: vhInPixels + " top",
        onEnter: () => setVideoFixed(false),
        onLeaveBack: () => setVideoFixed(true),
        markers: false,
      });

      // Clean up
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    };

    const parallax = () => {
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

    const cropTextOnScroll = () => {
      const textElements = document.querySelectorAll(".text-crop-in");

      textElements.forEach((text) => {
        const parent = text.parentElement.parentElement;
        gsap.fromTo(
          text,
          {
            clipPath: "inset(0% 0% 0% 0%)", // Start with text fully visible
          },
          {
            clipPath: "inset(100% 0% 0% 0%)", // End with text fully cropped from the top
            ease: "none",
            scrollTrigger: {
              trigger: parent,
              start: "top top", // Animation starts when the top of the trigger hits the top of the viewport
              end: "bottom 83%", // Animation ends when the bottom of the trigger 83% from the bottom of the viewport
              scrub: true, // Smooth scrubbing effect to tie the scroll position to the animation progress
              markers: false, // Shows start and end markers in the viewport (useful for debugging)
            },
          }
        );
      });
    };

    const fadeOutOnScroll = () => {
      const elementsToFade = document.querySelectorAll(".fade-out");

      elementsToFade.forEach((element) => {
        const parent = element.parentElement.parentElement;
        gsap.fromTo(
          element,
          {
            opacity: 1, // Start fully visible
          },
          {
            opacity: 0, // End fully invisible
            ease: "none",
            scrollTrigger: {
              trigger: parent,
              start: "top top", // Starts fading out when the top of the element hits the top of the viewport
              end: "bottom 140%", // Completes the fade out when the top of the element passes the top of the viewport
              scrub: true, // Ties the animation progress to the scroll position for a smooth effect
              markers: false, // Displays markers for debugging
            },
          }
        );
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

    // Parallax Animations
    parallax();
    window.addEventListener("resize", parallax);

    videoParallax();
    window.addEventListener("resize", videoParallax);

    // Element Animations
    fadeOutOnScroll();
    window.addEventListener("DOMContentLoaded", fadeOutOnScroll);

    // Text Animations
    cropTextOnScroll();
    window.addEventListener("DOMContentLoaded", cropTextOnScroll);

    textFadeInAnimation();
    window.addEventListener("DOMContentLoaded", textFadeInAnimation);

    textFadeInUpAnimation();
    window.addEventListener("DOMContentLoaded", textFadeInUpAnimation);

    textScrollInAnimation();
    window.addEventListener("DOMContentLoaded", textScrollInAnimation);

    textExpandInAnimation();
    window.addEventListener("DOMContentLoaded", textExpandInAnimation);

    return () => {
      // Parallax Animations
      window.removeEventListener("resize", parallax);
      window.removeEventListener("resize", videoParallax);

      //Element Animations
      window.removeEventListener("DOMContentLoaded", fadeOutOnScroll);

      // Text Animations
      window.removeEventListener("DOMContentLoaded", cropTextOnScroll);
      window.removeEventListener("DOMContentLoaded", textFadeInAnimation);
      window.removeEventListener("DOMContentLoaded", textFadeInUpAnimation);
      window.removeEventListener("DOMContentLoaded", textScrollInAnimation);
      window.removeEventListener("DOMContentLoaded", textExpandInAnimation);

      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [isLoading]);

  return (
    <section className="hero homepage flex flex-col -mt-[100px] w-full min-h-lvh justify-center font-primary font-bold">
      {/* Hero Main Content */}
      <div className="h-[100vh] md:h-[150vh]">
        {/* Hero Video */}
        {!isLoading && heroContent && (
          <div className="video-background">
            <video
              src={`${strapiBaseURL}${heroContent.heroVideo.data.attributes.url}`}
              autoPlay
              muted
              loop
              playsInline
              className="fixed w-full h-[100vh] md:h-[150vh] object-cover -z-[1] top-0 left-0 right-0 bottom-0"
            />
          </div>
        )}
        {/* Hero Heading */}
        {!isLoading && heroContent && (
          <div
            className="content-over-video flex flex-col uppercase gap-10 justify-center px-[5vw] h-[100vh] w-full"
            data-speed="0.25"
          >
            <h1 className="flex flex-col text-[10vw] md:text-[9vw] leading-[9vw] pointer-events-none">
              <div className="text-crop-in block text-start relative hero-heading">
                {heroContent.heroHeading[0].children[0].text}
              </div>
              <div className="text-crop-in block text-start relative hero-heading">
                {heroContent.heroHeading[1].children[0].text}
              </div>
              <div className="text-crop-in block text-end relative hero-heading">
                {heroContent.heroHeading[2].children[0].text}
              </div>
            </h1>
            <div className="fade-out flex w-full justify-center">
              <a
                href="/"
                className="absolute rounded-full text-center transition-all duration-500 transform px-5 py-3 text-popover bg-primary-foreground button group text-sm uppercase hover:bg-primary-foreground/60"
              >
                {heroContent.CTA}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
