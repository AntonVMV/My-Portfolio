import styled from "styled-components";
import { InputProps } from "./Input";

export const InputContainer = styled.div`
  position: relative;
`;

export const StyledInput = styled.input<InputProps>`
  height: 30px;
  padding: 15px;
  border-radius: 0;
  font-size: 15px;
  width: 100%;
  border-color: red;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid
    ${(props) =>
      props.error ? props.theme.warning : props.theme.primary.lighter};
  transition: border-color 0.2s ease;
  color: ${(props) => props.theme.primary.darker};
  :focus {
    outline: 0;
    border-color: ${(props) => props.theme.secondary.lighter};
  }
  :-webkit-autofill {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${(props) => props.theme.primary.darker};
  }
  ::placeholder {
    color: ${(props) => props.theme.primary.lighter};
    font-size: 14px;
  }
`;

export const StyledError = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 500;
  position: absolute;
  bottom: -22px;
  left: 0;
  color: ${(props) => props.theme.warning};
`;
