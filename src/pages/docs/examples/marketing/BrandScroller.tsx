import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

import { BsAmazon, BsGoogle, BsSpotify, BsYoutube } from "react-icons/bs";

const HorizontalScroller1 = () => {
  return (
    <>
      <div className="group flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
              key={i}
            >
              <div className="flex items-center w-28 gap-3">
                <BsSpotify size={24} />
                <p className="text-lg font-bold">Spotify</p>
              </div>
              <div className="flex items-center w-28 gap-3">
                <BsYoutube size={24} />
                <p className="text-lg font-bold">YouTube</p>
              </div>
              <div className="flex items-center w-28 gap-3">
                <BsAmazon size={24} />
                <p className="text-lg font-bold">Amazon</p>
              </div>

              <div className="flex items-center w-28 gap-3">
                <BsGoogle size={24} />
                <p className="text-lg font-bold">Google</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

const HorizontalScroller2 = () => {
  return (
    <>
      <div className="group flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              className="flex shrink-0 justify-around [gap:var(--gap)] [animation-direction:reverse] animate-marquee flex-row"
              key={i}
            >
              <div className="flex items-center w-28 gap-3">
                <BsSpotify size={24} />
                <p className="text-lg font-bold">Spotify</p>
              </div>
              <div className="flex items-center w-28 gap-3">
                <BsYoutube size={24} />
                <p className="text-lg font-bold">YouTube</p>
              </div>
              <div className="flex items-center w-28 gap-3">
                <BsAmazon size={24} />
                <p className="text-lg font-bold">Amazon</p>
              </div>

              <div className="flex items-center w-28 gap-3">
                <BsGoogle size={24} />
                <p className="text-lg font-bold">Google</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

const HorizontalScroller3 = () => {
  return (
    <>
      <div className="group flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
        <div className="flex flex-col [gap:var(--gap)]">
          <div className="flex [gap:var(--gap)]">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
                  key={i}
                >
                  <div className="flex items-center w-28 gap-3">
                    <BsSpotify size={24} />
                    <p className="text-lg font-bold">Spotify</p>
                  </div>
                  <div className="flex items-center w-28 gap-3">
                    <BsYoutube size={24} />
                    <p className="text-lg font-bold">YouTube</p>
                  </div>
                  <div className="flex items-center w-28 gap-3">
                    <BsAmazon size={24} />
                    <p className="text-lg font-bold">Amazon</p>
                  </div>

                  <div className="flex items-center w-28 gap-3">
                    <BsGoogle size={24} />
                    <p className="text-lg font-bold">Google</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex [gap:var(--gap)]">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  className="flex shrink-0 justify-around [animation-direction:reverse] [gap:var(--gap)] animate-marquee flex-row"
                  key={i}
                >
                  <div className="flex items-center w-28 gap-3">
                    <BsSpotify size={24} />
                    <p className="text-lg font-bold">Spotify</p>
                  </div>
                  <div className="flex items-center w-28 gap-3">
                    <BsYoutube size={24} />
                    <p className="text-lg font-bold">YouTube</p>
                  </div>
                  <div className="flex items-center w-28 gap-3">
                    <BsAmazon size={24} />
                    <p className="text-lg font-bold">Amazon</p>
                  </div>

                  <div className="flex items-center w-28 gap-3">
                    <BsGoogle size={24} />
                    <p className="text-lg font-bold">Google</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

const brandscroller = () => {
  return (
    <>
      <DocsSEO
        title="Brand Scroller - hextastudio/ui"
        description="A scroller for brand logos."
        image="https://i.imgur.com/qRTYCad.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Brand Scroller"
            description="A scroller for brand logos."
          />
          <DocsPreview title="Brand Scroller 1">
            <HorizontalScroller1 />
          </DocsPreview>
          <CodeBlock
            lang="tsx"
            filename="tailwind.config.js"
            code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // ...
        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        // ...
      },
    },
  },
  plugins: [],
};
`}
          />
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`import { BsAmazon, BsGoogle, BsSpotify, BsYoutube } from "react-icons/bs";

const HorizontalScroller1 = () => {
  return (
    <>
      <div className="group flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
              key={i}
            >
              <div className="flex items-center w-28 gap-3">
                <BsSpotify size={24} />
                <p className="text-lg font-bold">Spotify</p>
              </div>
              <div className="flex items-center w-28 gap-3">
                <BsYoutube size={24} />
                <p className="text-lg font-bold">YouTube</p>
              </div>
              <div className="flex items-center w-28 gap-3">
                <BsAmazon size={24} />
                <p className="text-lg font-bold">Amazon</p>
              </div>

              <div className="flex items-center w-28 gap-3">
                <BsGoogle size={24} />
                <p className="text-lg font-bold">Google</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};`}
          />

          <DocsPreview title="Brand Scroller 2">
            <HorizontalScroller2 />
          </DocsPreview>
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`import { BsAmazon, BsGoogle, BsSpotify, BsYoutube } from "react-icons/bs";

const HorizontalScroller2 = () => {
  return (
    <>
      <div className="group flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              className="flex shrink-0 justify-around [gap:var(--gap)] [animation-direction:reverse] animate-marquee flex-row"
              key={i}
            >
              <div className="flex items-center w-28 gap-3">
                <BsSpotify size={24} />
                <p className="text-lg font-bold">Spotify</p>
              </div>
              <div className="flex items-center w-28 gap-3">
                <BsYoutube size={24} />
                <p className="text-lg font-bold">YouTube</p>
              </div>
              <div className="flex items-center w-28 gap-3">
                <BsAmazon size={24} />
                <p className="text-lg font-bold">Amazon</p>
              </div>

              <div className="flex items-center w-28 gap-3">
                <BsGoogle size={24} />
                <p className="text-lg font-bold">Google</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};`}
          />

          <DocsPreview title="Brand Scroller 3">
            <HorizontalScroller3 />
          </DocsPreview>
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`import { BsAmazon, BsGoogle, BsSpotify, BsYoutube } from "react-icons/bs";

const HorizontalScroller3 = () => {
  return (
    <>
      <div className="group flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
        <div className="flex flex-col [gap:var(--gap)]">
          <div className="flex [gap:var(--gap)]">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
                  key={i}
                >
                  <div className="flex items-center w-28 gap-3">
                    <BsSpotify size={24} />
                    <p className="text-lg font-bold">Spotify</p>
                  </div>
                  <div className="flex items-center w-28 gap-3">
                    <BsYoutube size={24} />
                    <p className="text-lg font-bold">YouTube</p>
                  </div>
                  <div className="flex items-center w-28 gap-3">
                    <BsAmazon size={24} />
                    <p className="text-lg font-bold">Amazon</p>
                  </div>

                  <div className="flex items-center w-28 gap-3">
                    <BsGoogle size={24} />
                    <p className="text-lg font-bold">Google</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex [gap:var(--gap)]">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  className="flex shrink-0 justify-around [animation-direction:reverse] [gap:var(--gap)] animate-marquee flex-row"
                  key={i}
                >
                  <div className="flex items-center w-28 gap-3">
                    <BsSpotify size={24} />
                    <p className="text-lg font-bold">Spotify</p>
                  </div>
                  <div className="flex items-center w-28 gap-3">
                    <BsYoutube size={24} />
                    <p className="text-lg font-bold">YouTube</p>
                  </div>
                  <div className="flex items-center w-28 gap-3">
                    <BsAmazon size={24} />
                    <p className="text-lg font-bold">Amazon</p>
                  </div>

                  <div className="flex items-center w-28 gap-3">
                    <BsGoogle size={24} />
                    <p className="text-lg font-bold">Google</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default brandscroller;
