import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { NextSeo } from "next-seo";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/hexta-ui/Badge";
import { DocsHeader } from "@/components/utils/DocsHeader";

const SaaSorStartup = () => {
  return (
    <>
      <NextSeo
        title="Startup/SaaS Template - HextaUI ✨"
        description="Awesome and modern template for Startup or SaaS websites."
        canonical="https://ui.hextastudio.in/docs/templates/portfolio-template-v1"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/templates/portfolio-template-v1",
          title: "Startup/SaaS Template - HextaUI ✨",
          description:
            "Awesome and modern template for Startup or SaaS websites.",
          images: [
            {
              url: "https://i.imgur.com/21NWXra.png",
              width: 1920,
              height: 1080,
              alt: "Startup/SaaS Template - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Startup/SaaS Template - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Startup/SaaS Template"
            description="Awesome and modern template for Startup or SaaS websites."
          />
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                {" "}
                <div className="flex gap-3 flex-wrap mb-[3rem]">
                  <Link
                    href="https://hextaui.lemonsqueezy.com/buy/b0efb8d0-2059-4ec6-bb11-580c3bf842b0"
                    className="flex items-center gap-2 primary-button"
                  >
                    ✨ Buy this template
                    <Badge variant="secondary">
                      <small>$29 off</small>
                    </Badge>
                  </Link>
                  <Link
                    href="https://eloquent-belekoy-8b3fc1.netlify.app/"
                    className="secondary-button"
                  >
                    Live Preview
                  </Link>
                </div>
                <h3 className="h3">Template Preview</h3>
                <div className="relative flex flex-col items-center justify-center gap-4 my-3 overflow-hidden preview-container">
                  <Image
                    src="https://i.imgur.com/3ntQrYF.png"
                    alt="Startup/SaaS Template v1 - HextaUI ✨"
                    className="object-cover rounded-2xl"
                    width={1920}
                    height={1080}
                  />
                  <Image
                    src="https://i.imgur.com/7oa88RR.png"
                    alt="Startup/SaaS Template v1 - HextaUI ✨"
                    className="object-cover rounded-2xl"
                    width={1920}
                    height={1080}
                  />
                  <Image
                    src="https://i.imgur.com/3xY9tnA.png"
                    alt="Startup/SaaS Template v1 - HextaUI ✨"
                    className="object-cover rounded-2xl"
                    width={1920}
                    height={1080}
                  />
                  <Image
                    src="https://i.imgur.com/xGulxTb.png"
                    alt="Startup/SaaS Template v1 - HextaUI ✨"
                    className="object-cover rounded-2xl"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="flex gap-3 flex-wrap mt-[3rem]">
                  <Link
                    href="https://hextaui.lemonsqueezy.com/buy/b0efb8d0-2059-4ec6-bb11-580c3bf842b0"
                    className="flex items-center gap-2 primary-button"
                  >
                    ✨ Buy this template
                    <Badge variant="secondary">
                      <small>$29 off</small>
                    </Badge>
                  </Link>
                  <Link
                    href="https://eloquent-belekoy-8b3fc1.netlify.app/"
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

export default SaaSorStartup;
