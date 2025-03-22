import type { AppProps } from "next/app";
import "../styles/globals.scss"; // SCSS import

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
