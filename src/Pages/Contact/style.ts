import styled from "styled-components";
import { colors } from "../../styles";

export const ContactBG = styled.div`
  min-height: 100vh;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 65%;
    height: 100%;
    background-color: ${colors.white};
    z-index: -1;
  }
`;

export const CotactContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 50px;
  padding: 125px 0 25px;

  h2 {
    grid-column: 1/ -1;
    font-size: 38px;
    text-align: center;
    font-weight: 800;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 50px;
  gap: 15px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
  h3 {
    font-size: 16px;
    color: ${colors.secondary};
    text-transform: uppercase;
  }
  div {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  p {
    cursor: pointer;
    transition: 0.2s ease;
    :hover {
      color: #ed9121;
    }
  }

  a {
    text-decoration: none;
    color: ${colors.primary};
    transition: 0.2s ease;
    :hover {
      color: #ed9121;
    }
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
