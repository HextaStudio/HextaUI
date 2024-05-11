import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";
import Button from "@/components/hexta-ui/Button";

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
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[13rem]">
                  <Button>Hexta UI Button</Button>
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
? Which component would you like to instal?
  Avatar
> Button
  Loader
  Select
  Toast
  Toggle
  Tooltip`}
              />
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`? Which framework are you using? Next.js         
? Which component would you like to instal? Button
✔ Button component was added successfully — Guide to use Button, https://ui.hextastudio.in/docs/components/layout/button`}
              />
              <p>Importing button in your file.</p>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import Button from "@/components/hexta-ui/Button";`}
              />
            </div>
            <div className="installation">
              <h2 className="text-3xl font-bold">Example Usage</h2>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button>Primary Button</Button>
              </div>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import Button from "@/components/hexta-ui/Button";
                
<Button>Primary Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Secondary Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button variant="secondary">Secondary Button</Button>
              </div>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<Button variant="secondary">Secondary Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Info Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button variant="info">Info Button</Button>
              </div>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<Button variant="info">Info Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Success Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button variant="success">Success Button</Button>
              </div>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<Button variant="success">Success Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Fail Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button variant="fail">Fail Button</Button>
              </div>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<Button variant="fail">Fail Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Ghost Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button variant="ghost">Ghost Button</Button>
              </div>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<Button variant="ghost">Ghost Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Link Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button variant="link">Link Button</Button>
              </div>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<Button variant="link">Link Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Disabled Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button disabled>Disabled Button</Button>
              </div>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<Button disabled>Disabled Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Outline Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button outline>Outline Button</Button>
              </div>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<Button outline>Outline Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Animated Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button variant="animated" className="text-black bg-white">
                  Animated Button
                </Button>
              </div>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<Button variant="animated" className="text-black bg-white">Animated Button</Button>`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default buttons;
