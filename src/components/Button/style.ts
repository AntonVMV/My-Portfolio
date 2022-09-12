import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

const secondary = css`
  border-radius: 100%;
  width: 80px;
  height: 80px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: white;
    width: 50%;
    height: 50%;
    transition: 0.2s ease;
  }
  &:hover {
    svg {
      transform: scale(120%);
    }
  }
  @media screen and (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.secondary.darker};
  text-transform: uppercase;
  font-size: 16px;
  color: ${(props) => props.theme.background.darker};
  border: none;
  padding: 15px 20px;
  letter-spacing: 1px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  ${(props) => props.styleType === "secondary" && secondary}
  :hover {
    background-color: ${(props) => props.theme.secondary.lighter};
  }
  :active {
    box-shadow: none;
  }
  &:disabled {
    pointer-events: none;
    filter: grayscale();
  }
`;
