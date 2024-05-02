import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";
import Image from "next/legacy/image";

export const BasicAvatarPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* Default Avatar */}
        <div className="avatar">
          <Image
            src="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww"
            loading="lazy"
            alt="Avatar"
            quality={100}
            width={80}
            height={80}
            objectFit="cover"
            placeholder="blur"
            blurDataURL="https://placeholder.co/80"
            className="rounded-full shadow-sm pointer-events-none"
          />
        </div>

        {/* Circular Avatar */}
        <div className="avatar">
          <Image
            src="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww"
            loading="lazy"
            alt="Avatar"
            quality={100}
            width={80}
            height={80}
            objectFit="cover"
            placeholder="blur"
            blurDataURL="https://placeholder.co/80"
            className="shadow-sm rounded-3xl"
            pointer-events-none
          />
        </div>

        {/* Squared Avatar */}
        <div className="avatar">
          <Image
            src="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww"
            loading="lazy"
            alt="Avatar"
            quality={100}
            width={80}
            height={80}
            objectFit="cover"
            placeholder="blur"
            blurDataURL="https://placeholder.co/80"
            className="rounded-sm shadow-sm pointer-events-none"
          />
        </div>
      </div>
    </>
  );
};

export const AvatarWithStatusPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* Avatar with Online Status */}
        <div className="relative avatar">
          <Image
            src="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww"
            loading="lazy"
            alt="Avatar"
            quality={100}
            width={80}
            height={80}
            objectFit="cover"
            placeholder="blur"
            blurDataURL="https://placeholder.co/80"
            className="rounded-full shadow-sm pointer-events-none"
          />
          <span className="absolute bottom-[4px] right-[4px] block w-4 h-4 bg-green-500 rounded-full ring ring-white"></span>
        </div>

        {/* Avatar with Offline Status */}
        <div className="relative avatar">
          <Image
            src="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww"
            loading="lazy"
            alt="Avatar"
            quality={100}
            width={80}
            height={80}
            objectFit="cover"
            placeholder="blur"
            blurDataURL="https://placeholder.co/80"
            className="rounded-full shadow-sm pointer-events-none"
          />
          <span className="absolute bottom-[4px] right-[4px] block w-4 h-4 bg-red-500 rounded-full ring ring-white"></span>
        </div>
      </div>
    </>
  );
};

export const AvatarWithBadgePreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* Avatar with Badge */}
        <div className="relative avatar">
          <Image
            src="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww"
            loading="lazy"
            alt="Avatar"
            quality={100}
            width={80}
            height={80}
            objectFit="cover"
            placeholder="blur"
            blurDataURL="https://placeholder.co/80"
            className="rounded-full shadow-sm pointer-events-none"
          />
          <span className="absolute top-[-2px] right-[-2px] inline-flex items-center justify-center w-7 h-7 text-xs font-bold leading-none ring ring-white text-white bg-red-500 rounded-full">
            3
          </span>
        </div>
      </div>
    </>
  );
};

