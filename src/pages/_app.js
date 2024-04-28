import "@/styles/globals.scss";
import "@/styles/tokyo-night-dark.css";

import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></Script>
      <Script
        defer
        src="https://eu.umami.is/script.js"
        data-website-id="de2f88ed-b01d-46df-8a45-e3443a7a69a5"
      ></Script>
      <Component {...pageProps} />
    </>
  );
}
