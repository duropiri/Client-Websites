"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollingProps {
  children: React.ReactNode;
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
  return (
    <ReactLenis root options={{ lerp: 0.2, duration: 5 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
