import styled from "styled-components";

interface SlideContainerProps {
  position: number;
}

export const CarouselBg = styled.div`
  overflow: hidden;
  padding: 15px 0;
`;

export const CarouselContainer = styled.div`
  position: relative;
  height: 60vmin;
  transform: translateX(-75%);
  @media screen and (max-width: 992px) {
    transform: translateX(-150%);
  }
  @media screen and (max-width: 768px) {
    transform: translateX(-175%);
    height: 50vmax;
  }
`;

export const SlideContainer = styled.div<SlideContainerProps>`
  transform: ${(props) => `translateX(${props.position * 100}%)`};
  opacity: ${(props) => {
    if (props.position >= 1 && props.position <= 3) {
      return "1";
    } else {
      return "0";
    }
  }};
  filter: ${(props) => (props.position === 2 ? "none" : "grayscale(1)")};
  position: absolute;
  width: 50%;
  top: 0;
  height: 100%;
  padding: 0 15px;
  background-color: transparent;
  transition: transform 0.8s, opacity 0.5s ease;
  div {
    box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 992px) {
    width: 80%;
    padding: 0 5px;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 0 5px;
  }
`;

export const CarouselControls = styled.div`
  display: none;
  margin-top: 10px;
  justify-content: center;
  gap: 30px;
  svg {
    fill: ${(props) => props.theme.secondary.darker};
    width: 2rem;
    height: 2rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
