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
