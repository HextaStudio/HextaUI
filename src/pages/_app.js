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

export default function App({ Component, pageProps }) {
  useEffect(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("bash", bash);
    hljs.registerLanguage("scss", scss);
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("html", xml);
    hljs.registerLanguage("xml", xml);
  });

  useEffect(() => {
    hljs.highlightAll({ detectLanguage: true });
  });

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
