import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";

export const TitleOnlyNavbarPreview = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full px-4 py-2 m-4">
        <div>
          <p className="text-xl font-bold tracking-tighter">HextaUI</p>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex gap-1 text-sm">
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export const TitleButtonNavbarPreview = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full px-4 py-2 m-4">
        <div>
          <p className="text-xl font-bold tracking-tighter">HextaUI</p>
        </div>
        <div className="flex items-center justify-center">
          <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
            Let's Talk
          </button>
        </div>
      </nav>
    </>
  );
};

export const TitleSearchImageNavbarPreview = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full px-4 py-2 m-4">
        <div>
          <p className="text-xl font-bold tracking-tighter">HextaUI</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <input
            type="text"
            className="max-[456px]:hidden px-1 py-2 m-1 text-sm border border-white rounded border-opacity-5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 focus:outline-offset-2 text-opacity-90 text-md"
            placeholder="Search"
          />
          <img
            src="https://source.unsplash.com/random/35x35"
            aria-placeholder="blur"
            alt="logo"
            loading="lazy"
            className="flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>
      </nav>
    </>
  );
};

export const TitleLinksCTANavbarPreview = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full px-4 py-2 m-4">
        <div>
          <p className="text-xl font-bold tracking-tighter">HextaUI</p>
        </div>
        <div className="flex items-center justify-center max-[456px]:hidden">
          <ul className="flex gap-1 text-sm">
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
            Let's Talk
          </button>
        </div>
      </nav>
    </>
  );
};

export const TitleLinksNavbarPreview = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full px-4 py-2 m-4">
        <div>
          <p className="text-xl font-bold tracking-tighter">HextaUI</p>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex gap-1 text-md">
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export const IconLinksNavbarPreview = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full px-4 py-2 m-4">
        <div className="">
          <img
            src="https://placeholder.co/100"
            aria-placeholder="blur"
            alt="logo"
            loading="lazy"
            className="flex items-center justify-center rounded-full"
            width={50}
            height={50}
          />
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex gap-1 text-md">
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export const TitleSearchButtonNavbarPreview = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full px-4 py-2 m-4">
        <div>
          <p className="text-xl font-bold tracking-tighter">HextaUI</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <input
            type="text"
            className="px-1 py-2 m-1 text-sm border border-white rounded border-opacity-5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 focus:outline-offset-2 text-opacity-90 text-md"
            placeholder="Search"
          />
          <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
            Let's Talk
          </button>
        </div>
      </nav>
    </>
  );
};

