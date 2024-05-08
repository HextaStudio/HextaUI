import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const BasicToastPreview = () => {
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(!showToast);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };
  return (
    <>
      <button
        className="px-[20px] py-[8px]  text-white  rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s] border-zinc-800 border"
        onClick={toggleToast}
      >
        Show Toast
      </button>
      {showToast && (
        <AnimatePresence>
          <motion.div
            key="toast"
            initial={{ translateY: 100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: 100, opacity: 0 }}
            className={`flex items-center justify-between h-fit py-3 px-5 m-4  rounded-lg border-b-2 gap-3 border border-zinc-800 bg-[#070707] fixed bottom-0 right-0`}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col ">
                <p className="text-[15px] font-medium  items-center flex tracking-normal opacity-90">
                  Successfully created toast
                </p>
                <small className="text-[12px] opacity-80">
                  Copy and paste code for this Toast
                </small>
              </div>
              <div>
                <button
                  className="px-[8px] py-[2px]  text-white  rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s]  "
                  onClick={toggleToast}
                >
                  Undo
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

const Toasts = () => {
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
                <h3 className="h3">Basic Toast</h3>
                <div className="relative flex items-center  justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <BasicToastPreview />
                </div>
                <CodeBlock
                  lang="jsx"
                  filename="jsx"
                  code={`import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export const BasicToastPreview = () => {
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(!showToast);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };
  return (
    <>
      <button
        className="px-[20px] py-[8px]  text-white  rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s] border-zinc-800 border"
        onClick={toggleToast}
      >
        Show Toast
      </button>
      {showToast && (
        <AnimatePresence>
          <motion.div
            key="toast"
            initial={{ translateY: 100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: 100, opacity: 0 }}
            className={\`flex items-center justify-between h-fit py-3 px-5 m-4  rounded-lg border-b-2 gap-3 border border-zinc-800 bg-[#070707] fixed bottom-0 right-0\`}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col ">
                <p className="text-[15px] font-medium  items-center flex tracking-normal opacity-90">
                  Successfully created toast
                </p>
                <small className="text-[12px] opacity-80">
                  Copy and paste code for this Toast
                </small>
              </div>
              <div>
                <button
                  className="px-[8px] py-[2px]  text-white  rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s]  "
                  onClick={toggleToast}
                >
                  Undo
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

`}
                />
              </div>
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default Toasts;
