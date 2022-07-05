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
`;

export const SlideContainer = styled.div<SlideContainerProps>`
  transform: ${(props) => `translateX(${props.position * 100}%)`};
  opacity: ${(props) => {
    if (props.position === 1 || props.position === 2 || props.position === 3) {
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
  transition: 0.5s ease;
`;
