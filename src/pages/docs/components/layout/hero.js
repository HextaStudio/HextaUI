import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";
import { NextSeo } from "next-seo";
import Hero from "@/components/hexta-ui/Hero";

const hero = () => {
  return (
    <>
      <NextSeo
        title="Hero - HextaUI ✨"
        description="Collection of Hero components with different variants."
        canonical="https://ui.hextastudio.in/docs/components/layout/hero"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/hero",
          title: "Hero - HextaUI ✨",
          description: "Collection of Hero components with different variants.",
          images: [
            {
              url: "https://i.imgur.com/rkzeMDo.png",
              width: 1920,
              height: 1080,
              alt: "Hero - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Hero - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <div className="header">
            <h1 className="h1">Hero</h1>
            <p className="text-sm opacity-80">
              Collection of Hero components with different variants.
            </p>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[35rem]">
                  <Hero
                    title="This is Basic Hero Component"
                    subtitle="Aliqua ipsum Lorem sit laborum cupidatat sint voluptate eu excepteur."
                    primaryButtonText="Get Started"
                    primaryButtonLinkT="#"
                    secondaryButtonText="About us"
                    secondaryButtonLink="#"
                  />
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
  Avatar
  Button
> Hero
  Loader
  Select
  Toggle
  Tooltip`}
                />
                <CodeBlock
                  lang="bash"
                  filename="bash"
                  code={`? Which framework are you using? Next.js         
? Which component would you like to install? Hero
✔ Hero component was added successfully — Guide to use Hero, https://ui.hextastudio.in/docs/components/layout/hero`}
                />
                <CodeBlock
                  lang="jsx"
                  filename="jsx"
                  code={`import { Hero } from "@/components/hexta-ui/Hero";`}
                />
              </div>
              <div>
                <h3 className="h3">Basic Hero</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem] text-center">
                  <Hero
                    title="This is Basic Hero Component"
                    subtitle="Aliqua ipsum Lorem sit laborum cupidatat sint voluptate eu excepteur."
                    primaryButtonText="Get Started"
                    primaryButtonLinkT="#"
                    secondaryButtonText="About us"
                    secondaryButtonLink="#"
                  />
                </div>
                <h3 className="h3">Usage</h3>
                <CodeBlock
                  lang="jsx"
                  filename="jsx"
                  code={`<Hero
    title="This is Basic Hero Component"
    subtitle="Aliqua ipsum Lorem sit laborum cupidatat sint voluptate eu excepteur."
    primaryButtonText="Get Started"
    primaryButtonLinkT="#"
    secondaryButtonText="About us"
    secondaryButtonLink="#"
/>`}
                />
              </div>
              <div>
                <h3 className="h3">Hero With Background Image</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem] text-center">
                  <Hero
                    title="Hero component with Background Image"
                    subtitle="Aliqua ipsum Lorem sit laborum cupidatat sint voluptate eu excepteur."
                    primaryButtonText="Get Started"
                    primaryButtonLinkT="#"
                    secondaryButtonText="About us"
                    secondaryButtonLink="#"
                    backgroundImage="https://images.unsplash.com/photo-1614851099511-773084f6911d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
                <h3 className="h3">Usage</h3>
                <CodeBlock
                  lang="jsx"
                  filename="jsx"
                  code={`<Hero
    title="Hero component with Background Image"
    subtitle="Aliqua ipsum Lorem sit laborum cupidatat sint voluptate eu excepteur."
    primaryButtonText="Get Started"
    primaryButtonLinkT="#"
    secondaryButtonText="About us"
    secondaryButtonLink="#"
    backgroundImage="https://images.unsplash.com/photo-1614851099511-773084f6911d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

/>`}
                />
              </div>
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default hero;
