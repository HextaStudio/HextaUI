import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import React from "react";

import { NextSeo } from "next-seo";

const WhiteRayPreview = () => {
  const whiteRayRef = useRef(null);

  useEffect(() => {
    gsap.to(whiteRayRef.current, {
      transform: "translate(0) rotate(-70deg)",
      delay: 1,
      duration: 2,
      ease: "circ.out",
    });
  }, []);
  return (
    <div className="flex items-center justify-center w-full h-full bg-[rgba(5, 0, 8, 0.227)]  bg-[radial-gradient(hsla(0,0%,100%,0.1)_1px,transparent_0)] bg-center bg-[length:1.1rem_1.1rem]">
      <div
        className="absolute left-0 w-10 bg-white -rotate-[70deg] translate-x-[-30rem] translate-y-[-30rem] top-[-4rem] to opacity-45 blur-3xl white-ray h-[40rem] "
        ref={whiteRayRef}
      ></div>
      <p className="h1">HextaUI</p>
    </div>
  );
};

const whiteRay = () => {
  return (
    <>
      <NextSeo
        title="White Ray - HextaUI ✨"
        description="A Beautiful animated ray to use in hero component or to use in your next awesome SaaS landing page."
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/white-ray",
          title: "White Ray - HextaUI ✨",
          description:
            "A Beautiful animated ray to use in hero component or to use in your next awesome SaaS landing page.",
          images: [
            {
              url: "https://i.imgur.com/8WI7KNg.png",
              width: 1920,
              height: 1080,
              alt: "White Ray - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "White Ray - HextaUI ✨",
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
            <h1 className="h1">White Ray</h1>
            <p className="text-sm opacity-80">
              A Beautiful animated ray to use in your website.
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
                <WhiteRayPreview />
              </div>
            </div>
          </div>
          <div className="installation">
            <h3 className="h3">Installation</h3>
            <CodeBlock lang="bash" filename="bash" code={`npm install gsap`} />
            <h3 className="h3">Setup</h3>
            <CodeBlock
              lang="jsx"
              filename="index.jsx"
              code={`import { useEffect, useRef } from "react";
import gsap from "gsap";
import React from "react";`}
            />
            <CodeBlock
              lang="jsx"
              filename="index.jsx"
              code={`const WhiteRay = () => {
  const whiteRayRef = useRef(null);

  useEffect(() => {
    gsap.to(whiteRayRef.current, {
      transform: "translate(0) rotate(-70deg)",
      delay: 1,
      duration: 2,
      ease: "circ.out",
    });
  }, []);
  return (
    <div className="flex items-center justify-center w-full h-full bg-[rgba(5, 0, 8, 0.227)]  bg-[radial-gradient(hsla(0,0%,100%,0.1)_1px,transparent_0)] bg-center bg-[length:1.1rem_1.1rem]">
      <div
        className="absolute left-0 w-10 bg-white -rotate-[70deg] translate-x-[-30rem] translate-y-[-30rem] top-[-4rem] to opacity-45 blur-3xl white-ray h-[40rem] "
        ref={whiteRayRef}
      ></div>
      <p className="h1">HextaUI</p>
    </div>
  );
};`}
            />
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default whiteRay;
