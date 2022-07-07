import styled from "styled-components";
import { colors } from "../../styles";

export const ModalElement = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: ${colors.secondary};
  padding: 30px;
  justify-self: flex-end;
  align-self: flex-end;
  color: white;
  text-transform: uppercase;
  box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
  animation: test 0.5s ease forwards, test 0.5s ease 2s reverse;

  svg {
    height: 2rem;
    width: 2rem;
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
