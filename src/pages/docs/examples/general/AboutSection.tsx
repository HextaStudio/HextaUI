import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { Button } from "@/components/hexta-ui/Button";

import Image from "next/image";
import Link from "next/link";

import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SplitAbout = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-7 max-[1170px]:flex-col">
        <div className="flex-[2] flex flex-col gap-4">
          <h2 className="text-3xl">Hey There 👋</h2>
          <p className="opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia optio
            vel magni. Aliquid aliquam fuga provident ut, sequi explicabo
            laborum.
          </p>
          <p className="opacity-90">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            aspernatur atque voluptatem excepturi minus, optio facere
            consequatur. Provident, consequatur repudiandae.
          </p>
          <div className="flex items-center gap-3">
            <Link href="#" aria-label="Discord">
              <FaDiscord
                size={22}
                className="opacity-80 hover:opacity-100 transition-all"
              />
            </Link>
            <Link href="#" aria-label="GitHub">
              <FaGithub
                size={22}
                className="opacity-80 hover:opacity-100 transition-all"
              />
            </Link>
            <Link href="#" aria-label="X">
              <FaXTwitter
                size={22}
                className="opacity-80 hover:opacity-100 transition-all"
              />
            </Link>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <Button className="grow flex items-center justify-center">
              Let's Talk
            </Button>
            <Button
              className="grow flex items-center justify-center"
              variant="secondary"
            >
              Services
            </Button>
          </div>
        </div>
        <div className="flex-[1] flex">
          <Image
            width={1620}
            height={2000}
            className="max-w-full w-full h-auto rounded-md"
            src={
              "https://images.unsplash.com/photo-1547992087-e67e3944257e?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="About Image"
          />
          {/* <div className=""></div> */}
        </div>
      </div>
    </>
  );
};

const aboutsection = () => {
  return (
    <>
      <DocsSEO
        title="About Section"
        description="A section to display information about person."
        image="https://i.imgur.com/2EhBzkW.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="About Section"
            description="A section to display information about person."
          />
          <DocsPreview className="h-[50] p-6">
            <SplitAbout />
          </DocsPreview>
          <InstallationSteps imports={"Button"} component={"Button"} />
          <CodeBlock
            lang="tsx"
            filename="tsx"
            free
            code={`import Image from "next/image";
import Link from "next/link";

import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SplitAbout = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-7 max-[1170px]:flex-col">
        <div className="flex-[2] flex flex-col gap-4">
          <h2 className="text-3xl">Hey There 👋</h2>
          <p className="opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia optio
            vel magni. Aliquid aliquam fuga provident ut, sequi explicabo
            laborum.
          </p>
          <p className="opacity-90">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            aspernatur atque voluptatem excepturi minus, optio facere
            consequatur. Provident, consequatur repudiandae.
          </p>
          <div className="flex items-center gap-3">
            <Link href="#" aria-label="Discord">
              <FaDiscord
                size={22}
                className="opacity-80 hover:opacity-100 transition-all"
              />
            </Link>
            <Link href="#" aria-label="GitHub">
              <FaGithub
                size={22}
                className="opacity-80 hover:opacity-100 transition-all"
              />
            </Link>
            <Link href="#" aria-label="X">
              <FaXTwitter
                size={22}
                className="opacity-80 hover:opacity-100 transition-all"
              />
            </Link>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <Button className="grow flex items-center justify-center">
              Let's Talk
            </Button>
            <Button
              className="grow flex items-center justify-center"
              variant="secondary"
            >
              Services
            </Button>
          </div>
        </div>
        <div className="flex-[1] flex">
          <Image
            width={1620}
            height={2000}
            className="max-w-full w-full h-auto rounded-md"
            src={
              "https://images.unsplash.com/photo-1547992087-e67e3944257e?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="About Image"
          />
          {/* <div className=""></div> */}
        </div>
      </div>
    </>
  );
};`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default aboutsection;