export const GroupAvatarPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* Group Avatar */}
        <div className="flex -space-x-6 avatar-group">
          <div className="avatar">
            <Image
              src="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww"
              loading="lazy"
              alt="Avatar"
              quality={100}
              width={80}
              height={80}
              objectFit="cover"
              placeholder="blur"
              blurDataURL="https://placeholder.co/80"
              className="rounded-full shadow-sm pointer-events-none"
            />
          </div>
          <div className="avatar">
            <Image
              src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRzaG90fGVufDB8fDB8fHww"
              loading="lazy"
              alt="Avatar"
              quality={100}
              width={80}
              height={80}
              objectFit="cover"
              placeholder="blur"
              blurDataURL="https://placeholder.co/80"
              className="rounded-full shadow-sm pointer-events-none"
            />
          </div>
          <div className="avatar ">
            <Image
              src="https://images.unsplash.com/photo-1543949806-2c9935e6aa78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhlYWRzaG90fGVufDB8fDB8fHww"
              loading="lazy"
              alt="Avatar"
              quality={100}
              width={80}
              height={80}
              objectFit="cover"
              placeholder="blur"
              blurDataURL="https://placeholder.co/80"
              className="rounded-full shadow-sm pointer-events-none"
            />
          </div>
          <div className="avatar">
            <Image
              src="https://images.unsplash.com/photo-1611432579699-484f7990b127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
              loading="lazy"
              alt="Avatar"
              quality={100}
              width={80}
              height={80}
              objectFit="cover"
              placeholder="blur"
              blurDataURL="https://placeholder.co/80"
              className="rounded-full shadow-sm pointer-events-none"
            />
          </div>
          <div className="avatar">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
              loading="lazy"
              alt="Avatar"
              quality={100}
              width={80}
              height={80}
              objectFit="cover"
              placeholder="blur"
              blurDataURL="https://placeholder.co/80"
              className="rounded-full shadow-sm pointer-events-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const avatars = () => {
  return (
    <>
      <NextSeo
        title="Avatars - HextaUI ✨"
        description="Collection of Avatar components with multiple variants."
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/action/buttons",
          title: "Avatars - HextaUI ✨",
          description:
            "Collection of Avatar components with multiple variants.",
          images: [
            {
              url: "https://i.imgur.com/T4CpygK.png",
              width: 1920,
              height: 1080,
              alt: "Avatars - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Avatars - HextaUI ✨",
        }}
        twitter={{
          handle: "@HextaStudio",
          site: "@HextaStudio",
          cardType: "summary_large_image",
        }}
      />
      <DocsLayout>
        <main>
          <div className="header">
            <h1 className="h1">Avatars</h1>
            <p className="text-sm opacity-80">
              Collection of Avatar components with multiple variants.
            </p>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Note</h3>
                <div className="relative justify-center p-4 my-3 overflow-hidden text-[14px] leading-loose border border-white text-md border-opacity-10 rounded-2xl preview-container">
                  Here we are using Next Js so, I have used{" "}
                  <kbd className="p-[6px] border border-b-2 bg-zinc-900 border-white rounded-[8px] border-opacity-40 text-[14px] m-[5px]">
                    &lt;Image/&gt;
                  </kbd>{" "}
                  instead of{" "}
                  <kbd className="p-[6px] border border-b-2 bg-zinc-900 border-white rounded-[8px] border-opacity-40 text-[14px] m-[5px]">
                    &lt;img/&gt;
                  </kbd>
                  . If you're not using Next Js please replace{" "}
                  <kbd className="p-[6px] border border-b-2 bg-zinc-900 border-white rounded-[8px] border-opacity-40 text-[14px] m-[5px]">
                    &lt;Image/&gt;
                  </kbd>{" "}
                  with{" "}
                  <kbd className="p-[6px] border border-b-2 bg-zinc-900 border-white rounded-[8px] border-opacity-40 text-[14px] m-[5px]">
                    &lt;img/&gt;
                  </kbd>
                </div>
              </div>
            </div>
            <div className="installation">
              {/* <h3 className="h3">Code</h3> */}
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* If you're using Next Js */}
import Image from 'next/image';`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Basic Avatars</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <BasicAvatarPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* Default Avatar */}
<div className="avatar">
  <Image
    src="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww"
    loading="lazy"
    alt="Avatar"
    quality={100}
    width={80}
    height={80}
    objectFit="cover"
    placeholder="blur"
    blurDataURL="https://placeholder.co/80"
    className="rounded-full shadow-sm pointer-events-none"
  />
</div>

{/* Circular Avatar */}
<div className="avatar">
  <Image
    src="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww"
    loading="lazy"
    alt="Avatar"
    quality={100}
    width={80}
    height={80}
    objectFit="cover"
    placeholder="blur"
    blurDataURL="https://placeholder.co/80"
    className="shadow-sm rounded-3xl" pointer-events-none
  />
</div>

{/* Squared Avatar */}
<div className="avatar">
  <Image
    src="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww"
    loading="lazy"
    alt="Avatar"
    quality={100}
    width={80}
    height={80}
    objectFit="cover"
    placeholder="blur"
    blurDataURL="https://placeholder.co/80"
    className="rounded-sm shadow-sm pointer-events-none"
  />
</div>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Avatars with Status</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <AvatarWithStatusPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* Avatar with Online Status */}
<div className="relative avatar">
  <Image
    src="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww"
    loading="lazy"
    alt="Avatar"
    quality={100}
    width={80}
    height={80}
    objectFit="cover"
    placeholder="blur"
    blurDataURL="https://placeholder.co/80"
    className="rounded-full shadow-sm pointer-events-none"
  />
  <span className="absolute bottom-[4px] right-[4px] block w-4 h-4 bg-green-500 rounded-full ring ring-white"></span>
</div>

{/* Avatar with Offline Status */}
<div className="relative avatar">
  <Image
    src="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww"
    loading="lazy"
    alt="Avatar"
    quality={100}
    width={80}
    height={80}
    objectFit="cover"
    placeholder="blur"
    blurDataURL="https://placeholder.co/80"
    className="rounded-full shadow-sm pointer-events-none"
  />
  <span className="absolute bottom-[4px] right-[4px] block w-4 h-4 bg-red-500 rounded-full ring ring-white"></span>
</div>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Avatars with Badge</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <AvatarWithBadgePreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* Avatar with Badge */}
<div className="relative avatar">
  <Image
    src="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww"
    loading="lazy"
    alt="Avatar"
    quality={100}
    width={80}
    height={80}
    objectFit="cover"
    placeholder="blur"
    blurDataURL="https://placeholder.co/80"
    className="rounded-full shadow-sm pointer-events-none"
  />
  <span className="absolute top-[-2px] right-[-2px] inline-flex items-center justify-center w-7 h-7 text-xs font-bold leading-none ring ring-white text-white bg-red-500 rounded-full">
    3
  </span>
</div>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Group Avatars</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <GroupAvatarPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* Group Avatar */}
<div className="flex -space-x-6 avatar-group">
  <div className="avatar">
    <Image
      src="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww"
      loading="lazy"
      alt="Avatar"
      quality={100}
      width={80}
      height={80}
      objectFit="cover"
      placeholder="blur"
      blurDataURL="https://placeholder.co/80"
      className="rounded-full shadow-sm pointer-events-none"
    />
  </div>
  <div className="avatar">
    <Image
      src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRzaG90fGVufDB8fDB8fHww"
      loading="lazy"
      alt="Avatar"
      quality={100}
      width={80}
      height={80}
      objectFit="cover"
      placeholder="blur"
      blurDataURL="https://placeholder.co/80"
      className="rounded-full shadow-sm pointer-events-none"
    />
  </div>
  <div className="avatar ">
    <Image
      src="https://images.unsplash.com/photo-1543949806-2c9935e6aa78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhlYWRzaG90fGVufDB8fDB8fHww"
      loading="lazy"
      alt="Avatar"
      quality={100}
      width={80}
      height={80}
      objectFit="cover"
      placeholder="blur"
      blurDataURL="https://placeholder.co/80"
      className="rounded-full shadow-sm pointer-events-none"
    />
  </div>
  <div className="avatar">
    <Image
      src="https://images.unsplash.com/photo-1611432579699-484f7990b127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
      loading="lazy"
      alt="Avatar"
      quality={100}
      width={80}
      height={80}
      objectFit="cover"
      placeholder="blur"
      blurDataURL="https://placeholder.co/80"
      className="rounded-full shadow-sm pointer-events-none"
    />
  </div>
  <div className="avatar">
    <Image
      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
      loading="lazy"
      alt="Avatar"
      quality={100}
      width={80}
      height={80}
      objectFit="cover"
      placeholder="blur"
      blurDataURL="https://placeholder.co/80"
      className="rounded-full shadow-sm pointer-events-none"
    />
  </div>
</div>`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default avatars;
