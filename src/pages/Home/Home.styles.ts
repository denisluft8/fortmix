import { styled } from "styled-components";

export const HomeSection = styled.section`
  height: 100%;
  display: flex;
  top: 0;

  @media (max-width: 500px) {
    min-height: fit-content;
    height: fit-content;
    flex-direction: column;
  }
`;

export const BackgroundImg = styled.img`
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding-bottom: 84px;

  @media (max-width: 424px) {
    height: 100%;
    width: 100%;
    opacity: 0;
  }
`;

export const HomeContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin: 20px;
  position: relative;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;

  & > img {
    display: none;
  }

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

  @media (max-width: 500px) {
    width: auto;
    height: auto;
    align-items: center;

    & > img {
      display: block;
      margin-bottom: 60px;
    }

    & > h3 {
      line-height: 50px;
    }

    & > p {
      font-size: 17px;
      padding: 12px;
      text-align: center;
    }
  }
  @media (max-width: 424px) {
    width: 320px;
    text-align: center;

    & > img {
      width: 280px;
      margin-left: 32px;
    }
    & > h2 {
      margin-top: 0;
    }

    & > p {
      font-size: 17px;
      padding: 0px;
      text-align: justify;
      margin-left: 32px;
    }
  }
`;
