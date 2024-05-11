import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import { NextSeo } from "next-seo";
import Link from "next/link";

const hextaUIinstallation = () => {
  return (
    <>
      <NextSeo
        title="Install HextaUI - HextaUI ✨"
        description="Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness."
        canonical="https://ui.hextastudio.in/docs/components/resources/install-hexta-ui"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/resources/install-hexta-ui",
          title: "Install HextaUI - HextaUI ✨",
          description:
            "Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness.",
          images: [
            {
              url: "https://i.imgur.com/xlCPzQc.png",
              width: 1920,
              height: 1080,
              alt: "Install HextaUI - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Install HextaUI - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <h1 className="h1">Install Hexta UI</h1>
          <p className="text-sm opacity-80">
            Step-by-step guide to install and use the HextaUI library
          </p>
          <div className="flex flex-col gap-4 py-10">
            <div>
              <h3 className="h3">Step 1: Installing HextaUI</h3>
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npm install @hextastudio/ui`}
              />
              <p>
                Use the above command to install the HextaUI library in your
                project.
              </p>
            </div>
            <div>
              <p>
                After installing the library, you can add a component using the
                following command:
              </p>
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npx hexta-ui add`}
              />
              <p>
                Then, you will be asked to select the framework you are using:
              </p>
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`? Which framework are you using? (Use arrow keys)
> Next.js 
  React `}
              />
              <p>Now simply select the component you would like to install:</p>

              <CodeBlock
                lang="bash"
                filename="bash"
                code={`? Which framework are you using? Next.js
? Which component would you like to instal? (Use arrow keys)
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
? Which component would you like to instal? Avatar
✔ Button component was added successfully — Guide to use Button, https://ui.hextastudio.in/docs/components/layout/button`}
              />
              <p>
                Congratulations! You have successfully installed and added your
                first component!{" "}
                <Link
                  className="blue-link"
                  href="/docs/components/layout/buttons"
                >
                  Learn how to use the Button component
                </Link>
              </p>
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default hextaUIinstallation;
