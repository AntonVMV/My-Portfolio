import styled, { keyframes, css } from "styled-components";
import { colorPalette } from "../../styles";

interface TechnologyProps {
  index: number;
}

interface IsVisible {
  isVisible: boolean;
}

// Technologies

const iconAppear = keyframes` 
  0% {
    opacity: 0;
    transform: scale(100%);
  }
  50% {
    transform: scale(120%);
  }
  100% {
    opacity: 1;
    transform: scale(100%);
  }
`;

export const SkillsBg = styled.div`
  min-height: 100vh;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: ${colorPalette.light.background.lighter};
    z-index: -2;
  }
`;

export const StyledTechnologies = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  padding: 150px 0 50px;
  position: relative;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 100px 0 35px;
  }
`;

export const TechnologiesContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  width: 100%;
  gap: 5px; */
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  gap: 15px 5px;
  position: relative;
  padding: 15px;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100%;
    background-color: ${colorPalette.light.background.lightest};
    z-index: -1;
    box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
  }
`;

export const TechnologyItem = styled.div<TechnologyProps>`
  min-width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  animation: ${iconAppear} 1s forwards;
  animation-delay: ${(props) => `${props.index * 100 + 250}ms`};
  opacity: 0;
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

export const TechList = styled.ul`
  padding: 20px 50px;
  list-style: none;
  background-color: ${colorPalette.light.background.lightest};
  box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  color: ${colorPalette.light.primary.darker};
  font-weight: 500;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${colorPalette.light.secondary.lighter};
    left: 20px;
    top: 20px;
    box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
    z-index: -1;
  }

  li {
    display: flex;
    align-items: center;
    gap: 15px;
    ::before {
      content: "";
      height: 1px;
      width: 20px;
      background-color: ${colorPalette.light.primary.darker};
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 576px) {
    padding: 15px 25px;
  }
`;

//Hard Skills === HS

const moveLeft = keyframes`
  0% {
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
  }
`;

const moveRight = keyframes`
  0% {
    transform: translateY(25%) translateX(100px);
  }
  100% {
    opacity: 1;
  }
`;

const moveRightMob = keyframes`
  0% {
    transform: translateY(-15%) translateX(100px);
  }
  100% {
    opacity: 1;
  }
`;

export const HSContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 50px 0;
  row-gap: 25px;
  position: relative;
  div {
    width: 100%;
    display: grid;
    row-gap: 15px;
    padding: 15px 50px;
    box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
    @media screen and (max-width: 768px) {
      padding: 35px 35px;
    }
  }

  h3 {
    grid-column: 1 / -1;
    justify-self: center;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 50px 0 25px;
  }
`;

export const HSLeft = styled.div<IsVisible>`
  justify-self: flex-end;
  text-align: end;
  background-color: ${colorPalette.light.background.lightest};
  transform: translateX(10px);
  opacity: 0;

  ${(props) =>
    props.isVisible &&
    css`
      animation: ${moveLeft} 1s 0.5s ease forwards;
    `}
  @media screen and (max-width: 768px) {
    transform: translateX(20px);
    animation-delay: 0.1s;
  }
`;

export const HSRight = styled.div<IsVisible>`
  justify-self: flex-start;
  background-color: ${colorPalette.light.secondary.lighter};
  color: green;
  transform: translateY(25%) translateX(-10px);
  opacity: 0;
  ${(props) =>
    props.isVisible &&
    css`
      animation: ${moveRight} 1s 0.75s ease forwards;
    `}
  @media screen and (max-width: 768px) {
    transform: translateY(-15%) translateX(-20px);
    ${(props) =>
      props.isVisible &&
      css`
        animation: ${moveRightMob} 1s 0.3s ease forwards;
      `}
  }
`;

//Education

const slideLeft = keyframes`
  0% {
    transform: translateX(175px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const EducationContainer = styled.section`
  margin-top: 75px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  column-gap: 50px;
  row-gap: 25px;
  h3 {
    text-align: center;
    grid-column: 1 / -1;
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    row-gap: 55px;
    justify-items: center;
  }
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const EducationDescription = styled.div`
  display: grid;
  row-gap: 30px;
  text-align: end;
  padding: 50px;
  background-color: ${colorPalette.light.background.lightest};
  box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
  position: relative;
  div {
    display: grid;
    row-gap: 15px;
  }
  ::after {
    content: "";
    position: absolute;
    width: 90%;
    height: 110%;
    background-color: ${colorPalette.light.secondary.lighter};
    left: -10%;
    top: -5%;
    box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
  @media screen and (max-width: 992px) {
    row-gap: 25px;
    padding: 35px;
  }
  @media screen and (max-width: 768px) {
    text-align: start;
    row-gap: 20px;
    div {
      row-gap: 10px;
    }
  }
`;

export const Sertificates = styled.div<IsVisible>`
  display: grid;
  row-gap: 15px;
  opacity: 0;
  ${(props) =>
    props.isVisible &&
    css`
      animation: ${slideLeft} 1s ease forwards;
    `}

  div {
    position: relative;
    transition: 0.3s ease;
    cursor: pointer;
    :hover {
      position: relative;
      transform: scale(110%);
      z-index: 2;
      img {
        filter: blur(3px);
      }
      a {
        display: inline;
      }
    }
  }
  img {
    width: 100%;
    box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
  }
  a {
    text-align: center;
    display: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-decoration: none;
    color: ${colorPalette.light.secondary.darker};
    z-index: 3;
    font-weight: 500;
    :hover {
      color: ${colorPalette.light.secondary.lighter};
    }
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
