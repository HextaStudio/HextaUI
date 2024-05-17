import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { NextSeo } from "next-seo";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/hexta-ui/Badge";
import { DocsHeader } from "@/components/utils/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const portfolioV1 = () => {
  return (
    <>
      <DocsSEO
        title="Portfolio v1 - HextaUI ✨"
        description="Beautiful portfolio template built with Next.js, Tailwind CSS, and TypeScript."
        image="https://i.imgur.com/21NWXra.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Portfolio v1"
            description="Beautiful portfolio template built with Next.js, Tailwind CSS, and TypeScript."
          />
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                {" "}
                <div className="flex gap-3 flex-wrap mb-[3rem]">
                  <Link
                    href="https://hextaui.lemonsqueezy.com/buy/fa5bee92-81a6-4b8d-9f2e-4cc433be7cf3"
                    className="flex items-center gap-2 primary-button"
                  >
                    ✨ Buy this template
                    <Badge variant="secondary">
                      <small>$29 off</small>
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
                    alt="Portfolio v1 - HextaUI ✨"
                    className="object-cover rounded-2xl"
                    width={1920}
                    height={1080}
                  />
                  <Image
                    src="https://i.imgur.com/nR2BtA3.png"
                    alt="Portfolio v1 - HextaUI ✨"
                    className="object-cover rounded-2xl"
                    width={1920}
                    height={1080}
                  />
                  <Image
                    src="https://i.imgur.com/npQ8dCl.png"
                    alt="Portfolio v1 - HextaUI ✨"
                    className="object-cover rounded-2xl"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="flex gap-3 flex-wrap mt-[3rem]">
                  <Link
                    href="https://hextaui.lemonsqueezy.com/buy/fa5bee92-81a6-4b8d-9f2e-4cc433be7cf3"
                    className="flex items-center gap-2 primary-button"
                  >
                    ✨ Buy this template
                    <Badge variant="secondary">
                      <small>$29 off</small>
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

export default portfolioV1;
