import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { Button } from "@/components/hexta-ui/Button";
import { Input } from "@/components/hexta-ui/Input";
import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const ModernSearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="flex items-center p-1 bg-black rounded-full  max-w-[30rem] w-full border border-white border-opacity-10 gap-1">
        <Input
          className="focus:ring-0 focus:border-opacity-10 rounded-full py-3 m-0 bg-zinc-950 border border-white border-opacity-5 w-full"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          variant="secondary"
          className="border border-white border-opacity-5 rounded-full px-3 py-3"
        >
          <FaSearch size={19} />
        </Button>
      </div>
    </>
  );
};

interface ListSearchbarProps {
  items: string[];
}

const ListSearchbar = ({ items }: ListSearchbarProps) => {
  const [inputValue, setInputValue] = useState("");
  const [searchbarActive, setSearchbarActive] = useState(false);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase())
  );
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchbarActive === true) {
      const handleClickOutside = (e: MouseEvent) => {
        if (node.current && !node.current.contains(e.target as Node)) {
          setSearchbarActive(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [searchbarActive]);

  return (
    <>
      <div
        className={`flex items-center p-1 bg-black rounded-md max-w-[30rem] w-full border border-white border-opacity-10 flex-col gap-1   overflow-hidden transition-all duration-[0.2s] ease-in-out ${
          searchbarActive ? "h-[20rem]" : "h-[4rem]"
        } `}
        ref={node}
        onClick={() => setSearchbarActive(true)}
      >
        <div className="flex items-center gap-1 p-1 bg-black rounded-md max-w-[30rem] w-full">
          <Input
            className="focus:ring-0 focus:border-opacity-10 rounded-md rounded-r-sm w-full py-3 m-0 bg-zinc-950 border border-white border-opacity-5"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            variant="secondary"
            className="border border-white border-opacity-5 rounded-md  rounded-l-sm px-3 py-3"
          >
            <FaSearch size={19} />
          </Button>
        </div>
        <div className="flex flex-col gap-1 p-1 mt-1 bg-black rounded-md max-w-[30rem] w-full overflow-y-auto overscroll-y-contain">
          <ul className="flex items-center p-1 flex-col bg-black rounded-md max-w-[30rem] w-full">
            <>
              {filteredItems.length === 0 && (
                <li className="text-white text-[14px] p-2 rounded-md w-full opacity-50">
                  No items found
                </li>
              )}
              {filteredItems.map((item) => (
                <li
                  key={item}
                  className="text-white text-[14px] p-2 rounded-md hover:bg-white hover:bg-opacity-5 w-full opacity-80 hover:opacity-100 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </>
          </ul>
        </div>
      </div>
    </>
  );
};

const searchbar = () => {
  return (
    <>
      <DocsSEO
        title="Search Bar - hextastudio/ui"
        description="A modern searchbar component."
        image="https://i.imgur.com/npji6q5.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Searchbar"
            description="A modern searchbar component."
          />
          <DocsPreview className="p-4" title="Modern Searchbar">
            <ModernSearchBar />
          </DocsPreview>
          <InstallationSteps
            component={["Button", "Input"]}
            imports={["Button", "Input"]}
          />
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`import { Button } from "@/components/hexta-ui/Button";
import { Input } from "@/components/hexta-ui/Input";
import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const ModernSearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="flex items-center p-1 bg-black rounded-full  max-w-[30rem] w-full border border-white border-opacity-10 gap-1">
        <Input
          className="focus:ring-0 focus:border-opacity-10 rounded-full py-3 m-0 bg-zinc-950 border border-white border-opacity-5 w-full"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          variant="secondary"
          className="border border-white border-opacity-5 rounded-full px-3 py-3"
        >
          <FaSearch size={19} />
        </Button>
      </div>
    </>
  );
};
`}
          />
          <DocsPreview className="p-4 h-[30rem]" title="Searchbar with items">
            <ListSearchbar
              items={[
                "Next.js",
                "React",
                "Vue",
                "Angular",
                "Svelte",
                "TailwindCSS",
                "hextastudio/ui",
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
                "SCSS",
              ]}
            />
          </DocsPreview>{" "}
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`import { Button } from "@/components/hexta-ui/Button";
import { Input } from "@/components/hexta-ui/Input";
import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface ListSearchbarProps {
  items: string[];
}

const ListSearchbar = ({ items }: ListSearchbarProps) => {
  const [inputValue, setInputValue] = useState("");
  const [searchbarActive, setSearchbarActive] = useState(false);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase())
  );
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchbarActive === true) {
      const handleClickOutside = (e: MouseEvent) => {
        if (node.current && !node.current.contains(e.target as Node)) {
          setSearchbarActive(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [searchbarActive]);

  return (
    <>
      <div
        className={\`flex items-center p-1 bg-black rounded-md max-w-[30rem] w-full border border-white border-opacity-10 flex-col gap-1   overflow-hidden transition-all duration-[0.2s] ease-in-out \${
          searchbarActive ? "h-[20rem]" : "h-[4rem]"
        } \`}
        ref={node}
        onClick={() => setSearchbarActive(true)}
      >
        <div className="flex items-center gap-1 p-1 bg-black rounded-md max-w-[30rem] w-full">
          <Input
            className="focus:ring-0 focus:border-opacity-10 rounded-md rounded-r-sm w-full py-3 m-0 bg-zinc-950 border border-white border-opacity-5"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            variant="secondary"
            className="border border-white border-opacity-5 rounded-md  rounded-l-sm px-3 py-3"
          >
            <FaSearch size={19} />
          </Button>
        </div>
        <div className="flex flex-col gap-1 p-1 mt-1 bg-black rounded-md max-w-[30rem] w-full overflow-y-auto overscroll-y-contain">
          <ul className="flex items-center p-1 flex-col bg-black rounded-md max-w-[30rem] w-full">
            <>
              {filteredItems.length === 0 && (
                <li className="text-white text-[14px] p-2 rounded-md w-full opacity-50">
                  No items found
                </li>
              )}
              {filteredItems.map((item) => (
                <li
                  key={item}
                  className="text-white text-[14px] p-2 rounded-md hover:bg-white hover:bg-opacity-5 w-full opacity-80 hover:opacity-100 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </>
          </ul>
        </div>
      </div>
    </>
  );
};`}
          />
          <CodeBlock
            title="Usage"
            lang="tsx"
            filename="tsx"
            code={`<ListSearchbar
  items={[
    "Next.js",
    "React",
    "Vue",
    "Angular",
    "Svelte",
    "TailwindCSS",
    "hextastudio/ui",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SCSS",
  ]}
/>`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default searchbar;
