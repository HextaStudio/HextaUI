import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";
import { useState } from "react";

const TooltipComponent = ({ text, direction = "top", children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const directionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const tooltipClasses = `absolute z-10 px-3 py-2 text-xs font-medium text-black bg-white rounded-md whitespace-nowrap ${
    directionClasses[direction]
  } border-zinc-800 border transform transition-all duration-[0.2s] ${
    isVisible ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div className="relative inline-block ">
      <div onMouseEnter={toggleVisibility} onMouseLeave={toggleVisibility}>
        {children}
      </div>
      <div className={tooltipClasses}>{text}</div>
    </div>
  );
};

const tooltip = () => {
  return (
    <>
      <NextSeo
        title="Tooltip - HextaUI ✨"
        description="An awesome component to display tooltip for information."
        canonical="https://ui.hextastudio.in/docs/components/layout/tooltip"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/tooltip",
          title: "Tooltip - HextaUI ✨",
          description:
            "Collection of Tooltip components with different variants.",
          images: [
            {
              url: "https://i.imgur.com/TQAInIK.png",
              width: 1920,
              height: 1080,
              alt: "Tooltip - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Tooltip - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Tooltip</h1>
            <p className="text-sm opacity-80">
              An awesome component to display tooltip for information.{" "}
            </p>
          </div>{" "}
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Default Tooltip</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <TooltipComponent text="This is Top Tooltip" direction="top">
                    <button className="px-[20px] py-[8px] border-2 border-zinc-900 text-zinc-100 rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
                      Hover me
                    </button>
                  </TooltipComponent>
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { useState } from "react";

const Tooltip = ({ text, direction = "top", children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const directionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const tooltipClasses = \`absolute z-10 px-3 py-2 text-xs font-medium text-black bg-white rounded-md whitespace-nowrap \${
    directionClasses[direction]
  } border-zinc-800 border transform transition-all duration-[0.2s] \${
    isVisible ? "opacity-100" : "opacity-0"
  }\`;

  return (
    <div className="relative inline-block ">
      <div onMouseEnter={toggleVisibility} onMouseLeave={toggleVisibility}>
        {children}
      </div>
      <div className={tooltipClasses}>{text}</div>
    </div>
  );
};`}
              />
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<Tooltip text="This s Tooltip information">  
    <button className="px-[20px] py-[8px] border-2 border-zinc-900 text-zinc-100 rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
        Hover me
    </button>
</Tooltip>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Right Tooltip</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <TooltipComponent
                    text="This is Right Tooltip"
                    direction="right"
                  >
                    <button className="px-[20px] py-[8px] border-2 border-zinc-900 text-zinc-100 rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
                      Hover me
                    </button>
                  </TooltipComponent>
                </div>
              </div>
            </div>

            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`<Tooltip text="This s Tooltip information" direction="right">  
    <button className="px-[20px] py-[8px] border-2 border-zinc-900 text-zinc-100 rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
        Hover me
    </button>
</Tooltip>`}
            />
          </div>{" "}
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Left Tooltip</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <TooltipComponent
                    text="This is Left Tooltip"
                    direction="left"
                  >
                    <button className="px-[20px] py-[8px] border-2 border-zinc-900 text-zinc-100 rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
                      Hover me
                    </button>
                  </TooltipComponent>
                </div>
              </div>
            </div>

            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`<Tooltip text="This s Tooltip information" direction="left">  
    <button className="px-[20px] py-[8px] border-2 border-zinc-900 text-zinc-100 rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
        Hover me
    </button>
</Tooltip>`}
            />
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Bottom Tooltip</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <TooltipComponent
                    text="This is Bottom Tooltip"
                    direction="bottom"
                  >
                    <button className="px-[20px] py-[8px] border-2 border-zinc-900 text-zinc-100 rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
                      Hover me
                    </button>
                  </TooltipComponent>
                </div>
              </div>
            </div>

            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`<Tooltip text="This s Tooltip information" direction="bottom">  
    <button className="px-[20px] py-[8px] border-2 border-zinc-900 text-zinc-100 rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
        Hover me
    </button>
</Tooltip>`}
            />
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default tooltip;
