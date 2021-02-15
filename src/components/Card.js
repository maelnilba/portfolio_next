import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Tag,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { CardWrapper } from "./CardWrapper";

export const Card = ({ title, img, info, children }) => {
  const [isSmallerThan240] = useMediaQuery("(max-width: 240px)");
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.100", dark: "gray.800" };
  const color = { light: "black", dark: "white" };
  const shadow = { light: "#dcdedf", dark: "#1c1f2b" };

  return (
    <Flex
      w={isSmallerThan240 ? "100%" : "240px"}
      h="180px"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      borderRadius={15}
      boxShadow={`2px 2px 2px 2px ${shadow[colorMode]}`}
      p={2}
      flexDirection="column"
    >
      <Flex justifyContent="space-evenly" alignItems="center">
        <Avatar name={title} src={img} />
        <Text fontSize="xl">{title}</Text>
      </Flex>
      <Box fontSize="0.9rem" p={2}>
        <Text>{children}</Text>
      </Box>
      <Spacer />
      <Box>
        <Tag>{info}</Tag>
      </Box>
    </Flex>
  );
};

export const BigCard = ({ title, img, topics, link, children }) => {
  const [isSmallerThan450] = useMediaQuery("(max-width: 450px)");

  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.100", dark: "gray.800" };
  const color = { light: "black", dark: "white" };
  const shadow = { light: "#dcdedf", dark: "#1c1f2b" };
  return (
    <Flex
      w={isSmallerThan450 ? "100%" : "445px"}
      h="320px"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      borderRadius={15}
      boxShadow={`2px 2px 2px 2px ${shadow[colorMode]}`}
      flexDirection="column"
      justifyContent="center"
    >
      <Box
        w={isSmallerThan450 ? "100%" : "445px"}
        h="200px"
        overflow="hidden"
        borderRadius={15}
      >
        <Image src={img} alt={title} />
      </Box>
      <Box p={2}>
        <Heading fontSize="1.25rem">{title}</Heading>
        <Text>{children}</Text>
        <Button colorScheme="orange" variant="link">
          <Link color="orange" isExternal href={link}>
            En savoir plus <ExternalLinkIcon mx="2px" />
          </Link>
        </Button>
      </Box>
      <Spacer />
      <Flex flexDirection="row-reverse" pr={2} pb={2}>
        <CardWrapper>
          {topics.map((topic) => (
            <Tag key={topic} colorScheme="purple">
              {topic.toUpperCase()}
            </Tag>
          ))}
        </CardWrapper>
      </Flex>
    </Flex>
  );
};
