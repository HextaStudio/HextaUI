import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import React from "react";

import { FaRocket } from "react-icons/fa";
import { FaMousePointer } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <>
      <div className="grow flex flex-col gap-5 border border-white border-opacity-10 p-4  bg-zinc-950 rounded-md max-w-[17rem] min-h-[15rem]  w-full justify-center ">
        <div className="p-4 bg-zinc-900 w-fit flex items-center justify-center rounded-md border-t border-t-white border-opacity-10 border-r border-r-white ">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl">{title}</h2>
          <p className="text-[14px] opacity-60">{description}</p>
        </div>
      </div>
    </>
  );
};

export const featuresection = () => {
  return (
    <>
      <DocsSEO
        title="Features Section - hextastudio/ui"
        description="A section to showcase features of your product."
        image="https://i.imgur.com/vHHS0HQ.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Features Section"
            description="A section to showcase features of your product."
          />
          <DocsPreview>
            <div className="flex gap-4 justify-center  flex-wrap w-full p-4">
              <FeatureCard
                title="Stunning Design"
                description="hextastudio/ui provides components with stunning design and animations."
                icon={<FaRocket />}
              />
              <FeatureCard
                title="Easy to Use"
                description="hextastudio/ui is easy to use and customize. It is built with Tailwind CSS."
                icon={<FaClipboard />}
              />
              <FeatureCard
                title="Customization"
                description="hextastudio/ui provides customization options to make it easy to fit your brand."
                icon={<FaMousePointer />}
              />
            </div>
          </DocsPreview>
          <CodeBlock
            title="Feature Card Component"
            lang="tsx"
            filename="tsx"
            code={`interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <>
      <div className="grow flex flex-col gap-5 border border-white border-opacity-10 p-4  bg-zinc-950 rounded-md max-w-[17rem] min-h-[15rem]  w-full justify-center ">
        <div className="p-4 bg-zinc-900 w-fit flex items-center justify-center rounded-md border-t border-t-white border-opacity-10 border-r border-r-white">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl">{title}</h2>
          <p className="text-[14px] opacity-60">{description}</p>
        </div>
      </div>
    </>
  );
};
`}
          />
          <CodeBlock
            title="Usage"
            lang="tsx"
            code={`import { FaRocket } from "react-icons/fa";
import { FaMousePointer } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";            

<div className="flex gap-4 justify-center  flex-wrap w-full p-4">
    <FeatureCard
        title="Stunning Design"
        description="hextastudio/ui provides components with stunning design and animations."
        icon={<FaRocket />}
    />
    <FeatureCard
        title="Easy to Use"
        description="hextastudio/ui is easy to use and customize. It is built with Tailwind CSS."
        icon={<FaClipboard />}
    />
    <FeatureCard
        title="Customization"
        description="hextastudio/ui provides customization options to make it easy to fit your brand."
        icon={<FaMousePointer />}
    />
</div>`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default featuresection;
