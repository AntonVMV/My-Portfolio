import styled, { keyframes, css } from "styled-components";

interface TechnologyProps {
  index: number;
}

interface TechnologyIconProps {
  isDark: boolean;
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
  padding: 70px 0 50px;
  position: relative;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 20px 0 235px;
  }
`;

export const TechnologiesContainer = styled.div`
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
    background-color: ${(props) => props.theme.background.lightest};
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
`;

export const TechnologyIcon = styled.img<TechnologyIconProps>`
  width: 60px;
  height: 60px;
  object-fit: contain;
  ${(props) =>
    props.isDark &&
    css`
      filter: drop-shadow(0px 3px 7px rgba(0, 0, 0, 0.3));
    `}
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
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
