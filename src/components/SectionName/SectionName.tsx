import { Dash, SectionContainer, SectionText } from "./SectionName.styles";
interface SectionNameProps {
  text: string;
  textColor: string;
  top?: boolean;
}

export const SectionName = ({ text, textColor, top }: SectionNameProps) => {
  return (
    <SectionContainer isTop={top === true ? false : true}>
      <Dash></Dash> <SectionText textColor={textColor}>{text}</SectionText>
    </SectionContainer>
  );
};
