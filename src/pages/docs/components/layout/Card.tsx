import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";

import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { Button } from "@/components/hexta-ui/Button";
import { Card } from "@/components/hexta-ui/Card";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

const cards = () => {
  return (
    <>
      <DocsSEO
        title="Card - hextastudio/ui"
        description="Collection of multiple reusable card components with props."
        image="https://i.imgur.com/5S1wN8p.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Card"
            description="Collection of multiple reusable card components with props."
          />
          <div>
            <DocsPreview title="Preview">
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
                <p className="text-sm opacity-80">
                  Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
                  anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
                  magna nisi proident quis.
                </p>
              </Card>
            </DocsPreview>
          </div>
          <InstallationSteps
            component={["Card", "Button"]}
            imports={["Card", "Button"]}
          />
          <div>
            <DocsPreview title="Basic card">
              <Card variant="primary">
                <p className="text-sm opacity-80">
                  Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
                  anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
                  magna nisi proident quis.
                </p>
              </Card>
            </DocsPreview>
            <CodeBlock
              lang="tsx"
              filename="tsx"
              code={`<Card variant="primary">
    <p className="text-sm opacity-80">
      Qui ipsum aliquip in minim do pariatur pariatur sint
      fugiat anim. Proident eiusmod esse tempor mollit cillum
      in nostrud ea magna nisi proident quis.
    </p>
  </Card>`}
            />
          </div>
          <div>
            <DocsPreview title="Outline card">
              <Card variant="outline">
                <p className="text-sm opacity-80">
                  Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
                  anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
                  magna nisi proident quis.
                </p>
              </Card>
            </DocsPreview>
            <CodeBlock
              lang="tsx"
              filename="tsx"
              code={`<Card variant="outline">
    <p className="text-sm opacity-80">
      Qui ipsum aliquip in minim do pariatur pariatur sint
      fugiat anim. Proident eiusmod esse tempor mollit cillum
      in nostrud ea magna nisi proident quis.
    </p>
  </Card>`}
            />
          </div>
          <div>
            <DocsPreview title="Card with Top Image">
              <Card
                variant="imageTop"
                image="https://source.unsplash.com/random?kitty"
              >
                <p className="text-sm opacity-80">
                  Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
                  anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
                  magna nisi proident quis.
                </p>
              </Card>
            </DocsPreview>
            <CodeBlock
              lang="tsx"
              filename="tsx"
              code={`<Card
  variant="imageTop"
  image="https://source.unsplash.com/random?kitty"
>
  <p className="text-sm opacity-80">
    Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
    anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
    magna nisi proident quis.
  </p>
</Card>`}
            />
          </div>
          <div>
            <DocsPreview title="Card with Image Bottom">
              <Card
                variant="imageBottom"
                image="https://source.unsplash.com/random?kitty"
              >
                <p className="text-sm opacity-80">
                  Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
                  anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
                  magna nisi proident quis.
                </p>
              </Card>
            </DocsPreview>
            <CodeBlock
              lang="tsx"
              filename="tsx"
              code={`<Card
  variant="imageBottom"
  image="https://source.unsplash.com/random?kitty"
>
  <p className="text-sm opacity-80">
    Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
    anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
    magna nisi proident quis.
  </p>
</Card>`}
            />
          </div>
          <div>
            <DocsPreview title="Card with Buttons">
              <Card
                variant="default"
                buttons={
                  <>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                  </>
                }
              >
                <p className="text-sm opacity-80">
                  Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
                  anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
                  magna nisi proident quis.
                </p>
              </Card>
            </DocsPreview>
            <CodeBlock
              lang="tsx"
              filename="tsx"
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
  <p className="text-sm opacity-80">
    Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
    anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
    magna nisi proident quis.
  </p>
</Card>`}
            />
          </div>
          <div>
            <DocsPreview title="Card with Buttons and Image">
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
                <p className="text-sm opacity-80">
                  Qui ipsum aliquip in minim do pariatur pariatur sint fugiat
                  anim. Proident eiusmod esse tempor mollit cillum in nostrud ea
                  magna nisi proident quis.
                </p>
              </Card>
            </DocsPreview>
            <CodeBlock
              lang="tsx"
              filename="tsx"
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
