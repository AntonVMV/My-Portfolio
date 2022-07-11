import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 50px;
  background-color: ${(props) => props.theme.background.lighter};
  display: grid;
  align-items: center;
  gap: 20px 10px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
  input {
    height: 30px;
    padding: 15px;
    border-radius: 0;
    font-size: 15px;
  }
  textarea {
    resize: none;
    height: 80px;
    padding: 10px;
  }
  input,
  textarea {
    font-size: 16px;
    background-color: ${(props) => props.theme.background.lighter};
    border: 1px solid ${(props) => props.theme.primary.lighter};
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
  }
  button {
    justify-self: flex-end;
  }
  h3 {
    font-size: 18px;
    color: ${(props) => props.theme.secondary.darker};
    text-transform: uppercase;
  }
  @media screen and (max-width: 768px) {
    min-width: 80%;
    padding: 25px;
  }
`;
