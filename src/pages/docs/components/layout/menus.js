import { CodeBlock } from "@/components/CodeBlock";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";

import { NextSeo } from "next-seo";

import { useState } from "react";
import Link from "next/link";

export const BasicMenuRight = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="px-[20px] py-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
        onClick={toggleMenu}
      >
        Menu
      </button>

      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 rounded-lg shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5">
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="#"
              className="block px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800"
              role="menuitem"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800"
              role="menuitem"
            >
              Account
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800"
              role="menuitem"
            >
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export const MenuWithButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="p-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
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

      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 rounded-lg shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5">
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="#"
              className="block px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800"
              role="menuitem"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800"
              role="menuitem"
            >
              Account
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800"
              role="menuitem"
            >
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export const MenuWithButtonAndIcons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="p-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
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

      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 rounded-lg shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5">
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="#"
              className="px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800 flex items-center gap-3"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-5v-6h-4v6zm5-9.975h4q0-.8-.6-1.313T12 8.2t-1.4.513t-.6 1.312"
                />
              </svg>{" "}
              Home
            </Link>
            <Link
              href="#"
              className="px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800 flex items-center gap-3"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                />
              </svg>{" "}
              Account
            </Link>
            <Link
              href="#"
              className="px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800 flex items-center gap-3"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
                />
              </svg>{" "}
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export const DividedMenuWithButtonAndIcons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="p-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
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

      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 rounded-lg shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5">
          <div
            className="flex flex-col gap-2 py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="#"
              className="px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800 flex items-center gap-3"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-5v-6h-4v6zm5-9.975h4q0-.8-.6-1.313T12 8.2t-1.4.513t-.6 1.312"
                />
              </svg>{" "}
              Home
            </Link>
            <Link
              href="#"
              className="px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800 flex items-center gap-3"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                />
              </svg>{" "}
              Account
            </Link>
            <hr className="opacity-30" />

            <Link
              href="#"
              className="px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800 flex items-center gap-3"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
                />
              </svg>{" "}
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const menus = () => {
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
                <h3 className="h3">Basic Right Menu</h3>
                <div className=" flex items-start p-4 justify-end my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <BasicMenuRight />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { useState } from "react";
import Link from "next/link";

export const BasicMenuRight = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="px-[20px] py-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
        onClick={toggleMenu}
      >
        Menu
      </button>

      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 rounded-lg shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5">
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="#"
              className="block px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800"
              role="menuitem"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800"
              role="menuitem"
            >
              Account
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800"
              role="menuitem"
            >
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Menu with Button</h3>
                <div className=" flex items-start p-4 justify-end my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <MenuWithButton />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { useState } from "react";
import Link from "next/link";

export const MenuWithButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="p-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
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

      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 rounded-lg shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5">
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="#"
              className="block px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800"
              role="menuitem"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800"
              role="menuitem"
            >
              Account
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800"
              role="menuitem"
            >
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Menu with Button and Icons</h3>
                <div className=" flex items-start p-4 justify-end my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <MenuWithButtonAndIcons />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { useState } from "react";
import Link from "next/link";

export const MenuWithButtonAndIcons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="p-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
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

      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 rounded-lg shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5">
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="#"
              className="px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800 flex items-center gap-3"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-5v-6h-4v6zm5-9.975h4q0-.8-.6-1.313T12 8.2t-1.4.513t-.6 1.312"
                />
              </svg>{" "}
              Home
            </Link>
            <Link
              href="#"
              className="px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800 flex items-center gap-3"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                />
              </svg>{" "}
              Account
            </Link>
            <Link
              href="#"
              className="px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800 flex items-center gap-3"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
                />
              </svg>{" "}
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}; `}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Menu with Button, Icons and Divider</h3>
                <div className=" flex items-start p-4 justify-end my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[20rem]">
                  <DividedMenuWithButtonAndIcons />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { useState } from "react";
import Link from "next/link";

export const DividedMenuWithButtonAndIcons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="p-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
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

      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 rounded-lg shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5">
          <div
            className="flex flex-col gap-2 py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="#"
              className="px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800 flex items-center gap-3"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-5v-6h-4v6zm5-9.975h4q0-.8-.6-1.313T12 8.2t-1.4.513t-.6 1.312"
                />
              </svg>{" "}
              Home
            </Link>
            <Link
              href="#"
              className="px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800 flex items-center gap-3"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                />
              </svg>{" "}
              Account
            </Link>
            <hr className="opacity-30" />

            <Link
              href="#"
              className="px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800 flex items-center gap-3"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
                />
              </svg>{" "}
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default menus;
