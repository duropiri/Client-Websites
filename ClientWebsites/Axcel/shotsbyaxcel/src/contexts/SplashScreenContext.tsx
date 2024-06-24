"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface SplashScreenContextProps {
  isLoaded: boolean;
  finishLoading: () => void;
  isAnimating: boolean;
  finishAnimation: () => void;
}

const SplashScreenContext = createContext<SplashScreenContextProps | undefined>(undefined);

export const SplashScreenProvider = ({ children }: { children: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const splashScreenShown = typeof window !== 'undefined' ? sessionStorage.getItem('splashScreenShown') === 'true' : false;
    setIsLoaded(splashScreenShown);
  }, []);

  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      sessionStorage.setItem('splashScreenShown', 'true');
    }
  }, [isLoaded]);

  const finishLoading = () => {
    setIsLoaded(true);
  };

  const finishAnimation = () => {
    setIsAnimating(false);
  };

  return (
    <SplashScreenContext.Provider value={{ isLoaded, finishLoading, isAnimating, finishAnimation }}>
      {children}
    </SplashScreenContext.Provider>
  );
};

export const useSplashScreen = (): SplashScreenContextProps => {
  const context = useContext(SplashScreenContext);
  if (!context) {
    throw new Error("useSplashScreen must be used within a SplashScreenProvider");
  }
  return context;
};
