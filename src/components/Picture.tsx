"use client";
import Image from "next/image";
import Shadow from "./Shadow";
import { useMousePosition } from "./MouseTracker";
import { useRef } from "react";

const Picture: React.FC = () => {
  const { mousePosition } = useMousePosition();
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

  const rotation = {
    x: Math.min(10, Math.max(-7, -mouseY / 20) * 1.2),
    y: Math.min(10, Math.max(-7, mouseX / 20) * 1.2),
  };

  return (
    <div className={`relative aspect-square flex justify-center`}>
      <div
        className="top-0 left-[4%] mt-[5%] mx-[5%] absolute"
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
