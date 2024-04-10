"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGlobalState } from "./GlobalStateContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useGlobalState();
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const disableScroll = (shouldDisable) => {
    document.body.style.overflow = shouldDisable ? "hidden" : "";
  };
  // Function to toggle scroll lock based on the mobile menu state
  const toggleBodyScrollLock = (isMenuOpen) => {
    if (isMenuOpen) {
      // When the menu is open, prevent scrolling on the body
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh"; // Lock the body height
      document.body.style.position = "fixed"; // Prevent scrolling on iOS devices
    } else {
      // When the menu is closed, restore scrolling on the body
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.position = "";
    }
  };

  useEffect(() => {
    toggleBodyScrollLock(mobileMenuOpen);
    const menu = mobileMenuRef.current; // Get the current menu DOM element
    if (mobileMenuOpen) {
      gsap.to(menu, {
        duration: 0.5,
        x: 0,
        ease: "power3.out",
        autoAlpha: 1,
      });
      if (menu) {
        menu.style.overflowY = "scroll"; // Enable scroll only on the menu
      }
      document.body.style.overflow = "hidden"; // Prevent scrolling on the body
    } else {
      if (menu) {
        gsap.to(menu, {
          duration: 0.5,
          x: "100%",
          ease: "power3.in",
          autoAlpha: 0,
          onComplete: () => {
            gsap.set(menu, { display: "none" });
            menu.style.overflowY = "hidden"; // Disable scroll on the menu
          },
        });
      }
      document.body.style.overflow = ""; // Re-enable scrolling on the body
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    library.add(fab);
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar"); // Ensure your navbar has the class "navbar"
      if (window.scrollY > 200) {
        gsap.to(navbar, {
          duration: 0.5, // Smoother transition duration
          backdropFilter: "blur(10px)",
          webkitBackdropFilter: "blur(10px)", // For Safari compatibility
          backgroundColor: "rgba(16, 16, 16, 0.75)", // Semi-transparent black
          ease: "power2.out", // Smoother easing function
        });
      } else {
        // Transition to a very low opacity color instead of transparent
        gsap.to(navbar, {
          duration: 0.5, // Consistent duration for the transition
          backdropFilter: "blur(0px)",
          webkitBackdropFilter: "blur(0px)",
          backgroundColor: "rgba(16, 16, 16, 0.01)", // Nearly transparent
          ease: "power2.in", // Smoother easing function
          onComplete: () => {
            // Once the animation completes, fully remove the background color
            // This step is to ensure that there's no visible flash when the transition completes
            gsap.set(navbar, { backgroundColor: "transparent" });
          },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar sticky top-0 z-[99999] w-full text-[14px] xl:text-[1vw] h-[100px] font-primary font-bold uppercase">
      <nav className="xl:flex justify-between items-center px-5 bg-transparent py-6 hidden h-[100px]">
        <a
          className="-ml-2 flex items-center rounded-full px-2 font-melodrama transition w-auto"
          href="/"
        >
          <img
            src="/img/logo.png/"
            alt="la cucina ristorante"
            loading="eager"
            className="h-auto w-[4rem] lg:w-[8rem]"
            width="516"
            height="516"
            decoding="async"
          />
        </a>
        <div className="flex flex-row gap-x-8 justify-center cursor-pointer text-white">
          <a href="/" className="hover:underline">
            Menu
          </a>
          <a href="/" className="hover:underline">
            Restaurants
          </a>
          <a href="/" className="hover:underline">
            Offers & Promotions
          </a>
          <a href="/" className="hover:underline">
            Gift Cards
          </a>
          <a href="/" className="hover:underline">
            Store
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40 px-5 py-3 border border-white text-neutral-50 bg-transparent button group text-sm uppercase hover:text-black hover:bg-white"
          >
            Order Online
          </a>

          <a
            href="/"
            className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40 px-5 py-3 border border-white text-neutral-50 bg-transparent button group text-sm uppercase hover:text-black hover:bg-white"
          >
            Make a Reservation
          </a>
          <a href="/" className="hover:underline">
            IT
          </a>
        </div>
      </nav>
      <nav className="flex justify-between items-center px-5 bg-transparent py-6 xl:hidden h-[100px]">
        <a
          className="-ml-2 flex items-center rounded-full px-2 font-melodrama text-3xl transition w-auto"
          href="/"
        >
          <img
            src="/img/logo.png/"
            alt="la cucina ristorante"
            loading="eager"
            className="h-auto w-[4rem] lg:w-[8rem]"
            width="516"
            height="516"
            decoding="async"
          />
        </a>

        <div className="flex flex-row gap-x-8 justify-center cursor-pointer text-white">
          <a href="/" className="hover:underline">
            Make a Reservation
          </a>
          <a href="/" className="hover:underline">
            Order Online
          </a>
        </div>
        <div
          className="flex flex-row justify-center items-center"
          aria-label="Menu"
          onClick={toggleMobileMenu}
        >
          <button className="w-6 h-6">
            <svg
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="21" y1="4.5" x2="3" y2="4.5" stroke="white"></line>
              <line x1="21" y1="11.5" x2="3" y2="11.5" stroke="white"></line>
              <line x1="3" y1="18.5" x2="21" y2="18.5" stroke="white"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="navbar sticky top-0 z-[999] w-full overflow-hidden">
          <div
            className="flex flex-col fixed top-0 bg-black bg-opacity-50 z-40 h-screen w-full" // This is the backdrop
            onClick={toggleMobileMenu} // Close the menu when the backdrop is clicked
          ></div>
          <div
            ref={mobileMenuRef}
            className="mobile-menu flex flex-col fixed top-0 right-0 bg-primary-foreground text-white z-50 w-screen sm:w-[60vw] h-[100vh] transform translate-x-full"
            style={{ display: mobileMenuOpen ? "block" : "none" }} // Initial state off-screen
          >
            {/* Close Button */}
            <div className="flex justify-end items-center px-5 bg-transparent py-6 h-[100px]">
              <button
                className="w-6 h-6"
                onClick={() => {
                  toggleMobileMenu();
                  disableScroll(false);
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L1 17M1 1L17 17"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="px-5">
              {/* Menu Items */}
              <div className="flex flex-col space-y-4 mb-8 text-[34px]">
                <a href="/" className="hover:underline">
                  MENU
                </a>
                <a href="/" className="hover:underline">
                  RESTAURANTS
                </a>
                <a href="/" className="hover:underline">
                  OFFERS & PROMOTIONS
                </a>
                <a href="/" className="hover:underline">
                  GIFT CARDS
                </a>
                <a href="/" className="hover:underline">
                  STORE
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-4 justify-center cursor-pointer text-white mb-[5vh]">
                <a
                  href="/"
                  className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40 px-5 py-3 border border-white text-neutral-50 bg-transparent button group text-sm uppercase hover:text-black hover:bg-white"
                >
                  Make a Reservation
                </a>
                <a
                  href="/"
                  className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40 px-5 py-3 border border-white text-neutral-50 bg-transparent button group text-sm uppercase hover:text-black hover:bg-white"
                >
                  Order Online
                </a>
              </div>

              {/* Footer Links */}
              <div className="flex flex-row flex-wrap border-t border-white gap-[3vw] pt-[5vh] justify-start text-[14px]">
                <a href="/" className="hover:underline">
                  ABOUT
                </a>
                <a href="/" className="hover:underline">
                  JOBS
                </a>
                <a href="/" className="hover:underline">
                  IN STORE
                </a>
                <a href="/" className="hover:underline">
                  CORPORATE EVENTS
                </a>
                <a href="/" className="hover:underline">
                  CONTACT US
                </a>
                <a href="/" className="hover:underline">
                  GIVE YOUR OPINION
                </a>
              </div>

              <div className="flex flex-row justify-between mt-[5vh] mb-[5vh]">
                {/* Social Media Icons */}
                <div className="flex justify-between items-center text-[30px] gap-[20px]">
                  {/* Include SVG or icon components here */}
                  <a href="/" aria-label="Instagram">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                  </a>
                  <a href="/" aria-label="Facebook">
                    <FontAwesomeIcon icon="fa-brands fa-facebook" />
                  </a>
                  <a href="/" aria-label="TikTok">
                    <FontAwesomeIcon icon="fa-brands fa-tiktok" />
                  </a>
                  <a href="/" aria-label="YouTube">
                    <FontAwesomeIcon icon="fa-brands fa-youtube" />
                  </a>
                  <a href="/" aria-label="LinkedIn">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                  </a>
                </div>

                {/* Language Toggle */}
                <div className="flex flex-col justify-center text-right">
                  <a href="/" className="hover:underline text-[14px]">
                    ITALIANO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
