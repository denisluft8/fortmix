import { logo } from "../../assets";
import { HeaderContainer } from "./Header.styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <a href="#home">
        <img src={logo} />
      </a>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#work">O que fazemos</a>
        </li>
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </HeaderContainer>
  );
};
