import { Hero } from "@/components/landingPage/Hero";
import { CTA } from "@/components/landingPage/CTA";
import { Features } from "@/components/landingPage/Features";
import { Layout } from "@/components/Layout";
import { NextSeo } from "next-seo";
import { Testimonials } from "@/components/landingPage/Testimonials";

export default function Home() {
  return (
    <>
      <NextSeo
        title="hextastudio/ui"
        description="Easy to use, modern, animated, and responsive UI library to skyrocket your next project impression."
        canonical="https://ui.hextastudio.in/"
        openGraph={{
          url: "https://ui.hextastudio.in",
          title: "hextastudio/ui",
          description:
            "Easy to use, modern, animated, and responsive UI library to skyrocket your next project impression.",
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
        <Testimonials />
        <CTA />
      </Layout>
    </>
  );
}
