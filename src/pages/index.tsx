import { Hero } from "@/components/landingPage/Hero";
import { CTA } from "@/components/landingPage/CTA";
import { Features } from "@/components/landingPage/Features";
import { Layout } from "@/components/Layout";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="HextaUI ✨ -  Gorgeous Web Components, Zero Effort"
        description="Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness."
        canonical="https://ui.hextastudio.in/"
        openGraph={{
          url: "https://ui.hextastudio.in",
          title: "HextaUI ✨ -  Gorgeous Web Components, Zero Effort",
          description:
            "Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness.",
          images: [
            {
              url: "https://i.imgur.com/xlCPzQc.png",
              width: 1920,
              height: 1080,
              alt: "HextaUI ✨ -  Gorgeous Web Components, Zero Effort",
              type: "image/png",
            },
          ],
          siteName: "HextaUI ✨ -  Gorgeous Web Components, Zero Effort",
        }}
      />
      <Layout>
        <Hero />
        <Features />
        <CTA />
      </Layout>
    </>
  );
}
