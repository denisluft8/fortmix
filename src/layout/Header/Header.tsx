import { logo } from "../../assets";
import { HeaderContainer } from "./Header.styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} />
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Sobre</a>
        </li>
        <li>
          <a>Projetos</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
        <li>
          <a>Contato</a>
        </li>
      </ul>
    </HeaderContainer>
  );
};
