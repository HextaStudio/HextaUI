import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

import { useEffect } from "react";
import { PiStarFourFill } from "react-icons/pi";

const SparkleText = () => {
  useEffect(() => {
    let index = 0,
      interval = 1300;

    const rand = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (star: HTMLElement) => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
    };

    const stars = Array.from(document.getElementsByClassName("magic-star"));
    for (const star of stars) {
      const htmlStar = star as HTMLElement;
      setTimeout(() => {
        animate(htmlStar);

        setInterval(() => animate(htmlStar), 1300);
      }, index++ * (interval / 2));
    }
  }, []);

  return (
    <>
      <div>
        <div>
          <p className="text-3xl font-medium">
            I love{" "}
            <span className="inline-block magic bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
              <span>hextastudio/UI</span>

              <PiStarFourFill className="magic-star [--size:clamp(20px,1.5vw,30px)] block h-[--size] w-[--size] top-[--star-top] left-[--star-left] absolute animate-starScale text-purple-500" />
              <PiStarFourFill className="magic-star [--size:clamp(20px,1.5vw,30px)] block h-[--size] w-[--size] top-[--star-top] left-[--star-left] absolute animate-starScale text-purple-500" />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

const sparkletexteffect = () => {
  return (
    <>
      <DocsSEO
        title="Sparkle Text Effect - hextastudio/ui"
        description="Sparkle text effect using Tailwind CSS and React."
        image="https://i.imgur.com/9zTbQ6C.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Sparkle Text Effect"
            description="Sparkle text effect using Tailwind CSS and React."
          />
          <DocsPreview>
            <SparkleText />
          </DocsPreview>
          <CodeBlock
            lang="tsx"
            free
            filename="tailwind.config.js"
            code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        //...
        starScale: {
          "from, to": {
            transform: "rotate(0) scale(0)",
            opacity: 0,
          },

          "50%": {
            transform: "rotate(180deg) scale(1)",
            opacity: 1,
          },
        },
      },
      animation: {
        //...
        starScale: "starScale 800ms ease infinite",
      },

    },
  },
  plugins: [],
};
`}
          />
          <CodeBlock
            lang="tsx"
            filename="tsx"
            free
            code={`
import { useEffect } from "react";
import { PiStarFourFill } from "react-icons/pi";

const SparkleText = () => {
  useEffect(() => {
    let index = 0,
      interval = 1300;

    const rand = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (star: HTMLElement) => {
      star.style.setProperty("--star-left", \`\${rand(-10, 100)}%\`);
      star.style.setProperty("--star-top", \`\${rand(-40, 80)}%\`);
    };

    const stars = Array.from(document.getElementsByClassName("magic-star"));
    for (const star of stars) {
      const htmlStar = star as HTMLElement;
      setTimeout(() => {
        animate(htmlStar);

        setInterval(() => animate(htmlStar), 1300);
      }, index++ * (interval / 2));
    }
  }, []);

  return (
    <>
      <div>
        <div>
          <p className="text-3xl font-medium">
            I love{" "}
            <span className="inline-block magic bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
              <span>hextastudio/UI</span>

              <PiStarFourFill className="magic-star [--size:clamp(20px,1.5vw,30px)] block h-[--size] w-[--size] top-[--star-top] left-[--star-left] absolute animate-starScale text-purple-500" />
              <PiStarFourFill className="magic-star [--size:clamp(20px,1.5vw,30px)] block h-[--size] w-[--size] top-[--star-top] left-[--star-left] absolute animate-starScale text-purple-500" />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default sparkletexteffect;
