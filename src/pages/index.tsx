import { Layout } from "@/components/Layout";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/landingPage/Hero"), {
  loading: () => <div className="min-h-screen" />,
  ssr: true,
});

const Features = dynamic(() => import("@/components/landingPage/Features"), {
  loading: () => <div className="h-[500px]" />,
  ssr: false,
});

const Testimonials = dynamic(
  () => import("@/components/landingPage/Testimonials"),
  {
    loading: () => <div className="h-[400px]" />,
    ssr: false,
  }
);

const CTASection = dynamic(
  () => import("@/components/landingPage/CTASection"),
  {
    loading: () => <div className="h-[300px]" />,
    ssr: false,
  }
);

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
