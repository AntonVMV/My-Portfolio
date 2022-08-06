import styled, { keyframes, css } from "styled-components";

interface IsVisible {
  isVisible: boolean;
}

interface ITool {
  x: number;
  y: number;
  index: number;
}

interface IImage {
  angle: number;
  index: number;
}

//Tools

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

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  position: relative;
  margin-bottom: 200px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: auto;
    margin-bottom: 0;
    align-self: flex-end;
  }
  @media screen and (max-width: 480px) {
    grid-template-rows: auto 270px;
  }
`;

export const ToolSelector = styled.div`
  position: relative;
  width: 450px;
  height: 500px;
  @media screen and (max-width: 768px) {
    justify-self: flex-end;
    width: 300px;
    height: 350px;
    grid-row: 1 / 2;
  }
  @media screen and (max-width: 480px) {
    width: 200px;
    height: 230px;
  }
`;

export const Content = styled.div`
  position: relative;
  padding: 25px 0 0 25px;
  img {
    position: absolute;
    height: 100%;
    right: -165px;
    bottom: -145px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0;
    img {
      position: absolute;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    img {
      right: 190px;
      top: -250px;
    }
  }
  @media screen and (max-width: 480px) {
    img {
      right: 120px;
      top: -190px;
    }
  }
`;

export const Tool = styled.div<ITool>`
  width: 70px;
  height: 70px;
  position: absolute;
  left: ${(props) => props.x + "%"};
  bottom: ${(props) => props.y + "%"};
  transition: 0.1s linear;
  cursor: pointer;
  opacity: 0;
  animation: ${iconAppear} 1s forwards;
  animation-delay: ${(props) => `${props.index * 100 + 250}ms`};
  transform: scale(100%);
  svg {
    width: 100%;
    height: 100%;
    transition: 0.2s ease;
    :hover {
      transform: scale(120%);
    }
  }
  @media screen and (max-width: 768px) {
    width: 55px;
    height: 55px;
  }
  @media screen and (max-width: 480px) {
    width: 37px;
    height: 37px;
  }
`;

export const Hand = styled.div<IImage>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 450px;
  position: absolute;
  left: -210px;
  bottom: 0px;
  transform: ${(props) => `rotate(-${props.angle}deg)`};
  transition: 0.2s linear;
  img {
    transform: translateX(-27px);
    grid-column: 2 / -1;
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: ${(props) =>
      `drop-shadow(${props.index - 4}px ${
        props.index - 2
      }px 4px rgba(0,0,0,0.4))`};
    transition: 0.2s linear;
  }
  @media screen and (max-width: 768px) {
    width: 350px;
    left: -175px;
    img {
      transform: translateX(-18px);
    }
  }
  @media screen and (max-width: 480px) {
    width: 250px;
    left: -125px;
    img {
      transform: translateX(-18px);
    }
  }
`;

export const Dialog = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  letter-spacing: 0.5px;
  position: relative;
  max-width: 60%;
  min-height: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 20px;
  border-radius: 20px;
  z-index: 5;
  transition: 0.2s linear;
  box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    max-width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 15px;
  }
`;

// Technologies

export const SkillsBg = styled.div`
  min-height: 100vh;
  position: relative;
  padding: 80px 0;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: ${(props) => props.theme.background.lighter};
    z-index: -5;
  }
`;

export const StyledTechnologies = styled.section`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 50px 0 50px;
  position: relative;
  text-align: center;
  h2 {
    max-width: 75%;
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 0 235px;
    h3 {
      max-width: 90%;
      margin: 0 auto;
    }
  }
`;

export const OtherTech = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TechList = styled.ul`
  padding: 20px 50px;
  list-style: none;
  background-color: ${(props) => props.theme.background.lightest};
  box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${(props) => props.theme.primary.darker};
  font-weight: 500;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 5px solid ${(props) => props.theme.secondary.darker};
    left: 15px;
    top: 15px;
    z-index: -1;
  }

  ::after {
    content: "";
    position: absolute;
    height: 450px;
    width: 450px;
    background: url(./img/frontend.webp) center center no-repeat;
    background-size: contain;
    top: -100px;
    right: -500px;
    z-index: -3;
    @media screen and (max-width: 768px) {
      height: 300px;
      width: 300px;
      top: 160px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  li {
    display: flex;
    align-items: center;
    gap: 15px;
    ::before {
      content: "";
      height: 1px;
      width: 20px;
      background-color: ${(props) => props.theme.primary.darker};
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
  padding: 75px 0 50px;
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
    margin-bottom: 25px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 75px 0 35px;
  }
`;

export const HSLeft = styled.div<IsVisible>`
  justify-self: flex-end;
  text-align: end;
  background-color: ${(props) => props.theme.background.lightest};
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
  background-color: ${(props) => props.theme.secondary.darker};
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
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 25px 50px;
  align-items: center;
  margin-top: 50px;
  h3 {
    text-align: center;
    grid-column: 1 / -1;
  }

  img {
    object-fit: contain;
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

export const EducationDescription = styled.div`
  display: grid;
  row-gap: 30px;
  text-align: end;
  padding: 50px;

  background-color: ${(props) => props.theme.background.lightest};
  box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
  position: relative;
  color: ${(props) => props.theme.primary.darker};
  div {
    display: grid;
    row-gap: 15px;
  }
  ::after {
    content: "";
    position: absolute;
    width: 90%;
    height: 110%;
    background-color: ${(props) => props.theme.secondary.darker};
    left: -10%;
    top: -5%;
    box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
  @media screen and (max-width: 992px) {
    row-gap: 25px;
    padding: 35px;
    margin: 50px 0 25px;
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
    box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
