import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import React from "react";

import { NextSeo } from "next-seo";

export const MagneticLinkPreview = ({ children }) => {
  const magnetic = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic?.current, "x", {
      ease: "expo",
      duration: 1,
    });

    const yTo = gsap.quickTo(magnetic?.current, "y", {
      ease: "expo",
      duration: 1,
    });

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic?.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x);
      yTo(y);
    };

    const mouseLeave = (e) => {
      gsap.to(magnetic?.current, { x: 0 });
      gsap.to(magnetic?.current, { y: 0 });

      xTo(0);
      yTo(0);
    };

    magnetic.current?.addEventListener("mousemove", mouseMove);
    magnetic.current?.addEventListener("mouseleave", mouseLeave);

    return () => {
      magnetic.current?.removeEventListener("mousemove", mouseMove);
      magnetic.current?.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref: magnetic });
};

const magneticButton = () => {
  return (
    <>
      <NextSeo
        title="Magnetic Button - HextaUI ✨"
        description="A button that follows mouse cursor within specific range around the button"
        openGraph={{
          url: "https://hextaui.vercel.app/docs/components/magnetic-button",
          title: "Magnetic Button - HextaUI ✨",
          description:
            "A button that follows mouse cursor within specific range around the button",
          images: [
            {
              url: "https://i.imgur.com/r33EUoh.png",
              width: 1920,
              height: 1080,
              alt: "Magnetic Button - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Magnetic Button - HextaUI ✨",
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
            <h1 className="h1">Magnetic Button</h1>
            <p className="text-sm opacity-80">
              A button that follows mouse cursor within specific range around
              the button.
            </p>
          </div>
          <div className="flex flex-col gap-4 py-10 preview">
            <div>
              <h3 className="h3">Preview</h3>
              <div
                className="flex items-center justify-center my-3 border border-white border-opacity-10 rounded-2xl preview-container"
                style={{
                  height: "35rem",
                }}
              >
                <MagneticLinkPreview>
                  <button className="py-3 font-bold text-black bg-white px-7 rounded-xl">
                    Hover me
                  </button>
                </MagneticLinkPreview>
              </div>
            </div>
          </div>
          <div className="installation">
            <h3 className="h3">Installation</h3>
            <CodeBlock lang="bash" filename="bash" code={`npm install gsap`} />
            <h3 className="h3">Setup</h3>
            <CodeBlock
              lang="Javascript"
              filename="index.jsx"
              code={`import { useEffect, useRef } from "react";
import gsap from "gsap";
import React from "react";`}
            />
            <CodeBlock
              lang="Javascript"
              filename="index.jsx"
              code={`export default function MagneticLink({ children }) {
    const magnetic = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magnetic?.current, "x", {
            ease: "expo",
            duration: 1,
        });

        const yTo = gsap.quickTo(magnetic?.current, "y", {
            ease: "expo",
            duration: 1,
        });

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } =
                magnetic?.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x);
            yTo(y);
        };

        const mouseLeave = (e) => {
            gsap.to(magnetic?.current, { x: 0 });
            gsap.to(magnetic?.current, { y: 0 });

            xTo(0);
            yTo(0);
        };

        magnetic.current?.addEventListener("mousemove", mouseMove);
        magnetic.current?.addEventListener("mouseleave", mouseLeave);

        return () => {
        magnetic.current?.removeEventListener("mousemove", mouseMove);
        magnetic.current?.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);

        return React.cloneElement(children, { ref: magnetic });
}`}
            />
          </div>
          <div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="Javascript"
              filename="home.jsx"
              code={`import MagneticLink from '@/components/MagneticLink';              
<MagneticLink>
    <button className="py-3 font-bold text-black bg-white px-7 rounded-xl">
        Hover me
    </button>
</MagneticLink>`}
            />
          </div>
          <div>
            <h3 className="h3">Props</h3>
            <div className="py-4 overflow-x-auto">
              <table className="text-left break-all divide-y divide-gray-200 table-auto whitespace-break-words">
                <thead>
                  <tr className="border border-white border-opacity-10">
                    <th className="px-4 py-2">Prop</th>
                    <th className="px-4 py-2">Type</th>
                    <th className="px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-white border-opacity-10">
                    <td className="px-4 py-2">
                      <samp>children</samp>
                    </td>
                    <td className="px-4 py-2">React.ReactNode</td>
                    <td className="px-4 py-2">
                      The child elements to be rendered within the container.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default magneticButton;
