"use client";

import { useEffect } from "react";

const MouseTracker = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
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
        document.documentElement.style.setProperty(
          "--scroll-y",
          Math.round(scrollContainer.scrollTop) + ""
        );
        document.documentElement.style.setProperty(
          "--scroll-x",
          Math.round(scrollContainer.scrollLeft) + ""
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

  return null;
};

export default MouseTracker;
