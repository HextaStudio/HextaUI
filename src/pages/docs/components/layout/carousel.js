import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import { NextSeo } from "next-seo";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useRef } from "react";

import Image from "next/image";

export const BasicCarouselPreview = () => {
  const slides = [
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+1",
      title: "Slide 1",
      description: "This is the first slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+2",
      title: "Slide 2",
      description: "This is the second slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+3",
      title: "Slide 3",
      description: "This is the third slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+4",
      title: "Slide 4",
      description: "This is the fourth slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+5",
      title: "Slide 5",
      description: "This is the fifth slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+6",
      title: "Slide 6",
      description: "This is the sixth slide description.",
    },
  ];

  return (
    <div className="bg-[#080808] p-6 rounded-lg">
      <Splide
        options={{
          type: "loop",
          focus: 1,
          autoplay: true,
          interval: 5000,
          drag: "free",
          pagination: false,
          arrows: false,
          autoScroll: true,
          pauseOnFocus: true,
          gap: "2rem",
        }}
        aria-label="Basic Carousel"
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col items-center">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-auto mb-4 rounded-lg"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <h3 className="mb-2 text-xl font-bold text-white">
                {slide.title}
              </h3>
              <p className="text-center text-gray-400">{slide.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export const CarouselWithAutoplayPreview = () => {
  const slides = [
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+1",
      title: "Slide 1",
      description: "This is the first slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+2",
      title: "Slide 2",
      description: "This is the second slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+3",
      title: "Slide 3",
      description: "This is the third slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+4",
      title: "Slide 4",
      description: "This is the fourth slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+5",
      title: "Slide 5",
      description: "This is the fifth slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+6",
      title: "Slide 6",
      description: "This is the sixth slide description.",
    },
  ];

  return (
    <div className="bg-[#080808] p-6 rounded-lg">
      <Splide
        options={{
          rewind: true,
          pagination: false,
          arrows: true,
          autoplay: true,
          type: "loop",
          interval: 2000,
          pauseOnHover: false,
          pauseOnFocus: false,
          resetProgress: false,
          centerMode: true,
          gap: "1rem",
        }}
        aria-label="Carousel with Autoplay"
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col items-center cursor-grab">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-auto mb-4 rounded-lg"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <h3 className="mb-2 text-xl font-bold text-white">
                {slide.title}
              </h3>
              <p className="text-center text-gray-400">{slide.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export const CarouselWithCustomControls = () => {
  const slides = [
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+1",
      title: "Slide 1",
      description: "This is the first slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+2",
      title: "Slide 2",
      description: "This is the second slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+3",
      title: "Slide 3",
      description: "This is the third slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+4",
      title: "Slide 4",
      description: "This is the fourth slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+5",
      title: "Slide 5",
      description: "This is the fifth slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+6",
      title: "Slide 6",
      description: "This is the sixth slide description.",
    },
  ];

  const customPrev = React.useRef(null);
  const customNext = React.useRef(null);
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      customPrev.current.addEventListener("click", () => {
        splideRef.current.splide.go("-");
      });

      customNext.current.addEventListener("click", () => {
        splideRef.current.splide.go("+");
      });
    }
  }, []);

  return (
    <div className="bg-[#080808] p-6 rounded-lg">
      <div className="flex justify-between max-[677px]:justify-center gap-20 mb-4">
        <button
          ref={customPrev}
          className="px-[20px] py-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
        >
          Prev
        </button>
        <button
          ref={customNext}
          className="px-[20px] py-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
        >
          Next
        </button>
      </div>
      <Splide
        options={{
          rewind: true,
          pagination: false,
          arrows: false,
          gap: "1rem",
        }}
        aria-label="Carousel with Custom Controls"
        ref={splideRef}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col items-center cursor-grab">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-auto mb-4 rounded-lg"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <h3 className="mb-2 text-xl font-bold text-white">
                {slide.title}
              </h3>
              <p className="text-center text-gray-400">{slide.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export const CarouselWithThumbnails = () => {
  const slides = [
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+1",
      title: "Slide 1",
      description: "This is the first slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+2",
      title: "Slide 2",
      description: "This is the second slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+3",
      title: "Slide 3",
      description: "This is the third slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+4",
      title: "Slide 4",
      description: "This is the fourth slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+5",
      title: "Slide 5",
      description: "This is the fifth slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+6",
      title: "Slide 6",
      description: "This is the sixth slide description.",
    },
  ];

  const primaryRef = useRef();
  const secondaryRef = useRef();

  useEffect(() => {
    if (primaryRef.current && secondaryRef.current) {
      primaryRef.current.sync(secondaryRef.current.splide);
    }
  }, []);

  return (
    <div className="mb-5">
      <Splide
        options={{
          gap: "1rem",
          pagination: false,
          arrows: true,
          type: "fade",
        }}
        ref={primaryRef}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col items-center cursor-grab ">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-auto mb-4 rounded-lg"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <h3 className="mb-2 text-xl font-bold text-white">
                {slide.title}
              </h3>
              <p className="text-center text-gray-400">{slide.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <Splide
        style={{
          margin: "1rem",
        }}
        options={{
          fixedWidth: 100,
          fixedHeight: 60,
          isNavigation: true,
          gap: 10,
          focus: "center",
          pagination: true,
          arrows: false,
          cover: true,
          breakpoints: {
            600: {
              fixedWidth: 66,
              fixedHeight: 40,
            },
          },
        }}
        ref={secondaryRef}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index} className="">
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              className="mt-4 rounded-lg"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export const CarouselWithThumbnailsExample = () => {
  const slides = [
    {
      imageUrl: "https://source.unsplash.com/random/700x400?cookie",
      title: "Slide 1",
      description: "This is the first slide description.",
    },
    {
      imageUrl: "https://source.unsplash.com/random/700x400?chocolate",
      title: "Slide 2",
      description: "This is the second slide description.",
    },
    {
      imageUrl: "https://source.unsplash.com/random/700x400?candy",
      title: "Slide 3",
      description: "This is the third slide description.",
    },
    {
      imageUrl: "https://source.unsplash.com/random/700x400?muffin",
      title: "Slide 4",
      description: "This is the fourth slide description.",
    },
    {
      imageUrl: "https://source.unsplash.com/random/700x400?muffin-cake",
      title: "Slide 5",
      description: "This is the fifth slide description.",
    },
    {
      imageUrl: "https://source.unsplash.com/random/700x400?icecream",
      title: "Slide 6",
      description: "This is the sixth slide description.",
    },
  ];

  const primaryRef = useRef();
  const secondaryRef = useRef();

  useEffect(() => {
    if (primaryRef.current && secondaryRef.current) {
      primaryRef.current.sync(secondaryRef.current.splide);
    }
  }, []);

  return (
    <div className="flex flex-col gap-5 mb-5">
      <Splide
        options={{
          gap: "1rem",
          pagination: false,
          arrows: true,
          focus: "center",
          type: "fade",
        }}
        ref={primaryRef}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col items-center cursor-grab ">
              <Image
                placeholder="blur"
                blurDataURL={slide.imageUrl}
                height={400}
                width={700}
                src={slide.imageUrl}
                alt={slide.title}
                loading="lazy"
                className="w-full h-auto mb-4 rounded-lg"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <Splide
        style={{
          margin: "1rem",
        }}
        options={{
          fixedWidth: 110,
          fixedHeight: 60,
          isNavigation: true,
          gap: 10,
          focus: "center",
          pagination: true,
          arrows: false,
          cover: true,
          breakpoints: {
            600: {
              fixedWidth: 66,
              fixedHeight: 40,
            },
          },
        }}
        ref={secondaryRef}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index} className="mt-4">
            <Image
              placeholder="blur"
              blurDataURL={slide.imageUrl}
              height={400}
              width={700}
              src={slide.imageUrl}
              alt={slide.title}
              loading="lazy"
              className="object-cover w-full h-full mt-4 rounded-lg"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

const carousel = () => {
  return (
    <>
      {" "}
      <NextSeo
        title="Carousel - HextaUI ✨"
        description="Collection of multiple carousel with multiple variants."
        canonical="https://ui.hextastudio.in/docs/components/layout/carousel"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/carousel",
          title: "Carousel - HextaUI ✨",
          description:
            "Collection of multiple carousel with multiple variants.",
          images: [
            {
              url: "https://i.imgur.com/t97FXuj.jpeg",
              width: 1920,
              height: 1080,
              alt: "Carousel - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Carousel - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Carousel</h1>
            <p className="text-sm opacity-80">
              Collection of Carousel components with different variants.
            </p>
          </div>
          <div className="flex flex-col gap-4 py-10 preview">
            <div>
              <h3 className="h3">Installation</h3>
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`bun install @splidejs/react-splide
# or
pnpm add @splidejs/react-splide
# or
yarn add @splidejs/react-splide
# or
npm i @splidejs/react-splide`}
              />
              <h3 className="h3">Import splide CSS file in _app.js</h3>
              <CodeBlock
                lang="jsx"
                filename="_app.js"
                code={`import "@splidejs/react-splide/css";`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Basic Carousel</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <BasicCarouselPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useRef } from "react";


export const BasicCarousel = () => {
  const slides = [
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+1",
      title: "Slide 1",
      description: "This is the first slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+2",
      title: "Slide 2",
      description: "This is the second slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+3",
      title: "Slide 3",
      description: "This is the third slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+4",
      title: "Slide 4",
      description: "This is the fourth slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+5",
      title: "Slide 5",
      description: "This is the fifth slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+6",
      title: "Slide 6",
      description: "This is the sixth slide description.",
    },
  ];

  return (
    <div className="bg-[#080808] p-6 rounded-lg">
      <Splide
        options={{
          type: "loop",
          focus: 1,
          autoplay: true,
          interval: 5000,
          drag: "free",
          pagination: false,
          arrows: false,
          autoScroll: true,
          pauseOnFocus: true,
          gap: "2rem",
        }}
        aria-label="Basic Carousel"
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col items-center">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h3 className="mb-2 text-xl font-bold text-white">
                {slide.title}
              </h3>
              <p className="text-center text-gray-400">{slide.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Carousel with Autoplay</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <CarouselWithAutoplayPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useRef } from "react";


export const CarouselWithAutoplay = () => {
  const slides = [
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+1",
      title: "Slide 1",
      description: "This is the first slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+2",
      title: "Slide 2",
      description: "This is the second slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+3",
      title: "Slide 3",
      description: "This is the third slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+4",
      title: "Slide 4",
      description: "This is the fourth slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+5",
      title: "Slide 5",
      description: "This is the fifth slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+6",
      title: "Slide 6",
      description: "This is the sixth slide description.",
    },
  ];

  return (
    <div className="bg-[#080808] p-6 rounded-lg">
      <Splide
        options={{
          rewind: true,
          pagination: false,
          arrows: true,
          autoplay: true,
          type: "loop",
          interval: 2000,
          pauseOnHover: false,
          pauseOnFocus: false,
          resetProgress: false,
          centerMode: true,
          gap: "1rem",
        }}
        aria-label="Carousel with Autoplay"
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col items-center cursor-grab">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h3 className="mb-2 text-xl font-bold text-white">
                {slide.title}
              </h3>
              <p className="text-center text-gray-400">{slide.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Carousel With Custom Controls</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <CarouselWithCustomControls />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useRef } from "react";


export const CarouselWithCustomControls = () => {
  const slides = [
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+1",
      title: "Slide 1",
      description: "This is the first slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+2",
      title: "Slide 2",
      description: "This is the second slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+3",
      title: "Slide 3",
      description: "This is the third slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+4",
      title: "Slide 4",
      description: "This is the fourth slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+5",
      title: "Slide 5",
      description: "This is the fifth slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+6",
      title: "Slide 6",
      description: "This is the sixth slide description.",
    },
  ];

  const customPrev = React.useRef(null);
  const customNext = React.useRef(null);
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      customPrev.current.addEventListener("click", () => {
        splideRef.current.splide.go("-");
      });

      customNext.current.addEventListener("click", () => {
        splideRef.current.splide.go("+");
      });
    }
  }, []);

  return (
    <div className="bg-[#080808] p-6 rounded-lg">
      <div className="flex justify-between max-[677px]:justify-center gap-20 mb-4">
        <button
          ref={customPrev}
          className="px-[20px] py-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
        >
          Prev
        </button>
        <button
          ref={customNext}
          className="px-[20px] py-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
        >
          Next
        </button>
      </div>
      <Splide
        options={{
          rewind: true,
          pagination: false,
          arrows: false,
          gap: "1rem",
        }}
        aria-label="Carousel with Custom Controls"
        ref={splideRef}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col items-center cursor-grab">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h3 className="mb-2 text-xl font-bold text-white">
                {slide.title}
              </h3>
              <p className="text-center text-gray-400">{slide.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Carousel With Thumbnails</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <CarouselWithThumbnails />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useRef } from "react";


export const CarouselWithThumbnails = () => {
  const slides = [
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+1",
      title: "Slide 1",
      description: "This is the first slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+2",
      title: "Slide 2",
      description: "This is the second slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+3",
      title: "Slide 3",
      description: "This is the third slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+4",
      title: "Slide 4",
      description: "This is the fourth slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+5",
      title: "Slide 5",
      description: "This is the fifth slide description.",
    },
    {
      imageUrl: "https://via.placeholder.com/700x300?text=Slide+6",
      title: "Slide 6",
      description: "This is the sixth slide description.",
    },
  ];

  const primaryRef = useRef();
  const secondaryRef = useRef();

  useEffect(() => {
    if (primaryRef.current && secondaryRef.current) {
      primaryRef.current.sync(secondaryRef.current.splide);
    }
  }, []);

  return (
    <div className="mb-5">
      <Splide
        options={{
          gap: "1rem",
          pagination: false,
          arrows: true,
          type: "fade",
        }}
        ref={primaryRef}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col items-center cursor-grab ">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h3 className="mb-2 text-xl font-bold text-white">
                {slide.title}
              </h3>
              <p className="text-center text-gray-400">{slide.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <Splide
        style={{
          margin: "1rem",
        }}
        options={{
          fixedWidth: 100,
          fixedHeight: 60,
          isNavigation: true,
          gap: 10,
          focus: "center",
          pagination: true,
          arrows: false,
          cover: true,
          breakpoints: {
            600: {
              fixedWidth: 66,
              fixedHeight: 40,
            },
          },
        }}
        ref={secondaryRef}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index} className="">
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              className="mt-4 rounded-lg"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Example </h3>
                <div className="relative flex items-end justify-center p-5 my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <CarouselWithThumbnailsExample />
                </div>
              </div>
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default carousel;
