"use client";
import React, { createContext, useState, useContext, useReducer } from "react";

// Step 1: Create a new context
const GlobalStateContext = createContext();

// Initial state for the reducer
const initialState = {
  isLoading: false,
  user: null,
  navbarContent: null,
  heroContent: null,
  marqueeContent: null,
  homePageContent: null,
  footerContent: null,
  mobileMenuOpen: false,
};

// Reducer function to handle state updates
function globalReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_NAVBAR_CONTENT":
      return { ...state, navbarContent: action.payload };
    case "SET_HERO_CONTENT":
      return { ...state, heroContent: action.payload };
    case "SET_MARQUEE_CONTENT":
      return { ...state, marqueeContent: action.payload };
    case "SET_HOMEPAGE_CONTENT":
      return { ...state, homePageContent: action.payload };
    case "SET_FOOTER_CONTENT":
      return { ...state, footerContent: action.payload };
    case "SET_MOBILE_MENU_OPEN":
      return { ...state, mobileMenuOpen: action.payload };
    // Handle other state updates
    default:
      return state;
  }
}

// Step 2: Create a provider component
export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
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
