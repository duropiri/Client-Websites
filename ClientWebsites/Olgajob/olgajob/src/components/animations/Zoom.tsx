"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimationProps {
  className?: string;
  children: React.ReactNode;
  initialScale?: number;
  finalScale?: number;
}

export default function Zoom({
  className,
  children,
  initialScale = 1,
  finalScale = 0.5,
}: AnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [initialScale, finalScale]);

  return (
    <div ref={containerRef} className={`h-[300vh] w-full relative ${className}`}>
      <div className="sticky top-0 h-[100vh] w-full overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ scale }}
          className="w-full h-full absolute top-0 flex items-center justify-center"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
