import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";

export const BasicBadgesPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <span className="px-3 py-1 bg-white border border-zinc-900 text-black rounded-full flex items-center font-[600] text-[12px]">
          Primary
        </span>

        {/* secondary */}
        <span className="px-3 py-1 bg-zinc-900 border border-zinc-900 text-white rounded-full flex items-center font-[600] text-[12px]">
          Secondary
        </span>

        {/* info */}
        <span className="px-3 py-1 bg-blue-400 border border-blue-900 text-black rounded-full flex items-center font-[600] text-[12px]">
          Info
        </span>

        {/* success */}
        <span className="px-3 py-1 bg-green-400 border border-green-900 text-black rounded-full flex items-center font-[600] text-[12px]">
          Success
        </span>

        {/* warning */}
        <span className="px-3 py-1 bg-yellow-400 border border-yellow-900 text-black rounded-full flex items-center font-[600] text-[12px]">
          Warning
        </span>

        {/* danger */}
        <span className="px-3 py-1 bg-red-700 border border-red-900 text-white rounded-full flex items-center font-[600] text-[12px]">
          Danger
        </span>
      </div>
    </>
  );
};

export const OutlinedBadgesPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <span className="px-3 py-1 border-2 border-zinc-900 text-zinc-100 rounded-full flex items-center font-[600] text-[12px]">
          Primary
        </span>

        {/* info */}
        <span className="px-3 py-1 border-2 border-blue-900 text-blue-100 rounded-full flex items-center font-[600] text-[12px]">
          Info
        </span>

        {/* success */}
        <span className="px-3 py-1 border-2 border-green-900 text-green-100 rounded-full flex items-center font-[600] text-[12px]">
          Success
        </span>

        {/* warning */}
        <span className="px-3 py-1 border-2 border-yellow-900 text-yellow-100 rounded-full flex items-center font-[600] text-[12px]">
          Warning
        </span>

        {/* danger */}
        <span className="px-3 py-1 border-2 border-red-900 text-red-100 rounded-full flex items-center font-[600] text-[12px]">
          Danger
        </span>
      </div>
    </>
  );
};

export const PillBadgesPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <span className="px-3 py-1 bg-white border border-zinc-900 text-black rounded-full flex items-center font-[600] text-[12px]">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Primary
        </span>

        {/* secondary */}
        <span className="px-3 py-1 bg-zinc-900 border border-zinc-900 text-white rounded-full flex items-center font-[600] text-[12px]">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Secondary
        </span>

        {/* info */}
        <span className="px-3 py-1 bg-blue-400 border border-blue-900 text-black rounded-full flex items-center font-[600] text-[12px]">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          Info
        </span>
      </div>
    </>
  );
};

export const IconBadgesPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <span className="px-3 py-1 bg-white border border-zinc-900 text-black rounded-full flex items-center font-[600] text-[12px]">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Primary
        </span>

        {/* secondary */}
        <span className="px-3 py-1 bg-zinc-900 border border-zinc-900 text-white rounded-full flex items-center font-[600] text-[12px]">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Secondary
        </span>
      </div>
    </>
  );
};

export const CounterBadgesPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <span className="px-3 py-1 bg-white border border-zinc-900 text-black rounded-full flex items-center font-[600] text-[12px]">
          <span className="mr-1">Notifications</span>
          <small className="flex items-center justify-center w-5 h-5 text-sm text-white bg-red-500 rounded-full">
            5
          </small>
        </span>

        {/* secondary */}
        <span className="px-3 py-1 bg-zinc-900 border border-zinc-900 text-white rounded-full flex items-center font-[600] text-[12px]">
          <span className="mr-1">Messages</span>
          <small className="flex items-center justify-center w-5 h-5 text-sm text-white bg-blue-500 rounded-full">
            12
          </small>
        </span>
      </div>
    </>
  );
};

export const BadgeOnButtonsPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Primary
          <small className="flex items-center justify-center w-5 h-5 ml-2 text-white bg-red-500 rounded-full">
            5
          </small>
        </button>

        {/* secondary */}
        <button className="px-[20px] py-[8px] bg-zinc-900 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Secondary
          <small className="flex items-center justify-center w-5 h-5 ml-2 text-white bg-blue-500 rounded-full">
            12
          </small>
        </button>
      </div>
    </>
  );
};

