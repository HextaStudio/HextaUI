import { NextSeo } from "next-seo";

interface DocsSEOProps {
  title: string;
  description: string;
  image: string;
}

export const DocsSEO = ({ title, description, image }: DocsSEOProps) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`https://ui.hextastudio.in/docs/components/layout/${title.replace(
          " ",
          "",
        )}`}
        openGraph={{
          url: `https://ui.hextastudio.in/docs/components/layout/${title.replace(
            " ",
            "",
          )}`,
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
