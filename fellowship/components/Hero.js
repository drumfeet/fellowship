import React from "react"
import { Box, Image, Flex, Text, Button, Link } from "@chakra-ui/react"
import { HeroIcon } from "@/components/images/icons/hero"
import { WeaveDBLogoText } from "@/components/images/icons/icons"
import { ArrowLeftIcon } from "@chakra-ui/icons"

export default function Hero() {
  return (
    <Flex width="100vw" height="100vh" flexDirection="column">
      <Box position="relative" width="full" height="full">
        <Image
          src="https://drive.google.com/uc?id=1RVz95hO0hdQl7AgvpSJGcvatsOpdgkQm"
          position="absolute"
          width="full"
          height="full"
          objectFit="cover"
          zIndex="1"
        />
        <Flex
          position="absolute"
          width="full"
          height="full"
          background="rgba(39.31, 37.35, 37.35, 0.60)"
          zIndex="2"
        />
        <Flex flexDirection="column" height="full" justifyContent="center">
          <Flex zIndex="3" hidden="true">
            <Link
              href="https://weavedb.dev"
              paddingTop="32px"
              paddingLeft="32px"
            >
              <Button
                leftIcon={<ArrowLeftIcon />}
                p="14px"
                bg="rgba(0, 0, 0, 0.3)"
                color="white"
                border="1px solid #CEB7FF"
                borderRadius="4px"
                fontWeight="400"
                fontSize="clamp(0.5rem, 5vw, 1rem)"
                _hover={{
                  fontWeight: "1600",
                  borderColor: "white",
                  borderWidth: "2px",
                  boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.3)",
                  bg: "rgba(0, 0, 0, 0.3)",
                }}
              >
                Back
              </Button>
            </Link>
          </Flex>
          <Flex flexDirection="column" zIndex="3" alignItems="center">
            <Flex paddingBottom="20px">
              <Link
                href="https://weavedb.dev"
                padding="16px"
                _hover={{
                  fontWeight: "1600",
                  borderColor: "white",
                  borderWidth: "2px",
                  boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.3)",
                  bg: "rgba(0, 0, 0, 0.3)",
                }}
              >
                <WeaveDBLogoText width="131px" height="29px" />
              </Link>
            </Flex>

            <Flex>
              <Text
                fontSize="clamp(2rem, 5vw, 4rem)"
                fontWeight="600"
                color="white"
                textShadow="5px 5px 28px #CEB7FF"
                paddingBottom="16px"
              >
                Fellowship program
              </Text>
            </Flex>
            <Flex>
              <Text
                fontSize="clamp(1rem, 5vw, 2rem)"
                fontWeight="600"
                color="white"
                paddingBottom="24px"
              >
                9 - May
              </Text>
            </Flex>

            <Flex paddingBottom="58px">
              <Button
                fontSize="clamp(0.75rem, 5vw, 1.5rem)"
                fontWeight="600"
                color="white"
                padding="20px"
                variant="outline"
                border="1px solid #CEB7FF"
                borderRadius="4px"
                _hover={{
                  fontWeight: "1600",
                  borderColor: "white",
                  borderWidth: "2px",
                  boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.3)",
                  bg: "rgba(0, 0, 0, 0.3)",
                }}
                onClick={() =>
                  window.open(
                    "https://app.deform.cc/form/aa7e2ee9-74b8-42da-a07f-6bb5ecf728de/",
                    "_blank"
                  )
                }
              >
                Apply Now
              </Button>
            </Flex>

            <Flex>
              <HeroIcon />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}
