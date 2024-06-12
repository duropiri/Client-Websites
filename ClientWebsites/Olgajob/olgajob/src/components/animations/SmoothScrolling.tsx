"use client";
import ReactLenis from "lenis/react";

interface AnimationProps {
  children: React.ReactNode;
}

export default function SmoothScrolling({ children }: AnimationProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1 }}>
      {children}
    </ReactLenis>
  );
}