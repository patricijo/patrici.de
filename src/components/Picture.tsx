"use client";
import Image from "next/image";
import Shadow from "./Shadow";
import { useMousePosition } from "./MouseTracker";
import { useEffect, useRef, useState } from "react";
type RotationState = {
  x: number;
  y: number;
};

const Picture: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [center, setCenter] = useState<RotationState>({ x: 0, y: 0 });
  const { mousePosition } = useMousePosition();

  useEffect(() => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setCenter({
      x: centerX,
      y: centerY,
    });
  }, []);

  const mouseX = mousePosition.x - center.x;
  const mouseY = mousePosition.y - center.y;

  const rotation = {
    x: Math.min(10, Math.max(-7, -mouseY / 20) * 1.2),
    y: Math.min(10, Math.max(-7, mouseX / 20) * 1.2),
  };

  return (
    <div className={`relative aspect-square flex justify-center`}>
      <div
        className="top-0 left-[4%] mx-[5%] absolute"
        style={{
          transform: `translateY(${rotation.x / 4}px) translateX(${
            -rotation.y / 4
          }px)`,
        }}
      >
        <Shadow>
          <Image src="/pp.png" alt="Picture" width={450} height={450} />
        </Shadow>
      </div>

      <div
        className={`bottom-0 absolute ml-[3%]   `}
        ref={cardRef}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
          marginRight: "5%",
        }}
      >
        <Shadow>
          <Image src="/cardboard.png" alt="Picture" width={450} height={450} />
        </Shadow>
      </div>
    </div>
  );
};

export default Picture;
