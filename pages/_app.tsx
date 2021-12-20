import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme, RootStyles } from "../styles";
import "modern-normalize/modern-normalize.css";
import "the-new-css-reset/css/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RootStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
