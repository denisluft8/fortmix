import { styled } from "styled-components";

export const ValuesSection = styled.section`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100%; */
  padding-top: 20px;
  padding-bottom: 60px;

  & > h2 {
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    width: 50%;
  }
`;

export const MissionCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
