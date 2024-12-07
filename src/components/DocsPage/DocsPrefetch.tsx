import Head from "next/head";
import { useRouter } from "next/router";

export const DocsPrefetch = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  // Calculate related docs pages
  const relatedPaths = [
    currentPath.replace(/\/[^/]+$/, "/install-next"),
    currentPath.replace(/\/[^/]+$/, "/install-tailwind"),
    currentPath.replace(/\/[^/]+$/, "/install-gsap"),
  ];

  return (
    <Head>
      {relatedPaths.map((path) => (
        <link key={path} rel="prefetch" href={path} as="document" />
      ))}
      <link
        rel="preload"
        href="/fonts/GeistVF.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
    </Head>
  );
};
