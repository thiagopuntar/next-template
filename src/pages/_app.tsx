import GlobalStyles from "@styles/GlobalStyles";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
