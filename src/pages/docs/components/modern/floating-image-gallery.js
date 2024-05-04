import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import { useEffect, useRef } from "react";
import React from "react";
import gsap from "gsap";

import { NextSeo } from "next-seo";
const images = {
  floating1:
    "https://images.unsplash.com/photo-1708261432863-41fdab7b5de9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
  floating2:
    "https://images.unsplash.com/photo-1713528192259-c3514aa54224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
  floating3:
    "https://images.unsplash.com/photo-1713498566844-e466c2f29d4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
  floating4:
    "https://images.unsplash.com/photo-1711109631731-f3ae890bf2ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
  floating5:
    "https://images.unsplash.com/photo-1713735963670-67cf1914a178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
  floating6:
    "https://images.unsplash.com/photo-1713847663181-2f7b22970ef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
};

const FloatingImagesGalleryPreview = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;
    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce !== 0 || yForce !== 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className="relative w-screen h-screen overflow-hidden"
    >
      <div ref={plane1} className="absolute w-full h-full">
        <img
          src={images.floating1}
          alt="image"
          width={300}
          height={1080}
          className="absolute left-[90%] top-[70%]"
        />
        <img
          src={images.floating2}
          alt="image"
          width={300}
          height={1080}
          className="absolute left-[5%] top-[65%]"
        />
      </div>
      <div ref={plane2} className="w-full h-full absolute brightness-[0.6]">
        <img
          src={images.floating4}
          alt="image"
          width={250}
          height={1080}
          className="absolute left-[5%] top-[10%]"
        />
        <img
          src={images.floating6}
          alt="image"
          width={200}
          height={1080}
          className="absolute left-[80%] top-[5%]"
        />
      </div>
      <div ref={plane3} className="w-full h-full absolute brightness-[0.5]">
        <img
          src={images.floating3}
          alt="image"
          width={150}
          height={1080}
          className="absolute left-[65%] top-[2.5%]"
        />
        <img
          src={images.floating5}
          alt="image"
          width={200}
          height={1080}
          className="absolute left-[40%] top-[75%]"
        />
      </div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <h3 className="text-lg font-medium text-center text-white h3">
          Floating Image Gallery
        </h3>
      </div>
    </main>
  );
};

const floatingImages = () => {
  return (
    <>
      <NextSeo
        title="Floating Image Gallery - HextaUI ✨"
        description="Beautiful floating image gallery with mouse hover effect."
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/modern/hacker-text-effect",
          title: "Floating Image Gallery - HextaUI ✨",
          description:
            "Beautiful floating image gallery with mouse hover effect.",
          images: [
            {
              url: "https://i.imgur.com/ibnFiuG.png",
              width: 1920,
              height: 1080,
              alt: "Floating Image Gallery - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Floating Image Gallery - HextaUI ✨",
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
            <h1 className="h1">Floating Image Gallery</h1>
            <p className="text-sm opacity-80">
              Beautiful floating image gallery with mouse hover effect.
            </p>
          </div>
          <div className="flex flex-col gap-4 py-10 preview">
            <div>
              <h3 className="h3">Preview</h3>
              <div
                className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container"
                style={{
                  height: "35rem",
                }}
              >
                <FloatingImagesGalleryPreview />
              </div>
            </div>
          </div>
          <div className="installation">
            <h3 className="h3">Installation</h3>
            <CodeBlock lang="bash" filename="bash" code={`npm install gsap`} />
            <h3 className="h3">Setup</h3>
            <CodeBlock
              lang="jsx"
              filename="index.jsx"
              code={`import { useRef } from "react";
import React from "react";
import gsap from "gsap";`}
            />
            <h3 className="h3">Adding Images</h3>
            <CodeBlock
              lang="jsx"
              filename="index.jsx"
              code={`const images = {
floating1:
    "https://images.unsplash.com/photo-1708261432863-41fdab7b5de9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
floating2:
    "https://images.unsplash.com/photo-1713528192259-c3514aa54224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
floating3:
    "https://images.unsplash.com/photo-1713498566844-e466c2f29d4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
floating4:
    "https://images.unsplash.com/photo-1711109631731-f3ae890bf2ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
floating5:
    "https://images.unsplash.com/photo-1713735963670-67cf1914a178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
floating6:
    "https://images.unsplash.com/photo-1713847663181-2f7b22970ef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
};`}
            />
            <h3 className="h3">Main Code</h3>
            <CodeBlock
              lang="jsx"
              filename="index.jsx"
              code={`const FloatingImagesGalleryPreview = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;
    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: \`+=\${xForce}\`, y: \`+=\${yForce}\` });
    gsap.set(plane2.current, {
      x: \`+=\${xForce * 0.5}\`,
      y: \`+=\${yForce * 0.5}\`,
    });
    gsap.set(plane3.current, {
      x: \`+=\${xForce * 0.25}\`,
      y: \`+=\${yForce * 0.25}\`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce !== 0 || yForce !== 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className="relative w-screen h-screen overflow-hidden"
    >
      <div ref={plane1} className="absolute w-full h-full">
     <img
          src={images.floating1}
          alt="image"
          width={300}
          height={1080}
          className="absolute left-[90%] top-[70%]"
        />
     <img
          src={images.floating2}
          alt="image"
          width={300}
          height={1080}
          className="absolute left-[5%] top-[65%]"
        />
      </div>
      <div ref={plane2} className="w-full h-full absolute brightness-[0.6]">
     <img
          src={images.floating4}
          alt="image"
          width={250}
          height={1080}
          className="absolute left-[5%] top-[10%]"
        />
     <img
          src={images.floating6}
          alt="image"
          width={200}
          height={1080}
          className="absolute left-[80%] top-[5%]"
        />
      </div>
      <div ref={plane3} className="w-full h-full absolute brightness-[0.5]">
     <img
          src={images.floating3}
          alt="image"
          width={150}
          height={1080}
          className="absolute left-[65%] top-[2.5%]"
        />
     <img
          src={images.floating5}
          alt="image"
          width={200}
          height={1080}
          className="absolute left-[40%] top-[75%]"
        />
      </div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <h3 className="text-lg font-medium text-center text-white h3">
          Floating Image Gallery
        </h3>
      </div>
    </main>
  );
};`}
            />
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default floatingImages;
