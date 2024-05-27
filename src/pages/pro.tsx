import { Layout } from "@/components/Layout";
import { NextSeo } from "next-seo";
import { FaArrowUpRightDots } from "react-icons/fa6";

export default function Pro() {
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
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] gap-3">
          <FaArrowUpRightDots size={40} className="opacity-80" />
          <div className="-space-y-1 flex flex-col items-center">
            <p className="text-2xl font-semibold text-center">
              hextstudio/ui pro
            </p>
            <small>Coming soon! Stay tuned.</small>
          </div>
        </div>
      </Layout>
    </>
  );
}
