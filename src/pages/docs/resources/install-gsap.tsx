import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { NextSeo } from "next-seo";

const gsapInstallation = () => {
  return (
    <>
      <NextSeo
        title="Install GSAP - HextaUI ✨"
        description="Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness."
        canonical="https://ui.hextastudio.in/docs/components/resources/install-gsap"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/resources/install-gsap",
          title: "Install GSAP - HextaUI ✨",
          description:
            "Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness.",
          images: [
            {
              url: "https://i.imgur.com/xlCPzQc.png",
              width: 1920,
              height: 1080,
              alt: "Install GSAP - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Install GSAP - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <h1 className="h1">Install GSAP</h1>
          <p className="text-sm opacity-80">
            Install and setup GSAP animation library
          </p>
          <div className="flex flex-col gap-4 py-10">
            <div>
              <h3 className="h3">Installing GSAP</h3>
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npm install gsap`}
              />
            </div>
            <div>
              <h3 className="h3">Setup GSAP ScrollTrigger</h3>
              <CodeBlock
                lang="jsx"
                filename="index.tsx"
                code={`import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);`}
              />
            </div>
            <div>
              <h3 className="h3">GSAP Example</h3>
              <CodeBlock
                lang="jsx"
                filename="index.tsx"
                code={`import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  useEffect(() => {
    gsap.to('#animated-text', {
      transform: "rotate(360deg)",
      scrollTrigger: {
        trigger: '#wrapper',
        scrub: 0.9
      }
    });
  }, []);

  return (
    <div id="wrapper">
      <p className="text-2xl opacity-0" id="animated-text">Hello World</p>
    </div>
  );
};
`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default gsapInstallation;
