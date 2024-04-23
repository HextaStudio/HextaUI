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
      <Component {...pageProps} />
    </>
  );
}
