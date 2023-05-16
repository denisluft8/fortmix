import { ChangeEvent, useState } from "react";
import { constructionSilhouette2, insta, whats } from "../../assets";
import { SectionName } from "../../components";
import {
  ContactContainer,
  ContactForm,
  ContactSection,
  IconContainer,
} from "./Contact.styled";

export const Contact = () => {
  return (
    <ContactSection>
      <ContactContainer bgColor="#022a4d">
        <h2>Veja algumas de nossas obras:</h2>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1wALpnsg7zPP2KYq7dKLaL6AN6PknouY&ehbc=2E312F"
          
        ></iframe>
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
        <h3>
          Ou preencha o formulário abaixo e assim que possível entraremos em
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
      </ContactContainer>
    </ContactSection>
  );
};
