import { Flex, Heading, useToast } from "@chakra-ui/react";
import { ContactForm } from "./ContactForm";
import emailjs from "emailjs-com";
import { EMAILJS_ID, EMAILJS_TEMPLATE_ID } from "../Constant";

export const ContactContent = () => {
  const toast = useToast();

  const onSubmit = (values) => {
    console.log(EMAILJS_ID);
    emailjs
      .send("default_service", EMAILJS_TEMPLATE_ID, values, EMAILJS_ID)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          toast({
            title: "Email envoyé.",
            description: "Je vous réponds aussi vite que possible !",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        },
        function (error) {
          console.log("FAILED...", error);
          toast({
            title: "Echec lors de l'envoi.",
            description:
              "Veuillez bien essayer de me contacter via autre moyen.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      );
  };
  return (
    <Flex direction="column" mt={10}>
      <Heading fontSize="3rem" mb={4}>
        Me contacter
      </Heading>
      <ContactForm onSubmit={onSubmit} />
    </Flex>
  );
};
