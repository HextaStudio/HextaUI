import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

interface BreadcrumbItem {
  title: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <>
            <li key={index}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    `text-[14px] opacity-60 hover:opacity-90 transition-all cursor-pointer  font-medium ${
                      item.active && "opacity-100"
                    }`,
                  )}
                >
                  {item.title}
                </Link>
              ) : (
                <span
                  className={cn(
                    "text-[14px] opacity-60 hover:opacity-90 transition-all",
                  )}
                >
                  {item.title}
                </span>
              )}
            </li>
            {index !== items.length - 1 && (
              <li>
                <span className="text-[14px] flex items-center cursor-default font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z"
                    />
                  </svg>
                </span>
              </li>
            )}
          </>
        ))}
      </ol>
    </nav>
  );
};
