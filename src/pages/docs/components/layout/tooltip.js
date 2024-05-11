import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { Tooltip } from "../../../../../hexta-ui/cli/components/Tooltip";

import { NextSeo } from "next-seo";
import Badge from "../../../../../hexta-ui/cli/components/Badges";

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
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <Tooltip direction="top" text="Meow ~">
                    <Badge outlined className="cursor-default">
                      🐈 Hover me
                    </Badge>
                  </Tooltip>
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
? Which component would you like to instal?
  AlertDialog
  Avatar
  Button
  Loader
  Select
  Toast
  Toggle
> Tooltip`}
              />
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`? Which framework are you using? Next.js         
? Which component would you like to instal? Tooltip
✔ Tooltip component was added successfully — Guide to use Tooltip, https://ui.hextastudio.in/docs/components/layout/tooltip`}
              />
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { Avatar } from "@/components/hexta-ui/Tooltip";`}
              />
            </div>
          </div>
          <div>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
              <Tooltip direction="top" text="Meow ~">
                <Badge outlined className="cursor-default">
                  🐈 Hover me
                </Badge>
              </Tooltip>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`<Tooltip direction="top" text="Meow ~">
  <Badge outlined className="cursor-default">
    🐈 Hover me
  </Badge>
</Tooltip>`}
            />
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default tooltip;
