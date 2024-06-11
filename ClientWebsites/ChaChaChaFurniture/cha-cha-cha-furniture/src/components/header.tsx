import Image from "next/image";
import * as React from "react";

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <header className="flex flex-col items-start justify-between w-full h-full z-[999]">
      {/* <div className="flex flex-row items-center justify-center w-full h-[50px] bg-black z-10"></div> */}
      <nav className="flex flex-row items-center justify-center lg:justify-between w-full h-[65px] bg-[#152139] text-[#D5DC34]">
        <div className="hidden lg:flex flex-row items-center justify-center h-full gap-24 uppercase px-24">
          <a href="#bundle">
            <p>The Bundle</p>
          </a>
          <a href="#reviews">
            <p>Reviews</p>
          </a>
        </div>
        <div className="relative flex flex-row items-center justify-center h-full top-3">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              width="308"
              height="114"
              viewBox="0 0 308 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-2xl"
            >
              <path
                d="M0 0.656738L83.9964 84.6532C122.658 123.315 185.342 123.315 224.004 84.6532L308 0.656738H0Z"
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
        <div className="hidden lg:flex flex-row items-center justify-center h-full gap-24 uppercase px-24">
          <a href="#compare">
            <p>Compare</p>
          </a>
          <a href="#shop">
            <p>Shop now</p>
          </a>
        </div>
        {/* Mobile Menu */}
        <div className="flex flex-row items-center justify-center absolute lg:hidden right-8">
          <svg
            width="28"
            height="19"
            viewBox="0 0 28 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.24585 1.56398C7.24585 0.970157 7.72724 0.48877 8.32106 0.48877H26.9247C27.5185 0.48877 27.9999 0.970157 27.9999 1.56398C27.9999 2.1578 27.5185 2.63919 26.9247 2.63919H8.32106C7.72724 2.63919 7.24585 2.1578 7.24585 1.56398Z"
              fill="#2D2D2D"
            />
            <path
              d="M0.75 9.71437C0.75 9.12055 1.23139 8.63916 1.82521 8.63916H26.9247C27.5185 8.63916 27.9999 9.12055 27.9999 9.71437C27.9999 10.3082 27.5185 10.7896 26.9247 10.7896H1.82521C1.23139 10.7896 0.75 10.3082 0.75 9.71437Z"
              fill="#2D2D2D"
            />
            <path
              d="M7.24585 17.8648C7.24585 17.2709 7.72724 16.7896 8.32106 16.7896H26.9247C27.5185 16.7896 27.9999 17.2709 27.9999 17.8648C27.9999 18.4586 27.5185 18.94 26.9247 18.94H8.32106C7.72724 18.94 7.24585 18.4586 7.24585 17.8648Z"
              fill="#2D2D2D"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
});
Header.displayName = "Header";
export default Header;
