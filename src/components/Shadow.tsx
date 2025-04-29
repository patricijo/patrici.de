"use client";

import React, { HTMLAttributes, useRef } from "react";
import { useMousePosition } from "./MouseTracker";

type PictureProps = HTMLAttributes<HTMLDivElement> & {
  maxDistance?: number;
  sensitivity?: number;
  className?: string;
  opacity?: number;
  children: React.ReactNode;
};

const Shadow: React.FC<PictureProps> = ({
  maxDistance = 10,
  sensitivity = 20,
  opacity = 0.4,
  children,
  className,
  ...props
}) => {
  const { mousePosition, windowSize } = useMousePosition();
  const cardRef = useRef<HTMLDivElement>(null);

  const card = cardRef.current;
  const rect = card?.getBoundingClientRect() || {
    left: 0,
    width: 0,
    top: 0,
    height: 0,
  };

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const mouseX = mousePosition.x - centerX;
  const mouseY = mousePosition.y - centerY;

  const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
  const maxMouseDistance = Math.max(windowSize.height, windowSize.width);

  const blur = Math.max(3, (distance / maxMouseDistance) * 20);

  const positionX = Math.min(
    maxDistance,
    Math.max(-maxDistance, -mouseY / sensitivity)
  );
  const positionY = Math.min(
    maxDistance,
    Math.max(-maxDistance, mouseX / sensitivity)
  );

  return (
    <div
      ref={cardRef}
      className={` ${className || ""}`}
      style={{
        filter: `drop-shadow(${-positionY + "px"} ${positionX + "px"} ${
          blur * 2 + "px"
        } hsla(0, 0%, 0%, ${opacity} ) `,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Shadow;
