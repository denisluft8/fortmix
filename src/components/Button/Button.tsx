import { ButtonStyled } from "./Button.styles";

interface ButtonProps {
  text: string;
}
export const Button = ({ text }: ButtonProps) => {
  return (
    <>
      <ButtonStyled type="button">{text}</ButtonStyled>
    </>
  );
};
