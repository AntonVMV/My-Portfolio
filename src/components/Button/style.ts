import styled from "styled-components";
import { colors } from "../../styles";

export const StyledButton = styled.button`
  background-color: ${colors.secondary};
  text-transform: uppercase;
  font-size: 16px;
  color: white;
  border: none;
  padding: 15px 20px;
  letter-spacing: 1px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.3);
  transition: 0.2s ease;
  display: flex;
  gap: 10px;
  :hover {
    background-color: #ed9121;
  }
  :active {
    box-shadow: none;
  }
`;
