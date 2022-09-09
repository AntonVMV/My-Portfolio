import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 50px;
  background-color: ${(props) => props.theme.background.lighter};
  display: grid;
  align-items: center;
  gap: 30px 10px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);

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
