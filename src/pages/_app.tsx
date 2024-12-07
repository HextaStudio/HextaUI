import "@/styles/globals.scss";
import "@/styles/tokyo-night-dark.css";
import { LoadingScreen } from "@/components/LoadingScreen";
import Script from "next/script";
import { NextSeo } from "next-seo";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect } from "react";
import router, { useRouter } from "next/router";

interface AppProps {
  Component: any;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Prefetch important routes in the background
    if (router.pathname === "/") {
      router.prefetch("/docs");
      router.prefetch("/pro");
    }
  }, [router]);

  return (
    <>
      <NextSeo
        title="hextastudio/ui"
        description="Easy to use, modern, animated, and responsive UI library to skyrocket your next project impression."
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
        canonical="https://ui.hextastudio.in/"
        twitter={{
          handle: "@preetsuthar17",
          site: "@preetsuthar17",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          { property: "dc:creator", content: "Preet Suthar" },
          { property: "author", content: "Preet Suthar" },
          {
            name: "application-name",
            content: "hextastudio/ui",
          },
          {
            property: "keywords",
            content:
              "web components, web design, UI components, responsive design, modern design, reusable components, front-end development, web development, user interface, beautiful UI, stunning components, zero effort, copy-paste components, web elements, website building blocks, web templates, UI kits, design resources, front-end tools, web design inspiration, web design trends, web design solutions, design tools, web design assets, UI design, UX design, web design components, web UI, responsive web components, modern web components, beautiful web components, stunning web UI, web design elements, web UI kits, responsive UI kits, modern UI kits, web design assets, front-end web development, web development resources, web components library, web UI library, web design library, responsive web design, modern web design, beautiful web design, stunning web design, web design resources, web development tools, front-end web development tools, web design inspiration resources, web design trends resources, web design solutions resources, web UI solutions, web design asset resources, UI design resources, UX design resources, web component templates, web UI templates, web design templates, responsive web templates, modern web templates, beautiful web templates, stunning web templates, web template kits, web component kits, web UI kits, web design kits, responsive web kits, modern web kits, beautiful web kits, stunning web kits, no-code web design, easy web design, web design made easy, easy web development, no-code web development, web design for beginners, web development for beginners, beginner-friendly web design, beginner-friendly web development, drag-and-drop web design, drag-and-drop web development, visual web design, visual web development, WYSIWYG web design, WYSIWYG web development, web design platforms, web development platforms, web design tools, web development tools, web design software, web development software, web design apps, web development apps, web design plugins, web development plugins, web design extensions, web development extensions, web design integrations, web development integrations, web design solutions, web development solutions, web design services, web development services, web design agencies, web development agencies, web design freelancers, web development freelancers, web design consultants, web development consultants, web design experts, web development experts, web design professionals, web development professionals, web design gurus, web development gurus, web design maestros, web development maestros, web design masters, web development masters, web design ninjas, web development ninjas, web design rockstars, web development rockstars, web design superstars, web development superstars, web design wizards, web development wizards, web design magicians, web development magicians, web design sorcerers, web development sorcerers, web design alchemists, web development alchemists, web design virtuosos, web development virtuosos, web design savants, web development savants, web design prodigies, web development prodigies, web design mavericks, web development mavericks, web design pioneers, web development pioneers, web design innovators, web development innovators, web design trailblazers, web development trailblazers, web design trendsetters, web development trendsetters, web design visionaries, web development visionaries, web design futurists, web development futurists, web design revolutionaries, web development revolutionaries, web design disruptors, web development disruptors, web design game-changers, web development game-changers, web design changemakers, web development changemakers, web design transformers, web development transformers, web design movers, web development movers, web design shakers, web development shakers, web design influencers, web development influencers, web design thought leaders, web development thought leaders, web design luminaries, web development luminaries, web design geniuses, web development geniuses, web design masterminds, web development masterminds, web design authorities, web development authorities, web design subject matter experts, web development subject matter experts, web design eminences, web development eminences, web design notables, web development notables, web design celebrities, web development celebrities, web design icons, web development icons, web design legends, web development legends, web design virtuosos, web development virtuosos, web design phenoms, web development phenoms, web design sensations, web development sensations, web design wunderkinds, web development wunderkinds, web design prodigies, web development prodigies, web design marvels, web development marvels, web design miracles, web development miracles, web design wonders, web development wonders, web design phenomenons, web development phenomenons, web design anomalies, web development anomalies, web design rarities, web development rarities, web design unicorns, web development unicorns, web design extraordinaires, web development extraordinaires, web design virtuosos, web development virtuosos, web design maestros, web development maestros, web design masters, web development masters, HextaStudio, hextastudio, hexta ui, hexa studio, hexa ui, HextaStudio web components, HextaStudio web design, HextaStudio UI components, HextaStudio responsive design, HextaStudio modern design, HextaStudio reusable components, HextaStudio front-end development, HextaStudio web development, HextaStudio user interface, HextaStudio beautiful UI, HextaStudio stunning components, HextaStudio web elements, HextaStudio website building blocks, HextaStudio web templates, HextaStudio UI kits, HextaStudio design resources, HextaStudio front-end tools, HextaStudio web design inspiration, HextaStudio web design trends, HextaStudio web design solutions, HextaStudio design tools, HextaStudio web design assets, HextaStudio UI design, HextaStudio UX design, HextaStudio web design components, HextaStudio web UI, HextaStudio responsive web components, HextaStudio modern web components, HextaStudio beautiful web components, HextaStudio stunning web UI, HextaStudio web design elements, HextaStudio web UI kits, HextaStudio responsive UI kits, HextaStudio modern UI kits, HextaStudio web design assets, HextaStudio front-end web development, HextaStudio web development resources, HextaStudio web components library, HextaStudio web UI library, HextaStudio web design library, HextaStudio best web components, HextaStudio top web design, HextaStudio premium UI components, HextaStudio high-quality responsive design, HextaStudio cutting-edge modern design, HextaStudio professional reusable components, HextaStudio expert front-end development, HextaStudio skilled web development, HextaStudio beautiful user interface, HextaStudio stunning UI components, HextaStudio zero-effort web elements, HextaStudio easy website building blocks, HextaStudio professional web templates, HextaStudio premium UI kits, HextaStudio top design resources, HextaStudio best front-end tools, HextaStudio inspiring web design, HextaStudio leading web design trends, HextaStudio innovative web design solutions, HextaStudio advanced design tools, HextaStudio high-quality web design assets, HextaStudio expert UI design, HextaStudio professional UX design, HextaStudio top web design components, HextaStudio beautiful web UI, HextaStudio responsive web components, HextaStudio modern web components, HextaStudio stunning web UI, HextaStudio professional web design elements, HextaStudio premium web UI kits, HextaStudio high-quality responsive UI kits, HextaStudio cutting-edge modern UI kits, HextaStudio top web design assets, HextaStudio expert front-end web development, HextaStudio professional web development resources, HextaStudio best web components library, HextaStudio top web UI library, HextaStudio premium web design library, web components, web design, UI components, responsive design, modern design, reusable components, front-end development, web development, user interface, beautiful UI, stunning components, zero effort, copy-paste components, web elements, website building blocks, web templates, UI kits, design resources, front-end tools, web design inspiration, web design trends, web design solutions, design tools, web design assets, UI design, UX design, web design components, web UI, responsive web components, modern web components, beautiful web components, stunning web UI, web design elements, web UI kits, responsive UI kits, modern UI kits, web design assets, front-end web development, web development resources, web components library, web UI library, web design library, responsive web design, modern web design, beautiful web design, stunning web design, web design resources, web development tools, front-end web development tools, web design inspiration resources, web design trends resources, web design solutions resources, web UI solutions, web design asset resources, UI design resources, UX design resources, web component templates, web UI templates, web design templates, responsive web templates, modern web templates, beautiful web templates, stunning web templates, web template kits, web component kits, web UI kits, web design kits, responsive web kits, modern web kits, beautiful web kits, stunning web kits, HextaStudio, hextastudio, hexta ui, hexa studio, hexa ui, HextaStudio web components, HextaStudio web design, HextaStudio UI components, HextaStudio responsive design, HextaStudio modern design, HextaStudio reusable components, HextaStudio front-end development, HextaStudio web development, HextaStudio user interface, HextaStudio beautiful UI, HextaStudio stunning components, HextaStudio web elements, HextaStudio website building blocks, HextaStudio web templates, HextaStudio UI kits, HextaStudio design resources, HextaStudio front-end tools, HextaStudio web design inspiration, HextaStudio web design trends, HextaStudio web design solutions, HextaStudio design tools, HextaStudio web design assets, HextaStudio UI design, HextaStudio UX design, HextaStudio web design components, HextaStudio web UI, HextaStudio responsive web components, HextaStudio modern web components, HextaStudio beautiful web components, HextaStudio stunning web UI, HextaStudio web design elements, HextaStudio web UI kits, HextaStudio responsive UI kits, HextaStudio modern UI kits, HextaStudio web design assets, HextaStudio front-end web development, HextaStudio web development resources, HextaStudio web components library, HextaStudio web UI library, HextaStudio web design library, HextaStudio, hextastudio, hexta ui, hexa studio, hexa ui",
          },
        ]}
      />
      <Script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
        strategy="lazyOnload"
      />
      <GoogleAnalytics gaId="G-5HXV7Y3GF4" />
      <Component {...pageProps} />
    </>
  );
}
