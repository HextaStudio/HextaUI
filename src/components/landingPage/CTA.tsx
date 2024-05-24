import { useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const CTA = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  const maxRotation = 8;
  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: any }) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      const midpoint = window.innerWidth / 2;

      const distanceFromMidpoint = Math.abs(e.clientX - midpoint);
      const rotation = (distanceFromMidpoint / midpoint) * maxRotation;

      setRotation(e.clientX > midpoint ? rotation : -rotation);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className={`following-tooltip w-[14rem] flex items-center justify-center text-black font-bold px-[3rem] py-[1.4rem] rounded-3xl fixed h-[2rem] bg-white  transition-opacity z-[99] duration-[0.3s]  ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
          transform: `rotateZ(${rotation}deg) translate(-50%, -140%)`,
        }}
      >
        <p>Time to Flex💪</p>
      </div>
      <main className="relative flex overflow-hidden w-vw my-[10rem]">
        <motion.div
          className="whitespace-nowrap "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            x: [0, -1000],
            transition: {
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            },
          }}
        >
          <Link href="/docs/components/layout/Accordion">
            <span className="relative transition-all hover:text-purple-400 cursor-pointer m-0 text-white text-[8rem] font-[800]  w-full grow">
              Let's Get Started - Let's Get Started - Let's Get Started - Let's
              Get Started - Let's Get Started - Let's Get Started -
            </span>
          </Link>
        </motion.div>
      </main>
    </>
  );
};
