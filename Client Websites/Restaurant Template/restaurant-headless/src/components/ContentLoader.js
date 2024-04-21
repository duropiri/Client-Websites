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
      throw new Error(`HTTP Error ${response.status}: Failed to fetch ${collection}`);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error; // Rethrow to handle in the calling function
    });
};

const ContentLoader = () => {
  const { state, dispatch } = useGlobalState();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: true });

    const fetchOperations = [
      fetchCMS({ collection: "hero-content" }),
      fetchCMS({ collection: "marquee" }),
      fetchCMS({ collection: "home-page-content" }),
      fetchCMS({ collection: "footer-content" }),
    ];

    Promise.all(fetchOperations)
      .then(([heroResponse, marqueeResponse, homePageResponse, footerResponse]) => {
        dispatch({ type: 'SET_HERO_CONTENT', payload: heroResponse.data[0].attributes });
        dispatch({ type: 'SET_MARQUEE_CONTENT', payload: marqueeResponse.data[0].attributes });
        dispatch({ type: 'SET_HOMEPAGE_CONTENT', payload: homePageResponse.data[0].attributes });
        dispatch({ type: 'SET_FOOTER_CONTENT', payload: footerResponse.data[0].attributes });
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      })
      .finally(() => {
        dispatch({ type: 'SET_LOADING', payload: false });
      });
  }, []); // Empty dependency array to run once on mount

  return null; // This component doesn't render anything itself
};

export default ContentLoader;
