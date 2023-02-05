import Head from "next/head";

import { Inter } from "@next/font/google";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Healthy from "@/components/Healthy";
import Sport from "@/components/Sport";
import Full from "@/components/Full";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Healthy />
      <Sport />
      <Full />
    </>
  );
}
