import Blog from "@/components/Blog"
import Ecosystem from "@/components/Ecosystem"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Judges from "@/components/Judges"
import Partner from "@/components/Partner"
import Prize from "@/components/Prize"

import { Flex } from "@chakra-ui/react"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>WeaveDB Fellows</title>
        <meta name="description" content="NoSQL Database as a Smart Contract" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />

        <meta property="og:url" content="https://fellows.weavedb.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WeaveDB Fellows" />
        <meta
          property="og:description"
          content="NoSQL Database as a Smart Contract"
        />
        <meta
          property="og:image"
          content="https://weavedb.dev/twitterImage.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WeaveDB Fellows" />
        <meta
          name="twitter:description"
          content="NoSQL Database as a Smart Contract"
        />
        <meta
          name="twitter:image"
          content="https://weavedb.dev/twitterImage.png"
        />
      </Head>

      <Flex flexDirection="column" bg="#FCF9FF">
        <Hero />
        <Prize />
        <Partner />
        <Judges />
        <Ecosystem />
        <Blog />
        <Footer />
      </Flex>
    </>
  )
}
