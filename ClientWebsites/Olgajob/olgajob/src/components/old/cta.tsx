import React from "react";

function cta() {
  return (
    <section id="cta" this-theme="footer-cta" no-fade="" className="py-20">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex-1">
            <div className="text-center lg:text-left">
              <h3
                className="text-5xl font-bold"
                style={{
                  display: "block",
                  textAlign: "start",
                  position: "relative",
                }}
              >
                PSignificos.
              </h3>
            </div>
          </div>
          <div className="self-end w-108 pr-12">
            <div className="text-center lg:text-left">
              <div
                className="text-lg"
                style={{
                  display: "block",
                  textAlign: "start",
                  position: "relative",
                  opacity: 1,
                }}
              >
                <p
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                    opacity: 1,
                  }}
                >
                  Find out how Significo&apos;s healthcare
                  <br />
                  technology expertise can take your digital
                  <br />
                  experience to the next level.
                </p>
              </div>
            </div>
          </div>
          <div className="cta__scroll--parent">
            <div className="cta__scroll animating">
              <div className="cta__scroll--text">
                <img
                  src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317c_ScrollUp.svg"
                  loading="lazy"
                  alt=""
                  className="img-contain"
                />
              </div>
              <div className="cta__scroll--inner">
                <div className="svg w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 32 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 0.703124C16 9.53968 8.83656 16.7031 0 16.7031"
                      stroke="black"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M16 0.703124C16 9.53968 23.1634 16.7031 32 16.7031"
                      stroke="black"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M16 0.703125L16 37.2746"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mt-10 space-y-10 lg:mt-10 lg:flex-row lg:space-x-12">
          <a
            button-style="black"
            href="/about"
            className="btn w-inline-block px-8 py-4 bg-black text-white flex items-center justify-center space-x-3"
          >
            <div className="text-lg font-bold">Let's Go</div>
            <div className="w-5 h-5">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.53848 13.7123L12.9631 6.28769M12.9631 6.28769V13.7123M12.9631 6.28769H5.53848"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default cta;
