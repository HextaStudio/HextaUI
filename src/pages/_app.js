import "@/styles/globals.css";
import "@/styles/tokyo-night-dark.css";
import Script from "next/script";
import { useEffect } from "react";

import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";
import bash from "highlight.js/lib/languages/bash";
import xml from "highlight.js/lib/languages/xml";

import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("bash", bash);
    hljs.registerLanguage("scss", scss);
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("html", xml);
    hljs.registerLanguage("xml", xml);
  }, []);

  useEffect(() => {
    hljs.highlightAll({ detectLanguage: true });
  });

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></Script>

      <Component {...pageProps} />
    </>
  );
}