export const GlowingBadgesPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <span className="px-3 py-1 bg-white border border-zinc-900 text-black rounded-full flex items-center font-[600] text-[12px] transition-all duration-[0.3s] hover:shadow-glow-white">
          Glowing Primary
        </span>

        {/* secondary */}
        <span className="px-3 py-1 bg-zinc-900 border border-zinc-900 text-white rounded-full flex items-center font-[600] text-[12px] transition-all duration-[0.3s] hover:shadow-glow-blue">
          Glowing Secondary
        </span>
      </div>
    </>
  );
};

export const AnimatedBadgesPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <span className="px-3 py-1 bg-white border border-zinc-900 text-black rounded-full flex items-center font-[600] text-[12px] transition-all duration-[0.3s] animate-pulse hover:animate-none">
          Pulsing Primary
        </span>

        {/* secondary */}
        <span className="px-3 py-1 bg-zinc-900 border border-zinc-900 text-white rounded-full flex items-center font-[600] text-[12px] transition-all duration-[0.3s] animate-bounce">
          Bouncing Secondary
        </span>
      </div>
    </>
  );
};

export const SegmentedBadgesPreview = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <div className="inline-flex overflow-hidden rounded-lg">
          <span className="px-3 py-1 bg-white border border-zinc-900 text-black flex items-center font-[600] text-[12px]">
            Primary
          </span>
          <span className="px-3 py-1 bg-zinc-900 border border-zinc-900 text-white flex items-center font-[600] text-[12px]">
            Secondary
          </span>
        </div>

        {/* success */}
        <div className="inline-flex overflow-hidden rounded-lg">
          <span className="px-3 py-1 bg-green-400 border border-green-900 text-black flex items-center font-[600] text-[12px]">
            Success
          </span>
          <span className="px-3 py-1 bg-green-900 border border-green-900 text-white flex items-center font-[600] text-[12px]">
            Danger
          </span>
        </div>
      </div>
    </>
  );
};

