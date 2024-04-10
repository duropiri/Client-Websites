"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from "gsap";
import { TweenMax } from "gsap/all";

const Hero = () => {
  const setVideoFixed = (isFixed) => {
    // Obtain a reference to the video element
    const video = document.querySelector(".video-background video");
    if (video) {
      video.style.position = isFixed ? "fixed" : "absolute";
    }
  };

  // GSAP Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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

    videoParallax();
    window.addEventListener("resize", videoParallax);
    parallax();
    window.addEventListener("resize", parallax);

    return () => {
      window.addEventListener("resize", videoParallax);
      window.removeEventListener("resize", parallax);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="hero homepage flex flex-col -mt-[100px] w-full min-h-lvh justify-center font-primary font-bold z-10">
        {/* Hero Main Content */}
        <div className="h-[100vh] md:h-[150vh]">
          {/* Hero Video */}
          <div className="video-background">
            <video
              src="/video/file.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="fixed w-full h-[100vh] md:h-[150vh] object-cover -z-[1] top-0 left-0 right-0 bottom-0"
            />
          </div>
          {/* Hero Heading */}
          <div className="content-over-video flex flex-col uppercase gap-10 justify-center px-[5vw] h-[100vh]">
            <h1 className="flex flex-col text-[10vw] md:text-[9vw] leading-none">
              <div className="block text-start relative">Saskatoon&apos;s</div>
              <div className="block text-start relative">Premiere Italian</div>
              <div className="block text-end relative">
                <span>Dining Room</span>
              </div>
            </h1>
            <div className="flex w-full justify-center">
              <a
                href="/"
                className="relative rounded-full text-center transition-all duration-500 transform z-40 px-5 py-3 text-popover bg-primary-foreground button group text-sm uppercase hover:bg-primary-foreground/60"
              >
                Consult Menu
              </a>
            </div>
          </div>
        </div>

        {/* Hero Subheadiing */}
        <div className="content-over-video relative mt-[50vh] md:pt-[150vh] md:flex flex-col top-0 md:-mt-[150vh] hidden md:bg-transparent">
          <div
            id="hero-bottom"
            className="grid grid-cols-12 z-10 -mt-[50vh] max-h-[50vh] h-[50vh] items-end "
          >
            <div className="col-span-12 md:col-span-7 leading-none uppercase pb-[5vh] w-full pt-[5vh] px-[5vw]">
              <p className="block text-start relative text-[22px] xl:text-[1vw] font-ciutadela font-semibold">
                Rustic - Authentic - Italian
              </p>
              <h2 className="block text-start relative text-[38px] sm:text-[5vw] font-primary font-bold">
                Enjoy a little taste of Italy! Buon Appetito!
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
