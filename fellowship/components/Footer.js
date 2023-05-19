import {
  Flex,
  Stack,
  Text,
  VisuallyHidden,
  Link,
  chakra,
} from "@chakra-ui/react"
import { FaGithub, FaTwitter } from "react-icons/fa"

export default function Footer() {
  const SocialButton = ({ children, label, href }) => {
    const buttonProps = {
      cursor: "pointer",
      display: "inline-flex",
      fontSize: "20px",
    }

    return (
      <chakra.button
        as={"a"}
        href={href}
        target={"_blank"}
        rel={"noopener noreferrer"}
        {...buttonProps}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    )
  }

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        w={1511}
        h={120}
        bg="#FCF9FF"
        gap={64}
      >
        <Flex
          direction="column"
          alignItems="center"
          px={32}
          gap={32}
          w={1280}
          h={24}
        >
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            p={0}
            w={1216}
            h={24}
          >
            <Text alignItems="flex-start" fontWeight="400" fontSize="16px">
              <Link
                href="https://weavedb.dev"
                isExternal
                textDecoration="underline"
              >
                WeaveDB
              </Link>
            </Text>
            <Stack direction={"row"} spacing="28px">
              <SocialButton href="https://twitter.com/weave_db">
                <FaTwitter />
              </SocialButton>
              <SocialButton href={"https://github.com/weavedb/weavedb"}>
                <FaGithub />
              </SocialButton>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
