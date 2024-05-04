import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";

export const SpinnerLoaderPreview = () => {
  return (
    <div className="flex items-center justify-center gap-5 m-6">
      {/* first */}
      <div className="w-12 h-12 border-t-2 rounded-full border-zinc animate-spin"></div>

      {/* second */}
      <div className="border-t-2 rounded-full w-9 h-9 border-zinc animate-spin"></div>

      {/* third */}
      <div className="w-6 h-6 border-t-2 rounded-full border-zinc animate-spin"></div>

      {/* forth */}
      <div className="w-3 h-3 border-t-2 rounded-full border-zinc animate-spin"></div>
    </div>
  );
};

export const SpinnerLoaderV2Preview = () => {
  return (
    <div className="flex items-center justify-center gap-5 m-6">
      {/* First */}
      <div>
        <svg
          aria-hidden="true"
          class="w-12 h-12 text-gray-200 animate-spin dark:text-zinc-900 fill-zinc-100"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>

      {/* Second */}
      <div>
        <svg
          aria-hidden="true"
          class="w-9 h-9 text-gray-200 animate-spin dark:text-zinc-900 fill-zinc-100"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>

      {/* Third */}
      <div>
        <svg
          aria-hidden="true"
          class="w-6 h-6 text-gray-200 animate-spin dark:text-zinc-900 fill-zinc-100"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>

      {/* Forth */}
      <div>
        <svg
          aria-hidden="true"
          class="w-3 h-3 text-gray-200 animate-spin dark:text-zinc-900 fill-zinc-100"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    </div>
  );
};

export const CircleBouncingLoaderPreview = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-zinc-100 animate-bounce"></div>
        <div
          className="w-3 h-3 delay-100 rounded-full bg-zinc-100 animate-bounce "
          style={{
            animationDelay: "0.2s",
          }}
        ></div>
        <div
          className="w-3 h-3 delay-200 rounded-full bg-zinc-100 animate-bounce"
          style={{
            animationDelay: "0.3s",
          }}
        ></div>
      </div>
    </div>
  );
};

export const SquareBouncingLoaderPreview = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-zinc-100 animate-bounce"></div>
        <div
          className="w-3 h-3 bg-zinc-100 animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-3 h-3 bg-zinc-100 animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
};

export const PulsingLoaderPreview = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-6 h-6 rounded-full bg-zinc-100 animate-pulse"></div>
    </div>
  );
};

export const PingLoaderPreview = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-6 h-6 rounded-full bg-zinc-100 animate-ping"></div>
    </div>
  );
};

export const SquareWaveLoaderPreview = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-4">
        <div className="w-3 h-3 bg-zinc-100 animate-ping"></div>
        <div
          className="w-3 h-3 bg-zinc-100 animate-ping"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-3 h-3 bg-zinc-100 animate-ping"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );
};

export const CircleWaveLoaderPreview = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-4">
        <div className="w-3 h-3 rounded-full bg-zinc-100 animate-ping"></div>
        <div
          className="w-3 h-3 rounded-full bg-zinc-100 animate-ping"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-3 h-3 rounded-full bg-zinc-100 animate-ping"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );
};

export const RotatingSquareLoaderPreview = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-6 h-6 bg-zinc-100 animate-spin"></div>
    </div>
  );
};

export const ColorSpinnerLoaderPreview = () => {
  return (
    <div className="flex items-center justify-center gap-5 m-6">
      {/* red */}
      <div className="w-6 h-6 border-t-2 border-red-500 rounded-full animate-spin"></div>

      {/* green */}
      <div className="w-6 h-6 border-t-2 border-green-500 rounded-full animate-spin"></div>

      {/* blue */}
      <div className="w-6 h-6 border-t-2 border-blue-500 rounded-full animate-spin"></div>

      {/* purple */}
      <div className="w-6 h-6 border-t-2 border-purple-500 rounded-full animate-spin"></div>

      {/* yellow */}
      <div className="w-6 h-6 border-t-2 border-yellow-500 rounded-full animate-spin"></div>

      {/* white */}
      <div className="w-6 h-6 border-t-2 rounded-full border-zinc-100 animate-spin"></div>

      {/* pink */}
      <div className="w-6 h-6 border-t-2 border-pink-500 rounded-full animate-spin"></div>
    </div>
  );
};

export const SpinningDotsLoader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-2 animate-spin">
        <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
        <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
        <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
      </div>
    </div>
  );
};

