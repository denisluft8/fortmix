import { icon5, icon6, icon7 } from "../../assets";
import { SectionName, ServicesCard } from "../../components";
import { CardContainer, ServicesSection } from "./Services.styles";

export const Services = () => {
  return (
    <ServicesSection>
      <SectionName top text={"Nossos Serviços"} textColor={"#000"} />
      <h2>Veja alguns de nossos serviços</h2>
      <CardContainer>
        <ServicesCard
          image={icon5}
          title={"Lorem Ipsum"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper mattis dolor a hendrerit. Phasellus at dolor ut dui porta rhoncus. Pellentesque quis scelerisque metus, vel facilisis nulla. "
          }
        />
        <ServicesCard
          image={icon6}
          title={"Lorem Ipsum"}
          text={
            "Nulla et ante eu sapien venenatis faucibus ut sed lectus. Vivamus sagittis auctor pulvinar. Sed semper erat sed lorem mollis, at efficitur tortor dapibus. Integer et urna tortor. "
          }
        />
        <ServicesCard
          image={icon7}
          title={"Lorem Ipsum"}
          text={
            "Morbi a tortor sed dui congue facilisis nec vitae velit. Duis et venenatis eros, non porttitor neque. Praesent at eleifend magna, ut condimentum nisi. Nam a eleifend felis. Aliquam sit amet risus commodo lorem dictum mollis. Cras at felis vitae est cursus posuere. "
          }
        />
      </CardContainer>
    </ServicesSection>
  );
};
