"use client";
import React, { useEffect } from "react";
import { useGlobalState } from "./GlobalStateContext";

// Function to determine which fields to populate dynamically
function buildPopulateQuery(collectionStructure) {
  const keys = Object.keys(collectionStructure);
  if (!keys.length) return ""; // Early exit if no keys

  // Start building the query string from the provided collection structure
  return keys.reduce((query, key, index) => {
    const prefix = index === 0 ? "" : "&"; // Start with '?' for the first parameter, '&' for subsequent ones
    if (collectionStructure[key].populate === true) {
      query += `${prefix}populate[${key}][populate]=*`;
    } else if(collectionStructure[key].populate === false) { // if populate is false
      query += `${prefix}populate[${key}]=*`;
    }
    return query;
  }, "");
}

const fetchCMS = ({ collection, collectionStructure = null }) => {
  let populateQuery = "populate=*";
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };

  // Build populate query dynamically
  if (collectionStructure) {
    populateQuery = buildPopulateQuery(collectionStructure);
  }

  const url = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/${collection}s?${populateQuery}`;

  return fetch(url, reqOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `HTTP Error ${response.status}: Failed to fetch ${collection}`
        );
      }
      return response.json();
    })
    .then((jsonData) => {
      // Assuming the data of interest is always in the first element of the data array
      if (jsonData.data.length > 0) {
        return jsonData.data[0].attributes;
      }
      throw new Error("No data found");
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error; // Rethrow to handle in the calling function
    });
};

const ContentLoader = () => {
  const { dispatch } = useGlobalState();

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });

    const fetchOperations = [
      fetchCMS({ collection: "navbar-content" }),
      fetchCMS({ collection: "hero-content" }),
      fetchCMS({
        collection: "home-page-content",
        collectionStructure: {
          marquee: { populate: false },
          centered_contents: { populate: true },
          centered_styled_contents: { populate: true },
        },
      }),
      fetchCMS({ collection: "footer-content" }),
    ];

    Promise.all(fetchOperations)
      .then(
        ([navbarResponse, heroResponse, homePageResponse, footerResponse]) => {
          dispatch({
            type: "SET_NAVBAR_CONTENT",
            payload: navbarResponse,
          });
          dispatch({
            type: "SET_HERO_CONTENT",
            payload: heroResponse,
          });
          dispatch({
            type: "SET_HOMEPAGE_CONTENT",
            payload: homePageResponse,
          });
          dispatch({
            type: "SET_FOOTER_CONTENT",
            payload: footerResponse,
          });
        }
      )
      .catch((error) => {
        console.error("Error fetching content:", error);
      })
      .finally(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  }, []); // Empty dependency array to run once on mount

  return null; // This component doesn't render anything itself
};

export default ContentLoader;
