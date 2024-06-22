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

export default function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const negativeY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const positiveY = useTransform(scrollYProgress, [0, 1], ["0%", "190%"]);
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-white justify-start overflow-hidden">

    </main>
  );
}
