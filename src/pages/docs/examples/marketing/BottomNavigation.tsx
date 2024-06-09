import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

import { FaHome, FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

export const BottomNavigation = () => {
  const [active, setActive] = useState(0);

  const handleActive = (index: number) => {
    setActive(index);
  };

  return (
    <>
      <div className="absolute bottom-0 w-full bg-zinc-950 border-t border-t-white border-opacity-10">
        <div className="flex items-center justify-center w-full p-3">
          <div className="flex items-center space-x-7">
            <button
              className={` transition-all duration-[0.2s] 
            ${active === 0 ? "text-white" : "text-zinc-400"}`}
              onClick={() => {
                handleActive(0);
              }}
            >
              <FaHome size={20} />
            </button>
            <button
              className={` transition-all duration-[0.2s] 
            ${active === 1 ? "text-white" : "text-zinc-400"}`}
              onClick={() => {
                handleActive(1);
              }}
            >
              <FaSearch size={20} />
            </button>
            <button
              className={` transition-all duration-[0.2s] 
            ${active === 2 ? "text-white" : "text-zinc-400"}`}
              onClick={() => {
                handleActive(2);
              }}
            >
              <FaBell size={20} />
            </button>
            <button
              className={` transition-all duration-[0.2s] 
            ${active === 3 ? "text-white" : "text-zinc-400"}`}
              onClick={() => {
                handleActive(3);
              }}
            >
              <MdEmail size={22} />
            </button>
            <button
              className={` transition-all duration-[0.2s] 
            ${active === 4 ? "text-white" : "text-zinc-400"}`}
              onClick={() => {
                handleActive(4);
              }}
            >
              <FaUser size={17} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const bottomnavigation = () => {
  return (
    <>
      <DocsSEO
        title="Bottom Navigation - hextastudio/ui"
        description="Bottom navigation is a UI component that provides navigation between different sections of an app."
        image="https://i.imgur.com/nM9Lp0M.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Bottom Navigation"
            description="Bottom navigation is a UI component that provides navigation between different sections of an app."
          />
          <div className="max-w-[20rem] h-[30rem] bg-zinc-900 rounded-md overflow-hidden flex flex-col gap-4 py-10 my-10 relative mx-auto">
            <BottomNavigation />
          </div>
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`import { FaHome, FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export const BottomNavigation = () => {
  const [active, setActive] = useState(0);

  const handleActive = (index: number) => {
    setActive(index);
  };

  return (
    <>
      <div className="fixed left-1/2 -translate-x-1/2 bottom-0 w-full bg-zinc-950 border-t border-t-white border-opacity-10">
        <div className="flex items-center justify-center w-full p-3">
          <div className="flex items-center space-x-7">
            <button
              className={\` transition-all duration-[0.2s] 
            \${active === 0 ? "text-white" : "text-zinc-400"}\`}
              onClick={() => {
                handleActive(0);
              }}
            >
              <FaHome size={20} />
            </button>
            <button
              className={\` transition-all duration-[0.2s] 
            \${active === 1 ? "text-white" : "text-zinc-400"}\`}
              onClick={() => {
                handleActive(1);
              }}
            >
              <FaSearch size={20} />
            </button>
            <button
              className={\ transition-all duration-[0.2s] 
            \${active === 2 ? "text-white" : "text-zinc-400"}\`}
              onClick={() => {
                handleActive(2);
              }}
            >
              <FaBell size={20} />
            </button>
            <button
              className={\` transition-all duration-[0.2s] 
            \${active === 3 ? "text-white" : "text-zinc-400"}\`}
              onClick={() => {
                handleActive(3);
              }}
            >
              <MdEmail size={22} />
            </button>
            <button
              className={\` transition-all duration-[0.2s] 
            \${active === 4 ? "text-white" : "text-zinc-400"}\`}
              onClick={() => {
                handleActive(4);
              }}
            >
              <FaUser size={17} />
            </button>
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

export default bottomnavigation;
