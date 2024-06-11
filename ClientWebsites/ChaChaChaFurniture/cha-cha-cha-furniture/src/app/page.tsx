import * as React from "react";

import {
  Header,
  Hero,
  Testimonials,
  Slideshow,
  VideoTestimonials,
  Bundles,
  Products,
  Images,
  SlideshowTestimonials,
  Bottom,
  FAQ,
  Footer
} from "@/components/home";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Testimonial Section */}
      <Testimonials />

      {/* Slideshow Section */}
      <Slideshow />

      {/*Video Testimonials Section */}
      <VideoTestimonials />

      {/* <Bundles /> */}

      <Products />

      <Images />

      <SlideshowTestimonials />

      <Bottom />

      <FAQ />

      <Footer />
    </main>
  );
}
