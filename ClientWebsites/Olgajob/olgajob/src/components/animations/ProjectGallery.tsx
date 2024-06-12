"use client";
import React, { useState, useEffect, useRef, CSSProperties } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useAnimation,
  useMotionValue,
} from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

interface AnimationProps {
  className?: string;
  projects?: ProjectDetails[];
}

export interface ProjectDetails {
  title?: string;
  description?: string;
  src?: string;
  href?: string;
  modalColor?: string;
  cursorText?: string;
  cursorColor?: string;
}

export default function ProjectGallery({
  className,
  projects = [],
}: AnimationProps) {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main
      className={className || "flex h-full items-center justify-center w-full"}
    >
      <div className="h-full w-full flex flex-col items-center justify-center">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              href={project.href}
              setModal={setModal}
              isLast={index === projects.length - 1}
            ></Project>
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}

function Project({
  index,
  title,
  description,
  href,
  setModal,
  isLast,
}: {
  index: number;
  title?: string;
  description?: string;
  href?: string;
  setModal: (modal: any) => void;
  isLast: boolean;
}) {
  return (
    <a
      href={href}
      className="flex flex-row items-center justify-between w-full"
    >
      <div
        style={{
          // ...styles.project,
          ...(isLast && styles.lastProject),
        }}
        className="flex w-full justify-between items-center px-[100px] py-[50px] border-b-[1px] border-b-black/75 cursor-pointer transition-all duration-[0.2s]"
        onClick={() => setModal({ active: true, index })}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.opacity = "0.5";
          (e.currentTarget as HTMLDivElement).style.backgroundColor =
            "rgb(255, 255, 255)";
          (e.currentTarget.querySelector("h2") as HTMLElement).style.transform =
            "translateX(-50%)";
          (e.currentTarget.querySelector("p") as HTMLElement).style.transform =
            "translateX(50%)";
          setModal({ active: true, index: index });
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.opacity = "1";
          (e.currentTarget as HTMLDivElement).style.backgroundColor =
            "transparent";
          (e.currentTarget.querySelector("h2") as HTMLElement).style.transform =
            "translateX(0)";
          (e.currentTarget.querySelector("p") as HTMLElement).style.transform =
            "translateX(0)";
          setModal({ active: false, index: index });
        }}
      >
        <h2 className="text-4xl m-0 font-[400] transition-all duration-[0.4s]">
          {title}
        </h2>
        <p className="text-base font-[300] transition-all duration-[0.4s]">
          {description}
        </p>
      </div>
    </a>
  );
}


function Modal({
  modal,
  projects,
}: {
  modal: { active: boolean; index: number };
  projects: ProjectDetails[];
}) {
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  const controlsModal = useAnimation();
  const controlsCursor = useAnimation();
  const controlsCursorLabel = useAnimation();

  const [cursorXModal, setCursorXModal] = useState(0);
  const [cursorYModal, setCursorYModal] = useState(0);
  const [cursorXCursor, setCursorXCursor] = useState(0);
  const [cursorYCursor, setCursorYCursor] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const modalWidth = modalContainer.current?.offsetWidth || 0;
      const modalHeight = modalContainer.current?.offsetHeight || 0;
      const cursorWidth = cursor.current?.offsetWidth || 0;
      const cursorHeight = cursor.current?.offsetHeight || 0;

      setCursorXModal(e.clientX - modalWidth / 2);
      setCursorYModal(e.clientY - modalHeight / 2);
      setCursorXCursor(e.clientX - cursorWidth / 2);
      setCursorYCursor(e.clientY - cursorHeight / 2);
    };

    if (active) {
      controlsModal.start({ opacity: 1, scale: 1 });
      controlsCursor.start({ opacity: 1, scale: 1 });
      controlsCursorLabel.start({ opacity: 1, scale: 1 });
    } else {
      controlsModal.start({ opacity: 0, scale: 0 });
      controlsCursor.start({ opacity: 0, scale: 0 });
      controlsCursorLabel.start({ opacity: 0, scale: 0 });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active, controlsModal]);


  return (
    <>
      <motion.div
        ref={modalContainer}
        style={{ left: cursorXModal, top: cursorYModal }}
        initial={{ opacity: 0, scale: 0 }}
        animate={controlsModal}
        className="h-[300px] w-[300px] absolute overflow-hidden pointer-events-none flex items-center justify-center rounded-full"
      >
        <div style={{ ...styles.modalSlider, top: `${index * -100}%` }}>
          {projects.map((project, i) => (
            <div
              className={`h-full w-full flex items-center justify-center border-4 border-[${project.modalColor}] overflow-hidden relative`}
              style={{ backgroundColor: project.modalColor }}
              key={`modal_${i}`}
            >
              <Image
                src={`/images/${project.src}`}
                alt={project.title || "image"}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        style={{ left: cursorXCursor, top: cursorYCursor }}
        className={`bg-black/50 bg-[${
          projects[modal.index]?.cursorColor
        }] w-[80px] h-[80px] rounded-full text-white absolute z-2 flex items-center justify-center text-[14px] font-normal pointer-events-none`}
        initial={{ opacity: 0, scale: 0 }}
        animate={controlsCursor}
      >
        <motion.div
          ref={cursorLabel}
          className="absolute text-center bg-transparent transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={controlsCursorLabel}
        >
          {projects[modal.index]?.cursorText || "View"}
        </motion.div>
      </motion.div>
    </>
  );
}

const styles = {
  lastProject: {
    borderBottom: "0px solid rgb(255, 0, 0)",
  } as CSSProperties,
  modalSlider: {
    height: "100%",
    width: "100%",
    position: "absolute",
    transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
  } as CSSProperties,
};
