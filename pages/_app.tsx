import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
// import Head from "next/head";
// import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head><title>Pak Mat Western</title></Head>
      {/* <Analytics /> */}
      <Component {...pageProps} />
    </>
  );
}
