import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import { BlogAsteriskIcon, BlogDiamondIcon } from "./images/icons/blog"

export default function Blog() {
  return (
    <>
      <Flex
        flexDirection="column"
        paddingY="93px"
        paddingX={{ base: "24px", md: "185px" }}
      >
        <Flex flexDirection="column" gap="32px" alignItems="center">
          <Flex>
            <Text
              textAlign="center"
              fontSize="clamp(1rem, 5vw, 2rem)"
              paddingX="24px"
              paddingY="12px"
              borderRadius="32px"
              border="1px black solid"
            >
              Blog
            </Text>
          </Flex>

          <Flex
            flexDirection="column"
            bg="#F3D2FF"
            boxShadow="4px 4px 0px black"
            borderRadius="12"
            border="1px black solid"
          >
            <Flex paddingLeft="43px">
              <BlogDiamondIcon />
            </Flex>

            <Flex
              alignItems="end"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Flex
                flexDirection="column"
                paddingLeft={{ base: "8px", md: "71px" }}
                paddingRight={{ base: "8px", md: "0px" }}
              >
                <Heading
                  paddingTop="14px"
                  paddingBottom="20px"
                  fontSize="clamp(1.5rem, 5vw, 3rem)"
                  fontWeight="500"
                >
                  Introducing WeaveDB Fellows
                </Heading>

                <Text
                  paddingBottom="16px"
                  fontSize="clamp(0.75rem, 5vw, 1.5rem)"
                  fontWeight="500"
                >
                  We are excited to announce the launch of WeaveDB, a
                  collaborative opportunity for developers to contribute to the
                  advancement of web3
                </Text>

                <Text fontSize="clamp(0.625rem, 5vw, 1.25rem)" fontWeight="500">
                  Ahmad Mardeni
                </Text>
                <Text
                  fontSize="clamp(0.5625rem, 5vw, 1.125rem)"
                  fontWeight="400"
                >
                  17 May 2023
                </Text>

                <Flex paddingTop="24px" paddingBottom="49px">
                  <Button
                    color="white"
                    bg="black"
                    _hover="none"
                    onClick={() =>
                      window.open(
                        "https://medium.com/weavedb/introducing-weavedb-fellows-7ccfadabd208",
                        "_blank"
                      )
                    }
                  >
                    Read now
                  </Button>
                </Flex>
              </Flex>

              <Flex>
                <BlogAsteriskIcon />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
