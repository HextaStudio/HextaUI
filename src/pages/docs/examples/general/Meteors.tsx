import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};

interface MeteorsProps {
  number?: number;
}

export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-white shadow-[0_0_90px_10px_#ffffff10]"
          )}
          style={style}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  );
};

const meteors = () => {
  return (
    <>
      <DocsSEO
        title="Meteors - hextastudio/ui"
        description="A simple meteor shower effect using Tailwind CSS and React."
        image="https://i.imgur.com/qIWEJGt.png"
      />

      <DocsLayout>
        <main>
          <DocsHeader
            title="Meteors"
            description="A simple meteor shower effect using Tailwind CSS and React."
          />
          <DocsPreview>
            <Meteors />
          </DocsPreview>
          <CodeBlock
            lang="tsx"
            filename="tailwind.config.js"
            free
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
        // ...
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
      animation: {
        // ...
        meteor: "meteor 0.2s linear infinite",
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
            code={`const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};

interface MeteorsProps {
  number?: number;
}

export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-white shadow-[0_0_90px_10px_#ffffff10]"
          )}
          style={style}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  );
};`}
          />
          <CodeBlock
            free
            lang="tsx"
            filename="tsx"
            code={`<Meteors />`}
            title="Usage"
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default meteors;