const badges = () => {
  return (
    <>
      <NextSeo
        title="Badges - HextaUI ✨"
        description="Collection of multiple badges/chips with multiple variants."
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/badges",
          title: "Badges - HextaUI ✨",
          description:
            "Collection of multiple badges/chips with multiple variants.",
          images: [
            {
              url: "https://i.imgur.com/T4CpygK.png",
              width: 1920,
              height: 1080,
              alt: "Badges - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Badges - HextaUI ✨",
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
            <h1 className="h1">Badges</h1>
            <p className="text-sm opacity-80">
              Collection of multiple badges/chips with multiple variants.
            </p>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Basic Badges</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <BasicBadgesPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<span className="px-3 py-1 bg-white border border-zinc-900 text-black rounded-full flex items-center font-[600] text-[12px]">
    Primary
</span>

{/* secondary */}
<span className="px-3 py-1 bg-zinc-900 border border-zinc-900 text-white rounded-full flex items-center font-[600] text-[12px]">
    Secondary
</span>

{/* info */}
<span className="px-3 py-1 bg-blue-400 border border-blue-900 text-black rounded-full flex items-center font-[600] text-[12px]">
    Info
</span>

{/* success */}
<span className="px-3 py-1 bg-green-400 border border-green-900 text-black rounded-full flex items-center font-[600] text-[12px]">
    Success
</span>

{/* warning */}
<span className="px-3 py-1 bg-yellow-400 border border-yellow-900 text-black rounded-full flex items-center font-[600] text-[12px]">
    Warning
</span>

{/* danger */}
<span className="px-3 py-1 bg-red-700 border border-red-900 text-white rounded-full flex items-center font-[600] text-[12px]">
    Danger
</span>`}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Outlined Badges</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <OutlinedBadgesPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<span className="px-3 py-1 border-2 border-zinc-900 text-zinc-100 rounded-full flex items-center font-[600] text-[12px]">
    Primary
</span>

{/* info */}
<span className="px-3 py-1 border-2 border-blue-900 text-blue-100 rounded-full flex items-center font-[600] text-[12px]">
    Info
</span>

{/* success */}
<span className="px-3 py-1 border-2 border-green-900 text-green-100 rounded-full flex items-center font-[600] text-[12px]">
    Success
</span>

{/* warning */}
<span className="px-3 py-1 border-2 border-yellow-900 text-yellow-100 rounded-full flex items-center font-[600] text-[12px]">
    Warning
</span>

{/* danger */}
<span className="px-3 py-1 border-2 border-red-900 text-red-100 rounded-full flex items-center font-[600] text-[12px]">
    Danger
</span>`}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Pill Badges</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <PillBadgesPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<span className="px-3 py-1 bg-white border border-zinc-900 text-black rounded-full flex items-center font-[600] text-[12px]">
    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
    />
    </svg>
    Primary
</span>

{/* secondary */}
<span className="px-3 py-1 bg-zinc-900 border border-zinc-900 text-white rounded-full flex items-center font-[600] text-[12px]">
    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
    />
    </svg>
    Secondary
</span>

{/* info */}
<span className="px-3 py-1 bg-blue-400 border border-blue-900 text-black rounded-full flex items-center font-[600] text-[12px]">
    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clipRule="evenodd"
    />
    </svg>
    Info
</span>`}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Icon Badges</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <IconBadgesPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<span className="px-3 py-1 bg-white border border-zinc-900 text-black rounded-full flex items-center font-[600] text-[12px]">
    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
    />
    </svg>
    Primary
</span>

{/* secondary */}
<span className="px-3 py-1 bg-zinc-900 border border-zinc-900 text-white rounded-full flex items-center font-[600] text-[12px]">
    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
    />
    </svg>
    Secondary
</span>`}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Counter Badges</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <CounterBadgesPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<span className="px-3 py-1 bg-white border border-zinc-900 text-black rounded-full flex items-center font-[600] text-[12px]">
    <span className="mr-1">Notifications</span>
    <small className="flex items-center justify-center w-5 h-5 text-sm text-white bg-red-500 rounded-full">
    5
    </small>
</span>

{/* secondary */}
<span className="px-3 py-1 bg-zinc-900 border border-zinc-900 text-white rounded-full flex items-center font-[600] text-[12px]">
    <span className="mr-1">Messages</span>
    <small className="flex items-center justify-center w-5 h-5 text-sm text-white bg-blue-500 rounded-full">
    12
    </small>
</span>`}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Badges on Buttons</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <BadgeOnButtonsPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
    Primary
    <small className="flex items-center justify-center w-5 h-5 ml-2 text-white bg-red-500 rounded-full">
    5
    </small>
</button>

{/* secondary */}
<button className="px-[20px] py-[8px] bg-zinc-900 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
    Secondary
    <small className="flex items-center justify-center w-5 h-5 ml-2 text-white bg-blue-500 rounded-full">
    12
    </small>
</button>`}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Glowing Badges</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <GlowingBadgesPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<span className="px-3 py-1 bg-white border border-zinc-900 text-black rounded-full flex items-center font-[600] text-[12px] transition-all duration-[0.3s] hover:shadow-glow-white">
    Glowing Primary
</span>

{/* secondary */}
<span className="px-3 py-1 bg-zinc-900 border border-zinc-900 text-white rounded-full flex items-center font-[600] text-[12px] transition-all duration-[0.3s] hover:shadow-glow-blue">
    Glowing Secondary
</span>`}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Animated Badges</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <AnimatedBadgesPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<span className="px-3 py-1 bg-white border border-zinc-900 text-black rounded-full flex items-center font-[600] text-[12px] transition-all duration-[0.3s] animate-pulse hover:animate-none">
    Pulsing Primary
</span>

{/* secondary */}
<span className="px-3 py-1 bg-zinc-900 border border-zinc-900 text-white rounded-full flex items-center font-[600] text-[12px] transition-all duration-[0.3s] animate-bounce">
    Bouncing Secondary
</span>`}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Segmented Badges</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <SegmentedBadgesPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`{/* primary */}
<div className="inline-flex overflow-hidden rounded-lg">
<span className="px-3 py-1 bg-white border border-zinc-900 text-black flex items-center font-[600] text-[12px]">
    Primary
</span>
<span className="px-3 py-1 bg-zinc-900 border border-zinc-900 text-white flex items-center font-[600] text-[12px]">
    Secondary
</span>
</div>

{/* success */}
<div className="inline-flex overflow-hidden rounded-lg">
<span className="px-3 py-1 bg-green-400 border border-green-900 text-black flex items-center font-[600] text-[12px]">
    Success
</span>
<span className="px-3 py-1 bg-green-900 border border-green-900 text-white flex items-center font-[600] text-[12px]">
    Danger
</span>
</div>`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default badges;
