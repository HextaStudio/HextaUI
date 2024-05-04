import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import React from "react";
import { motion } from "framer-motion";

import { NextSeo } from "next-seo";
import Link from "next/link";

import { useEffect, useState } from "react";

export const InfiniteScrollingTextV1Preview = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  const maxRotation = 8;
  useEffect(() => {
    const handleMouseMove = (e) => {
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
        className={`following-tooltip w-[14rem] flex items-center justify-center text-black font-bold px-[3rem] py-[1.4rem] rounded-3xl fixed h-[2rem] bg-white  transition-opacity z-[99] duration-[0.3s] ${
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
      <main className="relative flex overflow-hidden w-vw">
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
          <Link href="/components">
            <span className="relative transition-all hover:text-[#f66a0e] cursor-pointer m-0 text-white text-[8rem] font-[800]  w-full grow">
              Let's Get Started - Let's Get Started - Let's Get Started - Let's
              Get Started - Let's Get Started - Let's Get Started -
            </span>
          </Link>
        </motion.div>
      </main>
    </>
  );
};

const infiniteTextScrollV1 = () => {
  return (
    <>
      <NextSeo
        title="Infinite Text Scroll v1 - HextaUI ✨"
        description="Awesome infinite text scrolling effect using framer-motion"
        canonical="https://ui.hextastudio.in/docs/components/moder/infinite-text-scroll-v1"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/modern/infnite-text-scroll-v1",
          title: "Infinite Text Scroll v1 - HextaUI ✨",
          description:
            "Awesome infinite text scrolling effect using framer-motion",
          images: [
            {
              url: "https://i.imgur.com/54Cncg3.png",
              width: 1920,
              height: 1080,
              alt: "Infinite Text Scroll v1 - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Infinite Text Scroll v1 - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <div className="header">
            <h1 className="h1">Infinite Text Scroll v1</h1>
            <p className="text-sm opacity-80">
              Awesome infinite text scrolling effect using framer-motion
            </p>
          </div>
          <div className="flex flex-col gap-4 py-10 preview">
            <div>
              <h3 className="h3">Preview</h3>
              <div
                className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container"
                style={{
                  height: "35rem",
                }}
              >
                <InfiniteScrollingTextV1Preview />
              </div>
            </div>
          </div>
          <div className="installation">
            <h3 className="h3">Installation</h3>
            <CodeBlock
              lang="bash"
              filename="bash"
              code={`npm install framer-motion`}
            />
            <h3 className="h3">Setup</h3>
            <CodeBlock
              lang="jsx"
              filename="index.jsx"
              code={`import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
`}
            />
            <h3 className="h3">Main Code</h3>
            <CodeBlock
              lang="jsx"
              filename="index.jsx"
              code={`export const InfiniteScrollingTextV1 = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  const maxRotation = 8;
  useEffect(() => {
    const handleMouseMove = (e) => {
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
        className={\`following-tooltip w-[14rem] flex items-center justify-center text-black font-bold px-[3rem] py-[1.4rem] rounded-3xl fixed h-[2rem] bg-white  transition-opacity z-[99] duration-[0.3s] \${
          isHovered ? "opacity-100" : "opacity-0"
        }\`}
        style={{
          top: \`\${cursorPosition.y}px\`,
          left: \`\${cursorPosition.x}px\`,
          transform: \`rotateZ(\${rotation}deg) translate(-50%, -140%)\`,
        }}
      >
        <p>Time to Flex💪</p>
      </div>
      <main className="relative flex overflow-hidden w-vw">
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
          <Link href="/components">
            <span className="relative transition-all hover:text-[#f66a0e] cursor-pointer m-0 text-white text-[8rem] font-[800]  w-full grow">
              Let's Get Started - Let's Get Started - Let's Get Started - Let's
              Get Started - Let's Get Started - Let's Get Started -
            </span>
          </Link>
        </motion.div>
      </main>
    </>
  );
};`}
            />
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default infiniteTextScrollV1;
