import { styled } from "styled-components";

interface AboutContainerProps {
  display?: string | "block";
}

export const AboutSection = styled.section`
  min-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  padding: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  @media (max-width: 424px) {
    width: 100%;
  }
`;

export const AboutContainer = styled.div<AboutContainerProps>`
  position: relative;
  display: ${(props) => props.display};
  flex-direction: column;
  width: 50%;

  & > h2 {
    font-size: 40px;
    font-weight: 900;
    line-height: 46px;
    margin-left: 20px;
  }

  & > p {
    border-left: 4px solid #ff8922;
    font-size: 14px;
    margin-bottom: 60px;
    margin-left: 60px;
    padding-left: 12px;
  }

  & > button {
    align-self: center;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ImgAbout1 = styled.img`
  width: 400px;
  opacity: 0.2;
  @media (max-width: 500px) {
    width: 300px;
  }
  @media (max-width: 424px) {
    width: 250px;
  }
`;

export const ImgAbout2 = styled.img`
  width: 380px;
  z-index: 2;
  position: absolute;
  margin-top: -320px;
  margin-left: 90px;

  @media (max-width: 500px) {
    width: 280px;
  }

  @media (max-width: 424px) {
    width: 250px;
    margin-top: -270px;
    margin-left: 40px;
  }
`;

export const ImgContainer = styled.div`
  background: #ff8922;
  width: 400px;
  height: 500px;

  @media (max-width: 500px) {
    width: 300px;
    height: 375px;
  }
  @media (max-width: 424px) {
    width: 250px;
    height: 314px;
  }
`;
