import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { NextSeo } from "next-seo";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/hexta-ui/Badges";

const portfolioTemplateV1 = () => {
  return (
    <>
      <NextSeo
        title="Portfolio Template v1 - HextaUI ✨"
        description="Beautiful portfolio template built with Next.js, Tailwind CSS, and TypeScript."
        canonical="https://ui.hextastudio.in/docs/templates/portfolio-template-v1"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/templates/portfolio-template-v1",
          title: "Portfolio Template v1 - HextaUI ✨",
          description:
            "Beautiful portfolio template built with Next.js, Tailwind CSS, and TypeScript.",
          images: [
            {
              url: "https://i.imgur.com/21NWXra.png",
              width: 1920,
              height: 1080,
              alt: "Portfolio Template v1 - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Portfolio Template v1 - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <h1 className="h1">Portfolio Template v1</h1>
          <p className="text-sm opacity-80">
            Step-by-step guide to install and use the HextaUI library
          </p>{" "}
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                {" "}
                <div className="flex gap-3 flex-wrap mb-[3rem]">
                  <Link
                    href="https://hextaui.lemonsqueezy.com/buy/b0efb8d0-2059-4ec6-bb11-580c3bf842b0?discount=0"
                    className="flex items-center gap-2 primary-button"
                  >
                    ✨ Buy this template
                    <Badge variant="secondary">
                      <small>10% off</small>
                    </Badge>
                  </Link>
                  <Link
                    href="https://radiant-truffle-fbbf5c.netlify.app"
                    className="secondary-button"
                  >
                    Live Preview
                  </Link>
                </div>
                <h3 className="h3">Template Preview</h3>
                <div className="relative flex flex-col items-center justify-center gap-4 my-3 overflow-hidden preview-container">
                  <Image
                    src="https://i.imgur.com/21NWXra.png"
                    alt="Portfolio Template v1 - HextaUI ✨"
                    className="object-cover rounded-2xl"
                    width={1920}
                    height={1080}
                  />
                  <Image
                    src="https://i.imgur.com/nR2BtA3.png"
                    alt="Portfolio Template v1 - HextaUI ✨"
                    className="object-cover rounded-2xl"
                    width={1920}
                    height={1080}
                  />
                  <Image
                    src="https://i.imgur.com/npQ8dCl.png"
                    alt="Portfolio Template v1 - HextaUI ✨"
                    className="object-cover rounded-2xl"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="flex gap-3 flex-wrap mt-[3rem]">
                  <Link
                    href="https://hextaui.lemonsqueezy.com/buy/b0efb8d0-2059-4ec6-bb11-580c3bf842b0?discount=0"
                    className="flex items-center gap-2 primary-button"
                  >
                    ✨ Buy this template
                    <Badge variant="secondary">
                      <small>10% off</small>
                    </Badge>
                  </Link>
                  <Link
                    href="https://radiant-truffle-fbbf5c.netlify.app"
                    className="secondary-button"
                  >
                    Live Preview
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default portfolioTemplateV1;
