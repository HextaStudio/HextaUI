import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";
import { Avatar } from "@/components/hexta-ui/Avatar";

const avatars = () => {
  return (
    <>
      <NextSeo
        title="Avatars - HextaUI ✨"
        description="Collection of Avatar components with multiple variants."
        canonical="https://ui.hextastudio.in/docs/components/layout/avatars"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/avatars",
          title: "Avatars - HextaUI ✨",
          description:
            "Collection of Avatar components with multiple variants.",
          images: [
            {
              url: "https://i.imgur.com/Wm4aBoc.png",
              width: 1920,
              height: 1080,
              alt: "Avatars - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Avatars - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <div className="header">
            <h1 className="h1">Avatars</h1>
            <p className="text-sm opacity-80">
              Collection of Avatar components with multiple variants.
            </p>
          </div>{" "}
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <Avatar avatarUrl="https://placeholder.co/80" size={80} />
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
> Avatar
  Button
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
? Which component would you like to install? Avatar
✔ Avatar component was added successfully — Guide to use Avatar, https://ui.hextastudio.in/docs/components/layout/avatar`}
              />
              <p>Importing Avatar in your file.</p>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { Avatar } from "@/components/hexta-ui/Avatar";`}
              />
            </div>

            <div>
              <h3 className="h3">Preview</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                <Avatar avatarUrl="https://placeholder.co/80" size={80} />
              </div>
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<Avatar avatarUrl="/path/to/avatar.jpg" />`}
              />
            </div>

            <div>
              <h3 className="h3">Preview</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                <div className="flex gap-4 ">
                  <Avatar
                    variant="withStatus"
                    avatarUrl="https://placeholder.co/80"
                    size={80}
                  />
                  <Avatar
                    variant="withStatus"
                    avatarUrl="https://placeholder.co/80"
                    size={80}
                    offline
                  />
                </div>
              </div>
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<Avatar variant="withStatus" avatarUrl="https://placeholder.co/80" size={80} />

                
<Avatar variant="withStatus" avatarUrl="https://placeholder.co/80" size={80} offline/>`}
              />
            </div>

            <div>
              <h3 className="h3">Preview</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                <div className="flex gap-4 ">
                  <Avatar
                    variant="withBadge"
                    avatarUrl="https://placeholder.co/80"
                    size={80}
                    badgeNumber={5}
                  />
                </div>
              </div>
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={` <Avatar variant="withBadge" avatarUrl="https://placeholder.co/80" size={80} badgeNumber={5} />`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default avatars;
