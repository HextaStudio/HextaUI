import { Layout } from "@/components/Layout";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const Features = dynamic(() => import("@/components/landingPage/Features"), {
  loading: () => <div className="h-[500px]" />, // Placeholder
});

const Hero = dynamic(() => import("@/components/landingPage/Hero"));
const Testimonials = dynamic(
  () => import("@/components/landingPage/Testimonials")
);
const CTASection = dynamic(() => import("@/components/landingPage/CTASection"));

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
