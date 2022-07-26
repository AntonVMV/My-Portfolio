import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;

  @media screen and (max-width: 768px) {
    width: max-content;
  }
`;
