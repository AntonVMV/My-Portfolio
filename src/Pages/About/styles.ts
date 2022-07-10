import styled from "styled-components";
import { colorPalette } from "../../styles";

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 50px;
  align-items: flex-start;
  padding: 200px 0 25px;
  position: relative;
  a {
    text-decoration: none;
  }

  ::after {
    content: "";
    top: 0;
    position: absolute;
    left: -10%;
    height: 100%;
    width: 85%;
    background-color: ${colorPalette.light.background.lightest};
    z-index: -1;

    @media screen and (max-width: 768px) {
      top: 0;
      left: 0;
      height: 400px;
      width: 100vw;
    }
  }

  @media screen and (max-height: 900px) {
    padding: 150px 0 25px;
  }

  @media screen and (max-width: 768px) {
    position: static;
    align-items: center;
    padding: 75px 0 20px;
  }
`;

export const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr 1fr;
  align-items: center;
  row-gap: 25px;
  text-align: end;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    grid-template-rows: auto;
  }
`;

export const ProfileSubTitle = styled.h4`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  justify-self: flex-end;
  gap: 15px;
  ::before {
    content: "";
    display: block;
    width: 40px;
    height: 1px;
    background-color: ${colorPalette.light.primary.darker};
  }
  @media screen and (max-width: 768px) {
    justify-self: center;
    ::after {
      content: "";
      display: block;
      width: 40px;
      height: 1px;
      background-color: ${colorPalette.light.primary.darker};
    }
  }
`;

export const ProfilePhoto = styled.div`
  justify-self: center;
  grid-row: 1 / -1;
  grid-column: 2 / -1;
  width: 350px;
  height: 350px;
  background: url(./img/photo1.png) center center no-repeat;
  background-size: cover;
  border-radius: 100%;
  border: 3px solid #eae7dc;
  background-color: ${colorPalette.light.background.darker};
  position: relative;
  @media screen and (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    width: 300px;
    height: 300px;
  }
`;

export const Social = styled.div`
  margin-top: auto;
  display: flex;
  gap: 10px;
  a {
    color: ${colorPalette.light.primary.darker};
  }
  svg {
    width: 2rem;
    height: 2rem;
    transition: 0.2s ease;
    :hover {
      fill: ${colorPalette.light.secondary.darker};
    }
  }
`;
