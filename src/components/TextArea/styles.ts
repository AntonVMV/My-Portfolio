import styled from "styled-components";

interface StyledTextAreaProps {
  isError: boolean;
}

export const TextAreaContainer = styled.div`
  position: relative;
`;

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  resize: none;
  height: 80px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  background-color: transparent;
  border: 1px solid
    ${(props) =>
      props.isError ? props.theme.warning : props.theme.primary.lighter};
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
