import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";

import { useState } from "react";
import Toast from "@/components/hexta-ui/Toast";

const Toasts = () => {
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(!showToast);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <>
      {" "}
      <NextSeo
        title="Toasts - HextaUI ✨"
        description="Some awesome toasts component with different variants."
        canonical="https://ui.hextastudio.in/docs/components/layout/toasts"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/toasts",
          title: "Toasts - HextaUI ✨",
          description: "Some awesome toasts component with different variants.",
          images: [
            {
              url: "https://i.imgur.com/5P0bFAB.png",
              width: 1920,
              height: 1080,
              alt: "Toasts - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Toasts - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Toasts</h1>
            <p className="text-sm opacity-80">
              Some awesome toasts component with different variants.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div className="installation">
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center  justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <button
                    className="px-[20px] py-[8px] text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s] border-zinc-800 border"
                    onClick={toggleToast}
                  >
                    Show Toast
                  </button>
                  <Toast
                    text="Successfully created toast"
                    description="Copy and paste code for this Toast"
                    showToast={showToast}
                    onUndo={toggleToast}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="installation">
            <h2 className="text-3xl font-bold">Installation</h2>
            <CodeBlock
              lang="bash"
              filename="bash"
              code={`npm install @hextastudio/ui
# or
bun install @hextastudio/ui
# or
yarn add @hextastudio/ui
# or
pnpm add @hextastudio/ui`}
            />

            <p>After installation let's add the Button component.</p>
            <CodeBlock lang="bash" filename="bash" code={`npx hexta-ui add`} />
            <CodeBlock
              lang="bash"
              filename="bash"
              code={`? Which framework are you using? (Use arrow keys)
> Next.js 
  React`}
            />
            <CodeBlock
              lang="bash"
              filename="bash"
              code={`? Which framework are you using? Next.js
? Which component would you like to instal?
  Avatar
  Button
  Loader
  Select
> Toast
  Toggle
  Tooltip`}
            />
            <CodeBlock
              lang="bash"
              filename="bash"
              code={`? Which framework are you using? Next.js         
? Which component would you like to instal? Toast
✔ Toast component was added successfully — Guide to use Toast, https://ui.hextastudio.in/docs/components/layout/toast`}
            />
            <p>Importing toast in your file.</p>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`import Toast from "@/components/hexta-ui/Toast";`}
            />
          </div>
          <div className="installation">
            <h2 className="text-3xl font-bold">Example Usage</h2>

            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`import { useState } from "react";
import Toast from "@/components/hexta-ui/Toast";

export const Home = () => {
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(!showToast);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };
  
  return (
    <>
      <button className="px-[20px] py-[8px] text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s] border-zinc-800 border"
        onClick={toggleToast}>
        Show Toast
      </button>

      <Toast
        text="Successfully created toast"
        description="Copy and paste code for this Toast"
        showToast={showToast}
        onUndo={toggleToast}
      />
    </>
  )
}
              `}
            />
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default Toasts;
