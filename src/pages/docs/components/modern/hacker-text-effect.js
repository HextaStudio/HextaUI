import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import { useEffect, useRef } from "react";
import React from "react";

import { NextSeo } from "next-seo";
import Link from "next/link";

export const HackerTextEffectPreview = ({ text }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const textRef = useRef(null);

  let interval = null;

  useEffect(() => {
    if (textRef.current) {
      textRef.current.onmouseover = (event) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return event.target.dataset.text[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= event.target.dataset.text.length) {
            clearInterval(interval);
          }

          iteration += 1 / 3;
        }, 30);
      };
    }
  }, []);
  return (
    <p ref={textRef} className="h1" data-text={text?.uppercase || "HEXTA UI"}>
      {text?.uppercase || "HEXTA UI"}
    </p>
  );
};
const hackerTextEffect = () => {
  return (
    <>
      <NextSeo
        title="Hacker Text Effect - HextaUI ✨"
        description="A really cool Hacker Text effect when hovered on text."
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/hacker-text-effect",
          title: "Hacker Text Effect - HextaUI ✨",
          description: "A really cool Hacker Text effect when hovered on text.",
          images: [
            {
              url: "https://i.imgur.com/FFjJIbo.png",
              width: 1920,
              height: 1080,
              alt: "Hacker Text Effect - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Hacker Text Effect - HextaUI ✨",
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
            <h1 className="h1">Hacker Text Effect</h1>
            <p className="text-sm opacity-80">
              A really cool Hacker Text effect when hovered on text.
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
                <HackerTextEffectPreview />
              </div>
            </div>
          </div>
          <div className="installation">
            <h3 className="h3">Setup</h3>
            <CodeBlock
              lang="jsx"
              filename="index.jsx"
              code={`import { useEffect, useRef } from "react";
import React from "react";`}
            />
            <CodeBlock
              lang="jsx"
              filename="index.jsx"
              code={`const HackerTextEffectPreview = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const textRef = useRef(null);

    let interval = null;

    useEffect(() => {
        if (textRef.current) {
        textRef.current.onmouseover = (event) => {
            let iteration = 0;

            clearInterval(interval);

            interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.text[index];
                }

                return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= event.target.dataset.text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
            }, 30);
        };
        }
    }, []);
    
    return (
        <p ref={textRef} className="h1" data-text="HEXTA UI">
            HOVER ME
        </p>
    );
};`}
            />
          </div>
          <div>
            <small>
              This component was inspired by{" "}
              <Link className="blue-link" href="https://codepen.io/Hyperplexed">
                Hyperplexed
              </Link>
            </small>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default hackerTextEffect;
