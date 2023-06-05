import { useEffect, useState } from "react";
import { logo } from "../../assets";
import {
  Burguer1,
  Burguer2,
  Burguer3,
  BurguerContainer,
  HeaderContainer,
} from "./Header.styles";

export const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [burguer, setBurguer] = useState(false);

  const handleClick = () => {
    burguer === false ? setBurguer(true) : setBurguer(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setIsHidden(isScrollingDown && currentScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const backgroundTransparent = !isHidden && prevScrollPos === 0;

  return (
    <>
      <BurguerContainer onClick={() => handleClick()}>
        <Burguer1
          transform1={burguer ? "translate(0, 11px) rotate(-45deg)" : ""}
        ></Burguer1>
        <Burguer2 opacity={burguer ? "0" : "1"}></Burguer2>
        <Burguer3
          transform1={burguer ? "translate(0, -11px) rotate(45deg)" : ""}
        ></Burguer3>
      </BurguerContainer>
      <HeaderContainer
        backgroundTransparent={backgroundTransparent}
        isHidden={isHidden}
        display={burguer ? "flex" : "none"}
      >
        <a href="#home">
          <img src={logo} />
        </a>
        <ul>
          <li>
            <a href="#home" onClick={() => handleClick()}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => handleClick()}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#work" onClick={() => handleClick()}>
              O que fazemos
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => handleClick()}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handleClick()}>
              Contato
            </a>
          </li>
        </ul>
      </HeaderContainer>
    </>
  );
};
