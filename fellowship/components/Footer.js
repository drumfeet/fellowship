import {
  Flex,
  Stack,
  Text,
  VisuallyHidden,
  Link,
  chakra,
  Spacer,
} from "@chakra-ui/react"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { WeaveDBLogo } from "./images/icons/icons"

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
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingBottom="93px"
        paddingX={{ base: "24px", md: "185px" }}
      >
        <Text fontWeight="400" fontSize="16px">
          <Link
            href="https://weavedb.dev"
            isExternal
            textDecoration="underline"
          >
            WeaveDB
          </Link>
        </Text>

        <Flex gap="24px">
          <SocialButton href="https://twitter.com/weave_db">
            <FaTwitter />
          </SocialButton>
          <SocialButton href={"https://github.com/weavedb/weavedb"}>
            <FaGithub />
          </SocialButton>
          <SocialButton href={"https://weavedb.dev"}>
            <WeaveDBLogo width="20px" height="20px" color="black" />
          </SocialButton>
        </Flex>
      </Flex>
    </>
  )
}
