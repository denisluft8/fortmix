import { styled } from "styled-components";

export const ServicesSection = styled.section`
  
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 60px;

  & > h2 {
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 80px;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 24px;
`;
