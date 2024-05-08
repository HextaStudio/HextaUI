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
        <button className="px-[20px] py-[8px] bg-zinc-950  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
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
        <button className="px-[20px] py-[8px]  text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s]">
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
          className="px-[20px] py-[8px] bg-zinc-950  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 disabled:contrast-[60%] cursor-not-allowed"
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

export const IconButtonsPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3.22l-.61-.6a5.5 5.5 0 00-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 00-7.78-7.77l-.61.61zM12 9a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
          Icon Primary
        </button>

        {/* secondary */}
        <button className="px-[20px] py-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 7H7v6h6V7z" />
          </svg>
          Icon Secondary
        </button>
      </div>
    </>
  );
};

export const LoadingButtonsPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          <svg
            className="w-5 h-5 mr-2 animate-spin"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clipRule="evenodd"
            />
          </svg>
          Loading Primary
        </button>

        {/* secondary */}
        <button className="px-[20px] py-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          <svg
            className="w-5 h-5 mr-2 animate-spin"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clipRule="evenodd"
            />
          </svg>
          Loading Secondary
        </button>
      </div>
    </>
  );
};

export const GradientButtonsPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <button className="px-[20px] py-[8px] bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Gradient Primary
        </button>

        {/* secondary */}
        <button className="px-[20px] py-[8px] bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Gradient Secondary
        </button>
      </div>
    </>
  );
};

export const RoundedButtonsPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-full flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Rounded Primary
        </button>

        {/* secondary */}
        <button className="px-[20px] py-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-full flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Rounded Secondary
        </button>
      </div>
    </>
  );
};

export const ButtonWithIconPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Icon Primary
        </button>

        {/* secondary */}
        <button className="px-[20px] py-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Icon Secondary
        </button>
      </div>
    </>
  );
};

export const HoverEffectButtonsPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.3s] hover:scale-105 hover:bg-zinc-950 hover:text-white">
          Hover Scale
        </button>

        {/* secondary */}
        <button className="px-[20px] py-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.3s] hover:translate-y-[-5px] hover:shadow-lg">
          Hover Translate
        </button>

        {/* info */}
        <button className="px-[20px] py-[8px] bg-blue-400 border border-blue-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.3s] hover:rotate-3 hover:bg-blue-600 hover:text-white">
          Hover Rotate
        </button>
      </div>
    </>
  );
};

export const PulseButtonsPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.3s] animate-pulse hover:animate-none">
          Pulse Primary
        </button>

        {/* secondary */}
        <button className="px-[20px] py-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.3s] animate-pulse hover:animate-none">
          Pulse Secondary
        </button>
      </div>
    </>
  );
};

export const GlowingButtonsPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.3s] hover:shadow-glow-white">
          Glow White
        </button>

        {/* secondary */}
        <button className="px-[20px] py-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.3s] hover:shadow-glow-blue">
          Glow Blue
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
        canonical="https://ui.hextastudio.in/docs/components/layout/buttons"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/buttons",
          title: "Buttons - HextaUI ✨",
          description: "Collection of multiple buttons with multiple variants.",
          images: [
            {
              url: "https://i.imgur.com/eOlyvkH.png",
              width: 1920,
              height: 1080,
              alt: "Buttons - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Buttons - HextaUI ✨",
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
<button className="px-[20px] py-[8px] bg-zinc-950  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
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
<button className="px-[20px] py-[8px]  text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s]">
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
  className="px-[20px] py-[8px] bg-zinc-950  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 disabled:contrast-[60%] cursor-not-allowed"
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
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Icon Buttons</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <IconButtonsPreview />
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
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 3.22l-.61-.6a5.5 5.5 0 00-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 00-7.78-7.77l-.61.61zM12 9a1 1 0 11-2 0 1 1 0 012 0z" />
  </svg>
  Icon Primary
</button>

{/* secondary */}
<button className="px-[20px] py-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path d="M13 7H7v6h6V7z" />
  </svg>
  Icon Secondary
</button>
`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Loading Buttons</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <LoadingButtonsPreview />
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
  <svg
    className="w-5 h-5 mr-2 animate-spin"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
      clipRule="evenodd"
    />
  </svg>
  Loading Primary
</button>

{/* secondary */}
<button className="px-[20px] py-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  <svg
    className="w-5 h-5 mr-2 animate-spin"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
      clipRule="evenodd"
    />
  </svg>
  Loading Secondary
</button>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Gradient Buttons</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <GradientButtonsPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<button className="px-[20px] py-[8px] bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Gradient Primary
</button>

{/* secondary */}
<button className="px-[20px] py-[8px] bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Gradient Secondary
</button>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Rounded Buttons</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <RoundedButtonsPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-full flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Rounded Primary
</button>

{/* secondary */}
<button className="px-[20px] py-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-full flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  Rounded Secondary
</button>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Buttons with Icons</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <ButtonWithIconPreview />
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
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
  Icon Primary
</button>

{/* secondary */}
<button className="px-[20px] py-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
  Icon Secondary
</button>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Hover Effect Buttons</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <HoverEffectButtonsPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.3s] hover:scale-105 hover:bg-zinc-950 hover:text-white">
  Hover Scale
</button>

{/* secondary */}
<button className="px-[20px] py-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.3s] hover:translate-y-[-5px] hover:shadow-lg">
  Hover Translate
</button>

{/* info */}
<button className="px-[20px] py-[8px] bg-blue-400 border border-blue-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.3s] hover:rotate-3 hover:bg-blue-600 hover:text-white">
  Hover Rotate
</button>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Pulse Buttons</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <PulseButtonsPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.3s] animate-pulse hover:animate-none">
  Pulse Primary
</button>

{/* secondary */}
<button className="px-[20px] py-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.3s] animate-pulse hover:animate-none">
  Pulse Secondary
</button>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Glowing Buttons</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <GlowingButtonsPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Updating Tailwind CSS Config</h3>
              <CodeBlock
                lang="javascript"
                filename="tailwind.config.js"
                code={`module.exports = {
  // ...
  theme: {
    extend: {
      boxShadow: {
        'glow-white': '0 0 10px rgba(255, 255, 255, 0.5)',
        'glow-blue': '0 0 10px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  // ...
};`}
              />
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.3s] hover:shadow-glow-white">
  Glow White
</button>

{/* secondary */}
<button className="px-[20px] py-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.3s] hover:shadow-glow-blue">
  Glow Blue
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
