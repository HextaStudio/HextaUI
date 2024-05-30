import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[8rem] text-center px-4">
      <div className="w-full h-[10rem] bg-zinc-950 mx-auto absolute top-[-4rem] blur-[100px] opacity-30 z-[1]"></div>
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-6xl font-bold tracking-tight max-w-[40rem] max-[372px]:text-5xl relative hero-heading">
          Modern & Stunning Website Components
        </h1>
        <p className="text-md opacity-80 max-w-[30rem] w-full relative">
          Easy to use copy and paste components for your website. Make your
          website 10x more stunning and modern.
        </p>
        <div className="flex flex-wrap gap-3 p-2 z-[99]">
          <Link
            href="/docs/examples/AnimatedDock"
            className="px-4 py-2 bg-white rounded-md text-black font-medium text-[14px] grow"
          >
            Browse Examples
          </Link>
          <Link
            href="/pricing"
            className="px-4 py-2 bg-zinc-950 rounded-md text-white border border-white border-opacity-10 font-medium text-[14px] grow"
          >
            Pricing
          </Link>
        </div>
      </div>
      <div className="relative rounded-xl">
        <div className="w-full h-[10rem] bg-white mx-auto absolute top-[-4rem] blur-[100px] opacity-20 z-[1]"></div>
        <div className="rounded-[inherit] [border:calc(1.9*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]  absolute inset-0 rounded-inherit border-2 border-transparent !mask-clip-padding-box-border-box after:absolute after:aspect-square after:w-[250px] after:animate-animatedBeam after:bg-gradient-to-l after:from-purple-500 after:via-purple-950 after:to-transparent after:[offset-anchor:90%_50%] after:[offset-path:rect(0_auto_auto_0_round_250px)] z-[9999]"></div>
        <Image
          width={1920}
          height={1080}
          src="https://i.imgur.com/tDpuune.png"
          alt="Hero Image"
          className="max-w-full rounded-xl h-auto mx-auto [mask-image:linear-gradient(to_bottom,_white_40%,_transparent_100%)] z-[2] relative"
        />
      </div>
    </div>
  );
};

const hero = () => {
  return (
    <>
      <DocsSEO
        title="Hero - hextastudio/ui"
        description="A stunning hero section for your website."
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Hero"
            description="A stunning hero section for your website."
          />
          <DocsPreview className="p-4 h-[70rem] bg-black">
            <Hero />
          </DocsPreview>
          <CodeBlock
            lang="js"
            filename="tailwind.config.js"
            code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  ...
  theme: {
    extend: {
      ...
      keyframes: {
        animatedBeam: {
          "100%": { offsetDistance: "100%" },
        },
      },
      animation: {
        animatedBeam: "animatedBeam 7s linear infinite",
      },
      ...
    },
  },
  plugins: [],
};
`}
          />
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[8rem] text-center px-4">
      <div className="w-full h-[10rem] bg-zinc-950 mx-auto absolute top-[-4rem] blur-[100px] opacity-30 z-[1]"></div>
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-6xl font-bold tracking-tight max-w-[40rem] max-[372px]:text-5xl relative hero-heading">
          Modern & Stunning Website Components
        </h1>
        <p className="text-md opacity-80 max-w-[30rem] w-full relative">
          Easy to use copy and paste components for your website. Make your
          website 10x more stunning and modern.
        </p>
        <div className="flex flex-wrap gap-3 p-2 z-[99]">
          <Link
            href="/docs/examples/AnimatedDock"
            className="px-4 py-2 bg-white rounded-md text-black font-medium text-[14px] grow"
          >
            Browse Examples
          </Link>
          <Link
            href="/pricing"
            className="px-4 py-2 bg-zinc-950 rounded-md text-white border border-white border-opacity-10 font-medium text-[14px] grow"
          >
            Pricing
          </Link>
        </div>
      </div>
      <div className="relative rounded-xl">
        <div className="w-full h-[10rem] bg-white mx-auto absolute top-[-4rem] blur-[100px] opacity-20 z-[1]"></div>
        <div className="rounded-[inherit] [border:calc(1.9*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]  absolute inset-0 rounded-inherit border-2 border-transparent !mask-clip-padding-box-border-box after:absolute after:aspect-square after:w-[250px] after:animate-animatedBeam after:bg-gradient-to-l after:from-purple-500 after:via-purple-950 after:to-transparent after:[offset-anchor:90%_50%] after:[offset-path:rect(0_auto_auto_0_round_250px)] z-[9999]"></div>
        <Image
          width={1920}
          height={1080}
          src="https://i.imgur.com/tDpuune.png"
          alt="Hero Image"
          className="max-w-full rounded-xl h-auto mx-auto [mask-image:linear-gradient(to_bottom,_white_40%,_transparent_100%)] z-[2] relative"
        />
      </div>
    </div>
  );
};`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default hero;
