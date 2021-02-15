import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { VeillesContent } from "./VeillesContent";
import NextLink from "next/link";
import { ArrowLeftIcon, MinusIcon } from "@chakra-ui/icons";

export const BtsContent = () => {
  return (
    <Box>
      <Flex justify="center" direction="column" mt={20}>
        <Box mt={2}>
          <NextLink href="/">
            <Button colorScheme="teal" variant="ghost">
              <ArrowLeftIcon m="2px" boxSize={4} mr={3} /> Retour
            </Button>
          </NextLink>
        </Box>
        <Box my={10}>
          <Heading fontSize="3rem" mb={4}>
            BTS SIO
          </Heading>
          <Text textAlign="justify">
            Le Brevet de Technicien Supérieur aux Services Informatiques aux
            Organisations, s'adresse à ceux qui souhaitent se former en deux ans
            aux métiers d'administrateur réseau ou de développeur. Elle propose
            deux spécialités: SISR (Solutions d'infrastructure systemes et
            réseaux) Destinée aux étudiants qui s’orientent vers les métiers
            liés à la conception et la maintenance d’infrastructures réseaux.
            SLAM (solutions logicielles et applications métier) Destinée aux
            étudiants qui s’orientent vers les métiers liés à la conception et
            la maintenance de programmes applicatifs.
          </Text>
        </Box>
      </Flex>
      <Box mb={5}>
        <Heading fontSize="3rem" mb={4}>
          Mon année en alternance chez Tonteo
        </Heading>
        <Stack spacing={4}>
          <Box>
            <Heading fontSize="1.5rem" mb={2}>
              Ma mission :
            </Heading>
            <Text textAlign="justify">
              Durant mon année en alternance, ma mission consiste à développer
              from scratch l'application mobile de Tonteo basé sur l'application
              web déjà existante. La technique sélectionnée a été react Native,
              l'application web utilisant à react et React Native permettant
              d'être cross-platfrom.
            </Text>
          </Box>
          <Box>
            <Heading fontSize="1.5rem" mb={2}>
              Compétences développées :
            </Heading>
            <List spacing={2}>
              <ListItem>
                <ListIcon as={MinusIcon} color="gray.500" />
                Réalisation et mise en place d'un cachier des charges du projet.
              </ListItem>
              <ListItem>
                <ListIcon as={MinusIcon} color="gray.500" />
                Réalisation, mise en place et entretient de l'organisation de la
                gestion du projet. <MinusIcon /> Trello
              </ListItem>
              <ListItem>
                <ListIcon as={MinusIcon} color="gray.500" />
                Mise en place du repository. <MinusIcon /> GitLab
              </ListItem>
              <ListItem>
                <ListIcon as={MinusIcon} color="gray.500" />
                Développement de l'application, recherche et apprentissage de
                React Native.
              </ListItem>
              <ListItem>
                <ListIcon as={MinusIcon} color="gray.500" />
                Travail en équipe avec différent membre de l'équipe, partage
                d'idées, entraides et suggestions.
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Box>
      {/* <Box>
        <Heading fontSize="3rem" mb={4}>
          EPREUVE E6
        </Heading>
        <Box h="100px">
          <Heading fontSize="1.5rem">🚧 En réalisation 🚧</Heading>
        </Box>
      </Box> */}
      <VeillesContent />
    </Box>
  );
};
