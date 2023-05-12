import { styled } from "styled-components";

interface SectionNameStylesProps {
  isTop?: boolean;
  textColor?: string;
}

export const SectionContainer = styled.div<SectionNameStylesProps>`
  display: flex;
  flex-direction: ${(props) => (props.isTop === true ? "row" : "column")};
  align-items: center;
`;

export const Dash = styled.div`
  background-color: #ff8922;
  height: 5px;
  margin-right: 12px;
  width: 40px;
`;

export const SectionText = styled.h3<SectionNameStylesProps>`
  font-size: 18px;
  font-weight: 100;
  line-height: 20px;
  color: ${(props) => props.textColor};
`;
