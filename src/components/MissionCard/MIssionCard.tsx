import {
  MCardContainer,
  MCardImgContainer,
  MCardTextContainer,
} from "./MissionCard.styles";

interface MissionCardProps {
  imgSrc: string;
  title: string;
  text: string;
}

export const MissionCard = ({ imgSrc, title, text }: MissionCardProps) => {
  return (
    <MCardContainer>
      <MCardImgContainer>
        <img src={imgSrc} />
      </MCardImgContainer>
      <MCardTextContainer>
        <h3>{title}</h3>
        <p>{text}</p>
      </MCardTextContainer>
    </MCardContainer>
  );
};
