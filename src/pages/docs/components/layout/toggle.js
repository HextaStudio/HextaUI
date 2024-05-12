import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";

import { useState } from "react";

import { Toggle } from "@/components/hexta-ui/Toggle";

const toggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = (value) => {
    setIsEnabled(value);
  };

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
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem] text-center flex-col">
                  <Toggle enabled={isEnabled} onChange={handleToggle} />
                  <p className="mt-2 text-sm ">
                    {isEnabled ? "Enabled" : "Disabled"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="installation">
            <div>
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

              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npx hexta-ui add`}
              />
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
? Which component would you like to install?
  AlertDialog
  Avatar
  Button
  Loader
  Select
  Toast
> Toggle
  Tooltip`}
              />
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`? Which framework are you using? Next.js         
? Which component would you like to install? Toggle
✔ Toggle component was added successfully — Guide to use Toggle, https://ui.hextastudio.in/docs/components/layout/toggle`}
              />
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { Toggle } from "@/components/hexta-ui/Toggle";`}
              />
            </div>
          </div>
          <div>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem] text-center">
              <div>
                <Toggle enabled={isEnabled} onChange={handleToggle} />
                <p className="mt-2 text-sm ">
                  {isEnabled ? "Enabled" : "Disabled"}
                </p>
              </div>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`import { useState } from "react";
import { Toggle } from "@/components/hexta-ui/Toggle";


export const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = (value) => {
    setIsEnabled(value);
  };
  
  return (
    <>
      <div>
        <Toggle enabled={isEnabled} onChange={handleToggle} />
        
        <p className="mt-2 text-sm ">
          {isEnabled ? "Enabled" : "Disabled"}
        </p>
      </div>
    </>
  );
}`}
            />
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default toggle;
