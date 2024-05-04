import { DocsLayout } from "@/components/DocsPage/DocsLayout";

import Link from "next/link";
import Image from "next/legacy/image";
import { NextSeo } from "next-seo";

const CardComponent = ({ component }) => {
  return (
    <>
      <div className="w-full p-4 m-2 border border-white border-opacity-10 rounded-xl h-fit component-card">
        <div className="h-full">
          <Image
            className="object-cover w-full h-full border border-white border-opacity-10"
            src={component.image}
            width={1920}
            height={1080}
            alt={component.title}
            objectFit="cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-between h-1/3">
          <div className="flex flex-col py-3">
            <h4 className="text-lg font-semibold h3">{component.title}</h4>
            <p className="text-sm opacity-80">{component.description}</p>
          </div>
          <Link
            href={`/docs/components/${component.url}`}
            className="secondary-button"
          >
            Use this Component
          </Link>
        </div>
      </div>
    </>
  );
};

const components = () => {
  const components = [
    {
      title: "Magnetic Button",
      description:
        " A button that follows mouse cursor within specific range around button.",
      url: "modern/magnetic-button",
      image: "https://i.imgur.com/tCNsXzc.gif",
    },
    {
      title: "White Ray",
      description:
        "A Beautiful animated ray to use in hero component or to use in your next awesome SaaS landing page.",
      url: "modern/white-ray",
      image: "https://i.imgur.com/Fva7GVG.png",
    },
    {
      title: "Text Reveal v1",
      description: "An Awesome Text Reveal animated effect on Scrolling",
      url: "modern/text-reveal-v1",
      image: "https://i.imgur.com/mh05503.gif",
    },
    {
      title: "Photo Trailing Effect",
      description:
        "An Awesome mouse move effect combined with image gallery for creative UI",
      url: "modern/photo-trailing-mousemove",
      image: "https://i.imgur.com/68A1mEf.gif",
    },
    {
      title: "Water Drop Effect",
      description: "Beautiful water drop effect using grids and AnimeJs",
      url: "modern/water-drop-effect",
      image: "https://i.imgur.com/LdLMgXa.gif",
    },
    {
      title: "Hacker Text Effect",
      description: "A really cool Hacker Text effect when hovered on text.",
      url: "modern/hacker-text-effect",
      image: "https://i.imgur.com/011GWuU.gif",
    },
    {
      title: "Floating Image Gallery",
      description: "Beautiful floating image gallery with mouse hover effect.",
      url: "modern/floating-image-gallery",
      image: "https://i.imgur.com/q3VXsq5.gif",
    },
    {
      title: "Infinite Text Scroll v1",
      description: "Awesome infinite text scrolling effect using framer-motion",
      url: "modern/infinite-text-scroll-v1",
      image: "https://i.imgur.com/vIwTOrJ.gif",
    },
  ];
  return (
    <>
      <NextSeo
        title="Components - HextaUI ✨"
        description="Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness."
        openGraph={{
          url: "https://ui.hextastudio.in",
          title: "Components - HextaUI ✨",
          description:
            "Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness.",
          images: [
            {
              url: "https://i.imgur.com/xlCPzQc.png",
              width: 1920,
              height: 1080,
              alt: "Components - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Components - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <h1 className="h1 max-sm:text-4xl">
            Gorgeous Components, Zero Effort
          </h1>
          <p className="text-sm opacity-70">
            Just copy and paste our prebuilt components
          </p>
          <div className="flex flex-col gap-4 py-10">
            <div>
              <h3 className="h3">Top picked components</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              {components.map((component, index) => (
                <CardComponent
                  key={index}
                  component={{
                    title: component.title,
                    image: component.image,
                    url: component.url,
                    description: component.description,
                  }}
                />
              ))}
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default components;
