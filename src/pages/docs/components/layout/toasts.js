import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";

export const BasicToastPreview = ({ type = "default" }) => {
  const toastClasses = {
    default:
      "bg-black bg-opacity-20 border border-bottom-2 border-zinc-800 border-opacity-80  text-zinc-100 font-semi-bold",
    error:
      "bg-red-900 bg-opacity-20 border border-bottom-2 border-red-800 border-opacity-80  text-red-100 font-semi-bold",
    info: "bg-blue-900 bg-opacity-20 border border-bottom-2 border-blue-800 border-opacity-80  text-blue-100 font-semi-bold",
    success:
      "bg-green-900 bg-opacity-20 border border-bottom-2 border-green-800  border-opacity-80 text-green-100 font-semi-bold",
  };

  return (
    <div
      className={`flex items-center justify-between h-fit p-4 m-4  rounded-lg border-b-2 gap-3 ${toastClasses[type]}`}
    >
      <div className="flex items-center justify-center">
        {type === "error" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
        {type === "info" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
        {type === "success" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
        {type === "default" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
      </div>
      <div className="flex items-center justify-center">
        <p className="text-[15px] font-semibold text-center flex items-center justify-center tracking-normal">
          {type === "error" && "Error Toast Component"}
          {type === "info" && "Info Toast Component"}
          {type === "success" && "Success Toast Component"}
          {type === "default" && "Basic Toast Component"}
        </p>
      </div>
    </div>
  );
};

export const ToastWithButtonPreview = ({ type = "default" }) => {
  const toastClasses = {
    default:
      "bg-black bg-opacity-20 border border-bottom-2 border-zinc-800 border-opacity-80  text-zinc-100 font-semi-bold",
    error:
      "bg-red-900 bg-opacity-20 border border-bottom-2 border-red-800 border-opacity-80  text-red-100 font-semi-bold",
    info: "bg-blue-900 bg-opacity-20 border border-bottom-2 border-blue-800 border-opacity-80  text-blue-100 font-semi-bold",
    success:
      "bg-green-900 bg-opacity-20 border border-bottom-2 border-green-800  border-opacity-80 text-green-100 font-semi-bold",
  };

  return (
    <div
      className={`flex items-center justify-between h-fit p-4 m-4  rounded-lg border-b-2 gap-3 ${toastClasses[type]}`}
    >
      <div className="flex items-center justify-center">
        {type === "error" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
        {type === "info" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
        {type === "success" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
        {type === "default" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
      </div>
      <div className="flex items-center justify-center">
        <p className="text-[15px] font-semibold text-center flex items-center justify-center tracking-normal">
          {type === "error" && "Error Toast Component"}
          {type === "info" && "Info Toast Component"}
          {type === "success" && "Success Toast Component"}
          {type === "default" && "Basic Toast Component"}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button className="p-[8px]  text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-900 transition-all duration-[0.4s]">
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
        </button>
      </div>
    </div>
  );
};

const Toasts = () => {
  return (
    <>
      {" "}
      <NextSeo
        title="Toasts - HextaUI ✨"
        description="Some awesome toasts component with different variants."
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/toasts",
          title: "Toasts - HextaUI ✨",
          description: "Some awesome toasts component with different variants.",
          images: [
            {
              url: "https://i.imgur.com/5P0bFAB.png",
              width: 1920,
              height: 1080,
              alt: "Toasts - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Toasts - HextaUI ✨",
        }}
        twitter={{
          handle: "@HextaStudio",
          site: "@HextaStudio",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "web components, web design, UI components, responsive design, modern design, reusable components, front-end development, web development, user interface, beautiful UI, stunning components, zero effort, copy-paste components, web elements, website building blocks, web templates, UI kits, design resources, front-end tools, web design inspiration, web design trends, web design solutions, design tools, web design assets, UI design, UX design, web design components, web UI, responsive web components, modern web components, beautiful web components, stunning web UI, web design elements, web UI kits, responsive UI kits, modern UI kits, web design assets, front-end web development, web development resources, web components library, web UI library, web design library, responsive web design, modern web design, beautiful web design, stunning web design, web design resources, web development tools, front-end web development tools, web design inspiration resources, web design trends resources, web design solutions resources, web UI solutions, web design asset resources, UI design resources, UX design resources, web component templates, web UI templates, web design templates, responsive web templates, modern web templates, beautiful web templates, stunning web templates, web template kits, web component kits, web UI kits, web design kits, responsive web kits, modern web kits, beautiful web kits, stunning web kits, no-code web design, easy web design, web design made easy, easy web development, no-code web development, web design for beginners, web development for beginners, beginner-friendly web design, beginner-friendly web development, drag-and-drop web design, drag-and-drop web development, visual web design, visual web development, WYSIWYG web design, WYSIWYG web development, web design platforms, web development platforms, web design tools, web development tools, web design software, web development software, web design apps, web development apps, web design plugins, web development plugins, web design extensions, web development extensions, web design integrations, web development integrations, web design solutions, web development solutions, web design services, web development services, web design agencies, web development agencies, web design freelancers, web development freelancers, web design consultants, web development consultants, web design experts, web development experts, web design professionals, web development professionals, web design gurus, web development gurus, web design maestros, web development maestros, web design masters, web development masters",
          },
        ]}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Toasts</h1>
            <p className="text-sm opacity-80">
              Some awesome toasts component with different variants.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div className="installation">
                <h3 className="h3">Basic Toast</h3>
                <CodeBlock
                  lang="jsx"
                  filename="jsx"
                  code={`export const BasicToast = ({ type = "default" }) => {
                    
  const toastClasses = {
    default:
      "bg-black bg-opacity-20 border border-bottom-2 border-zinc-800 border-opacity-80  text-zinc-100 font-semi-bold",
    error:
      "bg-red-900 bg-opacity-20 border border-bottom-2 border-red-800 border-opacity-80  text-red-100 font-semi-bold",
    info: "bg-blue-900 bg-opacity-20 border border-bottom-2 border-blue-800 border-opacity-80  text-blue-100 font-semi-bold",
    success:
      "bg-green-900 bg-opacity-20 border border-bottom-2 border-green-800  border-opacity-80 text-green-100 font-semi-bold",
  };

  return (
    <div
      className={\`flex items-center justify-between  p-4 m-4  rounded-lg border-b-2 gap-3 \${toastClasses[type]}\`}
    >
      <div className="flex items-center justify-center">
        {type === "error" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
        {type === "info" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
        {type === "success" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
        {type === "default" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
      </div>
      <div className="flex items-center justify-center">
        <p className="text-[15px] font-semibold text-center flex items-center justify-center tracking-normal">
          {type === "error" && "Error Toast Component"}
          {type === "info" && "Info Toast Component"}
          {type === "success" && "Success Toast Component"}
          {type === "default" && "Basic Toast Component"}
        </p>
      </div>
    </div>
  );
};`}
                />
              </div>
              <div>
                <h3 className="h3">Basic Toast</h3>
                <div className="relative flex  justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <BasicToastPreview />
                </div>
                <div className="installation">
                  <h3 className="h3">Usage</h3>
                  <CodeBlock
                    lang="jsx"
                    filename="jsx"
                    code={`<BasicToastPreview/>`}
                  />
                </div>
              </div>
              <div>
                <h3 className="h3">Error Toast</h3>
                <div className="relative flex  justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <BasicToastPreview type="error" />
                </div>
                <div className="installation">
                  <h3 className="h3">Usage</h3>
                  <CodeBlock
                    lang="jsx"
                    filename="jsx"
                    code={`<BasicToastPreview type="error" />`}
                  />
                </div>
              </div>
              <div>
                <h3 className="h3">Info Toast</h3>
                <div className="relative flex  justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <BasicToastPreview type="info" />
                </div>
                <div className="installation">
                  <h3 className="h3">Usage</h3>
                  <CodeBlock
                    lang="jsx"
                    filename="jsx"
                    code={`<BasicToastPreview type="info" />`}
                  />
                </div>
              </div>
              <div>
                <h3 className="h3">Success Toast</h3>
                <div className="relative flex  justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <BasicToastPreview type="success" />
                </div>
                <div className="installation">
                  <h3 className="h3">Usage</h3>
                  <CodeBlock
                    lang="jsx"
                    filename="jsx"
                    code={`<BasicToastPreview type="success" />`}
                  />
                </div>
              </div>
              <div>
                <div className="installation">
                  <h3 className="h3">Toast with Button</h3>
                  <CodeBlock
                    lang="jsx"
                    filename="jsx"
                    code={`export const ToastWithButton = ({ type = "default" }) => {
  const toastClasses = {
    default:
      "bg-black bg-opacity-20 border border-bottom-2 border-zinc-800 border-opacity-80  text-zinc-100 font-semi-bold",
    error:
      "bg-red-900 bg-opacity-20 border border-bottom-2 border-red-800 border-opacity-80  text-red-100 font-semi-bold",
    info: "bg-blue-900 bg-opacity-20 border border-bottom-2 border-blue-800 border-opacity-80  text-blue-100 font-semi-bold",
    success:
      "bg-green-900 bg-opacity-20 border border-bottom-2 border-green-800  border-opacity-80 text-green-100 font-semi-bold",
  };

  return (
    <div
      className={\`flex items-center justify-between h-fit p-4 m-4  rounded-lg border-b-2 gap-3 \${toastClasses[type]}\`}
    >
      <div className="flex items-center justify-center">
        {type === "error" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
        {type === "info" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
        {type === "success" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
        {type === "default" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
      </div>
      <div className="flex items-center justify-center">
        <p className="text-[15px] font-semibold text-center flex items-center justify-center tracking-normal">
          {type === "error" && "Error Toast Component"}
          {type === "info" && "Info Toast Component"}
          {type === "success" && "Success Toast Component"}
          {type === "default" && "Basic Toast Component"}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button className="p-[8px]  text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-900 transition-all duration-[0.4s]">
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
        </button>
      </div>
    </div>
  );
};`}
                  />
                </div>
                <div>
                  <h3 className="h3">Basic Toast</h3>
                  <div className="relative flex  justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                    <ToastWithButtonPreview />
                  </div>
                  <div className="installation">
                    <h3 className="h3">Usage</h3>
                    <CodeBlock
                      lang="jsx"
                      filename="jsx"
                      code={`<ToastWithButton/>`}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="h3">Error Toast</h3>
                  <div className="relative flex  justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                    <ToastWithButtonPreview type="error" />
                  </div>
                  <div className="installation">
                    <h3 className="h3">Usage</h3>
                    <CodeBlock
                      lang="jsx"
                      filename="jsx"
                      code={`<ToastWithButton type="error" />`}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="h3">Info Toast</h3>
                  <div className="relative flex  justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                    <ToastWithButtonPreview type="info" />
                  </div>
                  <div className="installation">
                    <h3 className="h3">Usage</h3>
                    <CodeBlock
                      lang="jsx"
                      filename="jsx"
                      code={`<ToastWithButton type="info" />`}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="h3">Success Toast</h3>
                  <div className="relative flex  justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                    <ToastWithButtonPreview type="success" />
                  </div>
                  <div className="installation">
                    <h3 className="h3">Usage</h3>
                    <CodeBlock
                      lang="jsx"
                      filename="jsx"
                      code={`<ToastWithButton type="success" />`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default Toasts;
