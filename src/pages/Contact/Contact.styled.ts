import { styled } from "styled-components";

interface ContactContainerProps {
  bgColor?: string;
}

export const ContactSection = styled.section`
  min-height: 100%;
  height: 100%;
  color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    height: auto;
    flex-direction: column;
  }
  @media (max-width: 420px) {
    width: 110%;
  }
`;

export const ContactContainer = styled.div<ContactContainerProps>`
  background: ${(props) => props.bgColor};
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 38%;
  padding: 20px;

  & > iframe {
    border: none;
    height: 480px;
    width: 100%;
  }

  @media (max-width: 500px) {
    margin-top: 20px;
    width: auto;
  }
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  & > a {
    cursor: pointer;
    & > img {
      width: 100px;
      &:hover {
        transform: scale(1.1);
        transition: 0.5s ease;
      }
    }
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin-bottom: 32px;

  & > label {
    border-width: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    height: 1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    white-space: nowrap !important;
    width: 1px !important;
  }

  & > input {
    background-color: transparent;
    border: none;
    color: white;
    border-bottom: 2px solid #ff8922;
    height: 40px;
    font-size: 20px;
    outline: none;
    padding-left: 10px;
    transition: 0.5s ease;
    width: 350px;

    &::placeholder {
      color: #eee;
      font-size: 20px;
    }

    &:focus {
      width: 380px;
    }
  }

  & > textarea {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #ff8922;
    color: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 20px;
    outline: none;
    height: 40px;
    padding: 10px 0px 0px 10px;
    resize: none;
    transition: 0.5s ease;
    width: 350px;

    &::-webkit-scrollbar {
      width: 4px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #034781;
      width: 2px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #ff8922;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #f97400;
    }

    &::placeholder {
      color: #eee;
      font-size: 20px;
    }

    &:focus {
      height: 140px;
      width: 380px;
    }
  }
  @media (max-width: 420px) {
    & > input {
      width: 250px;
      &:focus {
        width: 300px;
      }
    }
    & > textarea {
      width: 250px;
      &:focus {
        width: 300px;
      }
    }
  }
`;
