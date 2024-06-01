import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { AiOutlineOpenAI } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";

const animatedbeams = () => {
  return (
    <>
      <DocsLayout>
        <main>
          <DocsHeader
            title="Animated Beams"
            description="Animated beams using SVG and CSS."
          />
          <DocsPreview className="flex items-center justify-center h-[30rem] ">
            <div className="flex items-center justify-center h-[30rem] w-full relative">
              <div className="w-full flex items-center justify-center absolute">
                <svg
                  width="90%"
                  className="flex items-center justify-center"
                  viewBox="0 0 751 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 37.0002C83.8562 23.4169 324 -25.5011 750 36.9999"
                    stroke="#131313"
                    stroke-width="3"
                  />
                </svg>
              </div>
              <div className="w-full flex items-center justify-center absolute z-[999]">
                <svg
                  width="90%"
                  className="flex items-center justify-center"
                  viewBox="0 0 751 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="beam-gradient-mask"
                      x1="0"
                      y1="121"
                      x2="1441"
                      y2="121"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="white" />
                      <stop offset="0.2" stopColor="white" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                  </defs>
                  <defs>
                    <linearGradient id="beam-gradient">
                      <stop offset="0.3" stop-color="#5D64FF" />
                      <stop offset="0.6" stop-color="#FF0AA6" />
                      <stop offset="0.9" stop-color="#FF0000" />
                    </linearGradient>
                  </defs>
                  <mask id="gradient-mask-1">
                    <rect
                      className="mask-rect animate-beamMask [animation-delay:0.8s;] z-[99]"
                      x="-100%"
                      y="0"
                      width="10%"
                      height="100%"
                      fill="url(#beam-gradient-mask)"
                    />
                  </mask>
                  <path
                    d="M1 37.0002C83.8562 23.4169 324 -25.5011 750 36.9999"
                    mask="url(#gradient-mask-1)"
                    stroke="url(#beam-gradient)"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
            <div className="w-[90%] flex items-center justify-center relative">
              <div className="absolute -top-[15.6rem] right-0 z-[999] p-2 bg-zinc-900 rounded-md border-white border-opacity-10 border">
                <AiOutlineOpenAI size={25} />
              </div>
              <div className="absolute -top-[15.6rem] left-0 z-[999] p-2 bg-zinc-900 rounded-md border-white border-opacity-10 border">
                <FaGithub size={25} />
              </div>
            </div>
          </DocsPreview>
          <CodeBlock
            lang="tsx"
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
      // ...
      keyframes: {
        beamMask: {
          from: { x: "-100%" },
          to: { x: "100%" },
        },
      },
      animation: {
      // ...
        beamMask: "beamMask 1s linear infinite",
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
            code={`import { AiOutlineOpenAI } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";

<div className="flex items-center justify-center h-[30rem] w-full relative">
  <div className="w-full flex items-center justify-center absolute">
    <svg
      width="90%"
      className="flex items-center justify-center"
      viewBox="0 0 751 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 37.0002C83.8562 23.4169 324 -25.5011 750 36.9999"
        stroke="#131313"
        stroke-width="3"
      />
    </svg>
  </div>
  <div className="w-full flex items-center justify-center absolute z-[999]">
    <svg
      width="90%"
      className="flex items-center justify-center"
      viewBox="0 0 751 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="beam-gradient-mask"
          x1="0"
          y1="121"
          x2="1441"
          y2="121"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="white" />
          <stop offset="0.2" stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="beam-gradient">
          <stop offset="0.3" stop-color="#5D64FF" />
          <stop offset="0.6" stop-color="#FF0AA6" />
          <stop offset="0.9" stop-color="#FF0000" />
        </linearGradient>
      </defs>
        <mask id="gradient-mask-1">
          <rect
            className="mask-rect animate-beamMask [animation-delay:0.8s;] z-[99]"
            x="-100%"
            y="0"
            width="10%"
            height="100%"
            fill="url(#beam-gradient-mask)"
          />
        </mask>
      <path
        d="M1 37.0002C83.8562 23.4169 324 -25.5011 750 36.9999"
        mask="url(#gradient-mask-1)"
        stroke="url(#beam-gradient)"
        strokeWidth="3"
      />
    </svg>
  </div>
</div>
<div className="w-[90%] flex items-center justify-center relative">
  <div className="absolute -top-[15.6rem] right-0 z-[999] p-2 bg-zinc-900 rounded-md border-white border-opacity-10 border">
    <AiOutlineOpenAI size={25} />
  </div>
  <div className="absolute -top-[15.6rem] left-0 z-[999] p-2 bg-zinc-900 rounded-md border-white border-opacity-10 border">
    <FaGithub size={25} />
  </div>
</div>`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default animatedbeams;
