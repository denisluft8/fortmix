import { styled } from "styled-components";

export const MCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  gap: 20px;
  height: 200px;
  width: 450px;
  background-color: #022a4d;
  padding: 0 20px;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 320px;
    height: auto;
    padding: 20px;
  }
  @media (max-width: 424px) {
    width: 280px;
  }
`;

export const MCardTextContainer = styled.div`
  color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;

  & > h3 {
    margin: 0;
  }

  & > p {
    margin: 0;
    font-size: 14px;
    line-height: 16px;
  }

  @media (max-width: 500px) {
    align-items: center;
  }
  & > p {
    /* text-align: center; */
  }
`;

export const MCardImgContainer = styled.div`
  background: #12395c;
  padding: 22px;
  border-radius: 10px;

  & > img {
    height: 110px;
  }

  @media (max-width: 500px) {
    & > img {
      height: 80px;
    }
  }
`;
