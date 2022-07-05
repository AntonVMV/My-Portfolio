import styled from "styled-components";
import { colors } from "../../styles";

export const Navigation = styled.nav`
  background-color: rgba(0, 0, 0, 0.15);
`;

export const NavList = styled.ul`
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
    color: ${colors.primary};
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
      background-color: ${colors.secondary};
      transition: 0.2s ease;
      z-index: -1;
    }
    :hover {
      ::before {
        width: 100%;
      }
    }
    &.active {
      color: ${colors.white};
      ::before {
        height: 100%;
        width: 100%;
      }
    }
  }
`;
