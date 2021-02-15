import { AttachmentIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Stack } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiOutlineFilePdf } from "react-icons/ai";

export const Footer = (props) => {
  return (
    <Flex as="footer" pb="2rem" pt="4rem" {...props}>
      <Stack direction="row" spacing={4}>
        <Link isExternal href="https://github.com/maelnilba">
          <Button leftIcon={<AiFillGithub />} variant="solid">
            GitHub
          </Button>
        </Link>
        <Link isExternal href="https://fr.linkedin.com/in/mael-rioux">
          <Button leftIcon={<AiFillLinkedin />} variant="outline">
            Linkedin
          </Button>
        </Link>
        <Link isExternal href="./assets/CV.pdf">
          <Button leftIcon={<AiOutlineFilePdf />} variant="outline">
            CV
          </Button>
        </Link>
      </Stack>
    </Flex>
  );
};
