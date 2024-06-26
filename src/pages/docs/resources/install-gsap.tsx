import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { NextSeo } from "next-seo";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";

const gsapInstallation = () => {
  return (
    <>
      <DocsSEO
        title="Install GSAP - hextastudio/ui"
        description="Easy to use, modern, animated, and responsive UI library to skyrocket your next project impression."
        image="https://i.imgur.com/xlCPzQc.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Install GSAP"
            description="Install and setup GSAP animation library"
          />
          <div className="flex flex-col gap-4 py-10">
            <div>
              <h3 className="h3">Installing GSAP</h3>
              <CodeBlock
                free
                lang="bash"
                filename="bash"
                code={`npm install gsap`}
              />
            </div>
            <div>
              <h3 className="h3">Setup GSAP ScrollTrigger</h3>
              <CodeBlock
                free
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
                free
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
