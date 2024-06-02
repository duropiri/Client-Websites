import React from "react";
import ProjectGallery from "./animations/ProjectGallery";
import Image from "next/image";

const projects = [
  {
    title: "My Story",
    description: "Design & Development",
    src: "service4-768x526.jpg",
    href: "/story",
    modalColor: "#C502FC",
    cursorText: "View",
    cursorColor: "#02BB63",
  },
  {
    title: "Services",
    description: "Design & Development",
    src: "service2-768x526.jpg",
    href: "/services",
    modalColor: "#2A87F8",
    cursorText: "custom 2",
    cursorColor: "#C502FC",
  },
  {
    title: "Programs",
    description: "Design & Development",
    src: "Web-photo-A-JPEG-1024x791.jpg",
    href: "/programs",
    modalColor: "#02BB63",
    cursorText: "custom 3",
    cursorColor: "#2A87F8",
  },
  {
    title: "Events",
    description: "Design & Development",
    src: "IMG_4488-2048x1224.jpg",
    href: "/events",
    modalColor: "#C502FC",
    cursorText: "custom 4",
    cursorColor: "#02BB63",
  },
  {
    title: "Products",
    description: "Design & Development",
    src: "7EA67384-0315-4E66-BEF7-283CDDCB2CCF-2-1956x2048.jpg",
    href: "/products",
    modalColor: "#2A87F8",
    cursorText: "custom 4",
    cursorColor: "#C502FC",
  },
  {
    title: "Blog",
    description: "Design & Development",
    src: "IMG_4912-2-1024x1024.png",
    href: "/blog",
    modalColor: "#02BB63",
    cursorText: "custom 4",
    cursorColor: "#2A87F8",
  },
];

export default function GallerySection() {
  return (
    <section className="flex flex-col items-center relative p-12 h-[100vh] overflow-hidden">
      <div className="mb-12">
        <Image
          src="/images/IMG_4411-300x300.png"
          alt="Hero Media"
          width={100}
          height={100}
        />
      </div>
      <ProjectGallery projects={projects} />
    </section>
  );
}
