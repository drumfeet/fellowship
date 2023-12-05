import { Flex, Heading, Text, Box } from "@chakra-ui/react"
import { PrizePoolIcon, PrizePoolBackground } from "./images/icons/prize"

export default function Prize() {
  return (
    <>
      <Flex justifyContent="center" position="relative">
        <Flex
          position="absolute"
          left="5"
          bottom="10"
          display={{ base: "none", md: "flex" }}
        >
          <PrizePoolIcon />
        </Flex>

        <Flex
          flexDirection="column"
          gap="32px"
          alignItems="center"
          paddingY="79px"
        >
          <Heading
            fontStyle="italic"
            fontWeight="600"
            fontSize="clamp(3rem, 5vw, 6rem)"
          >
            $ 22,000
          </Heading>
          <Text fontWeight="500" fontSize="clamp(1rem, 5vw, 2rem)">
            Prize pool
          </Text>
        </Flex>

        <Flex
          display={{ base: "none", md: "flex" }}
          position="absolute"
          right="0"
        >
          <PrizePoolBackground />
        </Flex>
      </Flex>
    </>
  )
}
