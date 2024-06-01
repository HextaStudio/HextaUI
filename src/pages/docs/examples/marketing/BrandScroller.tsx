import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { BsGoogle, BsMicrosoft } from "react-icons/bs";
import { SiRuby, SiTypescript } from "react-icons/si";

const BrandScroller = () => {
  return (
    <>
      <div className="flex space-x-16 [mask-image:linear-gradient(to_right,rgba(0,0,0,0),_rgba(0,0,0,1)_20%,_rgba(0,0,0,1)_80%,_rgba(0,0,0,0))] max-w-[90%]">
        <div className="flex space-x-16 animate-brandScroller opacity-80">
          <BsGoogle size={30} className="aspect-square max-w-none" />
          <BsMicrosoft size={30} className="aspect-square max-w-none" />
          <SiTypescript size={30} className="aspect-square max-w-none" />
          <SiRuby size={30} className="aspect-square max-w-none" />
          <BsGoogle size={30} className="aspect-square max-w-none" />
          <BsMicrosoft size={30} className="aspect-square max-w-none" />
          <SiTypescript size={30} className="aspect-square max-w-none" />
          <SiRuby size={30} className="aspect-square max-w-none" />
        </div>
        <div
          className="flex space-x-16 animate-brandScroller opacity-80"
          aria-hidden="true"
        >
          <BsGoogle size={30} className="aspect-square max-w-none" />
          <BsMicrosoft size={30} className="aspect-square max-w-none" />
          <SiTypescript size={30} className="aspect-square max-w-none" />
          <SiRuby size={30} className="aspect-square max-w-none" />
          <BsGoogle size={30} className="aspect-square max-w-none" />
          <BsMicrosoft size={30} className="aspect-square max-w-none" />
          <SiTypescript size={30} className="aspect-square max-w-none" />
          <SiRuby size={30} className="aspect-square max-w-none" />
        </div>
      </div>
    </>
  );
};

const BrandScrollerReverse = () => {
  return (
    <>
      <div className="flex space-x-16 [mask-image:linear-gradient(to_right,rgba(0,0,0,0),_rgba(0,0,0,1)_20%,_rgba(0,0,0,1)_80%,_rgba(0,0,0,0))] max-w-[90%]">
        <div className="flex space-x-16 animate-brandScroller opacity-80 [animation-direction:reverse]">
          <BsGoogle size={30} className="aspect-square max-w-none" />
          <BsMicrosoft size={30} className="aspect-square max-w-none" />
          <SiTypescript size={30} className="aspect-square max-w-none" />
          <SiRuby size={30} className="aspect-square max-w-none" />
          <BsGoogle size={30} className="aspect-square max-w-none" />
          <BsMicrosoft size={30} className="aspect-square max-w-none" />
          <SiTypescript size={30} className="aspect-square max-w-none" />
          <SiRuby size={30} className="aspect-square max-w-none" />
        </div>
        <div
          className="flex space-x-16 animate-brandScroller opacity-80 [animation-direction:reverse]"
          aria-hidden="true"
        >
          <BsGoogle size={30} className="aspect-square max-w-none" />
          <BsMicrosoft size={30} className="aspect-square max-w-none" />
          <SiTypescript size={30} className="aspect-square max-w-none" />
          <SiRuby size={30} className="aspect-square max-w-none" />
          <BsGoogle size={30} className="aspect-square max-w-none" />
          <BsMicrosoft size={30} className="aspect-square max-w-none" />
          <SiTypescript size={30} className="aspect-square max-w-none" />
          <SiRuby size={30} className="aspect-square max-w-none" />
        </div>
      </div>
    </>
  );
};

const TwoBrandScroller = () => {
  return (
    <>
      <div className="[mask-image:linear-gradient(to_right,rgba(0,0,0,0),_rgba(0,0,0,1)_20%,_rgba(0,0,0,1)_80%,_rgba(0,0,0,0))] max-w-[90%] flex flex-col space-y-16">
        <div className="flex space-x-16 ">
          <div className="flex space-x-16 animate-brandScroller opacity-80">
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
          </div>
          <div
            className="flex space-x-16 animate-brandScroller opacity-80"
            aria-hidden="true"
          >
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
          </div>
        </div>
        <div className="flex space-x-16 ">
          <div className="flex space-x-16 animate-brandScroller opacity-80 [animation-direction:reverse]">
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
          </div>
          <div
            className="flex space-x-16 animate-brandScroller opacity-80 [animation-direction:reverse]"
            aria-hidden="true"
          >
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
          </div>
        </div>
      </div>
    </>
  );
};

