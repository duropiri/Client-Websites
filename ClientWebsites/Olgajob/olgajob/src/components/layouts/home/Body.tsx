"use client";
import React from "react";
// import Header from "@/components/old/header";
import HeroSection from "@/components/old/heroSection";
import CardsSection from "@/components/old/cardsSection";
import HorizontalSection from "@/components/old/horizontalSection";
import GallerySection from "@/components/old/gallerySection";
import Navbar from "@/components/significo/navbar";
import Header from "@/components/animations/NavigationMenu";
import CarouselSection from "@/components/old/carouselSection";
import CaseStudy from "@/components/old/caseStudy";
import ArticleSection from "@/components/old/articleSection";
import Cta from "@/components/old/cta";
import Footer from "@/components/old/footer";

export const navItems = [
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
  const navigationLinks = [
    { title: "Home", href: "/", src: "" },
    { title: "Story", href: "/story", src: "service4-768x526.jpg" },
    {
      title: "Programs",
      href: "/programs",
      src: "Web-photo-A-JPEG-1024x791.jpg",
    },
    { title: "Services", href: "/services", src: "service2-768x526.jpg" },
    { title: "Events", href: "/events", src: "IMG_4488-2048x1224.jpg" },
    {
      title: "Testimonials",
      href: "/testimonials",
      src: "7EA67384-0315-4E66-BEF7-283CDDCB2CCF-2-1956x2048.jpg",
    },
    { title: "Blog", href: "/blog", src: "IMG_4912-2-1024x1024.png" },
  ];
  return (
    <div className="flex flex-col w-full">
      <div id="header" className="sticky top-0 z-[999]">
        {/* <Header
          logo="/img/logo.png"
          navItems={navItems}
          callToAction={{ text: "Connect", href: "/connect" }}
        /> */}
        <Header navigation={navigationLinks} />
        {/* <Navbar /> */}
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

        {/* Carousel Section */}
        <CarouselSection />

        {/* Case Study Section */}
        <CaseStudy />

        {/* Article Section */}
        <ArticleSection />

        {/* CTA Section */}
        <Cta />

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
}
