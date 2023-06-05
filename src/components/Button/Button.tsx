import { ButtonStyled } from "./Button.styles";

interface ButtonProps {
  link: string;
  text: string;
}
export const Button = ({ text, link }: ButtonProps) => {
  return (
    <>
      <ButtonStyled type="button">
        <a href={link}>{text}</a>
      </ButtonStyled>
    </>
  );
};
