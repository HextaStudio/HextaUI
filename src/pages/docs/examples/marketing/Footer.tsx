import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="flex flex-wrap items-center w-full p-6 footer gap-7 grow justify-between "
      style={{ borderTop: "1px solid #ffffff20" }}
    >
      <div className="footer-section1 flex flex-col gap-2">
        <h3 className="text-[20px] font-semibold text-white">hextastudio/ui</h3>
        <p className="text-sm  text-white opacity-75">
          Get started with our product and start building your project.
        </p>
        <div className="flex gap-4">
          <Link
            href="https://ui.hextastudio.in"
            className="text-sm px-4 py-2 bg-white text-black rounded-lg font-semibold"
          >
            Get started
          </Link>
        </div>
      </div>
      <div className="flex  gap-6">
        <div className="footer-section2">
          <ul className="flex flex-col gap-2 text-sm list-none">
            <p className="font-bold">EXPLORE</p>
            <li>
              <Link
                href="docs/templates/startup-saas"
                className="opacity-75 hover:opacity-100"
              >
                Templates
              </Link>
            </li>
            <li>
              <Link
                href="docs/components"
                className="opacity-75 hover:opacity-100"
              >
                Components
              </Link>
            </li>
            <li>
              <Link
                href="docs/layouts"
                className="opacity-75 hover:opacity-100"
              >
                Layouts
              </Link>
            </li>
            <li>
              <Link href="docs/learn" className="opacity-75 hover:opacity-100">
                Learn
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section3">
          <ul className="flex flex-col gap-2 text-sm list-none">
            <p className="font-bold">LEGAL</p>
            <li>
              <Link
                href="docs/examples"
                className="opacity-75 hover:opacity-100"
              >
                Examples
              </Link>
            </li>
            <li>
              <Link
                href="docs/changelog"
                className="opacity-75 hover:opacity-100"
              >
                Changelog
              </Link>
            </li>
            <li>
              <Link
                href="docs/roadmap"
                className="opacity-75 hover:opacity-100"
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                href="docs/support"
                className="opacity-75 hover:opacity-100"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const footer = () => {
  return (
    <>
      <DocsSEO
        title="Footer - hextastudio/ui"
        description="A component that is used to display the links at the end of the website."
        image="https://i.imgur.com/WF8CNK3.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Footer"
            description="A component that is used to display the links at the end of the website."
          />
          <DocsPreview>
            <Footer />
          </DocsPreview>
          <CodeBlock
            lang="tsx"
            filename="tsx"
            free
            code={`import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="flex flex-wrap items-center w-full p-6 footer gap-7 grow justify-between "
      style={{ borderTop: "1px solid #ffffff20" }}
    >
      <div className="footer-section1 flex flex-col gap-2">
        <h3 className="text-[20px] font-semibold text-white">hextastudio/ui</h3>
        <p className="text-sm  text-white opacity-75">
          Get started with our product and start building your project.
        </p>
        <div className="flex gap-4">
          <Link
            href="https://hextastudio.in"
            className="text-sm px-4 py-2 bg-white text-black rounded-lg font-semibold"
          >
            Get started
          </Link>
        </div>
      </div>
      <div className="flex  gap-6">
        <div className="footer-section2">
          <ul className="flex flex-col gap-2 text-sm list-none">
            <p className="font-bold">EXPLORE</p>
            <li>
              <Link
                href="docs/templates/startup-saas"
                className="opacity-75 hover:opacity-100"
              >
                Templates
              </Link>
            </li>
            <li>
              <Link
                href="docs/components"
                className="opacity-75 hover:opacity-100"
              >
                Components
              </Link>
            </li>
            <li>
              <Link
                href="docs/layouts"
                className="opacity-75 hover:opacity-100"
              >
                Layouts
              </Link>
            </li>
            <li>
              <Link href="docs/learn" className="opacity-75 hover:opacity-100">
                Learn
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section3">
          <ul className="flex flex-col gap-2 text-sm list-none">
            <p className="font-bold">LEGAL</p>
            <li>
              <Link
                href="docs/examples"
                className="opacity-75 hover:opacity-100"
              >
                Examples
              </Link>
            </li>
            <li>
              <Link
                href="docs/changelog"
                className="opacity-75 hover:opacity-100"
              >
                Changelog
              </Link>
            </li>
            <li>
              <Link
                href="docs/roadmap"
                className="opacity-75 hover:opacity-100"
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                href="docs/support"
                className="opacity-75 hover:opacity-100"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default footer;
