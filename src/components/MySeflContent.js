import { Box, Flex, Heading, Spacer, useMediaQuery } from "@chakra-ui/react";
import { Card } from "./Card";
import { CardWrapper } from "./CardWrapper";

export const MySeflContent = ({ pageRef }) => {
  const myExperience = [
    {
      title: "Tonteo",
      img: "Tonteo.png",
      date: "2020-2021",
      description:
        "En alternance, mission consistant à produire l'application mobile sous React Native",
    },
    {
      title: "Tonteo",
      img: "Tonteo.png",
      date: "2019-2020",
      description:
        "Stage d'un mois, aide au développement de l'application web sous React",
    },
  ];

  const myFormations = [
    {
      title: "BTS SIO",
      img: "SciencesU.png",
      date: "2019-2021",
      description: "BTS SIO à Science-U Lyon",
    },
    {
      title: "DUT Info.",
      img: "IUT2.jpg",
      date: "2016-2018",
      description: "DUT Informatique à IUT 2 Grenoble",
    },
    {
      title: "BAC STI2D",
      img: "LPConstans.jpg",
      date: "2015-2016",
      description: "BAC STI2D au lycée Paul Constant",
    },
  ];
  const [isSmallerThan500] = useMediaQuery("(max-width: 500px)");

  return (
    <Flex direction="column">
      <Flex ref={pageRef} flexDirection={isSmallerThan500 ? "column" : "row"}>
        <Box pt={20}>
          <Heading fontSize="3rem" mb={4}>
            Expériences{" "}
          </Heading>
          <CardWrapper>
            {myExperience.map(({ title, img, date, description }, index) => (
              <Card
                title={title}
                img={`./Cursus/${img}`}
                info={date}
                key={`${title}${index}`}
              >
                {description}
              </Card>
            ))}
          </CardWrapper>
        </Box>
        <Spacer minWidth="20px" />
        <Box pt={20}>
          <Heading fontSize="3rem" mb={4}>
            Formations{" "}
          </Heading>
          <CardWrapper>
            {myFormations.map(({ title, img, date, description }, index) => (
              <Card
                title={title}
                img={`./Cursus/${img}`}
                info={date}
                key={`${title}${index}`}
              >
                {description}
              </Card>
            ))}
          </CardWrapper>
        </Box>
      </Flex>
    </Flex>
  );
};
