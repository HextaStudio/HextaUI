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
              url: "https://i.imgur.com/Wm4aBoc.png",
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
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "web components, web design, UI components, responsive design, modern design, reusable components, front-end development, web development, user interface, beautiful UI, stunning components, zero effort, copy-paste components, web elements, website building blocks, web templates, UI kits, design resources, front-end tools, web design inspiration, web design trends, web design solutions, design tools, web design assets, UI design, UX design, web design components, web UI, responsive web components, modern web components, beautiful web components, stunning web UI, web design elements, web UI kits, responsive UI kits, modern UI kits, web design assets, front-end web development, web development resources, web components library, web UI library, web design library, responsive web design, modern web design, beautiful web design, stunning web design, web design resources, web development tools, front-end web development tools, web design inspiration resources, web design trends resources, web design solutions resources, web UI solutions, web design asset resources, UI design resources, UX design resources, web component templates, web UI templates, web design templates, responsive web templates, modern web templates, beautiful web templates, stunning web templates, web template kits, web component kits, web UI kits, web design kits, responsive web kits, modern web kits, beautiful web kits, stunning web kits, no-code web design, easy web design, web design made easy, easy web development, no-code web development, web design for beginners, web development for beginners, beginner-friendly web design, beginner-friendly web development, drag-and-drop web design, drag-and-drop web development, visual web design, visual web development, WYSIWYG web design, WYSIWYG web development, web design platforms, web development platforms, web design tools, web development tools, web design software, web development software, web design apps, web development apps, web design plugins, web development plugins, web design extensions, web development extensions, web design integrations, web development integrations, web design solutions, web development solutions, web design services, web development services, web design agencies, web development agencies, web design freelancers, web development freelancers, web design consultants, web development consultants, web design experts, web development experts, web design professionals, web development professionals, web design gurus, web development gurus, web design maestros, web development maestros, web design masters, web development masters, web design ninjas, web development ninjas, web design rockstars, web development rockstars, web design superstars, web development superstars, web design wizards, web development wizards, web design magicians, web development magicians, web design sorcerers, web development sorcerers, web design alchemists, web development alchemists, web design virtuosos, web development virtuosos, web design savants, web development savants, web design prodigies, web development prodigies, web design mavericks, web development mavericks, web design pioneers, web development pioneers, web design innovators, web development innovators, web design trailblazers, web development trailblazers, web design trendsetters, web development trendsetters, web design visionaries, web development visionaries, web design futurists, web development futurists, web design revolutionaries, web development revolutionaries, web design disruptors, web development disruptors, web design game-changers, web development game-changers, web design changemakers, web development changemakers, web design transformers, web development transformers, web design movers, web development movers, web design shakers, web development shakers, web design influencers, web development influencers, web design thought leaders, web development thought leaders, web design luminaries, web development luminaries, web design geniuses, web development geniuses, web design masterminds, web development masterminds, web design authorities, web development authorities, web design subject matter experts, web development subject matter experts, web design eminences, web development eminences, web design notables, web development notables, web design celebrities, web development celebrities, web design icons, web development icons, web design legends, web development legends, web design virtuosos, web development virtuosos, web design phenoms, web development phenoms, web design sensations, web development sensations, web design wunderkinds, web development wunderkinds, web design prodigies, web development prodigies, web design marvels, web development marvels, web design miracles, web development miracles, web design wonders, web development wonders, web design phenomenons, web development phenomenons, web design anomalies, web development anomalies, web design rarities, web development rarities, web design unicorns, web development unicorns, web design extraordinaires, web development extraordinaires, web design virtuosos, web development virtuosos, web design maestros, web development maestros, web design masters, web development masters",
          },
        ]}
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
