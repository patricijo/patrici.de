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

interface scrollPosition {
  scrollY: number;
  scrollX: number;
}
interface MouseContextValue {
  mousePosition: MousePosition;
  windowSize: WindowSize;
  scrollPosition: scrollPosition;
}

const MouseContext = createContext<MouseContextValue>({
  mousePosition: { x: 0, y: 0 },
  windowSize: { width: 0, height: 0 },
  scrollPosition: { scrollY: 0, scrollX: 0 },
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

  const [scrollPosition, setScrollPosition] = useState<scrollPosition>({
    scrollY: 0,
    scrollX: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
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

        setScrollPosition({
          scrollY: scrollYPercent,
          scrollX: scrollXPercent,
        });
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

  const value: MouseContextValue = {
    mousePosition,
    windowSize,
    scrollPosition,
  };

  return (
    <MouseContext.Provider value={value}>{children}</MouseContext.Provider>
  );
};

export default MouseTracker;
