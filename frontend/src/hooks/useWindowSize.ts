"use client"
import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>();

  useEffect(() => {
    const handleResize = () => {
      if(typeof window === "undefined") return;

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize()

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};