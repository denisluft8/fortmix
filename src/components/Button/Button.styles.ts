import { styled } from "styled-components";

export const ButtonStyled = styled.button`
  background: #ff8922;
  border: none;
  width: fit-content;
  border-radius: 14px;
  padding: 12px 16px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background: #ff983d;
    transition: 0.3s;
  }
`;
