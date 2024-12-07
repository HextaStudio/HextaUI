import { Layout } from "@/components/Layout";
import { NextSeo } from "next-seo";

import { Features } from "@/components/landingPage/Features";
import { Hero } from "@/components/landingPage/Hero";
import { Testimonials } from "@/components/landingPage/Testimonials";
import { CTASection } from "@/components/landingPage/CTASection";

export default function Home() {
  return (
    <>
      <NextSeo
        title="hextastudio/ui - Modern UI Components"
        description="Easy to use, modern, animated, and responsive UI library to skyrocket your next project impression."
        canonical="https://ui.hextastudio.in/"
        openGraph={{
          url: "https://ui.hextastudio.in",
          title: "hextastudio/ui",
          description: "Modern UI Components for Next.js and React",
          images: [
            {
              url: "https://i.imgur.com/xlCPzQc.png",
              width: 1920,
              height: 1080,
              alt: "hextastudio/ui",
              type: "image/png",
            },
          ],
          siteName: "hextastudio/ui",
        }}
      />
      <Layout>
        <Hero />
        <div className="mt-[-25rem]">
          <Features />
        </div>
        <Testimonials />
        <CTASection />
      </Layout>
    </>
  );
}
