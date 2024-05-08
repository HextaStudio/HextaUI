import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";
import Image from "next/image";
import { NextSeo } from "next-seo";

export const BasicHeroPreview = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 p-10 m-10 text-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-6xl max-[680px]:text-5xl font-bold tracking-tighter max-w-[30rem] w-full leading-11">
            This is Basic Hero Component
          </h1>
          <p className="text-sm opacity-80">
            Aliqua ipsum Lorem sit laborum cupidatat sint voluptate eu
            excepteur.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 flex-grow">
            Get Started
          </button>
          <button className="px-[20px] py-[8px]  text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-900 transition-all duration-[0.4s] flex-grow">
            About us
          </button>
        </div>
      </section>
    </>
  );
};

export const SplitHeroPreview = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 p-10 md:flex-row">
      <div className="flex flex-col items-start justify-center gap-4 md:w-1/2">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter max-w-[30rem] leading-11">
          Split Hero Section
        </h1>
        <p className="text-sm opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          justo vel orci fringilla, ac faucibus dolor facilisis.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
            Get Started
          </button>
          <button className="px-[20px] py-[8px] text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-900 transition-all duration-[0.4s]">
            About us
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center md:w-1/2">
        <Image
          src="https://placeholder.co/500x400"
          alt="Hero Image"
          width={400}
          height={500}
          objectFit="cover"
          className="h-auto max-w-full rounded-lg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </section>
  );
};

export const HeroBgImagePreview = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center gap-4 p-10 m-10 text-center bg-center bg-cover"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1614851099511-773084f6911d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        height: "80vh",
      }}
    >
      <div className="flex flex-col items-center justify-center p-8 rounded-lg ">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter max-w-[30rem] w-full leading-11 text-white ">
          Hero with Background Image
        </h1>
        <p className="text-sm text-white opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          justo vel orci fringilla.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <button className="px-[20px] py-[8px] bg-white text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
            Get Started
          </button>
          <button className="px-[20px] py-[8px] bg-transparent border border-white text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.4s] hover:bg-white hover:text-black">
            About us
          </button>
        </div>
      </div>
    </section>
  );
};

export const CenteredHeroPreview = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-10 m-10 text-center">
      <div className="flex flex-col items-center justify-center gap-3 animate-fade-in">
        <h1 className="text-6xl max-[680px]:text-5xl font-bold tracking-tighter max-w-[30rem] w-full leading-11 animate-slide-up">
          Centered Hero with Animations
        </h1>
        <p className="text-sm delay-200 opacity-80 animate-slide-up">
          Aliqua ipsum Lorem sit laborum cupidatat sint voluptate eu excepteur.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in delay-400">
        <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 animate-slide-up delay-600">
          Get Started
        </button>
        <button className="px-[20px] py-[8px] text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-900 transition-all duration-[0.4s] animate-slide-up delay-800">
          About us
        </button>
      </div>
    </section>
  );
};

export const SkewHeroPreview = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-4 p-10 m-10 text-center bg-gray-800">
      <div className="relative z-10 flex flex-col items-center justify-center gap-3">
        <h1 className="text-6xl max-[680px]:text-5xl font-bold tracking-tighter max-w-[30rem] w-full leading-11 text-white">
          Hero with Skew Background
        </h1>
        <p className="text-sm text-white opacity-80">
          Aliqua ipsum Lorem sit laborum cupidatat sint voluptate eu excepteur.
        </p>
      </div>
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
        <button className="px-[20px] py-[8px] bg-white text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 transform hover:scale-105">
          Get Started
        </button>
        <button className="px-[20px] py-[8px] bg-transparent border border-white text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.4s] hover:bg-white hover:text-black transform hover:scale-105">
          About us
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full skew-y-6 bg-gray-700"></div>
    </section>
  );
};

