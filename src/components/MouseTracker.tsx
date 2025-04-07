"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface MousePosition {
  x: number;
  y: number;
}
interface WindowSize {
  width: number;
  height: number;
}

interface MouseContextValue {
  mousePosition: MousePosition;
  windowSize: WindowSize;
}

const MouseContext = createContext<MouseContextValue>({
  mousePosition: { x: 0, y: 0 },
  windowSize: { width: 0, height: 0 },
});

export const useMousePosition = (): MouseContextValue => {
  const context = useContext(MouseContext);
  if (!context) {
    throw new Error("useMousePosition must be used within a MouseProvider");
  }
  return context;
};

const MouseTracker = ({ children }: { children: ReactNode }) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });

      document.documentElement.style.setProperty(
        "--mouse-x",
        Math.round(event.clientX) + ""
      );
      document.documentElement.style.setProperty(
        "--mouse-y",
        Math.round(event.clientY) + ""
      );
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      document.documentElement.style.setProperty(
        "--window-width",
        Math.round(window.innerWidth) + ""
      );
      document.documentElement.style.setProperty(
        "--window-height",
        Math.round(window.innerHeight) + ""
      );
    };
    const handleScroll = () => {
      const scrollContainer = document.getElementById("scroll-container");
      if (scrollContainer) {
        // Calculate scroll percentage (0-100)
        const scrollYPercent = Math.round(
          (scrollContainer.scrollTop /
            (scrollContainer.scrollHeight - scrollContainer.clientHeight)) *
            100
        );

        const scrollXPercent = Math.round(
          (scrollContainer.scrollLeft /
            (scrollContainer.scrollWidth - scrollContainer.clientWidth)) *
            100
        );

        // Set both pixel and percentage values
        document.documentElement.style.setProperty(
          "--scroll-y",
          Math.round(scrollYPercent) + ""
        );
        document.documentElement.style.setProperty(
          "--scroll-x",
          Math.round(scrollXPercent) + ""
        );
      }
    };

    handleResize();
    handleScroll();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const scrollContainer = document.getElementById("scroll-container");

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      const scrollContainer = document.getElementById("scroll-container");
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const value: MouseContextValue = { mousePosition, windowSize };

  return (
    <MouseContext.Provider value={value}>{children}</MouseContext.Provider>
  );
};

export default MouseTracker;
