import React from "react";
import Image from "next/image";
import { Input } from "./Input";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};

interface NavbarProps {
  title?: string;
  links?: { label: string; href: string }[];
  cta?: { label: string; onClick: () => void };
  search?: boolean;
  image?: { src: string; alt: string; width: number; height: number };
  icons?: { src: string; alt: string; href: string }[];
  dropdown?: { label: string; options: { label: string; href: string }[] };
  responsive?: boolean;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  title,
  links,
  cta,
  search,
  image,
  icons,
  dropdown,
  responsive,
  className,
}) => {
  return (
    <nav
      className={cn(
        "flex  items-center justify-between w-full py-[1rem] px-[2rem] gap-3 bg-neutral-950",
        className
      )}
    >
      <div className="flex flex-row-reverse gap-3">
        {title && (
          <Link href="/#" className="text-xl font-bold tracking-tighter">
            {title}
          </Link>
        )}
        {image && (
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            aria-placeholder="blur"
            alt={image.alt}
            loading="lazy"
            className="flex items-center justify-center rounded-full"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        )}
      </div>
      <div className="flex items-center justify-center gap-4">
        {search && (
          <Input
            type="text"
            placeholder="Search"
            className="p-2 text-sm border border-gray-300 rounded-md"
          />
        )}
        {links && (
          <ul className="flex gap-3 text-md">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  className="p-2 text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:bg-[#ffffff08] hover:opacity-100"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        {icons && (
          <ul className="flex gap-1 text-md">
            {icons.map((icon, index) => (
              <li key={index}>
                <a
                  className="p-[10px] tracking-tighter text-[14px] rounded duration-[0.2s] transition-all opacity-80 hover:opacity-100"
                  href={icon.href}
                >
                  <Image
                    src={icon.src}
                    width={100}
                    height={100}
                    aria-placeholder="blur"
                    alt={icon.alt}
                    loading="lazy"
                    className="rounded-full w-9 h-9"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </a>
              </li>
            ))}
          </ul>
        )}
        {cta && (
          <button
            className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
            onClick={cta.onClick}
          >
            {cta.label}
          </button>
        )}
        {dropdown && (
          <div className="relative inline-block text-left">
            <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
              {dropdown.label}
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
                {dropdown.options.map((option, index) => (
                  <a
                    key={index}
                    href={option.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    {option.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {responsive && (
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
      )}
    </nav>
  );
};
