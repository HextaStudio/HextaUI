import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import { motion, useScroll, useTransform } from "framer-motion";

const framerMotionInstallation = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <>
      <NextSeo
        title="Install Framer Motion - HextaUI ✨"
        description="Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness."
        openGraph={{
          url: "https://hextaui.vercel.app/docs/resources/install-framer-motion",
          title: "Install Framer Motion - HextaUI ✨",
          description:
            "Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness.",
          images: [
            {
              url: "https://i.imgur.com/xlCPzQc.png",
              width: 1920,
              height: 1080,
              alt: "Install Framer Motion - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Install Framer Motion - HextaUI ✨",
        }}
        twitter={{
          handle: "@HextaStudio",
          site: "@HextaStudio",
          cardType: "summary_large_image",
        }}
      />
      <DocsLayout>
        <main>
          <h1 className="h1">Install Framer Motion</h1>
          <p className="opacity-80">
            Install and setup Framer Motion animation library
          </p>
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
                lang="javascript"
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
