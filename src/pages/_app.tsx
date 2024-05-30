import "@/styles/globals.css";
import { DefiedgeProvider } from "@defiedge/react";

export default function App({ Component, pageProps }: any) {
  return (
    <DefiedgeProvider>
      <Component {...pageProps} />
    </DefiedgeProvider>
  );
}