const VerticalBrandScroller = () => {
  return (
    <>
      <div className="flex  space-x-16 [mask-image:linear-gradient(to_top,rgba(0,0,0,0),_rgba(0,0,0,1)_20%,_rgba(0,0,0,1)_80%,_rgba(0,0,0,0))] max-h-[20rem] h-full">
        <div className="flex space-y-16 flex-col">
          <div className="flex space-y-16 animate-brandScrollerVertical flex-col opacity-80 ">
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
          </div>
          <div
            className="flex space-y-16 animate-brandScrollerVertical flex-col opacity-80"
            aria-hidden="true"
          >
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
          </div>
        </div>
        <div className="flex space-y-16 flex-col">
          <div className="flex space-y-16 animate-brandScrollerVertical flex-col opacity-80 [animation-direction:reverse]">
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
          </div>
          <div
            className="flex space-y-16 animate-brandScrollerVertical flex-col opacity-80 [animation-direction:reverse]"
            aria-hidden="true"
          >
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
          </div>
        </div>
      </div>
    </>
  );
};

const brandscroller = () => {
  return (
    <>
      <DocsLayout>
        <main>
          <DocsHeader
            title="Brand Scroller"
            description="A scroller for brand logos."
          />
          <DocsPreview title="Brand Scroller">
            <BrandScroller />
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
      keyframes: {
        // ...
        "brand-scroller": {
          from: {
            transform: "translateX(0%)",
          },
          to: {
            transform: "translateX(-55%)",
          },
        },
        "brand-scroller-vertical": {
          from: {
            transform: "translateY(0%)",
          },
          to: {
            transform: "translateY(-55%)",
          },
        },
      },
      animation: {
        // ...
        brandScroller: "brand-scroller 30s linear infinite",
        brandScrollerVertical: "brand-scroller-vertical 30s linear infinite",
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
            code={`import { BsGoogle, BsMicrosoft } from "react-icons/bs";
import { SiRuby, SiTypescript } from "react-icons/si";


const BrandScroller = () => {
    return (
      <>
        <div className="flex space-x-16 [mask-image:linear-gradient(to_right,rgba(0,0,0,0),_rgba(0,0,0,1)_20%,_rgba(0,0,0,1)_80%,_rgba(0,0,0,0))] max-w-[90%]">
          <div className="flex space-x-16 animate-brandScroller opacity-80">
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
          </div>
          <div
            className="flex space-x-16 animate-brandScroller opacity-80"
            aria-hidden="true"
          >
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
          </div>
        </div>
      </>
    );
  };
`}
          />
          <DocsPreview title="Reverse Brand Scroller">
            <BrandScrollerReverse />
          </DocsPreview>
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`import { BsGoogle, BsMicrosoft } from "react-icons/bs";
import { SiRuby, SiTypescript } from "react-icons/si";


const BrandScrollerReverse = () => {
    return (
      <>
        <div className="flex space-x-16 [mask-image:linear-gradient(to_right,rgba(0,0,0,0),_rgba(0,0,0,1)_20%,_rgba(0,0,0,1)_80%,_rgba(0,0,0,0))] max-w-[90%]">
          <div className="flex space-x-16 animate-brandScroller opacity-80 [animation-direction:reverse]">
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
          </div>
          <div
            className="flex space-x-16 animate-brandScroller opacity-80 [animation-direction:reverse]"
            aria-hidden="true"
          >
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
            <BsGoogle size={30} className="aspect-square max-w-none" />
            <BsMicrosoft size={30} className="aspect-square max-w-none" />
            <SiTypescript size={30} className="aspect-square max-w-none" />
            <SiRuby size={30} className="aspect-square max-w-none" />
          </div>
        </div>
      </>
    );
  };
`}
          />
          <DocsPreview title="Two Brand Scrollers">
            <TwoBrandScroller />
          </DocsPreview>
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`import { BsGoogle, BsMicrosoft } from "react-icons/bs";
import { SiRuby, SiTypescript } from "react-icons/si";


const TwoBrandScroller = () => {
    return (
      <>
        <div className="[mask-image:linear-gradient(to_right,rgba(0,0,0,0),_rgba(0,0,0,1)_20%,_rgba(0,0,0,1)_80%,_rgba(0,0,0,0))] max-w-[90%] flex flex-col space-y-16">
          <div className="flex space-x-16 ">
            <div className="flex space-x-16 animate-brandScroller opacity-80">
              <BsGoogle size={30} className="aspect-square max-w-none" />
              <BsMicrosoft size={30} className="aspect-square max-w-none" />
              <SiTypescript size={30} className="aspect-square max-w-none" />
              <SiRuby size={30} className="aspect-square max-w-none" />
              <BsGoogle size={30} className="aspect-square max-w-none" />
              <BsMicrosoft size={30} className="aspect-square max-w-none" />
              <SiTypescript size={30} className="aspect-square max-w-none" />
              <SiRuby size={30} className="aspect-square max-w-none" />
            </div>
            <div
              className="flex space-x-16 animate-brandScroller opacity-80"
              aria-hidden="true"
            >
              <BsGoogle size={30} className="aspect-square max-w-none" />
              <BsMicrosoft size={30} className="aspect-square max-w-none" />
              <SiTypescript size={30} className="aspect-square max-w-none" />
              <SiRuby size={30} className="aspect-square max-w-none" />
              <BsGoogle size={30} className="aspect-square max-w-none" />
              <BsMicrosoft size={30} className="aspect-square max-w-none" />
              <SiTypescript size={30} className="aspect-square max-w-none" />
              <SiRuby size={30} className="aspect-square max-w-none" />
            </div>
          </div>
          <div className="flex space-x-16 ">
            <div className="flex space-x-16 animate-brandScroller opacity-80 [animation-direction:reverse]">
              <BsGoogle size={30} className="aspect-square max-w-none" />
              <BsMicrosoft size={30} className="aspect-square max-w-none" />
              <SiTypescript size={30} className="aspect-square max-w-none" />
              <SiRuby size={30} className="aspect-square max-w-none" />
              <BsGoogle size={30} className="aspect-square max-w-none" />
              <BsMicrosoft size={30} className="aspect-square max-w-none" />
              <SiTypescript size={30} className="aspect-square max-w-none" />
              <SiRuby size={30} className="aspect-square max-w-none" />
            </div>
            <div
              className="flex space-x-16 animate-brandScroller opacity-80 [animation-direction:reverse]"
              aria-hidden="true"
            >
              <BsGoogle size={30} className="aspect-square max-w-none" />
              <BsMicrosoft size={30} className="aspect-square max-w-none" />
              <SiTypescript size={30} className="aspect-square max-w-none" />
              <SiRuby size={30} className="aspect-square max-w-none" />
              <BsGoogle size={30} className="aspect-square max-w-none" />
              <BsMicrosoft size={30} className="aspect-square max-w-none" />
              <SiTypescript size={30} className="aspect-square max-w-none" />
              <SiRuby size={30} className="aspect-square max-w-none" />
            </div>
          </div>
        </div>
      </>
    );
  };
`}
          />
          <DocsPreview title="Vertical Brand Scroller">
            <VerticalBrandScroller />
          </DocsPreview>
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`import { BsGoogle, BsMicrosoft } from "react-icons/bs";
import { SiRuby, SiTypescript } from "react-icons/si";


const VerticalBrandScroller = () => {
    return (
      <>
        <div className="flex  space-x-16 [mask-image:linear-gradient(to_top,rgba(0,0,0,0),_rgba(0,0,0,1)_20%,_rgba(0,0,0,1)_80%,_rgba(0,0,0,0))] max-h-[20rem] h-full">
          <div className="flex space-y-16 flex-col">
            <div className="flex space-y-16 animate-brandScrollerVertical flex-col opacity-80 ">
              <BsGoogle size={30} className="aspect-square max-w-none" />
              <BsMicrosoft size={30} className="aspect-square max-w-none" />
              <SiTypescript size={30} className="aspect-square max-w-none" />
              <SiRuby size={30} className="aspect-square max-w-none" />
              <BsGoogle size={30} className="aspect-square max-w-none" />
              <BsMicrosoft size={30} className="aspect-square max-w-none" />
              <SiTypescript size={30} className="aspect-square max-w-none" />
              <SiRuby size={30} className="aspect-square max-w-none" />
            </div>
            <div
              className="flex space-y-16 animate-brandScrollerVertical flex-col opacity-80"
              aria-hidden="true"
            >
              <BsGoogle size={30} className="aspect-square max-w-none" />
              <BsMicrosoft size={30} className="aspect-square max-w-none" />
              <SiTypescript size={30} className="aspect-square max-w-none" />
              <SiRuby size={30} className="aspect-square max-w-none" />
              <BsGoogle size={30} className="aspect-square max-w-none" />
              <BsMicrosoft size={30} className="aspect-square max-w-none" />
              <SiTypescript size={30} className="aspect-square max-w-none" />
              <SiRuby size={30} className="aspect-square max-w-none" />
            </div>
          </div>
          <div className="flex space-y-16 flex-col">
            <div className="flex space-y-16 animate-brandScrollerVertical flex-col opacity-80 [animation-direction:reverse]">
              <BsGoogle size={30} className="aspect-square max-w-none" />
              <BsMicrosoft size={30} className="aspect-square max-w-none" />
              <SiTypescript size={30} className="aspect-square max-w-none" />
              <SiRuby size={30} className="aspect-square max-w-none" />
              <BsGoogle size={30} className="aspect-square max-w-none" />
              <BsMicrosoft size={30} className="aspect-square max-w-none" />
              <SiTypescript size={30} className="aspect-square max-w-none" />
            </div>
            <div
              className="flex space-y-16 animate-brandScrollerVertical flex-col opacity-80 [animation-direction:reverse]"
              aria-hidden="true"
            >
              <BsGoogle size={30} className="aspect-square max-w-none" />
              <BsMicrosoft size={30} className="aspect-square max-w-none" />
              <SiTypescript size={30} className="aspect-square max-w-none" />
              <SiRuby size={30} className="aspect-square max-w-none" />
              <BsGoogle size={30} className="aspect-square max-w-none" />
              <BsMicrosoft size={30} className="aspect-square max-w-none" />
              <SiTypescript size={30} className="aspect-square max-w-none" />
            </div>
          </div>
        </div>
      </>
    );
  };
`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default brandscroller;
