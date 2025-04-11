"use client";

import React, { useEffect, useRef, useState } from "react";

type AnimationType =
  | "fade"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "scale"
  | "rotate";

type ScrollAnimationProps = {
  children: React.ReactNode;
  type?: AnimationType;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
};

const getAnimationStyles = (type: AnimationType, isVisible: boolean) => {
  const baseStyles = {
    opacity: isVisible ? 1 : 0,
    transform: "none",
  };

  if (!isVisible) {
    switch (type) {
      case "fade":
        return { opacity: 0 };
      case "slide-up":
        return {
          opacity: 0,
          transform: "translateY(50px)",
          filter: "blur(10px)",
        };
      case "slide-down":
        return {
          opacity: 0,
          transform: "translateY(-50px)",
          filter: "blur(10px)",
        };
      case "slide-left":
        return {
          opacity: 0,
          transform: "translateX(50px)",
          filter: "blur(10px)",
        };
      case "slide-right":
        return {
          opacity: 0,
          transform: "translateX(-50px)",
          filter: "blur(10px)",
        };
      case "scale":
        return { opacity: 0, transform: "scale(1.2)", filter: "blur(10px)" };
      case "rotate":
        return { opacity: 0, transform: "rotate(180deg)" };
      default:
        return baseStyles;
    }
  }

  return baseStyles;
};

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  type = "fade",
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  className = "",
  once = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "50px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, once]);

  const animationStyles = getAnimationStyles(type, isVisible);

  const transitionStyles = isVisible && {
    transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...animationStyles,
        ...transitionStyles,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
