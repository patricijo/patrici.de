"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ExpertiseData = [
  {
    title: "Languages",
    items: ["Javascript", "HTML", "CSS", "Solidity"],
  },
  {
    title: "Frameworks",
    items: ["ReactJS", "React Native", "NextJS", "SASS"],
  },
  {
    title: "Libaries",
    items: ["Redux(toolkit)", "React Router", "Chakra UI", "Framer-Motion"],
  },
  { title: "Backend", items: ["Moralis", "Firebase", "Express.js", "MongoDB"] },
];

const MacAnimation = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [macWindowHeight, setMacWindowHeight] = useState("auto");

  const macWindowRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const updateHeight = () => {
      if (macWindowRef.current && isOpen) {
        setMacWindowHeight(`${macWindowRef.current.offsetHeight}px`);
      }
    };

    window.addEventListener("resize", updateHeight);

    // Initial height set
    updateHeight();

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [isOpen]);

  return (
    <div className="relative w-full flex">
      <div className="" style={{ height: macWindowHeight }}>
        <div
          onClick={handleClick}
          className={`cursor-pointer transition-all duration-300 ease-in-out 
            ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
        >
          <div className="items-center flex flex-col w-fit">
            <Image
              src="/vscode.svg"
              alt="VS Code"
              className="w-10 h-10 m-2"
              width={10}
              height={10}
            />
            expertise.js
          </div>
        </div>

        <div className="bg-white p-4 aspect-video absolute right-4 bottom-4 rotate-3 items-center flex flex-col text-2xl text-gray-800 font-serif">
          <Image
            src="/familie.jpg"
            alt="Familie"
            className="max-w-[300px] max-h-[300px] m-2"
            width={300}
            height={300}
          />
          Moments
        </div>

        <div
          ref={macWindowRef}
          className={`absolute top-0 left-0 w-full bg-gray-700 rounded-lg shadow-lg 
            transition-all duration-300 ease-in-out origin-top-left
            ${
              isOpen
                ? "-translate-x-0 -translate-y-0 scale-100 opacity-100"
                : "-translate-x-0 -translate-y-0 scale-0 opacity-0"
            }
          `}
        >
          <div className="p-4">
            <div className="flex gap-2 mb-4">
              <div
                onClick={handleClick}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer transition-colors"
                title="Close window"
              ></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-2">
              <div className="bg-gray-800 p-3 rounded font-mono">
                <pre className="text-left">
                  {`const `}
                  <span className="text-blue-400">Expertise</span>
                  {` = {`}{" "}
                </pre>

                <table className="m-4 font-mono">
                  <tbody>
                    {ExpertiseData.map((item, index) => (
                      <tr key={index}>
                        <td className="text-blue-300 px-2 py-1 align-top">
                          {item.title}
                          <span className="text-white">:</span>
                        </td>
                        <td
                          className=" text-white
                        px-2
                        py-1
                        align-top"
                        >{`[ `}</td>
                        <td className="text-white py-1 align-top">
                          {item.items.map((subItem, subIndex) => (
                            <span key={subIndex} className="text-orange-400">
                              {subItem}
                              {subIndex < item.items.length - 1 && (
                                <span className="text-white">, </span>
                              )}
                            </span>
                          ))}
                          {` ],`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <pre className="text-left">{`};`}</pre>
                <div className="text-right">
                  <button
                    type="button"
                    className="mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    npm run expertise.js
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacAnimation;
