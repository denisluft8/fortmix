import { ServicesCardContainer } from "./ServicesCard.styles";

interface ServiceCardProps {
  image: string;
  title: string;
  text: string;
}

export const ServicesCard = ({ image, title, text }: ServiceCardProps) => {
  return (
    <ServicesCardContainer>
      <img src={image} />
      <h3>{title}</h3>
      <p>{text}</p>
    </ServicesCardContainer>
  );
};
