import type { AppProps } from "next/app";
import "../public/static/font_style.css";
import "../styles/global.css";
import "../styles/reset.css";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
