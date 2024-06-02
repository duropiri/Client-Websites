"use client";
import React from "react";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import CardsSection from "@/components/cardsSection";
import HorizontalSection from "@/components/horizontalSection";
import GallerySection from "@/components/gallerySection";

const navItems = [
  { name: "My Story", href: "/story" },
  {
    name: "Programs",
    href: "/programs",
    // flyoutMenu: [
    //   { name: "Detox - June 2024", href: "/programs/detox-june2024" },
    //   { name: "Detox - May 2024", href: "/programs/detox-june2024" },
    // ],
  },
  { name: "Services", href: "/services" },
  { name: "Events", href: "/events" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
];

export default function Body() {
  return (
    <div className="flex flex-col w-full">
      <div id="header" className="sticky top-0 z-[999]">
        <Header
          logo="/images/logo.png"
          navItems={navItems}
          callToAction={{ text: "Connect", href: "/connect" }}
        />
      </div>
      <div className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Cards Section */}
        <CardsSection />

        {/* Horizontal Scroll Section */}
        <HorizontalSection />

        {/* Gallery Section */}
        <GallerySection />
      </div>
    </div>
  );
}
