import styled from "styled-components";
import { colorPalette } from "../../styles";

export const StyledForm = styled.form`
  padding: 50px;
  background-color: ${colorPalette.light.background.lighter};
  display: grid;
  align-items: center;
  gap: 20px 10px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
  input {
    height: 30px;
    padding: 10px;
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
    font-size: 15px;
    background-color: ${colorPalette.light.background.lighter};
    border: 1px solid ${colorPalette.light.primary.lighter};
    transition: border-color 0.2s ease;
    :focus {
      outline: 0;
      border-color: ${colorPalette.light.secondary.lighter};
    }
  }
  button {
    justify-self: flex-end;
  }
  h3 {
    font-size: 18px;
    color: ${colorPalette.light.secondary.darker};
    text-transform: uppercase;
  }
  @media screen and (max-width: 768px) {
    min-width: 80%;
    padding: 25px;
  }
`;
