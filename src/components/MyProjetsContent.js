import { Flex, Heading } from "@chakra-ui/react";
import { CardWrapper } from "./CardWrapper";
import { BigCard } from "./Card";

export const MyProjetsContent = () => {
  const MyProjets = [
    {
      label: "Tonteo",
      img: "TonteoWeb.png",
      description:
        "Aide au développement de l'application web lors de mon stage de 1ère année",
      topics: ["React"],
      link: "https://m.tonteo.com/",
    },

    {
      label: "SkinZeum",
      img: "SkinZeum.png",
      description:
        "SkinZeum est un site de ranking de skin de personnage Dofus",
      topics: ["React", "Firebase"],
      link: "https://skinzeum.vercel.app/",
    },
    {
      label: "P5 for noob",
      img: "P5fornoob.png",
      description:
        "Outil commauntaire destiné au jeu Transformice, permettant de transformer une image en carte",
      topics: ["React"],
      link: "https://tfmetrize.vercel.app/",
    },
    {
      label: "LightMaze",
      img: "lightmaze.png",
      description:
        "LightMaze est un petit jeu ou vous incarnez une taupe coincé dans un labyrinthe devant récuperer des lampes pour survivre",
      topics: ["JavaScript", "P5"],
      link: "https://maelnilba.github.io/LightMaze/",
    },
    {
      label: "Mice Editor Studio",
      img: "mes.png",
      description:
        "Outil communautaire destiné à l'aide de création de carte le jeu Transformice",
      topics: ["JavaScript", "P5"],
      link: "https://maelnilba.github.io/MES/",
    },
  ];
  return (
    <Flex direction="column" mt={10}>
      <Heading fontSize="3rem" mb={4}>
        Mes projets
      </Heading>
      <CardWrapper>
        {MyProjets.map(({ label, img, description, topics, link }) => (
          <BigCard
            title={label}
            img={`./projets/${img}`}
            topics={topics}
            link={link}
            key={link}
          >
            {description}
          </BigCard>
        ))}
      </CardWrapper>
    </Flex>
  );
};
