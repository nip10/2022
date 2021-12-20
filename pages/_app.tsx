import { useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { ThemeProvider } from "styled-components";
import { theme, RootStyles } from "../styles";
import { pageview, GA_TRACKING_ID } from "../lib/gtag";
import "modern-normalize/modern-normalize.css";
import "the-new-css-reset/css/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ThemeProvider theme={theme}>
        <RootStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
