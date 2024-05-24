import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

export const BreadcrumbLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className={cn(
      "text-[14px] opacity-60 hover:opacity-90 transition-all cursor-pointer flex items-center font-medium"
    )}
  >
    {children}
  </Link>
);

export const BreadcrumbPage = ({ children }: { children: React.ReactNode }) => (
  <span
    className={cn(
      "text-[14px] opacity-100 transition-all flex items-center font-medium"
    )}
  >
    {children}
  </span>
);

export const BreadcrumbSeparator = () => (
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
);

export const BreadcrumbItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center">{children}</li>
);

export const BreadcrumbList = ({ children }: { children: React.ReactNode }) => (
  <ol className="flex flex-wrap items-center gap-2">{children}</ol>
);

export const Breadcrumb = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      {children}
    </nav>
  );
};
