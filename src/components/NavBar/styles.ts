import styled from "styled-components";
import { colorPalette } from "../../styles";

interface NavListProps {
  isMenuOpen: boolean;
}

export const Navigation = styled.nav`
  background-color: ${colorPalette.light.background.lighter};
  box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    padding: 15px 0;
    position: fixed;
  }
`;

export const NavList = styled.ul<NavListProps>`
  font-size: 16px;
  font-weight: 500;
  list-style: none;
  display: flex;
  gap: 50px;
  letter-spacing: 2px;
  justify-content: flex-end;
  padding: 20px 0;
  text-transform: uppercase;

  a {
    display: inline-block;
    color: ${colorPalette.light.primary.lighter};
    text-decoration: none;
    position: relative;
    padding: 10px;
    transition: 0.2s ease;
    z-index: 1;
    ::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 3px;
      background-color: ${colorPalette.light.secondary.lighter};
      transition: 0.2s ease;
      z-index: -1;
    }
    :hover {
      ::before {
        width: 100%;
      }
    }
    &.active {
      color: ${colorPalette.light.background.lighter};
      ::before {
        height: 100%;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    transition: 0.3s ease;
    transform: ${(props) =>
      props.isMenuOpen ? "translateX(0)" : "translateX(-100%)"};
    background-color: ${colorPalette.light.background.lighter};
    position: fixed;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    flex-direction: column;
    padding: 75px 20px;
    justify-content: flex-start;
    gap: 25px;
    box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 576px) {
    width: 70%;
  }
`;
