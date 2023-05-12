import { styled } from "styled-components";

export const HomeSection = styled.section`
  height: 100%;
  display: flex;
  /* align-items: stretch; */
  top: 0;
`;

export const BackgroundImg = styled.img`
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 84px;
`;

export const HomeContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin: 20px;
  position: relative;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;

  & > h1 {
    visibility: hidden;
  }

  & > h3 {
    font-size: 48px;
    font-weight: 900;
    margin: 0;
  }

  & > h2 {
    font-size: 48px;
    font-weight: 500;
    height: 8px;
    border-left: 4px solid #ff8922;
    padding: 18px 0 24px 12px;
    margin-left: 40px;
  }
`;
