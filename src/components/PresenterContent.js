import { ChevronDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { DevloperAnimation } from "../lottie/DevloperAnimation";
import { Rounded } from "./Images";
import NextLink from "next/link";

export const PresenterContent = ({ onScroll }) => {
  const [isSmallerThan600] = useMediaQuery("(max-width: 800px)");
  const AboutMe = () => (
    <Flex>
      <Rounded boxSize={80} src="./assets/profilpic.png" alt="Rioux Maël" />
      <Box ml={10}>
        <Text textAlign="justify">
          Je m'appelle Rioux Maël, 22 ans, originaire de Lyon. Interressé par
          l'informatique depuis le plus jeune âge, j'envisage de devenir un
          développeur web fullstack. J'ai commencé par une année de DUT
          Informatique de 2016 à 2017 à IUT2 situé à Grenoble puis j'ai repris
          mes études en BTS SIO option SLAM à Sciences-u Lyon
        </Text>
        <NextLink href="/bts">
          <Button colorScheme="teal" variant="ghost">
            A propos du BTS
            <ExternalLinkIcon m="2px" boxSize={4} />
          </Button>
        </NextLink>
      </Box>
    </Flex>
  );

  return (
    <Flex justify="center" direction="column" pt={20} h="100vh">
      <Flex justifyContent="center" align="center" direction="column">
        <Heading fontSize="7vmax">Rioux Maël</Heading>
        <Heading size="lg"> Développeur Web</Heading>
      </Flex>
      <Flex
        alignItems="center"
        justify="center"
        mt={isSmallerThan600 ? "100px" : "0px"}
      >
        <Box maxWidth="400px">
          <AboutMe />
        </Box>
        {!isSmallerThan600 && <DevloperAnimation />}
      </Flex>
      <Spacer />
      <Center pb={10}>
        <Button colorScheme="teal" variant="ghost" onClick={onScroll}>
          En savoir plus <ChevronDownIcon mx="2px" boxSize={6} />
        </Button>
      </Center>
    </Flex>
  );
};
