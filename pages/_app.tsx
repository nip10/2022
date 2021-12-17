import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Typography from "../styles/typography";
import "modern-normalize/modern-normalize.css";
import "the-new-css-reset/css/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Typography />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
