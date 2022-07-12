import styled from "styled-components";

export const StyledMain = styled.main`
  height: 100%;
  position: relative;
  overflow-x: clip;
  .pages {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .pages-enter {
    opacity: 0;
  }

  .pages-enter-active {
    animation: fade-in 0.75s ease forwards;
  }

  .pages-exit {
    opacity: 1;
  }

  .pages-exit-active {
    opacity: 0;
    animation: fade-out 0.75s ease backwards;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
