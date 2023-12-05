import { Flex, Image, Text } from "@chakra-ui/react"
import { JudgesIcon, JudgesNumberIcon } from "./images/icons/icons"

export const JudgesList = ({ imageSrc, title, children }) => (
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

      <Flex flexDirection="column" paddingLeft="24px" justifyContent="center">
        <Text fontWeight="500" fontSize="clamp(1rem, 5vw, 2rem)">
          {children}
        </Text>
        <Text fontWeight="300" fontSize="clamp(0.25rem, 5vw, 1rem)">
          {title}
        </Text>
      </Flex>
    </Flex>
  </>
)

export default function Judges() {
  return (
    <>
      <Flex
        paddingY="93px"
        paddingX="185px"
        justifyContent="center"
        position="relative"
      >
        <Flex
          position="absolute"
          left="66px"
          top="328px"
          display={{ base: "none", md: "flex" }}
        >
          <JudgesIcon />
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
              Judges
            </Text>
          </Flex>

          <Flex flexDirection={{ base: "column", md: "row" }} gap="40px">
            <Flex
              flexDirection="column"
              gap="40px"
              minW="clamp(16.0625rem, 28vw, 32.125rem)"
            >
              <JudgesList
                imageSrc="https://drive.google.com/uc?id=1pkLk5_ibn-7D1ISI2VpnvyNZpdY8H-bF"
                title="WeaveDB"
              >
                Ahmad Mardeni
              </JudgesList>
              <JudgesList
                imageSrc="https://drive.google.com/uc?id=17OUj8ZlObJOvkjzWaW6Tt5SGMcGBYcBX"
                title="Developer"
              >
                Alysia Huggins
              </JudgesList>
              <JudgesList
                imageSrc="https://drive.google.com/uc?id=1MYma0CPeToH1hFjjfQY5_L2-VcK5Myse"
                title="Ankr"
              >
                Krinza Momen
              </JudgesList>
              <JudgesList
                imageSrc="https://drive.google.com/uc?id=1XDE9Xl7C_aHGOsUQBJuE2QU_4Tib0tDc"
                title="AAVE and Lens Protocol"
              >
                Nader Dabit
              </JudgesList>
            </Flex>
            <Flex
              flexDirection="column"
              gap="40px"
              minW="clamp(16.0625rem, 28vw, 32.125rem)"
            >
              <JudgesList
                imageSrc="https://drive.google.com/uc?id=1KymlT4B8aB9UsxTWod7WsoI3s_BGoAIb"
                title="Deformapp"
              >
                Albert Hu
              </JudgesList>
              <JudgesList
                imageSrc="https://drive.google.com/uc?id=1AJlAEjbBP04af0itym4byHaluPHYcXcg"
                title="Arweave"
              >
                Dan MacDonald
              </JudgesList>
              <JudgesList
                imageSrc="https://drive.google.com/uc?id=1aehl6ceiu982Gic4D0FVstU6QvasddiG"
                title="Intmax"
              >
                Leona Hioki
              </JudgesList>
              <JudgesList
                imageSrc="https://drive.google.com/uc?id=1sQNIzKopcPl5-KuUv-LL1pCC1Ahi7twb"
                title="Mask network"
              >
                Suji Yan
              </JudgesList>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          display={{ base: "none", md: "flex" }}
          position="absolute"
          right="47px"
          top="237px"
        >
          <JudgesNumberIcon />
        </Flex>
      </Flex>
    </>
  )
}
