import { construction3, workerBack } from "../../assets";
import { Button, SectionName } from "../../components";
import {
  AboutContainer,
  AboutSection,
  ImgAbout1,
  ImgAbout2,
  ImgContainer,
} from "./About.styles";

export const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <ImgContainer>
          <ImgAbout1 src={construction3} alt="" />
        </ImgContainer>
        <ImgAbout2 src={workerBack} alt="" />
      </AboutContainer>
      <AboutContainer display="flex">
        <SectionName textColor="#000" text="Sobre Nós" />
        <h2>Somos Uma Construtora Lider</h2>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
          varius velit. Phasellus hendrerit nulla sed leo pulvinar tincidunt.
          Vestibulum a eleifend nisl, non blandit risus. Praesent tortor nisl,
          aliquam sed diam eu, tristique placerat diam. Aenean tempus ante eu
          felis rutrum, aliquet tempus turpis pharetra.
        </h4>
        <p>
          Aliquam sollicitudin eget quam eget ornare. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras
          eget pellentesque dui. Nulla volutpat porta enim, non elementum quam
          pulvinar dapibus. Vivamus nec imperdiet odio. Phasellus sem urna,
          hendrerit sed leo non, venenatis condimentum magna. Phasellus
          venenatis ac nunc eu lobortis.
        </p>
        <Button text="Saiba Mais" />
      </AboutContainer>
    </AboutSection>
  );
};
