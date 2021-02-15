import { Flex, Heading } from "@chakra-ui/react";
import { CardLign } from "./CardLign";
import { LogosList } from "./Images";
import { TodoList } from "./Lists";

export const MySkillsContent = () => {
  const WebSkills = [
    "JavaScript",
    "React",
    "Redux",
    "Next",
    "Django",
    "Postgresql",
    "Firebase",
    "Electron",
  ];
  const MobileSkills = ["ReactNative", "Expo"];
  const OthersSkills = ["PyGame", "AutoIt"];
  const ToLearn = [
    { label: "TypeScript", done: false },
    { label: "Next.js", done: true },
    { label: "GraphQL", done: false },
    { label: "Sequelize/TypeORM", done: false },
    { label: "THREE.JS", done: false },
  ];
  return (
    <Flex direction="column" mt={10}>
      <Heading fontSize="3rem" mb={4}>
        Compétences
      </Heading>
      <CardLign title="Développement Web">
        <LogosList list={WebSkills} />
      </CardLign>
      <CardLign title="Développement Mobile">
        <LogosList list={MobileSkills} />
      </CardLign>
      <CardLign title="Autres">
        <LogosList list={OthersSkills} />
      </CardLign>
      <Heading fontSize="2rem" mb={4}>
        Ce que je veux apprendre en 2021
      </Heading>
      <TodoList list={ToLearn} />
    </Flex>
  );
};
