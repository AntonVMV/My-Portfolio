import styled from "styled-components";
import { colors } from "../../styles";

export const StyledForm = styled.form`
  padding: 50px;
  background-color: ${colors.white};
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
    background-color: #f9f9f9;
    border: 1px solid #e5e5e5;
    transition: border-color 0.2s ease;
    :focus {
      outline: 0;
      border-color: #ed9121;
    }
  }
  button {
    justify-self: flex-end;
  }
  h3 {
    font-size: 18px;
    color: ${colors.secondary};
    text-transform: uppercase;
  }
`;
