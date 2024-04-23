import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import { NextSeo } from "next-seo";
import Link from "next/link";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const TextRevealV1Preview = () => {
  const textRef = useRef(null);
  const textSpanRef = useRef(null);

  const text =
    "In HextaUI everything is component based so you can Copy and paste components like this in your own website and customize with your own style without any efforts. Start building your website with these components today!";
  const words = text.split(" ");

  useEffect(() => {
    const pinText = ScrollTrigger.create({
      trigger: textRef.current,
      start: "top top",
      pin: true,
    });

    gsap.to(".textSpan", {
      opacity: 1,
      stagger: 1,
      scrollTrigger: {
        scrub: true,
        trigger: textRef.current,
        start: "top",
        end: "center",
      },
    });

    return () => {
      pinText.kill();
    };
  }, []);

  return (
    <>
      <div
        ref={textRef}
        className="max-w-[60rem] h-[100dvh] items-center flex justify-center"
      >
        <p className="text-[3.3rem] max-[776px]:text-4xl max-[776px]:leading-[2.7rem] max-[480px]:text-3xl max-[480px]:leading-[2rem]  max-[380px]:text-[2rem] max-[380px]:leading-[2rem] font-semibold tracking-tighter leading-[3.7rem] text-left">
          {words.map((word, index) => (
            <span className="opacity-10 textSpan" ref={textSpanRef} key={index}>
              {word}{" "}
            </span>
          ))}
        </p>
      </div>
    </>
  );
};

const textRevealV1 = () => {
  return (
    <>
      <NextSeo
        title="Text Reveal v1"
        description="An Awesome Text Reveal animated effect on Scrolling"
        openGraph={{
          url: "https://hextaui.vercel.app/docs/components/text-reveal-v1",
          title: "Text Reveal v1",
          description: "An Awesome Text Reveal animated effect on Scrolling",
          images: [
            {
              url: "https://i.imgur.com/Aox3Q77.png",
              width: 1920,
              height: 1080,
              alt: "Text Reveal v1",
              type: "image/png",
            },
          ],
          siteName: "Text Reveal v1",
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
            <h1 className="h1">Text Reveal v1</h1>
            <p className="text-sm opacity-80">
              An Awesome Text Reveal animated effect on Scrolling
            </p>
          </div>
          <div className="flex flex-col gap-4 py-10 preview">
            <div>
              <h3 className="h3">Preview</h3>
              <div
                className="relative flex p-[1rem] justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container"
                style={{
                  height: "100rem",
                }}
              >
                <TextRevealV1Preview />
              </div>
            </div>
          </div>
          <div className="installation">
            <h3 className="h3">Installtion</h3>
            <CodeBlock lang="bash" filename="bash" code={`npm install gsap`} />
            <h3 className="h3">Setup</h3>
            <CodeBlock
              lang="Javascript"
              filename="index.jsx"
              code={`import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);`}
            />
            <CodeBlock
              lang="Javascript"
              filename="index.jsx"
              code={`const TextRevealV1 = () => {
    const textRef = useRef(null);
    const textSpanRef = useRef(null);

    const text =
        "In HextaUI everything is component based so you can Copy and paste components like this in your own website and customize with your own style without any efforts. Start building your website with these components today!";
    const words = text.split(" ");

    useEffect(() => {
        const pinText = ScrollTrigger.create({
            trigger: textRef.current,
            start: "top top",
            pin: true,
        });

        gsap.to(".textSpan", {
            opacity: 1,
            stagger: 1,
            scrollTrigger: {
                scrub: true,
                trigger: textRef.current,
                start: "top",
                end: "center",
            },
        });

        return () => {
            pinText.kill();
        };
    }, []);

    return (
        <>
        <div
            ref={textRef}
            className="max-w-[80rem] h-[80dvh] items-center flex justify-center"
        >
            <p className="text-[3.2rem] max-[680px]:text-5xl max-[480px]:text-4xl max-[380px]:text-[2.4rem] font-semibold tracking-tighter leading-[3.1rem] text-left">
                {words.map((word, index) => (
                    <span className="opacity-10 textSpan" ref={textSpanRef} key={index}>
                        {word}{" "} 
                    </span>
                ))}
            </p>
        </div>
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

export default textRevealV1;
