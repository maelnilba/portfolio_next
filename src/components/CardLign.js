import {
  Box,
  Flex,
  Heading,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";

export const CardLign = ({ title, children }) => {
  const [isSmallerThan450] = useMediaQuery("(max-width: 450px)");
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.100", dark: "gray.800" };
  const color = { light: "black", dark: "white" };
  const shadow = { light: "#dcdedf", dark: "#1c1f2b" };
  return (
    <Flex
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      borderRadius={15}
      boxShadow={`2px 2px 2px 2px ${shadow[colorMode]}`}
      alignItems="center"
      py={3}
      mb={5}
      px={5}
      flexDirection={isSmallerThan450 ? "column" : "row"}
    >
      <Box minWidth="250px">
        <Heading fontSize="1.2rem" mr={5}>
          {title}
        </Heading>
      </Box>

      {children}
    </Flex>
  );
};
