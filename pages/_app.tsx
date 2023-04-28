import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
const IranSans = localFont({
  src: [
    { path: "../public/fonts/IRANSansX-Regular.ttf", weight: "normal" },
    { path: "../public/fonts/IRANSansX-Bold.ttf", weight: "bold" },
  ],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={IranSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
