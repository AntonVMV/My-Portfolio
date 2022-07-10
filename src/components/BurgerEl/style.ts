import styled, { css } from "styled-components";
import { colorPalette } from "../../styles";

interface BurgerContainerProps {
  isActive: boolean;
}

export const BurgerContainer = styled.div<BurgerContainerProps>`
  width: 30px;
  height: 25px;
  display: none;
  flex-direction: column;
  position: relative;
  z-index: 99;

  div {
    position: absolute;
    width: 100%;
    height: 5px;
    border-radius: 2px;
    transition: 0.3s ease;
    background-color: ${colorPalette.light.primary.darker};
    :nth-child(1) {
      ${(props) =>
        props.isActive
          ? css`
              top: 50%;
              transform: translateY(-50%) rotate(45deg);
            `
          : css`
              top: 0;
            `}
    }
    :nth-child(2) {
      top: 50%;
      transform: translateY(-50%);

      opacity: ${(props) => (props.isActive ? "0" : "1")};
    }
    :nth-child(3) {
      ${(props) =>
        props.isActive
          ? css`
              bottom: 50%;
              transform: translateY(50%) rotate(-45deg);
            `
          : css`
              bottom: 0;
            `}
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
