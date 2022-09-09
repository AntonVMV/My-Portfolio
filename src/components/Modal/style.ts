import styled from "styled-components";

export const ModalElement = styled.div`
  position: fixed;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: ${(props) => props.theme.secondary.darker};
  padding: 30px;
  justify-self: flex-end;
  align-self: flex-end;
  color: ${(props) => props.theme.background.darker};
  text-transform: uppercase;
  box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
  animation: test 0.5s ease forwards, test 0.5s ease 2s reverse;

  svg {
    height: 2rem;
    width: 2rem;
  }

  @media screen and (max-width: 768px) {
    left: 50%;
    right: auto;
    bottom: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes test {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
