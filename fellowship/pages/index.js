import Banner from "@/components/Banner"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>WeaveDB Fellows</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner/>
    </>
  )
}
