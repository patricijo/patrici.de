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

  return null;
};

export default MouseTracker;
