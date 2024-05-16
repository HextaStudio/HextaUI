import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LinkItem {
  label: string;
  href: string;
}

interface FooterProps {
  copyright?: string;
  title?: string;
  links?: {
    title?: string;
    items?: LinkItem[] | undefined;
  }[];
  subscribe?: boolean;
  contact?: {
    address?: string;
    phone?: string;
    email?: string;
  };
  logo?: {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    title?: string;
  };
  language?: {
    options: { value: string; label: string }[];
    defaultValue?: string;
  };
  social?: {
    label?: string;
    onClick?: () => void;
  };
}

export const Footer: React.FC<FooterProps> = ({
  title = "HextaUI",
  copyright = `© ${new Date().getFullYear()} ${title}. All rights reserved.`,
  links,
  subscribe,
  contact,
  logo,
  language,
  social,
}) => {
  return (
    <footer className="py-8 border-t border-t-zinc-800  max-w-[70rem] w-full mx-auto">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-4">
          {logo && logo.src && logo.width && (
            <div className="mb-6 md:mb-0">
              <Link href="#" className="flex flex-wrap items-center gap-3">
                <Image
                  src={logo.src}
                  alt={logo.alt || ""}
                  width={logo.width}
                  height={logo.height || logo.width}
                  objectFit="cover"
                  className="rounded-full"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <span className="text-xl font-bold text-white">
                  {logo.title}
                </span>
              </Link>
            </div>
          )}

          {links &&
            links.map((link, index) => (
              <div key={index} className="flex flex-col mb-6 md:mb-0">
                <h3 className="mb-4 font-bold text-white">{link.title}</h3>
                <ul className="text-sm list-none">
                  {link.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2">
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          {subscribe && (
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
          )}

          {contact && (
            <div className="mb-6 md:mb-0">
              <h3 className="mb-4 font-bold text-white">Contact Us</h3>
              <ul className="text-sm text-gray-400 list-none">
                <li className="mb-2">
                  <i className="fas fa-map-marker-alt"></i>
                  {contact.address}
                </li>
                <li className="mb-2">
                  <i className="fas fa-phone"></i>
                  {contact.phone}
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  {contact.email}
                </li>
              </ul>
            </div>
          )}

          {language && (
            <div className="mb-6 md:mb-0">
              <h3 className="mb-4 font-bold text-white">Language</h3>
              <select
                className="px-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
                defaultValue={language.defaultValue}
              >
                {language.options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {social && (
            <div>
              <h3 className="mb-4 font-bold text-white">Follow Us</h3>
              <button
                className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
                onClick={social.onClick}
              >
                {social.label}
              </button>
            </div>
          )}
        </div>
        <div className="flex justify-center mt-8">
          <p className="text-sm text-gray-400">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};
