import Link from "next/link";
import React, { useState, useEffect } from "react";

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showResources, setShowResources] = useState(true);
  const [showModernComponents, setShowModernComponents] = useState(true);
  const [showActionComponents, setShowActionComponents] = useState(true);
  const [showDataComponents, setShowDataComponents] = useState(true);

  const toggleResources = () => {
    setShowResources(!showResources);
  };
  const toggleModernComponents = () => {
    setShowModernComponents(!showModernComponents);
  };
  const toggleActionComponents = () => {
    setShowActionComponents(!showActionComponents);
  };
  const toggleDataComponents = () => {
    setShowDataComponents(!showDataComponents);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 900px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const componentLinks = [
    {
      name: "Magnetic Button",
      url: "magnetic-button",
    },
    {
      name: "White Ray",
      url: "white-ray",
    },
    {
      name: "Text Reveal v1",
      url: "text-reveal-v1",
    },
    {
      name: "Photo Trailing Effect",
      url: "photo-trailing-mousemove",
    },
    {
      name: "Water Drop Effect",
      url: "water-drop-effect",
    },
    {
      name: "Hacker Text Effect",
      url: "hacker-text-effect",
    },
    {
      name: "Floating Image Gallery",
      url: "floating-image-gallery",
    },
    {
      name: "Infinite Text Scroll v1",
      url: "infinite-text-scroll-v1",
    },
  ];
  const actionComponentLinks = [
    {
      name: "Buttons",
      url: "buttons",
    },
  ];
  const layoutComponentLinks = [
    {
      name: "Badges",
      url: "badges",
    },
    {
      name: "Avatars",
      url: "avatars",
    },
  ];
  return (
    <>
      <div
        className="fixed left-[1rem] p-[9px] cursor-pointer top-[5.3rem] border border-zinc-800 rounded bg-black hidden max-[900px]:flex z-[99] "
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M14 5H2V3h12zm0 4H2V7h12zM2 13h12v-2H2z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <aside
        className={`z-10 fixed flex flex-col gap-4 p-10 pb-20 bg-black border-r-2 docs-sidebar h-full max-[900px]:fixed overflow-auto  ${
          sidebarOpen ? "translate-x-0" : "translate-x-[-60rem]"
        } ${!isMobile && "translate-x-[0rem]"}`}
        style={{
          borderRight: "1px solid #ffffff20",
          minWidth: "16rem",
          // transform:
          //   isMobile && sidebarOpen ? "translateX(0)" : "translateX(-60rem)",
        }}
      >
        <div
          className="absolute w-fit justify-end items-end ml-auto right-[1rem] p-[9px] cursor-pointer top-[1rem] border border-zinc-800 rounded bg-black hidden max-[900px]:flex z-[99999999999]"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
            />
          </svg>
        </div>
        <div className="relative bg-black sidebar-section">
          <p className="p-2 text-sm font-bold uppercase rounded-md bg-zinc-900">
            INFO
          </p>
          <ul className="p-2">
            <li>
              <span className="text-sm opacity-60">Stay updated </span>
              <Link
                className="text-sm blue-link w-fit"
                href="https://x.com/preetsuthar17"
                target="_blank"
              >
                @preetsuthar17
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative bg-black sidebar-section">
          <p
            className="text-sm font-bold uppercase  mb-[5px] cursor-pointer flex items-center gap-1 justify-between p-2 bg-zinc-900 rounded-md"
            onClick={toggleResources}
          >
            Resources{" "}
            {showResources ? (
              <span className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
                  />
                </svg>
              </span>
            )}
          </p>
          {showResources && (
            <ul className="flex flex-col gap-[3px] p-2">
              <li>
                <Link
                  className="flex items-center gap-1 text-sm transition-all opacity-60 hover:opacity-90 w-fit"
                  href="/docs/resources/install-next"
                >
                  Install Next.js
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-1 text-sm transition-all opacity-60 hover:opacity-90 w-fit"
                  href="/docs/resources/install-tailwind"
                >
                  Install Tailwind CSS
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-1 text-sm transition-all opacity-60 hover:opacity-90 w-fit"
                  href="/docs/resources/install-gsap"
                >
                  Install GSAP
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-1 text-sm transition-all opacity-60 hover:opacity-90 w-fit"
                  href="/docs/resources/install-framer-motion"
                >
                  Install Framer Motion
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="sidebar-section">
          <p
            className="text-sm font-bold uppercase  mb-[5px] cursor-pointer flex items-center gap-1 justify-between p-2 bg-zinc-900 rounded-md"
            onClick={toggleModernComponents}
          >
            Modern{" "}
            {showModernComponents ? (
              <span className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
                  />
                </svg>
              </span>
            )}
          </p>
          {showModernComponents && (
            <ul className="flex flex-col gap-[3px] p-2">
              {componentLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className={`flex items-center gap-1 text-sm transition-all opacity-60 hover:opacity-90 w-fit`}
                    href={`/docs/components/modern/${link.url}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="sidebar-section">
          <p
            className="text-sm font-bold uppercase  mb-[5px] cursor-pointer flex items-center gap-1 justify-between p-2 bg-zinc-900 rounded-md"
            onClick={toggleActionComponents}
          >
            Action{" "}
            {showActionComponents ? (
              <span className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
                  />
                </svg>
              </span>
            )}
          </p>
          {showActionComponents && (
            <ul className="flex flex-col gap-[3px] p-2">
              {actionComponentLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className={`flex items-center gap-1 text-sm transition-all opacity-60 hover:opacity-90 w-fit`}
                    href={`/docs/components/action/${link.url}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>{" "}
        <div className="sidebar-section">
          <p
            className="text-sm font-bold uppercase  mb-[5px] cursor-pointer flex items-center gap-1 justify-between p-2 bg-zinc-900 rounded-md"
            onClick={toggleDataComponents}
          >
            Data Display{" "}
            {showDataComponents ? (
              <span className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
                  />
                </svg>
              </span>
            )}
          </p>
          {showDataComponents && (
            <ul className="flex flex-col gap-[3px] p-2">
              {layoutComponentLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className={`flex items-center gap-1 text-sm transition-all opacity-60 hover:opacity-90 w-fit`}
                    href={`/docs/components/layout/${link.url}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </>
  );
};