const loaders = () => {
  return (
    <>
      <NextSeo
        title="Loaders - HextaUI ✨"
        description="Collection of Loaders components with different variants."
        canonical="https://ui.hextastudio.in/docs/components/layout/loaders"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/loaders",
          title: "Loaders - HextaUI ✨",
          description:
            "Collection of Loaders components with different variants.",
          images: [
            {
              url: "https://i.imgur.com/TQAInIK.png",
              width: 1920,
              height: 1080,
              alt: "Loaders - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Loaders - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Loaders</h1>
            <p className="text-sm opacity-80">
              Collection of Loaders components with different variants.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Spinner Loader</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <SpinnerLoaderPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* first */}
<div className="w-12 h-12 border-t-2 rounded-full border-zinc animate-spin"></div>

{/* second */}
<div className="border-t-2 rounded-full w-9 h-9 border-zinc animate-spin"></div>

{/* third */}
<div className="w-6 h-6 border-t-2 rounded-full border-zinc animate-spin"></div>

{/* forth */}
<div className="w-3 h-3 border-t-2 rounded-full border-zinc animate-spin"></div>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Spinner Loader</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <SpinnerLoaderV2Preview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* First */}
<div>
  <svg
    aria-hidden="true"
    class="w-12 h-12 text-gray-200 animate-spin dark:text-zinc-900 fill-zinc-100"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentFill"
    />
  </svg>
</div>

{/* Second */}
<div>
  <svg
    aria-hidden="true"
    class="w-9 h-9 text-gray-200 animate-spin dark:text-zinc-900 fill-zinc-100"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentFill"
    />
  </svg>
</div>

{/* Third */}
<div>
  <svg
    aria-hidden="true"
    class="w-6 h-6 text-gray-200 animate-spin dark:text-zinc-900 fill-zinc-100"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentFill"
    />
  </svg>
</div>

{/* Forth */}
<div>
  <svg
    aria-hidden="true"
    class="w-3 h-3 text-gray-200 animate-spin dark:text-zinc-900 fill-zinc-100"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentFill"
    />
  </svg>
</div>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Circle Bouncing Loader</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[6rem]">
                  <CircleBouncingLoaderPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<div className="flex items-center justify-center">
<div className="flex space-x-2">
  <div className="w-3 h-3 rounded-full bg-zinc-100 animate-bounce"></div>
  <div
    className="w-3 h-3 delay-100 rounded-full bg-zinc-100 animate-bounce "
    style={{
      animationDelay: "0.2s",
    }}
  ></div>
  <div
    className="w-3 h-3 delay-200 rounded-full bg-zinc-100 animate-bounce"
    style={{
      animationDelay: "0.3s",
    }}
  ></div>
</div>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Square Bouncing Loader</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[6rem]">
                  <SquareBouncingLoaderPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<div className="flex items-center justify-center">
<div className="flex space-x-2">
  <div className="w-3 h-3 bg-zinc-100 animate-bounce"></div>
  <div
    className="w-3 h-3 bg-zinc-100 animate-bounce"
    style={{ animationDelay: "0.2s" }}
  ></div>
  <div
    className="w-3 h-3 bg-zinc-100 animate-bounce"
    style={{ animationDelay: "0.4s" }}
  ></div>
</div>
</div>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Pulsing Loader</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[6rem]">
                  <PulsingLoaderPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<div className="flex items-center justify-center h-screen">
  <div className="w-6 h-6 rounded-full bg-zinc-100 animate-pulse"></div>
</div>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Ping Loader</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[6rem]">
                  <PingLoaderPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<div className="flex items-center justify-center h-screen">
  <div className="w-6 h-6 rounded-full bg-zinc-100 animate-ping"></div>
</div>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Circle Wave Loader</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[6rem]">
                  <CircleWaveLoaderPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<div className="flex items-center justify-center">
<div className="flex space-x-4">
  <div className="w-3 h-3 rounded-full bg-zinc-100 animate-ping"></div>
  <div
    className="w-3 h-3 rounded-full bg-zinc-100 animate-ping"
    style={{ animationDelay: "0.1s" }}
  ></div>
  <div
    className="w-3 h-3 rounded-full bg-zinc-100 animate-ping"
    style={{ animationDelay: "0.2s" }}
  ></div>
</div>
</div>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Square Wave Loader</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[6rem]">
                  <SquareWaveLoaderPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<div className="flex items-center justify-center h-screen">
<div className="flex space-x-4">
  <div className="w-3 h-3 bg-zinc-100 animate-ping"></div>
  <div
    className="w-3 h-3 bg-zinc-100 animate-ping"
    style={{ animationDelay: "0.1s" }}
  ></div>
  <div
    className="w-3 h-3 bg-zinc-100 animate-ping"
    style={{ animationDelay: "0.2s" }}
  ></div>
</div>
</div>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Rotating Square Loader</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[6rem]">
                  <RotatingSquareLoaderPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<div className="flex items-center justify-center">
  <div className="w-6 h-6 bg-zinc-100 animate-spin"></div>
</div>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Spinning dots Loader</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[6rem]">
                  <SpinningDotsLoader />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<div className="flex items-center justify-center">
  <div className="flex space-x-2 animate-spin">
    <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
    <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
    <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
  </div>
</div>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Color Spinner Loader</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[6rem]">
                  <ColorSpinnerLoaderPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* red */}
<div className="w-6 h-6 border-t-2 border-red-500 rounded-full animate-spin"></div>

{/* green */}
<div className="w-6 h-6 border-t-2 border-green-500 rounded-full animate-spin"></div>

{/* blue */}
<div className="w-6 h-6 border-t-2 border-blue-500 rounded-full animate-spin"></div>

{/* purple */}
<div className="w-6 h-6 border-t-2 border-purple-500 rounded-full animate-spin"></div>

{/* yellow */}
<div className="w-6 h-6 border-t-2 border-yellow-500 rounded-full animate-spin"></div>

{/* white */}
<div className="w-6 h-6 border-t-2 rounded-full border-zinc-100 animate-spin"></div>

{/* pink */}
<div className="w-6 h-6 border-t-2 border-pink-500 rounded-full animate-spin"></div>`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default loaders;
