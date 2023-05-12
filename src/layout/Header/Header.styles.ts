import { styled } from "styled-components";

export const HeaderContainer = styled.div`
position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 84px;
  top: 0;
  width: 100%;
  z-index: 999;

  & > img {
    height: 80px;
    margin-left: 20px;
  }

  & > ul {
    list-style: none;

    & > li {
      float: left;

      & > a {
        color: #fff;
        margin-right: 20px;
        cursor: pointer;

        &:hover {
          color: #ff8922;
          border-bottom: 2px solid #ff8922;
        }
      }
    }
  }
`;
