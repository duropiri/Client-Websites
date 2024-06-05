"use client";
import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

const opacity = {
  initial: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.35 } },
  closed: { opacity: 0, transition: { duration: 0.35 } },
};

const height = {
  initial: { height: 0 },
  enter: { height: "auto", transition },
  exit: { height: 0, transition },
};

const background = {
  initial: { height: 0 },
  open: { height: "100vh", transition },
  closed: { height: 0, transition },
};

const blur = {
  initial: { filter: "blur(0px)", opacity: 1 },
  open: { filter: "blur(4px)", opacity: 0.6, transition: { duration: 0.3 } },
  closed: { filter: "blur(0px)", opacity: 1, transition: { duration: 0.3 } },
};

const translate = {
  initial: { y: "100%", opacity: 0 },
  enter: (i: [number, number]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i: [number, number]) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};

interface LinkDetails {
  title: string;
  href: string;
  src: string;
}

interface NavProps {
  links: LinkDetails[];
}

interface BodyProps {
  links: LinkDetails[];
  selectedLink: { isActive: boolean; index: number };
  setSelectedLink: React.Dispatch<
    React.SetStateAction<{ isActive: boolean; index: number }>
  >;
}

interface FooterProps {}

interface ImageProps {
  src: string;
  isActive: boolean;
}

interface HeaderProps {
  navigation: LinkDetails[];
}

const Nav: React.FC<NavProps> = ({ links }) => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const getChars = (word: string) => {
    let chars: JSX.Element[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden flex flex-row"
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-wrap mt-10">
          {links.map((link, index) => (
            <Link key={`l_${index}`} href={link.href}>
              <motion.p
                onMouseOver={() => setSelectedLink({ isActive: true, index })}
                onMouseLeave={() => setSelectedLink({ isActive: false, index })}
                variants={blur}
                animate={
                  selectedLink.isActive && selectedLink.index !== index
                    ? "open"
                    : "closed"
                }
                className="m-0 flex overflow-hidden text-2xl sm:text-6xl pr-8 pt-2 font-light uppercase"
              >
                {getChars(link.title)}
              </motion.p>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
      <div className="flex relative w-[30vw] h-[300px]">
        <ImageModal
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex flex-wrap mt-10 text-[8px] uppercase gap-10">
      <ul className="w-full md:w-auto mt-2 list-none p-0">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-end"
        >
          <span className="text-gray-500">Made by:</span> Relay Digital.
        </motion.li>
      </ul>
      <ul className="w-full md:w-auto mt-2 list-none p-0">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-end"
        >
          <span className="text-gray-500">Typography:</span> Google Fonts
        </motion.li>
      </ul>
      <ul className="w-full md:w-auto mt-2 list-none p-0">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-end"
        >
          <span className="text-gray-500">Images:</span> Freepik, Envato
        </motion.li>
      </ul>
      <ul className="w-full md:w-auto mt-2 list-none p-0">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-end"
        >
          Privacy Policy
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-end"
        >
          Terms & Conditions
        </motion.li>
      </ul>
    </div>
  );
};

const ImageModal: React.FC<ImageProps> = ({ src, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      className=" inset-0 -z-10"
    >
      <img
        src={`/img/${src}`}
        alt="Selected link image"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="fixed w-full p-4 bg-white/25 backdrop-blur-sm box-border">
      <div className="relative flex justify-between text-xs uppercase font-medium">
        <div className="">
          <Image
            src={"/img/logo.png"}
            alt="Company Logo"
            width={100}
            height={25}
            layout="cover"
          />
        </div>
        <div
          onClick={() => setIsActive(!isActive)}
          className="flex items-center justify-center gap-2 cursor-pointer mr-12"
        >
          <div className="relative flex flex-col items-center justify-center">
            <div
              className={`w-6 h-0.5 bg-black transform transition duration-300 ease-in-out ${
                isActive ? "rotate-45 translate-y-[0.175rem]" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-black transform transition duration-300 ease-in-out mt-1 ${
                isActive ? "-rotate-45 -translate-y-[0.175rem]" : ""
              }`}
            />
          </div>
          <div className="relative flex flex-col items-start justify-center w-full h-full">
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
              className="absolute m-0"
            >
              {/* {!isActive ? (<>Menu</>) : (<>Close</>)} */}
              Menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={isActive ? "open" : "closed"}
              className="absolute m-0"
            >
              Close
            </motion.p>
          </div>
        </div>

        {/* <motion.div
          variants={opacity}
          animate={!isActive ? 'open' : 'closed'}
          className="absolute right-0 flex gap-8"
        >
          <p className="hidden md:block">Shop</p>
          <div className="flex items-center gap-2 cursor-pointer">
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66602 1.66667H2.75449C2.9595 1.66667 3.06201 1.66667 3.1445 1.70437C3.2172 1.73759 3.2788 1.79102 3.32197 1.85829C3.37096 1.93462 3.38546 2.0361 3.41445 2.23905L3.80887 5M3.80887 5L4.68545 11.4428C4.79669 12.2604 4.85231 12.6692 5.04777 12.977C5.22 13.2481 5.46692 13.4637 5.75881 13.5978C6.09007 13.75 6.50264 13.75 7.32777 13.75H14.4593C15.2448 13.75 15.6375 13.75 15.9585 13.6087C16.2415 13.4841 16.4842 13.2832 16.6596 13.0285C16.8585 12.7397 16.9319 12.3539 17.0789 11.5823L18.1819 5.79141C18.2337 5.51984 18.2595 5.38405 18.222 5.27792C18.1892 5.18481 18.1243 5.1064 18.039 5.05668C17.9417 5 17.8035 5 17.527 5H3.80887ZM8.33268 17.5C8.33268 17.9602 7.95959 18.3333 7.49935 18.3333C7.03911 18.3333 6.66602 17.9602 6.66602 17.5C6.66602 17.0398 7.03911 16.6667 7.49935 16.6667C7.95959 16.6667 8.33268 17.0398 8.33268 17.5ZM14.9993 17.5C14.9993 17.9602 14.6263 18.3333 14.166 18.3333C13.7058 18.3333 13.3327 17.9602 13.3327 17.5C13.3327 17.0398 13.7058 16.6667 14.166 16.6667C14.6263 16.6667 14.9993 17.0398 14.9993 17.5Z"
                stroke="#4D3D30"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Cart(0)</p>
          </div>
        </motion.div> */}
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className="absolute bg-black opacity-50 w-full h-full top-full left-0"
      />
      <AnimatePresence>
        {isActive && <Nav links={navigation} />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
