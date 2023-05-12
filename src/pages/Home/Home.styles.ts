import { styled } from "styled-components";

export const HomeSection = styled.section`
  height: 80%;
`;

export const BackgroundImg = styled.img`
  opacity: 0.3;
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
`;

export const HomeContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin: 20px;
  margin-top: 84px;
  position: relative;
`;

export const ContentContainer = styled.div`
  width: 50%;

  & > h1 {
    visibility: hidden;
  }

  & > h3 {
    margin: 0;
  }

  & > h2 {
    margin: 0;
  }
`;
