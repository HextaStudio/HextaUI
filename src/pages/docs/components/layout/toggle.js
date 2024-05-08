import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";

import { useState } from "react";

const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`relative inline-block w-[60px] h-[32px] rounded-full cursor-pointer transition-colors ease-in-out duration-100 ${
          isEnabled ? "bg-green-500" : "bg-red-500"
        }`}
        onClick={handleToggle}
      >
        <span
          className={`absolute left-[3px] top-[50%] translate-y-[-50%] bg-white w-[25px] h-[25px] rounded-full transition ease-in-out duration-100 ${
            isEnabled ? "translate-x-[29px]" : "translate-x-0"
          }`}
        ></span>
      </div>
      <p className="text-sm opacity-80">
        Toggle is {isEnabled ? "enabled" : "disabled"}
      </p>
    </div>
  );
};

const CheckboxToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`relative inline-flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer transition-colors ease-in-out duration-100 ${
          isEnabled ? "bg-green-500" : "bg-gray-400"
        }`}
        onClick={handleToggle}
      >
        <span
          className={`w-[20px] h-[20px] rounded-md border-2 border-white transition ease-in-out duration-100 ${
            isEnabled ? "bg-white" : "bg-transparent"
          }`}
        >
          {isEnabled && (
            <svg
              className="w-4 h-4 text-green-500 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </span>
        <span className="text-sm font-medium text-white pointer-events-none">
          {isEnabled ? "Enabled" : "Disabled"}
        </span>
      </div>
      <p className="text-sm opacity-80">
        Toggle is {isEnabled ? "enabled" : "disabled"}
      </p>
    </div>
  );
};

const toggle = () => {
  return (
    <>
      <NextSeo
        title="Toggle - HextaUI ✨"
        description="Toggle switch component with enabled and disabled state."
        canonical="https://ui.hextastudio.in/docs/components/layout/toggle"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/toggle",
          title: "Toggle - HextaUI ✨",
          description:
            "Toggle switch component with enabled and disabled state.",
          images: [
            {
              url: "https://i.imgur.com/L9bkOYd.png",
              width: 1920,
              height: 1080,
              alt: "Toggle - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Toggle - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <div className="header">
            <h1 className="h1">Toggle</h1>
            <p className="text-sm opacity-80">
              Toggle switch component with enabled and disabled state.
            </p>
          </div>{" "}
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[35rem] text-center px-[5rem]">
                  <ToggleSwitch />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { useState } from "react";

const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={\`relative inline-block w-[60px] h-[32px] rounded-full cursor-pointer transition-colors ease-in-out duration-100 \${
          isEnabled ? "bg-green-500" : "bg-red-500"
        }\`}
        onClick={handleToggle}
      >
        <span
          className={\`absolute left-[3px] top-[50%] translate-y-[-50%] bg-white w-[25px] h-[25px] rounded-full transition ease-in-out duration-100 \${
            isEnabled ? "translate-x-[29px]" : "translate-x-0"
          }\`}
        ></span>
      </div>
      <p className="text-sm opacity-80">
        Toggle is {isEnabled ? "enabled" : "disabled"}
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
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[35rem] text-center px-[5rem]">
                  <CheckboxToggleSwitch />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { useState } from "react";

const CheckboxToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div className="flex items-center gap-4">
      <div
        className={\`relative inline-flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer transition-colors ease-in-out duration-100 \${
          isEnabled ? "bg-green-500" : "bg-gray-400"
        }\`}
        onClick={handleToggle}
      >
        <span
          className={\`w-[20px] h-[20px] rounded-md border-2 border-white transition ease-in-out duration-100 \${
            isEnabled ? "bg-white" : "bg-transparent"
          }\`}
        >
          {isEnabled && (
            <svg
              className="w-4 h-4 text-green-500 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </span>
        <span className="text-sm font-medium text-white">
          {isEnabled ? "Enabled" : "Disabled"}
        </span>
      </div>
      <p className="text-sm opacity-80">
        Toggle is {isEnabled ? "enabled" : "disabled"}
      </p>
    </div>
  );
};
`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default toggle;
