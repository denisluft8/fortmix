import { styled } from "styled-components";

export const ServicesCardContainer = styled.div`
  align-items: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4),
    inset 1px 1px 0px rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  padding: 10px 6px 0px 6px;
  height: 340px;
  width: 250px;

  & > img {
    height: 64px;
  }
  & > h3 {
    text-align: center;
    line-height: 26px;
    color: #002240;
    font-size: 26px;
  }

  & > p {
    color: #002240;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`;
