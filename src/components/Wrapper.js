import { Box } from "@chakra-ui/react";
import { Container } from "./Container";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Wrapper = ({ children }) => {
  return (
    <Container height="auto">
      <Header />
      <Box maxWidth="980px" w="100%" px={10}>
        {children}
      </Box>
      <Footer></Footer>
    </Container>
  );
};
