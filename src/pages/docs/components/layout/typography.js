import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";

const Headings = () => {
  return (
    <div className="space-y-[2rem]">
      <h1 className="text-4xl font-bold">Heading 1</h1>
      <h2 className="text-3xl font-bold">Heading 2</h2>
      <h3 className="text-2xl font-bold">Heading 3</h3>
      <h4 className="text-xl font-bold">Heading 4</h4>
      <h5 className="text-lg font-bold">Heading 5</h5>
      <h6 className="text-base font-bold">Heading 6</h6>
    </div>
  );
};

const Paragraphs = () => {
  return (
    <div className="space-y-[2rem]">
      <p className="text-sm leading-relaxed ">
        This is a small paragraph. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit
        amet, adipiscing nec, ultricies sed, dolor.
      </p>
      <p className="text-base leading-relaxed">
        This is a regular paragraph. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit
        amet, adipiscing nec, ultricies sed, dolor.
      </p>
      <p className="text-lg leading-relaxed">
        This is a large paragraph. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit
        amet, adipiscing nec, ultricies sed, dolor.
      </p>
    </div>
  );
};

const InlineTextElements = () => {
  return (
    <div className="space-y-[2rem]">
      <p>
        This is a <span className="font-bold">bold</span> text.
      </p>
      <p>
        This is an <span className="italic">italic</span> text.
      </p>
      <p>
        This is an <span className="underline">underlined</span> text.
      </p>
      <p>
        This is a <span className="line-through">strikethrough</span> text.
      </p>
      <p>
        This is a <span className="text-red-500">colored</span> text.
      </p>
    </div>
  );
};

const TextAlignment = () => {
  return (
    <div className="space-y-[2rem]">
      <p className="text-left">Left-aligned text</p>
      <p className="text-center">Center-aligned text</p>
      <p className="text-right">Right-aligned text</p>
      <p className="text-justify">
        Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
        nec, ultricies sed, dolor.
      </p>
    </div>
  );
};

const typography = () => {
  return (
    <>
      <NextSeo
        title="Typography - HextaUI ✨"
        description="  Used to showcase various typography styles in your application."
        canonical="https://ui.hextastudio.in/docs/components/layout/typography"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/typography",
          title: "Typography - HextaUI ✨",
          description:
            "  Used to showcase various typography styles in your application.",
          images: [
            {
              url: "https://i.imgur.com/b6Oiua5.png",
              width: 1920,
              height: 1080,
              alt: "Typography - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Typography - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <div className="header">
            <h1 className="h1">Typography</h1>
            <p className="text-sm opacity-80">
              Used to showcase various typography styles in your application.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Headings</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[35rem] text-center px-[5rem]">
                  <Headings />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`const Headings = () => {
  return (
    <div className="space-y-[2rem]">
      <h1 className="text-4xl font-bold">Heading 1</h1>
      <h2 className="text-3xl font-bold">Heading 2</h2>
      <h3 className="text-2xl font-bold">Heading 3</h3>
      <h4 className="text-xl font-bold">Heading 4</h4>
      <h5 className="text-lg font-bold">Heading 5</h5>
      <h6 className="text-base font-bold">Heading 6</h6>
    </div>
  );
};
`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Paragraphs</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[35rem] text-center px-[5rem]">
                  <Paragraphs />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`const Paragraphs = () => {
  return (
    <div className="space-y-[2rem]">
      <p className="text-sm leading-relaxed ">
        This is a small paragraph. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit
        amet, adipiscing nec, ultricies sed, dolor.
      </p>
      <p className="text-base leading-relaxed">
        This is a regular paragraph. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit
        amet, adipiscing nec, ultricies sed, dolor.
      </p>
      <p className="text-lg leading-relaxed">
        This is a large paragraph. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit
        amet, adipiscing nec, ultricies sed, dolor.
      </p>
    </div>
  );
};`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Headings</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[35rem] text-center px-[5rem]">
                  <InlineTextElements />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`const InlineTextElements = () => {
  return (
    <div className="space-y-[2rem]">
      <p>
        This is a <span className="font-bold">bold</span> text.
      </p>
      <p>
        This is an <span className="italic">italic</span> text.
      </p>
      <p>
        This is an <span className="underline">underlined</span> text.
      </p>
      <p>
        This is a <span className="line-through">strikethrough</span> text.
      </p>
      <p>
        This is a <span className="text-red-500">colored</span> text.
      </p>
    </div>
  );
};`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Headings</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[35rem] text-center px-[5rem]">
                  <TextAlignment />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`const TextAlignment = () => {
  return (
    <div className="space-y-[2rem]">
      <p className="text-left">Left-aligned text</p>
      <p className="text-center">Center-aligned text</p>
      <p className="text-right">Right-aligned text</p>
      <p className="text-justify">
        Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
        nec, ultricies sed, dolor.
      </p>
    </div>
  );
};`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default typography;
