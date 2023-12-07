import { Flex, Image, Text } from "@chakra-ui/react"
import PartnerIcon from "./images/icons/partner"

export const PartnersList = ({ imageSrc, children }) => (
  <>
    <Flex
      flexDirection="row"
      alignItems="center"
      border="1px"
      paddingY="24px"
      paddingX="40px"
      boxShadow="4px 4px 0px black"
      minW="clamp(16.0625rem, 30vw, 32.125rem)"
    >
      <Image
        borderRadius="full"
        boxSize="clamp(2.5rem, 5vw, 5rem)"
        src={imageSrc}
      />
      <Text
        paddingLeft="24px"
        fontWeight="500"
        fontSize="clamp(1rem, 5vw, 2rem)"
      >
        {children}
      </Text>
    </Flex>
  </>
)

export default function Partner() {
  return (
    <>
      <Flex
        flexDirection="column"
        paddingY="93px"
        paddingX="185px"
        justifyContent="center"
      >
        <Flex display={{ base: "none", md: "flex" }} justifyContent="flex-end">
          <PartnerIcon />
        </Flex>

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
              Partners
            </Text>
          </Flex>

          <Flex flexDirection={{ base: "column", md: "row" }} gap="40px">
            <Flex
              flexDirection="column"
              gap="40px"
              // minW="clamp(16.0625rem, 28vw, 32.125rem)"
            >
              <PartnersList imageSrc="https://drive.google.com/uc?id=14Bno0iYxOLVjgsG5p0vZJx8Wpam86dQH">
                Arweave
              </PartnersList>
              <PartnersList imageSrc="https://drive.google.com/uc?id=1e1hjMzDuz7nLrSmHrpHQ7X1MhxxCSK_G">
                Intmax
              </PartnersList>
              <PartnersList imageSrc="https://drive.google.com/uc?id=1MYma0CPeToH1hFjjfQY5_L2-VcK5Myse">
                Lit protocol
              </PartnersList>
            </Flex>
            <Flex
              flexDirection="column"
              gap="40px"
              // minW="clamp(16.0625rem, 28vw, 32.125rem)"
            >
              <PartnersList imageSrc="https://drive.google.com/uc?id=17Q5-xD9F6jSnxEngEpr0oLvRrHsVq5YQ">
                Fleek
              </PartnersList>
              <PartnersList imageSrc="https://drive.google.com/uc?id=1C_Q11_10-1XFxMzP5v_sju0MdjLYCSBQ">
                Lens protocol
              </PartnersList>
              <PartnersList imageSrc="https://drive.google.com/uc?id=1t1IYaH14qeRSMIBdqcruRrrFuYPYE8kQ">
                Mask Network
              </PartnersList>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
