import { CodeBlock } from "@/components/CodeBlock";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { NextSeo } from "next-seo";

import { useState } from "react";
import { Menu } from "@/components/hexta-ui/Menu";
import { Table } from "@/components/hexta-ui/Table";

import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const menus = () => {
  const data = [
    {
      propName: "items",
      propType: "Array",
      defaultValue: "null",
      description: "Array of menu items.",
    },
    {
      propName: "dividedItems",
      propType: "Array",
      defaultValue: "null",
      description: "Array of menu items with divider.",
    },
    {
      propName: "onOpen",
      propType: "function",

      defaultValue: "null",
      description: "Function to be called on open.",
    },
    {
      propName: "onClose",
      propType: "function",
      defaultValue: "null",
      description: "Function to be called on close.",
    },
    {
      propName: "isOpen",
      propType: "boolean",
      defaultValue: "false",
      description: "State to open the menu.",
    },
  ];

  const columns = [
    {
      label: "Prop Name",
      key: "propName",
    },
    {
      label: "Prop Type",
      key: "propType",
    },
    {
      label: "Default Value",
      key: "defaultValue",
    },
    {
      label: "Description",
      key: "description",
    },
  ];

  const menuItemsWithIcons = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/account", label: "Account", icon: <FaUser /> },
  ];

  const dividedItems = [{ href: "/logout", label: "Logout" }];

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/account", label: "Account" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {" "}
      <NextSeo
        title="Menus - HextaUI ✨"
        description="Collection of Menu components with different variants."
        canonical="https://ui.hextastudio.in/docs/components/layout/menus"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/menus",
          title: "Menus - HextaUI ✨",
          description: "Collection of Menu components with different variants.",
          images: [
            {
              url: "https://i.imgur.com/oe8BqaV.png",
              width: 1920,
              height: 1080,
              alt: "Menus - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Menus - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Menus</h1>
            <p className="text-sm opacity-80">
              Collection of Menu components with different variants.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Preview</h3>
                <div className=" flex items-start p-4 justify-end my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <div className="relative">
                    <button
                      className="p-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
                      onClick={toggleMenu}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M14 5H2V3h12zm0 4H2V7h12zM2 13h12v-2H2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>{" "}
                    <Menu
                      items={menuItems}
                      onOpen={toggleMenu}
                      onClose={toggleMenu}
                      isOpen={menuOpen}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Installation</h2>
            <CodeBlock
              lang="bash"
              filename="bash"
              code={`npm install @hextastudio/ui
# or
bun install @hextastudio/ui
# or
yarn add @hextastudio/ui
# or
pnpm add @hextastudio/ui`}
            />

            <CodeBlock lang="bash" filename="bash" code={`npx hexta-ui add`} />
            <CodeBlock
              lang="bash"
              filename="bash"
              code={`? Which framework are you using? (Use arrow keys)
> Next.js 
  React`}
            />
            <CodeBlock
              lang="bash"
              filename="bash"
              code={`? Which framework are you using? Next.js
? Which component would you like to install?
  AlertDialog
  Avatar
  Button
  Loader
> Menu
  Select
  Toast
  Toggle
  Tooltip`}
            />
            <CodeBlock
              lang="bash"
              filename="bash"
              code={`? Which framework are you using? Next.js         
? Which component would you like to install? Menu
✔ Menu component was added successfully — Guide to use Menu, https://ui.hextastudio.in/docs/components/layout/menu`}
            />
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`import { Menu } from "@/components/hexta-ui/Menu";`}
            />
          </div>
          <div>
            <h3 className="h3">Basic Menu</h3>
            <div className="relative flex items-start justify-end my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem] p-4">
              <div className="relative">
                <button
                  className="p-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M14 5H2V3h12zm0 4H2V7h12zM2 13h12v-2H2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>{" "}
                <Menu
                  items={menuItems}
                  onOpen={toggleMenu}
                  onClose={toggleMenu}
                  isOpen={menuOpen}
                />
              </div>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`import { useState } from "react";
import { Menu } from "@/components/hexta-ui/Menu";

export const Home = () => {

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/account", label: "Account" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div>
      <div className="relative">
        <button
          className="p-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14 5H2V3h12zm0 4H2V7h12zM2 13h12v-2H2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        
        <Menu
          items={menuItems}
          onOpen={toggleMenu}
          onClose={toggleMenu}
          isOpen={menuOpen}
        />
      </div>
    </div>
  );
}
`}
            />
          </div>
          <div>
            <h3 className="h3">Menu with Icons</h3>
            <div className="relative flex items-start justify-end my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem] p-4">
              <div className="relative">
                <button
                  className="p-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M14 5H2V3h12zm0 4H2V7h12zM2 13h12v-2H2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>{" "}
                <Menu
                  items={menuItemsWithIcons}
                  onOpen={toggleMenu}
                  onClose={toggleMenu}
                  isOpen={menuOpen}
                />
              </div>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`import { useState } from "react";
import { Menu } from "@/components/hexta-ui/Menu";

export const Home = () => {

  const menuItemsWithIcons = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/account", label: "Account", icon: <FaUser /> },
  ];
  
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div>
      <div className="relative">
        <button
          className="p-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14 5H2V3h12zm0 4H2V7h12zM2 13h12v-2H2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        
        <Menu
          items={menuItemsWithIcons}
          onOpen={toggleMenu}
          onClose={toggleMenu}
          isOpen={menuOpen}
        />
      </div>
    </div>
  );
}
`}
            />
          </div>
          <div>
            <h3 className="h3">Menu with Divider</h3>
            <div className="relative flex items-start justify-end my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem] p-4">
              <div className="relative">
                <button
                  className="p-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M14 5H2V3h12zm0 4H2V7h12zM2 13h12v-2H2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>{" "}
                <Menu
                  items={menuItems}
                  dividedItems={dividedItems}
                  onOpen={toggleMenu}
                  onClose={toggleMenu}
                  isOpen={menuOpen}
                />
              </div>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`import { useState } from "react";
import { Menu } from "@/components/hexta-ui/Menu";

export const Home = () => {

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/account", label: "Account" },
    ];
  
  const dividedItems = [{ href: "/logout", label: "Logout" }];
  
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <div>
      <div className="relative">
        <button
        className="p-[8px] bg-zinc-950 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
        onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14 5H2V3h12zm0 4H2V7h12zM2 13h12v-2H2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        
        <Menu
          items={menuItems}
          dividedItems={dividedItems}
          onOpen={toggleMenu}
          onClose={toggleMenu}
          isOpen={menuOpen}
        />
      </div>
    </div>
  );
}`}
            />
          </div>
          <Table columns={columns} data={data} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default menus;
