import { useRef } from "react";
import { ContactContent } from "../components/ContactContent";
import { MyProjetsContent } from "../components/MyProjetsContent";
import { MySeflContent } from "../components/MySeflContent";
import { MySkillsContent } from "../components/MySkillsContent";
import { PresenterContent } from "../components/PresenterContent";
import { Wrapper } from "../components/Wrapper";

const Index = () => {
  const pageRef = useRef(null);
  const onScroll = () => {
    pageRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Wrapper>
      <PresenterContent onScroll={onScroll} />
      <MySeflContent pageRef={pageRef} />
      <MySkillsContent />
      <MyProjetsContent />
      <ContactContent />
    </Wrapper>
  );
};

export default Index;
