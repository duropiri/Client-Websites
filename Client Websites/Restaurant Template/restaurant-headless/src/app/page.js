"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/components/GlobalStateContext";

import Navbar from "@/components/Navbar";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Page() {
  const { state } = useGlobalState();
  const router = useRouter();
  const [contentLoadedSuccessfully, setContentLoadedSuccessfully] =
    useState(false);

  useEffect(() => {
    // It's important to only perform client-side routing after verifying the window object is defined
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);

      // Simulate fetching data from CMS
      fetchCMS()
        .then((data) => {
          // Debug: Check the fetched data
          console.log("CMS Data:", data);

          // Ensure data is not null and has expected structure
          if (!data) {
            console.error(
              "No data returned or data structure incorrect:",
              data
            );
            router.replace("/");
          } else {
            setContentLoadedSuccessfully(true);
          }
        })
        .catch((error) => {
          console.error("Error fetching content:", error);
          router.replace("/404");
        });
    }
  }, [router]); // Router removed from dependencies to avoid unnecessary re-runs

  if (!contentLoadedSuccessfully) return null; // Optionally show a loading spinner here

  return (
    <>
      <Navbar />
      <main className="flex flex-col relative z-[99]">
        <Hero />
        <Body />
      </main>
      <Footer />
    </>
  );
}

const fetchCMS = () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };

  return fetch(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/hero-contents?populate=*`, reqOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}: Failed to fetch`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error; // Ensure error handling logic in useEffect can catch this
    });
};