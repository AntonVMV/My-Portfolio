import { colors } from "../../styles";
import styled from "styled-components";

interface CardContainerProps {
  img: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  width: 100%;
  height: 100%;
  /* background: url(${(props) => props.img}) center top no-repeat; */
  /* background-size: cover; */
  color: white;
  box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  :hover {
    img {
      transform: scale(1.3);
    }
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease;
    z-index: -1;
  }
`;

export const CardDesription = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: 1s ease;
  width: 100%;
  height: 100%;
  display: grid;
  align-content: flex-end;
  justify-items: flex-start;
  gap: 15px;
  padding: 30px;

  p {
    font-size: 18px;
  }
  a {
    text-decoration: none;
    font-size: 16px;
    color: ${colors.secondary};
    :hover {
      color: #ed9121;
    }
  }
  :hover {
    opacity: 1;
  }
`;
