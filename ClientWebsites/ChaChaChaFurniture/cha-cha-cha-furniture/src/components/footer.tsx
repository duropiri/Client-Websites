import Image from "next/image";
import * as React from "react";

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <footer className="relative flex flex-col items-start justify-center w-full h-auto bg-[#212121]">
      <div className="container flex flex-col lg:flex-row items-center justify-between w-full min-h-[65px] text-white text-sm py-4 lg:py-0">
        <div className="flex flex-col sm:flex-row items-center justify-center h-full gap-5 uppercase">
          <p className="hidden md:flex">© RELAYDIGITAL.AGENCY</p>
          <a href="#bundle">
            <p>Terms of Service</p>
          </a>
          <a href="#reviews">
            <p>Privacy Policy</p>
          </a>
          <a href="#reviews">
            <p>Terms & Conditions</p>
          </a>
        </div>
        <div className="flex flex-row items-center justify-center gap-24 uppercase">
          <div className="relative flex flex-col items-center justify-center w-[491px] h-[42px] overflow-hidden">
            <Image
              alt="hero-content"
              src="/images/footerpay.png"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";

export default Footer;