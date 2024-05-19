import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { motion, useScroll, useTransform } from "framer-motion";
import { NextSeo } from "next-seo";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const framerMotionInstallation = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <>
      <DocsSEO
        title="Install Framer Motion"
        description="Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness."
        image="https://i.imgur.com/xlCPzQc.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Install Framer Motion"
            description="Install and setup Framer Motion animation library"
          />

          <div className="flex flex-col gap-4 py-10">
            <div>
              <h3 className="h3">Installing Framer Motion</h3>
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npm install framer-motion`}
              />
            </div>
            <div>
              <h3 className="h3">Framer Motion Example</h3>
              <CodeBlock
                lang="jsx"
                filename="index.tsx"
                code={`import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div>
      <motion.p
        className="text-2xl opacity-0"
        style={{ rotate }}
      >
        Hello World
      </motion.p>
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

export default framerMotionInstallation;
