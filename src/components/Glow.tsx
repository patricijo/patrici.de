"use client";

import React, { HTMLAttributes } from "react";
import { useMousePosition } from "./MouseTracker";

type PictureProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const Glow: React.FC<PictureProps> = ({ className, ...props }) => {
  const { mousePosition } = useMousePosition();

  return (
    <div
      className={`${className || ""}`}
      style={{
        backgroundImage: `radial-gradient(
          circle at calc(${mousePosition.x} * 1px) calc(${mousePosition.y} * 1px),
          var(--glow-color) 0%,
          transparent 100%
        )`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        position: "absolute",
        zIndex: 1,
      }}
      {...props}
    ></div>
  );
};

export default Glow;
