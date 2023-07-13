import Banner from "@/components/Banner"
import Blog from "@/components/Blog"
import Ecosystem from "@/components/Ecosystem"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Judges from "@/components/Judges"
import Partner from "@/components/Partner"
import { Box, Center, Flex } from "@chakra-ui/react"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>WeaveDB Fellowss</title>
        <link rel="icon" href="/weavedb.svg" />
      </Head>
      <Box direction="column" align="center" bg="#FCF9FF">
        <Hero />
        <Banner />
        <Partner />
        <Judges />
        <Ecosystem />
        <Blog />
        <Footer />
      </Box>
    </>
  )
}
