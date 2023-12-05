import { CheckIcon } from "@chakra-ui/icons"
import { Flex, Icon, Image, Spacer, Text } from "@chakra-ui/react"
import PartnerIcon from "./images/icons/partner"

export const EcosystemList = ({ imageSrc, children }) => (
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
      <Image boxSize="clamp(2.5rem, 5vw, 5rem)" src={imageSrc} />
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

export default function Ecosystem() {
  return (
    <>
      <Flex flexDirection="column" paddingY="93px" paddingX="185px">
        <Flex
          display={{ base: "none", md: "flex" }}
          justifyContent="space-between"
          paddingRight="32px"
        >
          <Spacer />
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
              Ecosystem partners
            </Text>
          </Flex>

          <Flex flexDirection={{ base: "column", md: "row" }} gap="40px">
            <Flex
              flexDirection="column"
              gap="40px"
              // minW="clamp(16.0625rem, 28vw, 32.125rem)"
            >
              <EcosystemList imageSrc="https://drive.google.com/uc?id=1EaFjzo0siTJTP9lSOVK9zARXGJKLAyE7">
                Developer DAO
              </EcosystemList>
              <EcosystemList imageSrc="https://drive.google.com/uc?id=17vJVbjb06BwwU6xx2gqdm4R9JZsSGV7S">
                Solow
              </EcosystemList>
              <EcosystemList imageSrc="https://drive.google.com/uc?id=13SW6dwUf8aPlPvvmULZxBsmR3PDHA-r4">
                WOMEN IN WEB3
              </EcosystemList>
            </Flex>
            <Flex
              flexDirection="column"
              gap="40px"
              // minW="clamp(16.0625rem, 28vw, 32.125rem)"
            >
              <EcosystemList imageSrc="https://drive.google.com/uc?id=1oJQeT-6z_7e7P0aBQ3cmT-o8BqPGjZ03">
                Social3
              </EcosystemList>
              <EcosystemList imageSrc="https://drive.google.com/uc?id=121Zl3utrrvO4asfeapmYsRA8xWdmvVNZ">
                Web3Arabs
              </EcosystemList>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
