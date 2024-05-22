import { NextSeo } from "next-seo";

interface DocsSEOProps {
  title: string;
  description: string;
  image: string;
}

export const DocsSEO = ({ title, description, image }: DocsSEOProps) => {
  const titleWithOutSpace = title.replace(" ", "");
  const canonical = `https://ui.hextastudio.in/docs/components/layout/${titleWithOutSpace.replace(
    "- HextaUI ✨",
    ""
  )}`;
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          url: `${canonical}`,
          title: `${title}`,
          description: `${description}`,
          images: [
            {
              url: `${image}`,
              width: 1920,
              height: 1080,
              alt: `${title}`,
              type: "image/png",
            },
          ],
          siteName: `${title}`,
        }}
      />
    </>
  );
};
