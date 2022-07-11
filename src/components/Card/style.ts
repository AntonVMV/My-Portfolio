import styled from "styled-components";

interface CardContainerProps {
  img: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.background.lighter};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  :hover {
    img {
      transform: scale(1.3);
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease;
    z-index: -1;
    position: relative;
  }
`;

export const CardDesription = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  opacity: 0;
  transition: opacity 0.2s ease;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 0 50px;
  position: absolute;
  top: 0;
  left: 0;
  div {
    display: flex;
    gap: 30px;
  }
  p {
    color: #ebebeb;
    text-align: center;
    grid-column: 1 / -1;
    font-size: 18px;
    position: relative;
    opacity: 0;
    transition: opacity 0.3s 0.2s ease;
    display: flex;
    padding-bottom: 15px;
    gap: 15px;
    ::after {
      content: "";
      display: block;
      width: 0;
      height: 1px;
      background-color: ${(props) => props.theme.background.lighter};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }
    @media screen and (max-width: 576px) {
      font-size: 14px;
    }
  }

  a {
    text-decoration: none;
    font-size: 16px;
    color: ${(props) => props.theme.secondary.darker};
    z-index: 99;
    transition: 0.2s ease;
    :hover {
      color: ${(props) => props.theme.secondary.lighter};
    }
    @media screen and (max-width: 576px) {
      font-size: 14px;
    }
  }
  :hover {
    opacity: 1;
    p {
      opacity: 1;
      ::after {
        width: 50%;
        transition: width 0.3s 0.5s ease;
      }
    }
  }
  @media screen and (max-width: 576px) {
    padding: 0 20px;
  }
`;
