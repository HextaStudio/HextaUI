import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";

export const ButtonsPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Primary
        </button>

        {/* secondary */}
        <button className="px-[20px] py-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Secondary
        </button>

        {/* info */}
        <button className="px-[20px] py-[8px] bg-blue-400  border border-blue-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Info
        </button>

        {/* Success */}
        <button className="px-[20px] py-[8px] bg-green-400   border border-green-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Success
        </button>

        {/* Fail */}
        <button className="px-[20px] py-[8px] bg-red-700  border border-red-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Failure
        </button>

        {/* Ghost */}
        <button className="px-[20px] py-[8px]  text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-900 transition-all duration-[0.4s]">
          Ghost
        </button>

        {/* Link */}
        <button className="px-[20px] py-[8px]  text-white rounded-lg flex items-center font-[600] text-[14px] hover:underline underline-offset-1 transition-all duration-[0.4s]">
          Link
        </button>
      </div>
    </>
  );
};

export const DisabledButtonsPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <button
          disabled
          className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 disabled:contrast-[60%] cursor-not-allowed"
        >
          Primary
        </button>

        {/* secondary */}
        <button
          disabled
          className="px-[20px] py-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 disabled:contrast-[60%] cursor-not-allowed"
        >
          Secondary
        </button>

        {/* info */}
        <button
          disabled
          className="px-[20px] py-[8px] bg-blue-400  border border-blue-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 disabled:contrast-[60%] cursor-not-allowed"
        >
          Info
        </button>

        {/* Success */}
        <button
          disabled
          className="px-[20px] py-[8px] bg-green-400   border border-green-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 disabled:contrast-[60%] cursor-not-allowed"
        >
          Success
        </button>

        {/* Fail */}
        <button
          disabled
          className="px-[20px] py-[8px] bg-red-700  border border-red-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 disabled:contrast-[60%] cursor-not-allowed"
        >
          Failure
        </button>
      </div>
    </>
  );
};

export const OutlinedButtonsPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <button className="px-[20px] py-[8px] border-2 border-zinc-900 text-zinc-100 rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Primary
        </button>

        {/* info */}
        <button className="px-[20px] py-[8px] border-2 border-blue-900 text-blue-100 rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Info
        </button>

        {/* Success */}
        <button className="px-[20px] py-[8px] border-2 border-green-900 text-green-100 rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Success
        </button>

        {/* Fail */}
        <button className="px-[20px] py-[8px] border-2 border-red-900 text-red-100 rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Failure
        </button>
      </div>
    </>
  );
};

export const OutlinedWithHoverButtonsPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <button className="px-[20px] py-[8px] border-2 border-zinc-900 text-zinc-100 hover:bg-white hover:text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Primary
        </button>

        {/* info */}
        <button className="px-[20px] py-[8px] border-2 border-blue-900 text-blue-100 hover:bg-blue-500 hover:text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Info
        </button>

        {/* Success */}
        <button className="px-[20px] py-[8px] border-2 border-green-900 text-green-100 hover:bg-green-400 hover:text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Success
        </button>

        {/* Fail */}
        <button className="px-[20px] py-[8px] border-2 border-red-900 text-red-100 hover:bg-red-700 hover:text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Failure
        </button>
      </div>
    </>
  );
};

const buttons = () => {
  return (
    <>
      <NextSeo
        title="Buttons - HextaUI ✨"
        description="Collection of multiple buttons with multiple variants."
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/action/buttons",
          title: "Buttons - HextaUI ✨",
          description: "Collection of multiple buttons with multiple variants.",
          images: [
            {
              url: "https://i.imgur.com/FFjJIbo.png",
              width: 1920,
              height: 1080,
              alt: "Buttons - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Buttons - HextaUI ✨",
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
            <h1 className="h1">Buttons</h1>
            <p className="text-sm opacity-80">
              Collection of multiple buttons with multiple variants.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Buttons</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <ButtonsPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Primary
</button>

{/* secondary */}
<button className="px-[20px] py-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Secondary
</button>

{/* info */}
<button className="px-[20px] py-[8px] bg-blue-400  border border-blue-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Info
</button>

{/* Success */}
<button className="px-[20px] py-[8px] bg-green-400   border border-green-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Success
</button>

{/* Fail */}
<button className="px-[20px] py-[8px] bg-red-700  border border-red-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Failure
</button>

{/* Ghost */}
<button className="px-[20px] py-[8px]  text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-900 transition-all duration-[0.4s]">
  Ghost
</button>

{/* Link */}
<button className="px-[20px] py-[8px]  text-white rounded-lg flex items-center font-[600] text-[14px] hover:underline underline-offset-1 transition-all duration-[0.4s]">
  Link
</button>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Disabled Buttons</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <DisabledButtonsPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<button
  disabled
  className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 disabled:contrast-[60%] cursor-not-allowed"
>
  Primary
</button>

{/* secondary */}
<button
  disabled
  className="px-[20px] py-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 disabled:contrast-[60%] cursor-not-allowed"
>
  Secondary
</button>

{/* info */}
<button
  disabled
  className="px-[20px] py-[8px] bg-blue-400  border border-blue-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 disabled:contrast-[60%] cursor-not-allowed"
>
  Info
</button>

{/* Success */}
<button
  disabled
  className="px-[20px] py-[8px] bg-green-400   border border-green-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 disabled:contrast-[60%] cursor-not-allowed"
>
  Success
</button>

{/* Fail */}
<button
  disabled
  className="px-[20px] py-[8px] bg-red-700  border border-red-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 disabled:contrast-[60%] cursor-not-allowed"
>
  Failure
</button>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Outlined Buttons</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <OutlinedButtonsPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<button className="px-[20px] py-[8px] border-2 border-zinc-900 text-zinc-100 rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Primary
</button>

{/* info */}
<button className="px-[20px] py-[8px] border-2 border-blue-900 text-blue-100 rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Info
</button>

{/* Success */}
<button className="px-[20px] py-[8px] border-2 border-green-900 text-green-100 rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Success
</button>

{/* Fail */}
<button className="px-[20px] py-[8px] border-2 border-red-900 text-red-100 rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Failure
</button>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Outlined With Background Buttons</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <OutlinedWithHoverButtonsPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<button className="px-[20px] py-[8px] border-2 border-zinc-900 text-zinc-100 hover:bg-white hover:text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Primary
</button>

{/* info */}
<button className="px-[20px] py-[8px] border-2 border-blue-900 text-blue-100 hover:bg-blue-500 hover:text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Info
</button>

{/* Success */}
<button className="px-[20px] py-[8px] border-2 border-green-900 text-green-100 hover:bg-green-400 hover:text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Success
</button>

{/* Fail */}
<button className="px-[20px] py-[8px] border-2 border-red-900 text-red-100 hover:bg-red-700 hover:text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Failure
</button>`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default buttons;
