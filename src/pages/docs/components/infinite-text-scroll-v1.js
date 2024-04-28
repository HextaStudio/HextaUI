import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import React from "react";
import { motion } from "framer-motion";

import { NextSeo } from "next-seo";

export const InfiniteScrollingTextV1Preview = () => {
  return (
    <>
      <main className="relative flex mt-[6rem] overflow-hidden">
        <motion.div
          className="whitespace-nowrap"
          animate={{
            x: [0, -1000],
            transition: {
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            },
          }}
        >
          <span className="relative  text-white text-[8rem] font-bold pr-[50px]">
            Let's Get Started - Let's Get Started -
          </span>
          <span className="relative m-0 text-white text-[8rem] font-bold pr-[50px]">
            Let's Get Started - Let's Get Started -
          </span>
          <span className="relative m-0 text-white text-[8rem] font-bold pr-[50px]">
            Let's Get Started - Let's Get Started -
          </span>
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
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/hacker-text-effect",
          title: "Infinite Text Scroll v1 - HextaUI ✨",
          description:
            "Awesome infinite text scrolling effect using framer-motion",
          images: [
            {
              url: "https://i.imgur.com/ADz5ef6.png",
              width: 1920,
              height: 1080,
              alt: "Infinite Text Scroll v1 - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Infinite Text Scroll v1 - HextaUI ✨",
        }}
        twitter={{
          handle: "@HextaStudio",
          site: "@HextaStudio",
          cardType: "summary_large_image",
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
              lang="Javascript"
              filename="index.jsx"
              code={`import React from "react";
import { motion } from "framer-motion";`}
            />
            <h3 className="h3">Main Code</h3>
            <CodeBlock
              lang="Javascript"
              filename="index.jsx"
              code={` <main className="relative flex mt-[6rem] overflow-hidden">
    <motion.div
        className="whitespace-nowrap"
        animate={{
        x: [1000, 0],
        transition: {
            repeat: Infinity,
            duration: 10,
            ease: "linear",
        },
        }}
    >
        <span className="relative  text-white text-[8rem] font-bold pr-[50px]">
        Let's Get Started - Let's Get Started -
        </span>

        <span className="relative m-0 text-white text-[8rem] font-bold pr-[50px]">
        Let's Get Started - Let's Get Started -
        </span
        >
        <span className="relative m-0 text-white text-[8rem] font-bold pr-[50px]">
        Let's Get Started - Let's Get Started -
        </span>
    </motion.div>
</main>`}
            />
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default infiniteTextScrollV1;
