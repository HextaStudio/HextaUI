import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";
import Link from "next/link";

export const BreadcrumbPreview = () => {
  return (
    <nav className="flex items-center">
      <ol className="flex flex-wrap items-center gap-4">
        <li>
          <Link
            href="/"
            className="text-[14px] opacity-60 hover:opacity-90 transition-all"
          >
            Home
          </Link>
        </li>
        <li>
          <span className="text-[14px]">/</span>
        </li>
        <li>
          <Link
            href="/"
            className="text-[14px] opacity-60 hover:opacity-90 transition-all"
          >
            Components
          </Link>
        </li>
        <li>
          <span className="text-[14px]">/</span>
        </li>
        <li>
          <Link
            href="/"
            className="text-[14px] opacity-100 hover:opacity-100 transition-all"
          >
            Breadcrumb
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export const BreadcrumbV2Preview = () => {
  return (
    <nav>
      <ol className="flex flex-wrap items-center gap-4">
        <li>
          <Link
            href="/"
            className="text-[14px] opacity-60 hover:opacity-90 transition-all"
          >
            Home
          </Link>
        </li>
        <li>
          <span className="text-[14px] flex items-center">
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
        <li>
          <Link
            href="/"
            className="text-[14px] opacity-60 hover:opacity-90 transition-all"
          >
            ...
          </Link>
        </li>
        <li>
          <span className="text-[14px] flex items-center">
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
        <li>
          <Link
            href="/"
            className="text-[14px] opacity-60 hover:opacity-90 transition-all"
          >
            Components
          </Link>
        </li>
        <li>
          <span className="text-[14px] flex items-center">
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
        <li>
          <Link
            href="/"
            className="text-[14px] opacity-100 hover:opacity-100 transition-all"
          >
            Breadcrumb
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export const LightBreadcrumbPreview = () => {
  return (
    <nav className="flex items-center">
      <ol className="flex flex-wrap items-center gap-4">
        <li>
          <Link
            href="/"
            className="text-[14px] text-gray-500 hover:text-gray-700 transition-all"
          >
            Home
          </Link>
        </li>
        <li>
          <span className="text-[14px] text-gray-500">/</span>
        </li>
        <li>
          <Link
            href="/"
            className="text-[14px] text-gray-500 hover:text-gray-700 transition-all"
          >
            Components
          </Link>
        </li>
        <li>
          <span className="text-[14px] text-gray-500">/</span>
        </li>
        <li>
          <Link
            href="/"
            className="text-[14px] text-gray-700 hover:text-gray-900 transition-all"
          >
            Breadcrumb
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export const LightBreadcrumbV2Preview = () => {
  return (
    <nav>
      <ol className="flex flex-wrap items-center gap-4">
        <li>
          <Link
            href="/"
            className="text-[14px] text-gray-500 hover:text-gray-700 transition-all"
          >
            Home
          </Link>
        </li>
        <li>
          <span className="text-[14px] flex items-center text-gray-500">
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
        <li>
          <Link
            href="/"
            className="text-[14px] text-gray-500 hover:text-gray-700 transition-all"
          >
            ...
          </Link>
        </li>
        <li>
          <span className="text-[14px] flex items-center text-gray-500">
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
        <li>
          <Link
            href="/"
            className="text-[14px] text-gray-500 hover:text-gray-700 transition-all"
          >
            Components
          </Link>
        </li>
        <li>
          <span className="text-[14px] flex items-center text-gray-500">
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
        <li>
          <Link
            href="/"
            className="text-[14px] text-gray-700 hover:text-gray-900 transition-all font-medium"
          >
            Breadcrumb
          </Link>
        </li>
      </ol>
    </nav>
  );
};

const breadcrumb = () => {
  return (
    <>
      <NextSeo
        title="Breadcrumb - HextaUI ✨"
        description="Displays the path to the current resource using a hierarchy of links."
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/breadcrumb",
          title: "Breadcrumb - HextaUI ✨",
          description:
            "Displays the path to the current resource using a hierarchy of links.",
          images: [
            {
              url: "https://i.imgur.com/oDya0tl.png",
              width: 1920,
              height: 1080,
              alt: "Breadcrumb - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Breadcrumb - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <div className="header">
            <h1 className="h1">Breadcrumb</h1>
            <p className="text-sm opacity-80">
              Displays the path to the current resource using a hierarchy of
              links.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[13rem] p-4">
                  <BreadcrumbPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<nav className="flex items-center">
    <ol className="flex flex-wrap items-center gap-4">
        <li>
            <Link
            href="/"
            className="text-[14px] opacity-60 hover:opacity-90 transition-all"
            >
            Home
            </Link>
        </li>
        <li>
            <span className="text-[14px]">/</span>
        </li>
        <li>
            <Link
            href="/"
            className="text-[14px] opacity-60 hover:opacity-90 transition-all"
            >
            Components
            </Link>
        </li>
        <li>
            <span className="text-[14px]">/</span>
        </li>
        <li>
            <Link
            href="/"
            className="text-[14px] opacity-100 hover:opacity-100 transition-all"
            >
            Breadcrumb
            </Link>
        </li>
    </ol>
</nav>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[13rem] p-4">
                  <BreadcrumbV2Preview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<nav>
    <ol className="flex flex-wrap items-center gap-4">
        <li>
            <Link
            href="/"
            className="text-[14px] opacity-60 hover:opacity-90 transition-all"
            >
            Home
            </Link>
        </li>
        <li>
            <span className="text-[14px] flex items-center">
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
        <li>
            <Link
            href="/"
            className="text-[14px] opacity-60 hover:opacity-90 transition-all"
            >
            ...
            </Link>
        </li>
        <li>
            <span className="text-[14px] flex items-center">
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
        <li>
            <Link
            href="/"
            className="text-[14px] opacity-60 hover:opacity-90 transition-all"
            >
            Components
            </Link>
        </li>
        <li>
            <span className="text-[14px] flex items-center">
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
        <li>
            <Link
            href="/"
            className="text-[14px] opacity-100 hover:opacity-100 transition-all"
            >
            Breadcrumb
            </Link>
        </li>
    </ol>
</nav>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Light Theme Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[13rem] p-4 bg-white">
                  <LightBreadcrumbPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<nav className="flex items-center">
<ol className="flex flex-wrap items-center gap-4">
    <li>
    <Link
        href="/"
        className="text-[14px] text-gray-500 hover:text-gray-700 transition-all"
    >
        Home
    </Link>
    </li>
    <li>
    <span className="text-[14px] text-gray-500">/</span>
    </li>
    <li>
    <Link
        href="/"
        className="text-[14px] text-gray-500 hover:text-gray-700 transition-all"
    >
        Components
    </Link>
    </li>
    <li>
    <span className="text-[14px] text-gray-500">/</span>
    </li>
    <li>
    <Link
        href="/"
        className="text-[14px] text-gray-700 hover:text-gray-900 transition-all"
    >
        Breadcrumb
    </Link>
    </li>
</ol>
</nav>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Light Theme Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[13rem] p-4 bg-white">
                  <LightBreadcrumbV2Preview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<nav>
    <ol className="flex flex-wrap items-center gap-4">
        <li>
        <Link
            href="/"
            className="text-[14px] text-gray-500 hover:text-gray-700 transition-all"
        >
            Home
        </Link>
        </li>
        <li>
        <span className="text-[14px] flex items-center text-gray-500">
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
        <li>
        <Link
            href="/"
            className="text-[14px] text-gray-500 hover:text-gray-700 transition-all"
        >
            ...
        </Link>
        </li>
        <li>
        <span className="text-[14px] flex items-center text-gray-500">
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
        <li>
        <Link
            href="/"
            className="text-[14px] text-gray-500 hover:text-gray-700 transition-all"
        >
            Components
        </Link>
        </li>
        <li>
        <span className="text-[14px] flex items-center text-gray-500">
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
        <li>
        <Link
            href="/"
            className="text-[14px] text-gray-700 hover:text-gray-900 transition-all"
        >
            Breadcrumb
        </Link>
        </li>
    </ol>
    </nav>`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default breadcrumb;
