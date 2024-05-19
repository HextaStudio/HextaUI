import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const hextaUIinstallation = () => {
  return (
    <>
      <DocsSEO
        title="Install HextaUI - HextaUI ✨"
        description="Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness."
        image="https://i.imgur.com/xlCPzQc.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Install HextaUI"
            description="Step-by-step guide to install and use the HextaUI library"
          />

          <div className="flex flex-col gap-4 py-10">
            <div>
              <h3 className="h3">Step 1: Installing HextaUI</h3>
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npm install @hextastudio/ui`}
              />
            </div>
            <p>
              Use the above command to install the HextaUI library in your
              project.
            </p>
            <div>
              <h3 className="h3">Step 2: Usage</h3>
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npx hexta-ui add <component_name>`}
              />
              <div className="flex flex-col gap-4">
                <p>
                  After installing the library, you can add a component using
                  above command.
                </p>
                <p>
                  Replace &lt;component_name&gt; with the name of the component
                  you want to install (e.g., `npx hexta-ui add button`).
                </p>
                <p>
                  The CLI will download the selected component and place it in
                  the `src/components/hexta-ui` directory of your project.
                </p>

                <p>
                  That's it! HextaUI makes it easy to enhance your user
                  interface with modern, customizable components.
                </p>
              </div>
            </div>
            <div>
              <h3 className="h3">Example</h3>
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npx hexta-ui add button`}
              />
              <p>
                The above command will download the button component and place
                it in the `src/components/hexta-ui` directory of your project.
              </p>
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default hextaUIinstallation;
