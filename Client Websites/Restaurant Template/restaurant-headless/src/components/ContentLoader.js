"use client";
import React, { useEffect } from "react";
import { useGlobalState } from "./GlobalStateContext";

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
    });
};

const ContentLoader = () => {
  const {
    setIsLoading,
    setMarqueeContent,
    setHomePageContent,
  } = useGlobalState();

  useEffect(() => {
    setIsLoading(true);

    const fetchOperations = [
      fetchCMS({ collection: "marquee" }),
      fetchCMS({ collection: "home-page-content" }),
    ];

    Promise.all(fetchOperations)
      .then(([marqueeResponse, homePageResponse]) => {
        if (marqueeResponse && marqueeResponse.data) {
          setMarqueeContent(marqueeResponse.data[0].attributes);
        }
        if (homePageResponse && homePageResponse.data) {
          setHomePageContent(homePageResponse.data[0].attributes);
        }
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
