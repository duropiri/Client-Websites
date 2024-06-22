"use client";
import React from "react";
import AboutSection from "@/components/AboutSection";
import Header from "@/components/animations/NavigationMenu";
import ContactSection from "@/components/ContactSection";
import HeroVideo from "@/components/HeroVideo";
import LatestSection from "@/components/LatestSection";
import Image from "next/image";
import { Videos } from "@/data/videos";
import { Projects } from "@/data/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";

export default function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const negativeY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const positiveY = useTransform(scrollYProgress, [0, 1], ["0%", "190%"]);
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden">
      <div
        className="fixed top-0 left-0 w-full h-[150vh] pointer-events-none -z-10  translate-y-[50vh] "
      >
        <motion.div
          className="w-full h-[150vh] pointer-events-none"
          style={{
            y: negativeY,
          }}
        >
          <Image
            alt=""
            src="/images/image1.jpg"
            layout="fill"
            loading="lazy"
            objectFit="cover"
            className=""
          />
        </motion.div>
      </div>
      <HeroVideo videos={Videos} />
      <LatestSection projects={Projects} />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
