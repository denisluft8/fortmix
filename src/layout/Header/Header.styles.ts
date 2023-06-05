import { styled, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const HeaderContainer = styled.div<{
  isHidden: boolean;
  backgroundTransparent: boolean;
  display?: string;
}>`
  position: fixed;
  background-color: ${(props) =>
    props.backgroundTransparent ? "transparent" : "#002240"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 84px;
  top: 0;
  transition: transform 0.3s ease, background-color 1.2s ease;
  transform: translateY(${(props) => (props.isHidden ? "-100%" : "0")});
  width: 100%;
  z-index: 998;

  & > a > img {
    height: 80px;
    margin-left: 20px;
  }

  & > ul {
    list-style: none;
    margin-right: 40px;

    & > li {
      float: left;

      & > a {
        color: #fff;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        padding-bottom: 2px;
        margin-right: 20px;
        text-decoration: none;
        transition: 0.3s ease;

        &:hover {
          color: #ff8922;
          border-bottom: 2px solid #ff8922;
        }
      }
    }
  }
  @media (max-width: 500px) {
    transform: none;
    width: 80%;
    right: 0;
    background: #002240;
    height: 100%;
    display: ${(props) => props.display};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 200px;
    transition: width 0.35s ease-in-out;
    animation-name: ${fadeIn};
    animation-duration: 0.5s;
    overflow: hidden;

    & > a > img {
      margin-top: 20px;
      height: 100px;
      margin-right: 40px;
    }

    & > ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 0px;

      & > li {
        & > a {
          border: none;
          font-size: 20px;

          &:hover {
            color: #ff8922;
          }
        }
      }
    }
  }
`;

interface BurguerProps {
  transform1?: string;
  transform2?: string;
  opacity?: string;
}

export const BurguerContainer = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: inline-block;
    cursor: pointer;
    position: fixed;
    right: 0;
    top: 0;
    margin-top: 12px;
    padding-right: 10px;
    z-index: 999;
  }
`;
export const Burguer1 = styled.div<BurguerProps>`
  @media (max-width: 500px) {
    width: 35px;
    height: 5px;
    background-color: #ff8922;
    margin: 6px 0;
    transition: 0.4s;
    transform: ${(props) => props.transform1};
  }
`;
export const Burguer2 = styled.div<BurguerProps>`
  @media (max-width: 500px) {
    width: 35px;
    height: 5px;
    background-color: #ff8922;
    margin: 6px 0;
    transition: 0.4s;
    opacity: ${(props) => props.opacity};
  }
`;
export const Burguer3 = styled.div<BurguerProps>`
  @media (max-width: 500px) {
    width: 35px;
    height: 5px;
    background-color: #ff8922;
    margin: 6px 0;
    transition: 0.4s;
    transform: ${(props) => props.transform1};
  }
`;
