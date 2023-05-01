import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefiedgeProvider } from "@defiedge/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefiedgeProvider>
      <Component {...pageProps} />
    </DefiedgeProvider>
  );
}
