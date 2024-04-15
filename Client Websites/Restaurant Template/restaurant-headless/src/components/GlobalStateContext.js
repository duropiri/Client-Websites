"use client";
import React, { createContext, useState, useContext } from "react";

// Step 1: Create a new context
const GlobalStateContext = createContext();

// Step 2: Create a provider component
export const GlobalStateProvider = ({ children }) => {
  // Existing global states
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  // New global states
  const [heroContent, setHeroContent] = useState(null);
  const [marqueeContent, setMarqueeContent] = useState(null);
  const [homePageContent, setHomePageContent] = useState(null);
  const [footerContent, setFooterContent] = useState(null);

  // Mobile states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Combine all global states and their update functions into a single object
  const globalState = {
    isLoading,
    setIsLoading, // Directly use the setter functions provided by useState
    user,
    setUser, // Directly use the setter functions provided by useState
    heroContent,
    setHeroContent,
    marqueeContent,
    setMarqueeContent,
    homePageContent,
    setHomePageContent,
    mobileMenuOpen,
    setMobileMenuOpen,
    footerContent,
    setFooterContent,
  };

  return (
    <GlobalStateContext.Provider value={globalState}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to easily access global state and update functions
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
