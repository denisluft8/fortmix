import { insta, whats } from "../../assets";
import { SectionName } from "../../components";
import {
  ContactContainer,
  ContactForm,
  ContactSection,
  IconContainer,
} from "./Contact.styled";

export const Contact = () => {
  return (
    <ContactSection id="contact">
        <ContactContainer style={{ textAlign: "center" }} bgColor="#022a4d">
          <h2>Veja algumas de nossas obras:</h2>
          <iframe src="https://www.google.com/maps/d/embed?mid=1wALpnsg7zPP2KYq7dKLaL6AN6PknouY&ehbc=2E312F"></iframe>
        </ContactContainer>
        <ContactContainer bgColor="#022a4d">
          <SectionName text={"Entre em Contato"} textColor={"#fff"} />
          <h3 style={{ textAlign: "center" }}>
            Preencha o formulário abaixo e assim que possível entraremos em
            contato:
          </h3>
          <ContactForm>
            <label htmlFor="name">Nome:</label>
            <input id="name" name="name" placeholder="Nome"></input>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" placeholder="Email"></input>
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              placeholder="Mensagem"
            ></textarea>
          </ContactForm>
          <h2 style={{ textAlign: "center" }}>
            Ou fale conosco pelas nossas redes:
          </h2>
          <IconContainer>
            <a target="_blank" href="https://www.instagram.com/fortmixcn/">
              <img src={insta} />
            </a>
            <a target="_blank" href="https://wa.me/5549999301607">
              <img src={whats} />
            </a>
          </IconContainer>
        </ContactContainer>
    </ContactSection>
  );
};
