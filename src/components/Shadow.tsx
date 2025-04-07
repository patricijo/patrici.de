"use client";

import React, { useRef } from "react";
import { useMousePosition } from "./MouseTracker";

type PictureProps = {
  maxDistance?: number;
  sensitivity?: number;
  className?: string;
  opacity?: number;
  children: React.ReactNode;
};

const Shadow: React.FC<PictureProps> = ({
  maxDistance = 5,
  sensitivity = 20,
  opacity = 0.4,
  children,
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

  const blur = Math.max(3, (distance / maxMouseDistance) * 15);

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
      style={{
        filter: `drop-shadow(${-positionY + "px"} ${positionX + "px"} ${
          blur + "px"
        } hsla(0, 0%, 0%, ${opacity} ) `,
        inlineSize: "fit-content",
      }}
    >
      {children}
    </div>
  );
};

export default Shadow;
