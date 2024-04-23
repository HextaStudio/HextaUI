import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import { useEffect, useRef } from "react";
import React from "react";

import { NextSeo } from "next-seo";
import Link from "next/link";

export const HackerTextEffectPreview = ({ text }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const textRef = useRef(null);

  let interval = null;

  useEffect(() => {
    if (textRef.current) {
      textRef.current.onmouseover = (event) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return event.target.dataset.text[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= event.target.dataset.text.length) {
            clearInterval(interval);
          }

          iteration += 1 / 3;
        }, 30);
      };
    }
  }, []);
  return (
    <p ref={textRef} className="h1" data-text={text?.uppercase || "HEXTA UI"}>
      {text?.uppercase || "HEXTA UI"}
    </p>
  );
};
const hackerTextEffect = () => {
  return (
    <>
      <NextSeo
        title="Hacker Text Effect - HextaUI ✨"
        description="A really cool Hacker Text effect when hovered on text."
        openGraph={{
          url: "https://hextaui.vercel.app/docs/components/hacker-text-effect",
          title: "Hacker Text Effect - HextaUI ✨",
          description: "A really cool Hacker Text effect when hovered on text.",
          images: [
            {
              url: "https://i.imgur.com/FFjJIbo.png",
              width: 1920,
              height: 1080,
              alt: "Hacker Text Effect - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Hacker Text Effect - HextaUI ✨",
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
            <h1 className="h1">Hacker Text Effect</h1>
            <p className="text-sm opacity-80">
              A really cool Hacker Text effect when hovered on text.
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
                <HackerTextEffectPreview />
              </div>
            </div>
          </div>
          <div className="installation">
            <h3 className="h3">Setup</h3>
            <CodeBlock
              lang="Javascript"
              filename="index.jsx"
              code={`import { useEffect, useRef } from "react";
import React from "react";`}
            />
            <CodeBlock
              lang="Javascript"
              filename="index.jsx"
              code={`const HackerTextEffectPreview = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const textRef = useRef(null);

    let interval = null;

    useEffect(() => {
        if (textRef.current) {
        textRef.current.onmouseover = (event) => {
            let iteration = 0;

            clearInterval(interval);

            interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.text[index];
                }

                return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= event.target.dataset.text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
            }, 30);
        };
        }
    }, []);
    
    return (
        <p ref={textRef} className="h1" data-text="HEXTA UI">
            HOVER ME
        </p>
    );
};`}
            />
          </div>
          <div>
            <small>
              This component was inspired by{" "}
              <Link className="blue-link" href="https://codepen.io/Hyperplexed">
                Hyperplexed
              </Link>
            </small>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default hackerTextEffect;
