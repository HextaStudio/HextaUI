import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";
import { Loader } from "../../../../../hexta-ui/cli/components/Loader";

import { NextSeo } from "next-seo";

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
                <h3 className="h3">preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[13rem]">
                  <Loader variant="circleLoader" />
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
? Which component would you like to instal?
  AlertDialog
  Avatar
  Button
> Loader
  Select
  Toast
  Toggle
  Tooltip`}
                />
                <CodeBlock
                  lang="bash"
                  filename="bash"
                  code={`? Which framework are you using? Next.js         
? Which component would you like to instal? Loader
✔ Loader component was added successfully — Guide to use Loader, https://ui.hextastudio.in/docs/components/layout/loader`}
                />
                <CodeBlock
                  lang="jsx"
                  filename="jsx"
                  code={`import { Loader } from "@/components/hexta-ui/Loader";`}
                />
              </div>
            </div>
          </div>{" "}
          <div>
            <h3 className="h3">Basic loader</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem] text-center">
              <Loader variant="circleLoader" />
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`<Loader variant="circleLoader" />`}
            />
          </div>
          <div>
            <h3 className="h3">Square loader</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem] text-center">
              <Loader variant="squareLoader" />
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`<Loader variant="squareLoader" />`}
            />
          </div>
          <div>
            <h3 className="h3">Ping loader</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem] text-center">
              <Loader variant="pingLoader" />
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`<Loader variant="pingLoader" />`}
            />
          </div>
          <div>
            <h3 className="h3">Colored loader</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem] text-center">
              <Loader variant="coloredLoader" color="indigo" />
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`<Loader variant="coloredLoader" color="indigo" />`}
            />
          </div>
          <div>
            <h3 className="h3">Loader with custom size and color</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem] text-center">
              <Loader variant="circleLoader" color="red" size={40} />
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`<Loader variant="circleLoader" color="red" size={40} />`}
            />
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default loaders;
