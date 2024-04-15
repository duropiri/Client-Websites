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
    setHeroContent,
    setMarqueeContent,
    setHomePageContent,
    setFooterContent,
  } = useGlobalState();

  useEffect(() => {
    setIsLoading(true);

    const fetchOperations = [
      fetchCMS({ collection: "hero-content" }),
      fetchCMS({ collection: "marquee" }),
      fetchCMS({ collection: "home-page-content" }),
      fetchCMS({ collection: "footer-content" }),
    ];

    Promise.all(fetchOperations)
      .then(([heroResponse, marqueeResponse, homePageResponse, footerResponse, ]) => {
        if (heroResponse && heroResponse.data) {
          setHeroContent(heroResponse.data[0].attributes);
        }
        if (marqueeResponse && marqueeResponse.data) {
          setMarqueeContent(marqueeResponse.data[0].attributes);
        }
        if (homePageResponse && homePageResponse.data) {
          setHomePageContent(homePageResponse.data[0].attributes);
        }
        if (footerResponse && footerResponse.data) {
          setFooterContent(footerResponse.data[0].attributes);
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
