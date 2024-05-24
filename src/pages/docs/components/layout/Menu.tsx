import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";

import { Menu, MenuItem, MenuDivider } from "@/components/hexta-ui/Menu";
import { Table } from "@/components/hexta-ui/Table";

import { useState } from "react";
import { FaHome, FaSignOutAlt, FaUser } from "react-icons/fa";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import Link from "next/link";
import { FaGear } from "react-icons/fa6";

const menu = () => {
  const data = [
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

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <DocsSEO
        title="Menu - hextastudio/ui"
        description="A menu component for navigation."
        image="https://i.imgur.com/oe8BqaV.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Menu"
            description="A menu component for navigation."
          />
          <DocsPreview className="items-end justify-start p-4">
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
              <Menu onOpen={toggleMenu} onClose={toggleMenu} isOpen={menuOpen}>
                <MenuItem>
                  <Link
                    href="#"
                    className="flex items-center gap-3 h-full w-full"
                  >
                    <FaHome /> Home
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="#"
                    className="flex items-center gap-3 h-full w-full"
                  >
                    <FaUser /> About
                  </Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Link
                    href="#"
                    className="flex items-center gap-3 h-full w-full"
                  >
                    <FaGear /> Settings
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </DocsPreview>
          <InstallationSteps
            component="Menu"
            imports="Menu, MenuItem, MenuDivider"
          />
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`
import { useState } from "react";
import { FaHome, FaSignOutAlt, FaUser } from "react-icons/fa";

const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};

export const Home = () => {
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
      <Menu onOpen={toggleMenu} onClose={toggleMenu} isOpen={menuOpen}>
      <MenuItem>
        <Link
          href="#"
          className="flex items-center gap-3 h-full w-full"
        >
          <FaHome /> Home
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          href="#"
          className="flex items-center gap-3 h-full w-full"
        >
          <FaUser /> About
        </Link>
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <Link
          href="#"
          className="flex items-center gap-3 h-full w-full"
        >
          <FaGear /> Settings
        </Link>
      </MenuItem>
    </Menu>
  </div>
}`}
          />
          <Table columns={columns} data={data} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default menu;
