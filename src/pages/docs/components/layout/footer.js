import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";
import Image from "next/image";
import { NextSeo } from "next-seo";

export const BasicFooterPreview = () => {
  return (
    <footer className="w-full py-8 bg-[#080808] border-t border-t-zinc-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} HextaUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export const FooterWithLinksPreview = () => {
  return (
    <footer className="py-8 w-full  bg-[#080808] border-t border-t-zinc-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="mb-4 font-bold text-white">Company</h3>
            <ul className="text-sm list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="mb-4 font-bold text-white">Resources</h3>
            <ul className="text-sm list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-white">Follow Us</h3>
            <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
              HextaUI
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} HextaUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export const FooterWithSubscribePreview = () => {
  return (
    <footer className="py-8 w-full  bg-[#080808] border-t border-t-zinc-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-4">
          <div className="mb-6 md:mb-0">
            <h3 className="mb-4 font-bold text-white">
              Subscribe to our newsletter
            </h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 text-sm border border-white rounded border-opacity-5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 focus:outline-offset-2 text-opacity-90 text-md"
              />
              <button
                type="submit"
                className="px-4 py-2  bg-white border border-zinc-900 text-black flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="mb-4 font-bold text-white">Follow Us</h3>
            <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
              HextaUI
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} HextaUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export const FooterWithContactInfo = () => {
  return (
    <footer className="py-8 w-full bg-[#080808] border-t border-t-zinc-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="mb-4 font-bold text-white">Contact Us</h3>
            <ul className="text-sm text-gray-400 list-none">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt"></i>
                123 Main Street, Anytown USA
              </li>
              <li className="mb-2">
                <i className="fas fa-phone"></i>
                (555) 123-4567
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                hi@preetsuthar.me
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="mb-4 font-bold text-white">Quick Links</h3>
            <ul className="text-sm list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-white">Follow Us</h3>
            <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
              HextaUI
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} HextaUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export const FooterWithLogoAndSocial = () => {
  return (
    <footer className="py-8 w-full bg-[#080808] border-t border-t-zinc-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <Image
                src="https://placeholder.co/50"
                alt="HextaUI Logo"
                className="h-8 mr-2"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <span className="text-xl font-bold text-white">HextaUI</span>
            </a>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-white">Follow Us</h3>
            <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
              HextaUI
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} HextaUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export const FooterWithLanguageSelector = () => {
  return (
    <footer className="py-8 w-full bg-[#080808] border-t border-t-zinc-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="mb-4 font-bold text-white">Language</h3>
            <select
              className="px-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="mb-4 font-bold text-white">Company</h3>
            <ul className="text-sm list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-white">Follow Us</h3>
            <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
              HextaUI
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} HextaUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const footer = () => {
  return (
    <>
      {" "}
      <NextSeo
        title="Footer - HextaUI ✨"
        description="Collection of Footer components with different variants."
        canonical="https://ui.hextastudio.in/docs/components/layout/footer"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/footer",
          title: "Footer - HextaUI ✨",
          description:
            "Collection of Footer components with different variants.",
          images: [
            {
              url: "https://i.imgur.com/Jad7qle.png",
              width: 1920,
              height: 1080,
              alt: "Footer - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Footer - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Footer</h1>
            <p className="text-sm opacity-80">
              Collection of Footer components with different variants.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Basic Footer</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[25rem]">
                  <BasicFooterPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`export const BasicFooter = () => {
  return (
    <footer className="w-full py-8 bg-[#080808] border-t border-t-zinc-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} HextaUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Footer with Links</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[25rem]">
                  <FooterWithLinksPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`export const FooterWithLinks = () => {
  return (
    <footer className="py-8 w-full  bg-[#080808] border-t border-t-zinc-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="mb-4 font-bold text-white">Company</h3>
            <ul className="text-sm list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="mb-4 font-bold text-white">Resources</h3>
            <ul className="text-sm list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-white">Follow Us</h3>
            <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
              HextaUI
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} HextaUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Footer with Newsletter Subscription</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[25rem]">
                  <FooterWithSubscribePreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`export const FooterWithSubscribe= () => {
  return (
    <footer className="py-8 w-full  bg-[#080808] border-t border-t-zinc-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-4">
          <div className="mb-6 md:mb-0">
            <h3 className="mb-4 font-bold text-white">
              Subscribe to our newsletter
            </h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 text-sm border border-white rounded border-opacity-5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 focus:outline-offset-2 text-opacity-90 text-md"
              />
              <button
                type="submit"
                className="px-4 py-2  bg-white border border-zinc-900 text-black flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="mb-4 font-bold text-white">Follow Us</h3>
            <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
              HextaUI
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} HextaUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Footer with contact information</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[25rem]">
                  <FooterWithContactInfo />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`export const FooterWithContactInfo = () => {
  return (
    <footer className="py-8 w-full bg-[#080808] border-t border-t-zinc-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="mb-4 font-bold text-white">Contact Us</h3>
            <ul className="text-sm text-gray-400 list-none">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt"></i>
                123 Main Street, Anytown USA
              </li>
              <li className="mb-2">
                <i className="fas fa-phone"></i>
                (555) 123-4567
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                hi@preetsuthar.me
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="mb-4 font-bold text-white">Quick Links</h3>
            <ul className="text-sm list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-white">Follow Us</h3>
            <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
              HextaUI
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} HextaUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Footer with Logo and Social Links</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[25rem]">
                  <FooterWithLogoAndSocial />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`export const FooterWithLogoAndSocial = () => {
  return (
    <footer className="py-8 w-full bg-[#080808] border-t border-t-zinc-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <Image src="https://placeholder.co/50" alt="HextaUI Logo" className="h-8 mr-2" />
              <span className="text-xl font-bold text-white">HextaUI</span>
            </a>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-white">Follow Us</h3>
            <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
              HextaUI
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} HextaUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Footer with Language Selector</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[25rem]">
                  <FooterWithLanguageSelector />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`export const FooterWithLanguageSelector = () => {
return (
    <footer className="py-8 w-full bg-[#080808] border-t border-t-zinc-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between">
            <div className="mb-6 md:mb-0">
                <h3 className="mb-4 font-bold text-white">Language</h3>
                <select
                className="px-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
                defaultValue="en"
                >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                </select>
            </div>
            <div className="mb-6 md:mb-0">
                <h3 className="mb-4 font-bold text-white">Company</h3>
                <ul className="text-sm list-none">
                    <li className="mb-2">
                        <a href="#" className="text-gray-400 hover:text-white">
                        About
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="text-gray-400 hover:text-white">
                        Careers
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white">
                        Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="mb-4 font-bold text-white">Follow Us</h3>
                <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
                HextaUI
                </button>
            </div>
            </div>
            <div className="flex justify-center mt-8">
                <p className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} HextaUI. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
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

export default footer;