export const TitleIconLinksNavbarPreview = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full px-4 py-2 m-4">
        <div>
          <p className="text-xl font-bold tracking-tighter">HextaUI</p>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex gap-1 text-md">
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:opacity-100"
                href="#"
              >
                <img
                  src="https://placeholder.co/100"
                  aria-placeholder="blur"
                  alt="icon"
                  loading="lazy"
                  className="rounded-full w-9 h-9"
                />
              </a>
            </li>
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:opacity-100"
                href="#"
              >
                <img
                  src="https://placeholder.co/100"
                  aria-placeholder="blur"
                  alt="icon"
                  loading="lazy"
                  className="rounded-full w-9 h-9"
                />
              </a>
            </li>
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:opacity-100"
                href="#"
              >
                <img
                  src="https://placeholder.co/100"
                  aria-placeholder="blur"
                  alt="icon"
                  loading="lazy"
                  className="rounded-full w-9 h-9"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export const TitleDropdownNavbarPreview = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full px-4 py-2 m-4">
        <div>
          <p className="text-xl font-bold tracking-tighter">HextaUI</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative inline-block text-left">
            <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
              Services
              <svg
                className="inline-block w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Service 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Service 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Service 3
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export const TitleResponsiveNavbarPreview = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full px-4 py-2 m-4">
        <div>
          <p className="text-xl font-bold tracking-tighter">HextaUI</p>
        </div>
        <div className="block lg:hidden">
          <button
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 5h18a1 1 0 010 2H3a1 1 0 010-2zm0 6h18a1 1 0 010 2H3a1 1 0 010-2zm0 6h18a1 1 0 010 2H3a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <ul className="flex gap-4 text-md">
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const navbar = () => {
  return (
    <>
      <NextSeo
        title="Navbar - HextaUI ✨"
        description="Collection of Navbar components with different variants."
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/navbar",
          title: "Navbar - HextaUI ✨",
          description:
            "Collection of Navbar components with different variants.",
          images: [
            {
              url: "https://i.imgur.com/BtOWZYT.png",
              width: 1920,
              height: 1080,
              alt: "Navbar - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Navbar - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <div className="header">
            <h1 className="h1">Navbar</h1>
            <p className="text-sm opacity-80">
              Collection of Navbar components with different variants.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Navbar with Title only</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <TitleOnlyNavbarPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<nav className="flex items-center justify-between w-full px-4 py-2 m-4">
<div>
  <p className="text-xl font-bold tracking-tighter">HextaUI</p>
</div>
<div className="flex items-center justify-center">
  <ul className="flex gap-1 text-sm">
    <li>
      <a
        className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
        href="#"
      >
        Home
      </a>
    </li>
    <li>
      <a
        className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
        href="#"
      >
        About
      </a>
    </li>
    <li>
      <a
        className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
        href="#"
      >
        Contact
      </a>
    </li>
  </ul>
</div>
</nav>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Navbar with Title and Button</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <TitleButtonNavbarPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<nav className="flex items-center justify-between w-full px-4 py-2 m-4">
<div>
  <p className="text-xl font-bold tracking-tighter">HextaUI</p>
</div>
<div className="flex items-center justify-center">
  <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
    Let's Talk
  </button>
</div>
</nav>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Navbar with Title, Search and Image</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <TitleSearchImageNavbarPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<nav className="flex items-center justify-between w-full px-4 py-2 m-4">
  <div>
    <p className="text-xl font-bold tracking-tighter">HextaUI</p>
  </div>
  <div className="flex items-center justify-center gap-4">
    <input
      type="text"
      className="max-[456px]:hidden px-1 py-2 m-1 text-sm border border-white rounded border-opacity-5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 focus:outline-offset-2 text-opacity-90 text-md"
      placeholder="Search"
    />
    <img
      src="https://source.unsplash.com/random/35x35"
      aria-placeholder="blur"
      alt="logo"
      loading="lazy"
      className="flex items-center justify-center rounded-full cursor-pointer"
    />
  </div>
</nav>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Navbar with Title, Links and CTA</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <TitleLinksCTANavbarPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<nav className="flex items-center justify-between w-full px-4 py-2 m-4">
  <div>
    <p className="text-xl font-bold tracking-tighter">HextaUI</p>
  </div>
  <div className="flex items-center justify-center max-[456px]:hidden">
    <ul className="flex gap-1 text-sm">
      <li>
        <a
          className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
          href="#"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
          href="#"
        >
          About
        </a>
      </li>
      <li>
        <a
          className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
          href="#"
        >
          Contact
        </a>
      </li>
    </ul>
  </div>
  <div>
    <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
      Let's Talk
    </button>
  </div>
</nav>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Navbar with Title and Links</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <TitleLinksNavbarPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<nav className="flex items-center justify-between w-full px-4 py-2 m-4">
  <div>
    <p className="text-xl font-bold tracking-tighter">HextaUI</p>
  </div>
  <div className="flex items-center justify-center">
    <ul className="flex gap-1 text-md">
      <li>
        <a
          className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
          href="#"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
          href="#"
        >
          About
        </a>
      </li>
      <li>
        <a
          className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
          href="#"
        >
          Contact
        </a>
      </li>
    </ul>
  </div>
</nav>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Navbar with Icon and Links</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <IconLinksNavbarPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<nav className="flex items-center justify-between w-full px-4 py-2 m-4">
  <div>
    <img
      src="https://placeholder.co/100"
      aria-placeholder="blur"
      alt="logo"
      loading="lazy"
      className="flex items-center justify-center rounded-full"
      width={50}
      height={50}
    />
  </div>
  <div className="flex items-center justify-center">
    <ul className="flex gap-1 text-md">
      <li>
        <a
          className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
          href="#"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
          href="#"
        >
          About
        </a>
      </li>
      <li>
        <a
          className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
          href="#"
        >
          Contact
        </a>
      </li>
    </ul>
  </div>
</nav>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Navbar with Title, Search and Button</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <TitleSearchButtonNavbarPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<nav className="flex items-center justify-between w-full px-4 py-2 m-4">
  <div>
    <p className="text-xl font-bold tracking-tighter">HextaUI</p>
  </div>
  <div className="flex items-center justify-center gap-4">
    <input
      type="text"
      className="px-1 py-2 m-1 text-sm border border-white rounded border-opacity-5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 focus:outline-offset-2 text-opacity-90 text-md"
      placeholder="Search"
    />
    <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
      Let's Talk
    </button>
  </div>
</nav>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Navbar with Title and Link Icons</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <TitleIconLinksNavbarPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<nav className="flex items-center justify-between w-full px-4 py-2 m-4">
  <div>
    <p className="text-xl font-bold tracking-tighter">HextaUI</p>
  </div>
  <div className="flex items-center justify-center">
    <ul className="flex gap-1 text-md">
      <li>
        <a
          className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:opacity-100"
          href="#"
        >
          <img
            src="https://placeholder.co/100"
            aria-placeholder="blur"
            alt="icon"
            loading="lazy"
            className="rounded-full w-9 h-9"
          />
        </a>
      </li>
      <li>
        <a
          className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:opacity-100"
          href="#"
        >
          <img
            src="https://placeholder.co/100"
            aria-placeholder="blur"
            alt="icon"
            loading="lazy"
            className="rounded-full w-9 h-9"
          />
        </a>
      </li>
      <li>
        <a
          className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:opacity-100"
          href="#"
        >
          <img
            src="https://placeholder.co/100"
            aria-placeholder="blur"
            alt="icon"
            loading="lazy"
            className="rounded-full w-9 h-9"
          />
        </a>
      </li>
    </ul>
  </div>
</nav>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Navbar with Title and Dropdown</h3>
                <div className="relative flex items-start justify-center  my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <TitleDropdownNavbarPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<nav className="flex items-center justify-between w-full px-4 py-2 m-4">
<div>
  <p className="text-xl font-bold tracking-tighter">HextaUI</p>
</div>
<div className="flex items-center justify-center">
  <div className="relative inline-block text-left">
    <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
      Services
      <svg
        className="inline-block w-5 h-5 ml-2 -mr-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
    <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Service 1
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Service 2
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Service 3
        </a>
      </div>
    </div>
  </div>
</div>
</nav>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="flex flex-wrap items-center gap-3 h3">
                  Navbar with Title and Links{" "}
                  <span className="px-3 py-1 bg-white border border-zinc-900 text-black rounded-full flex items-center font-[600] text-[12px]">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Responsive
                  </span>
                </h3>
                <div className="relative flex items-start justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <TitleResponsiveNavbarPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<nav className="flex items-center justify-between w-full px-4 py-2 m-4">
<div>
  <p className="text-xl font-bold tracking-tighter">HextaUI</p>
</div>
<div className="block lg:hidden">
  <button
    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
    aria-label="Toggle menu"
  >
    <svg
      className="w-6 h-6 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M3 5h18a1 1 0 010 2H3a1 1 0 010-2zm0 6h18a1 1 0 010 2H3a1 1 0 010-2zm0 6h18a1 1 0 010 2H3a1 1 0 010-2z"
        clipRule="evenodd"
      />
    </svg>
  </button>
</div>
<div className="hidden lg:flex lg:items-center lg:justify-center">
  <ul className="flex gap-4 text-md">
    <li>
      <a
        className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
        href="#"
      >
        Home
      </a>
    </li>
    <li>
      <a
        className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
        href="#"
      >
        About
      </a>
    </li>
    <li>
      <a
        className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
        href="#"
      >
        Contact
      </a>
    </li>
  </ul>
</div>
</nav>`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default navbar;
