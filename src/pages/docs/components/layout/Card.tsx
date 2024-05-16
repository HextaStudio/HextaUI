import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";
import { InstallationSteps } from "@/components/utils/InstallationSteps";
import { Button } from "@/components/hexta-ui/Button";
import { Card } from "@/components/hexta-ui/Card";
import { DocsHeader } from "@/components/utils/DocsHeader";

const cards = () => {
  return (
    <>
      <NextSeo
        title="Cards - HextaUI ✨"
        description="Collection of multiple reusable card components with props."
        canonical="https://ui.hextastudio.in/docs/components/layout/cards"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/cards",
          title: "Cards - HextaUI ✨",
          description:
            "Collection of multiple reusable card components with props.",
          images: [
            {
              url: "https://i.imgur.com/5S1wN8p.png",
              width: 1920,
              height: 1080,
              alt: "Cards - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Cards - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Card"
            description="Collection of multiple reusable card components with props."
          />
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem] p-4">
                  <Card
                    variant="imageTop"
                    image="https://source.unsplash.com/random?kitty"
                    buttons={
                      <div className="flex gap-2 px-4">
                        <Button variant="primary" className="mt-[-1rem]">
                          Primary
                        </Button>
                        <Button variant="secondary" className="mt-[-1rem]">
                          Secondary
                        </Button>
                      </div>
                    }
                  >
                    <h2 className="text-xl font-semibold">
                      Card with Buttons and Image
                    </h2>
                    <p className="text-sm opacity-80">
                      Qui ipsum aliquip in minim do pariatur pariatur sint
                      fugiat anim. Proident eiusmod esse tempor mollit cillum in
                      nostrud ea magna nisi proident quis.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <InstallationSteps component="Card" />
          <div>
            <h3 className="h3">Basic card</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
              <Card variant="primary">
                <h2 className="text-xl font-semibold">Primary Card</h2>
                <p className="text-sm opacity-80">
                  Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
                  anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
                  magna nisi proident quis.
                </p>
              </Card>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`<Card variant="primary">
    <h2 className="text-xl font-semibold">Primary Card</h2>
    <p className="text-sm opacity-80">
      Qui ipsum aliquip in minim do pariatur pariatur sint
      fugiat anim. Proident eiusmod esse tempor mollit cillum
      in nostrud ea magna nisi proident quis.
    </p>
  </Card>`}
            />
          </div>
          <div>
            <h3 className="h3">Outline card</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
              <Card variant="outline">
                <h2 className="text-xl font-semibold">Outline Card</h2>
                <p className="text-sm opacity-80">
                  Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
                  anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
                  magna nisi proident quis.
                </p>
              </Card>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`<Card variant="outline">
    <h2 className="text-xl font-semibold">Outline Card</h2>
    <p className="text-sm opacity-80">
      Qui ipsum aliquip in minim do pariatur pariatur sint
      fugiat anim. Proident eiusmod esse tempor mollit cillum
      in nostrud ea magna nisi proident quis.
    </p>
  </Card>`}
            />
          </div>
          <div>
            <h3 className="h3">Card with Image (Bottom)</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem]">
              <Card
                variant="imageTop"
                image="https://source.unsplash.com/random?kitty"
              >
                <h2 className="text-xl font-semibold">Card with Image (Top)</h2>
                <p className="text-sm opacity-80">
                  Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
                  anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
                  magna nisi proident quis.
                </p>
              </Card>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`<Card
  variant="imageTop"
  image="https://source.unsplash.com/random?kitty"
>
  <h2 className="text-xl font-semibold">Card with Image (Top)</h2>
  <p className="text-sm opacity-80">
    Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
    anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
    magna nisi proident quis.
  </p>
</Card>`}
            />
          </div>
          <div>
            <h3 className="h3">Card with Image (Bottom)</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem]">
              <Card
                variant="imageBottom"
                image="https://source.unsplash.com/random?kitty"
              >
                <h2 className="text-xl font-semibold">
                  Card with Image (Bottom)
                </h2>
                <p className="text-sm opacity-80">
                  Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
                  anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
                  magna nisi proident quis.
                </p>
              </Card>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`<Card
  variant="imageBottom"
  image="https://source.unsplash.com/random?kitty"
>
  <h2 className="text-xl font-semibold">Card with Image (Bottom)</h2>
  <p className="text-sm opacity-80">
    Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
    anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
    magna nisi proident quis.
  </p>
</Card>`}
            />
          </div>
          <div>
            <h3 className="h3">Card with Buttons</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem]">
              <Card
                variant="default"
                buttons={
                  <>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                  </>
                }
              >
                <h2 className="text-xl font-semibold">Card with Buttons</h2>
                <p className="text-sm opacity-80">
                  Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
                  anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
                  magna nisi proident quis.
                </p>
              </Card>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`
{/* Install button component from HextaUI after that 👇 */}
import { Button } from "@/components/hexta-ui/Button";
              
<Card
  variant="default"
  buttons={
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </>
  }
>
  <h2 className="text-xl font-semibold">Card with Buttons</h2>
  <p className="text-sm opacity-80">
    Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
    anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
    magna nisi proident quis.
  </p>
</Card>`}
            />
          </div>
          <div>
            <h3 className="h3">Card with Buttons and Image</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem]">
              <Card
                variant="imageTop"
                image="https://source.unsplash.com/random?kitty"
                buttons={
                  <div className="flex gap-2 px-4">
                    <Button variant="primary" className="mt-[-1rem]">
                      Primary
                    </Button>
                    <Button variant="secondary" className="mt-[-1rem]">
                      Secondary
                    </Button>
                  </div>
                }
              >
                <h2 className="text-xl font-semibold">
                  Card with Buttons and Image
                </h2>
                <p className="text-sm opacity-80">
                  Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
                  anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
                  magna nisi proident quis.
                </p>
              </Card>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`
{/* Install button component from HextaUI after that 👇 */}
import { Button } from "@/components/hexta-ui/Button";
              
<Card
  variant="imageTop"
  image="https://source.unsplash.com/random?kitty"
  buttons={
    <div className="flex gap-2 px-4">
      <Button variant="primary" className="mt-[-1rem]">
        Primary
      </Button>
      <Button variant="secondary" className="mt-[-1rem]">
        Secondary
      </Button>
  </div>
  }
  >
    <h2 className="text-xl font-semibold">
      Card with Buttons and Image
    </h2>
    <p className="text-sm opacity-80">
      Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
      anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
      magna nisi proident quis.
    </p>
</Card>`}
            />
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default cards;
