import { constructionSilhouette2, insta, whats } from "../../assets";
import { SectionName } from "../../components";
import {
  ContactBgImg,
  ContactContainer,
  ContactSection,
  IconContainer,
} from "./Contact.styled";

export const Contact = () => {
  return (
    <ContactSection>
      <ContactContainer bgColor="#022a4d">
        <h2>Fale conosco pelas nossas redes:</h2>
        <IconContainer>
          <a>
            <img src={insta} />
          </a>
          <a>
            <img src={whats} />
          </a>
        </IconContainer>
      </ContactContainer>
      <ContactContainer bgColor="#022a4d">
        <SectionName text={"Entre em Contato"} textColor={"#fff"} />
      </ContactContainer>
    </ContactSection>
  );
};

