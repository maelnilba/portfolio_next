import { Box, Flex, Heading, Spacer, useColorMode } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import Link from "next/link";
import { useRouter } from "next/router";
import { CardWrapper } from "./CardWrapper";

export const Header = (props) => {
  const { pathname } = useRouter();
  const { colorMode } = useColorMode();
  const bgColor = { light: "#edf2f7", dark: "#24292e" };

  const PortfolioFlexStyle =
    pathname === "/"
      ? {
          borderBottomWidth: "2px",
          borderBottomColor: colorMode === "light" ? "#24292e" : "#edf2f7",
        }
      : null;

  const BtsFlexStyle =
    pathname === "/bts"
      ? {
          borderBottomWidth: "2px",
          borderBottomColor: colorMode === "light" ? "#24292e" : "#edf2f7",
        }
      : null;

  return (
    <Box
      position="fixed"
      bg="teal"
      w="100vw"
      p={3}
      zIndex={2}
      bgColor={bgColor[colorMode]}
    >
      <Flex align="center">
        <Box ml={5}>
          <CardWrapper>
            <Flex align="center" h="30px" {...PortfolioFlexStyle}>
              <Heading size="lg" fontSize="1.5rem">
                <Link href="/">Portfolio</Link>
              </Heading>
            </Flex>
            <Flex align="center" h="30px">
              <Heading size="md">/</Heading>
            </Flex>
            <Flex alignItems="center" h="30px" {...BtsFlexStyle}>
              <Heading size="lg" fontSize="1.5rem">
                <Link href="/bts">BTS</Link>
              </Heading>
            </Flex>
          </CardWrapper>
        </Box>
        <Spacer />
        <Box mr={5}>
          <DarkModeSwitch />
        </Box>
      </Flex>
    </Box>
  );
};
