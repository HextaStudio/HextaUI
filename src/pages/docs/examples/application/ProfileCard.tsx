import { Button } from "@/components/hexta-ui/Button";
import { Badge } from "@/components/hexta-ui/Badge";
import {
  TooltipContent,
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/hexta-ui/Tooltip";

import { FaGithub, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";

import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

const ProfileCard = () => {
  return (
    <>
      <div className="relative group max-[768px] rounded-md">
        <div className=" p-3 flex flex-col gap-3 rounded-r-md  absolute left-full -translate-x-[4rem] group-hover:translate-x-0 transition-all duration-200  max-[768px]:bottom-full max-[768px]:flex-row max-[768px]:left-1/2 max-[768px]:-translate-x-1/2 max-[768px]:rounded-md max-[768px]:w-full max-[768px]:items-center max-[768px]:justify-center  max-[768px]:rounded-b-none max-[768px]:group-hover:-translate-x-1/2 bg-zinc-900 ">
          <Link
            href="https://github.com/preetsuthar17"
            target="_blank"
            className="hover:scale-105 transition-all p-2 bg-zinc-800 rounded-full border-t border-r border-r-white border-t-white border-opacity-10"
            aria-label="GitHub"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipContent direction="right">GitHub</TooltipContent>
                <TooltipTrigger>
                  <FaGithub />
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          </Link>
          <Link
            href="https://x.com/preetsuthar17"
            target="_blank"
            className="hover:scale-105 transition-all p-2 bg-zinc-800 rounded-full border-t border-r border-r-white border-t-white border-opacity-10"
            aria-label="X"
          >
            <TooltipProvider>
              <TooltipContent direction="right">X (Twitter)</TooltipContent>
              <TooltipTrigger>
                <FaXTwitter />
              </TooltipTrigger>
            </TooltipProvider>
          </Link>
          <Link
            href="https://preetsuthar.me"
            target="_blank"
            className="hover:scale-105 transition-all p-2 bg-zinc-800 rounded-full border-t border-r border-r-white border-t-white border-opacity-10"
            aria-label="Website"
          >
            <TooltipProvider>
              <TooltipContent direction="right">Website</TooltipContent>
              <TooltipTrigger>
                <FaGlobe />
              </TooltipTrigger>
            </TooltipProvider>
          </Link>
        </div>

        <div className="brightness-100 group-hover:brightness-[0.3]  max-[768px]:group-hover:brightness-100 transition-all duration-200">
          <Image
            alt="User profile image"
            src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={500}
            objectFit="cover"
            className="rounded-md group-hover:rounded-r-none transition-all duration-200  max-[768px]:rounded-t-none border border-t-0 border-white border-opacity-10 max-[768px]:brightness-[0.3]"
            placeholder="blur"
            blurDataURL="https://placeholder.co/300x500"
          />
        </div>
        <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200  absolute top-2 left-2  max-[768px]:opacity-100 max-[768px]:translate-y-0">
          <Badge className="text-[10px] w-fit border-0 bg-black text-whites">
            Front-End Developer
          </Badge>
        </div>
        <div className="about absolute p-4 w-full bg-gradient-to-t from-black via-zinc-800 to-transparent z-[999999] left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 translate-y-[1rem] flex flex-col gap-4 max-[768px]:opacity-100 max-[768px]:translate-y-0">
          <div className="flex flex-col gap-2">
            <small>hello, I'm</small>
            <h2 className="text-2xl max-[768px]:text-xl leading-5">
              Jhonny Deep 👋
            </h2>
            <p className="text-sm opacity-90">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptas, reiciendis.
            </p>
          </div>
          <div>
            <Button className="flex items-center justify-center w-full text-center">
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const profilecard = () => {
  return (
    <>
      <DocsSEO
        title="Profile Card - hextastudio/ui"
        description="An example component to showcase a user profile card."
        image="https://i.imgur.com/qMYYvFM.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Profile Card"
            description="An example component to showcase a user profile card."
          />
          <DocsPreview className="p-4 h-[40rem] max-[768px]:p-1 w-screen">
            <ProfileCard />
          </DocsPreview>
          <InstallationSteps
            title="Complete Code"
            imports={[
              "Tooltip, TooltipContent, TooltipProvider, TooltipTrigger",
              "Badge",
              "Button",
            ]}
            component={["Tooltip", "Badge", "Button"]}
          />
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`import { FaGithub, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";


const ProfileCard = () => {
  return (
    <>
      <div className="relative group max-[768px] rounded-md">
        <div className=" p-3 flex flex-col gap-3 rounded-r-md  absolute left-full -translate-x-[4rem] group-hover:translate-x-0 transition-all duration-200  max-[768px]:bottom-full max-[768px]:flex-row max-[768px]:left-1/2 max-[768px]:-translate-x-1/2 max-[768px]:rounded-md max-[768px]:w-full max-[768px]:items-center max-[768px]:justify-center  max-[768px]:rounded-b-none max-[768px]:group-hover:-translate-x-1/2 bg-zinc-900 ">
          <Link
            href="https://github.com/preetsuthar17"
            target="_blank"
            className="hover:scale-105 transition-all p-2 bg-zinc-800 rounded-full border-t border-r border-r-white border-t-white border-opacity-10"
            aria-label="GitHub"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipContent direction="right">GitHub</TooltipContent>
                <TooltipTrigger>
                  <FaGithub />
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          </Link>
          <Link
            href="https://x.com/preetsuthar17"
            target="_blank"
            className="hover:scale-105 transition-all p-2 bg-zinc-800 rounded-full border-t border-r border-r-white border-t-white border-opacity-10"
            aria-label="X"
          >
            <TooltipProvider>
              <TooltipContent direction="right">X (Twitter)</TooltipContent>
              <TooltipTrigger>
                <FaXTwitter />
              </TooltipTrigger>
            </TooltipProvider>
          </Link>
          <Link
            href="https://preetsuthar.me"
            target="_blank"
            className="hover:scale-105 transition-all p-2 bg-zinc-800 rounded-full border-t border-r border-r-white border-t-white border-opacity-10"
            aria-label="Website"
          >
            <TooltipProvider>
              <TooltipContent direction="right">Website</TooltipContent>
              <TooltipTrigger>
                <FaGlobe />
              </TooltipTrigger>
            </TooltipProvider>
          </Link>
        </div>

        <div className="brightness-100 group-hover:brightness-[0.3]  max-[768px]:group-hover:brightness-100 transition-all duration-200">
         <Image
            alt="User profile image"
            src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={500}
            objectFit="cover"
            className="rounded-md group-hover:rounded-r-none transition-all duration-200  max-[768px]:rounded-t-none border border-t-0 border-white border-opacity-10 max-[768px]:brightness-[0.3]"
            placeholder="blur"
            blurDataURL="https://placeholder.co/300x500"
          />
        </div>
        <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200  absolute top-2 left-2  max-[768px]:opacity-100 max-[768px]:translate-y-0">
          <Badge className="text-[10px] w-fit border-0 bg-black text-whites">
            Front-End Developer
          </Badge>
        </div>
        <div className="about absolute p-4 w-full bg-gradient-to-t from-black via-zinc-800 to-transparent z-[999999] left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 translate-y-[1rem] flex flex-col gap-4 max-[768px]:opacity-100 max-[768px]:translate-y-0">
          <div className="flex flex-col gap-2">
            <small>hello, I'm</small>
            <h2 className="text-2xl max-[768px]:text-xl leading-5">
              Jhonny Deep 👋
            </h2>
            <p className="text-sm opacity-90">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptas, reiciendis.
            </p>
          </div>
          <div>
            <Button className="flex items-center justify-center w-full text-center">
              Let's Talk
            </Button>
          </div>
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

export default profilecard;