export const BlurredHeroPreview = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-4 p-10 m-10 text-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover blur-lg"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1614851099511-773084f6911d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 p-8 rounded-lg">
        <h1 className="text-6xl max-[680px]:text-5xl font-bold tracking-tighter max-w-[30rem] w-full leading-11 text-white">
          Hero with Blurred Background
        </h1>
        <p className="text-sm text-white opacity-80">
          Aliqua ipsum Lorem sit laborum cupidatat sint voluptate eu excepteur.
        </p>
      </div>
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
        <button className="px-[20px] py-[8px] bg-white text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 transform hover:scale-105">
          Get Started
        </button>
        <button className="px-[20px] py-[8px] bg-transparent border border-white text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.4s] hover:bg-white hover:text-black transform hover:scale-105">
          About us
        </button>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <>
      <NextSeo
        title="Hero - HextaUI ✨"
        description="Collection of Hero components with different variants."
        canonical="https://ui.hextastudio.in/docs/components/layout/hero"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/hero",
          title: "Hero - HextaUI ✨",
          description: "Collection of Hero components with different variants.",
          images: [
            {
              url: "https://i.imgur.com/rkzeMDo.png",
              width: 1920,
              height: 1080,
              alt: "Hero - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Hero - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <div className="header">
            <h1 className="h1">Hero</h1>
            <p className="text-sm opacity-80">
              Collection of Hero components with different variants.
            </p>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Basic Hero</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[35rem]">
                  <BasicHeroPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`export const BasicHero = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 p-10 m-10 text-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-6xl max-[680px]:text-5xl font-bold tracking-tighter max-w-[30rem] w-full leading-11">
            This is Basic Hero Component
          </h1>
          <p className="text-sm opacity-80">
            Aliqua ipsum Lorem sit laborum cupidatat sint voluptate eu
            excepteur.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 flex-grow">
            Get Started
          </button>
          <button className="px-[20px] py-[8px]  text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-900 transition-all duration-[0.4s] flex-grow">
            About us
          </button>
        </div>
      </section>
    </>
  );
};`}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Split section Hero</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container ">
                  <SplitHeroPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`export const SplitHero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 p-10 md:flex-row">
      <div className="flex flex-col items-start justify-center gap-4 md:w-1/2">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter max-w-[30rem] leading-11">
          Split Hero Section
        </h1>
        <p className="text-sm opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          justo vel orci fringilla, ac faucibus dolor facilisis.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
            Get Started
          </button>
          <button className="px-[20px] py-[8px] text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-900 transition-all duration-[0.4s]">
            About us
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center md:w-1/2">
        <Image
          src="https://placeholder.co/500x400"
          alt="Hero Image"
    4    className="h-auto max-w-full rounded-lg"
        />
      </div>
    </section>
  );
};
`}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">hero with background Image</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[35rem]">
                  <HeroBgImagePreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`export const HeroBgImage = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center gap-4 p-10 m-10 text-center bg-center bg-cover"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1614851099511-773084f6911d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        height: "80vh",
      }}
    >
      <div className="flex flex-col items-center justify-center p-8 rounded-lg ">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter max-w-[30rem] w-full leading-11 text-white ">
          Hero with Background Image
        </h1>
        <p className="text-sm text-white opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          justo vel orci fringilla.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <button className="px-[20px] py-[8px] bg-white text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
            Get Started
          </button>
          <button className="px-[20px] py-[8px] bg-transparent border border-white text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.4s] hover:bg-white hover:text-black">
            About us
          </button>
        </div>
      </div>
    </section>
  );
};`}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Centered Hero With Animation</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[35rem]">
                  <CenteredHeroPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Setup</h3>
              <CodeBlock
                lang="css"
                filename="css"
                code={`@keyframes slide-up {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out;
}`}
              />
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`export const CenteredHero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-10 m-10 text-center">
      <div className="flex flex-col items-center justify-center gap-3 animate-fade-in">
        <h1 className="text-6xl max-[680px]:text-5xl font-bold tracking-tighter max-w-[30rem] w-full leading-11 animate-slide-up">
          Centered Hero with Animations
        </h1>
        <p className="text-sm delay-200 opacity-80 animate-slide-up">
          Aliqua ipsum Lorem sit laborum cupidatat sint voluptate eu excepteur.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in delay-400">
        <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 animate-slide-up delay-600">
          Get Started
        </button>
        <button className="px-[20px] py-[8px] text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-900 transition-all duration-[0.4s] animate-slide-up delay-800">
          About us
        </button>
      </div>
    </section>
  );
};`}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Hero with Skew background effect</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[35rem]">
                  <SkewHeroPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`export const SkewHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-4 p-10 m-10 text-center bg-gray-800">
      <div className="relative z-10 flex flex-col items-center justify-center gap-3">
        <h1 className="text-6xl max-[680px]:text-5xl font-bold tracking-tighter max-w-[30rem] w-full leading-11 text-white">
          Hero with Skew Background
        </h1>
        <p className="text-sm text-white opacity-80">
          Aliqua ipsum Lorem sit laborum cupidatat sint voluptate eu excepteur.
        </p>
      </div>
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
        <button className="px-[20px] py-[8px] bg-white text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 transform hover:scale-105">
          Get Started
        </button>
        <button className="px-[20px] py-[8px] bg-transparent border border-white text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.4s] hover:bg-white hover:text-black transform hover:scale-105">
          About us
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full skew-y-6 bg-gray-700"></div>
    </section>
  );
};`}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Hero with blurred background</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[35rem]">
                  <BlurredHeroPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`export const BlurredHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-4 p-10 m-10 text-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover blur-lg"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1614851099511-773084f6911d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 p-8 rounded-lg">
        <h1 className="text-6xl max-[680px]:text-5xl font-bold tracking-tighter max-w-[30rem] w-full leading-11 text-white">
          Hero with Blurred Background
        </h1>
        <p className="text-sm text-white opacity-80">
          Aliqua ipsum Lorem sit laborum cupidatat sint voluptate eu excepteur.
        </p>
      </div>
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
        <button className="px-[20px] py-[8px] bg-white text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 transform hover:scale-105">
          Get Started
        </button>
        <button className="px-[20px] py-[8px] bg-transparent border border-white text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.4s] hover:bg-white hover:text-black transform hover:scale-105">
          About us
        </button>
      </div>
    </section>
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

export default Hero;
