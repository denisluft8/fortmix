import { styled } from "styled-components";

interface ContactContainerProps {
  bgColor?: string;
}

export const ContactSection = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const ContactContainer = styled.div<ContactContainerProps>`
  background: ${(props) => props.bgColor};
  height: 80%;
  width: 38%;
  padding: 12px;
  & > h2 {
    margin-top: 500px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  & > a > img {
    width: 100px;
  }
`;
