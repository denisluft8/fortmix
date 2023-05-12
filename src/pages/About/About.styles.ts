import { styled } from "styled-components";

interface AboutContainerProps {
  display?: string | "block";
}

export const AboutSection = styled.section`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  padding: 20px;
`;

export const AboutContainer = styled.div<AboutContainerProps>`
  position: relative;
  display: ${(props) => props.display};
  flex-direction: column;
  width: 50%;

  & > h2 {
    font-size: 40px;
    font-weight: 900;
    line-height: 60px;
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
`;

export const ImgAbout1 = styled.img`
  width: 400px;
  opacity: 0.2;
`;
export const ImgAbout2 = styled.img`
  width: 380px;
  z-index: 2;
  position: absolute;
  margin-top: -320px;
  margin-left: 90px;
`;

export const ImgContainer = styled.div`
  background: #ff8922;
  width: 400px;
  height: 500px;
`;
