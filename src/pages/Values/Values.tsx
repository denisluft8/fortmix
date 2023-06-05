import { icon1, icon2, icon3, icon4 } from "../../assets";
import { MissionCard, SectionName } from "../../components";
import { MissionCardContainer, ValuesSection } from "./Values.styles";

export const Values = () => {
  return (
    <ValuesSection id="work">
      <SectionName textColor="#ff8922" top text="O que fazemos" />
      <h2>Melhore sua experiência conosco</h2>
      <MissionCardContainer>
        <MissionCard
          imgSrc={icon1}
          title={"Compromisso com prazos"}
          text={
            "Aliquam sollicitudin eget quam eget ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras eget pellentesque dui. Nulla volutpat porta enim, non elementum quam pulvinar dapibus. Vivamus nec imperdiet odio. Phasellus sem urna, hendrerit sed leo non, venenatis condimentum magna. Phasellus venenatis ac nunc eu lobortis"
          }
        />
        <MissionCard
          imgSrc={icon2}
          title={"Inovação"}
          text={
            "Aliquam sollicitudin eget quam eget ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras eget pellentesque dui. Nulla volutpat porta enim, non elementum quam pulvinar dapibus. Vivamus nec imperdiet odio. Phasellus sem urna, hendrerit sed leo non, venenatis condimentum magna. Phasellus venenatis ac nunc eu lobortis"
          }
        />
        <MissionCard
          imgSrc={icon3}
          title={"Atendimento ao cliente"}
          text={
            "Aliquam sollicitudin eget quam eget ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras eget pellentesque dui. Nulla volutpat porta enim, non elementum quam pulvinar dapibus. Vivamus nec imperdiet odio. Phasellus sem urna, hendrerit sed leo non, venenatis condimentum magna. Phasellus venenatis ac nunc eu lobortis"
          }
        />
        <MissionCard
          imgSrc={icon4}
          title={"Qualidade"}
          text={
            "Aliquam sollicitudin eget quam eget ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras eget pellentesque dui. Nulla volutpat porta enim, non elementum quam pulvinar dapibus. Vivamus nec imperdiet odio. Phasellus sem urna, hendrerit sed leo non, venenatis condimentum magna. Phasellus venenatis ac nunc eu lobortis"
          }
        />
      </MissionCardContainer>
    </ValuesSection>
  );
};
