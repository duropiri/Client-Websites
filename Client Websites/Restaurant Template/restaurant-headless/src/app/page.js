"use client";
import Body from "@/components/Body";
import { useGlobalState } from "@/components/GlobalStateContext";
import Hero from "@/components/Hero";
import { useEffect } from "react";

export default function Page() {
  const { isLoading } = useGlobalState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return null; // No spinner, just waiting until content is ready
  }

  return (
    <main className="flex flex-col relative z-[99]">
      <Hero />
      <Body />
    </main>
  );
}
