"use client";
import React, { useEffect } from "react";
import { useGlobalState } from "./GlobalStateContext";
import config from "@/config";

const fetchCMS = ({ collection }) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };

  return fetch(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/${collection}s?populate=*`, reqOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.text().then((text) => {
        throw new Error(`Error ${response.status}: ${text}`);
      });
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      console.log("API Token:", process.env.NEXT_PUBLIC_API_TOKEN);
    });
};

const ContentLoader = () => {
  const {
    setIsLoading,
    setMarqueeContent,
  } = useGlobalState();

  useEffect(() => {
    setIsLoading(true);

    // Define all fetch operations in an array
    const fetchOperations = [
      fetchCMS({ collection: "marquee" }).then(
        (data) => data.data[0].attributes
      ),
    ];

    Promise.all(fetchOperations)
      .then(([marqueeContent]) => {
        setMarqueeContent(marqueeContent);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // Empty dependency array to run once on mount

  return null; // This component doesn't render anything itself
};

export default ContentLoader;
