import styled from "styled-components";

export const CotactContainer = styled.section`
  display: grid;
  align-items: flex-start;
  align-content: flex-start;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  padding: 125px 0 25px;
  h2 {
    grid-column: 1/ -1;
    text-align: center;
  }

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
    background-color: ${(props) => props.theme.background.lightest};
    z-index: -1;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 75px 0 25px;
  }
`;

export const Contacts = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background.lighter};
  padding: 50px;
  gap: 15px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
  h3 {
    font-size: 16px;
    color: ${(props) => props.theme.secondary.darker};
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
    @media screen and (min-width: 769px) {
      :hover {
        color: ${(props) => props.theme.secondary.lighter};
      }
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.primary.darker};
    transition: 0.2s ease;
    :hover {
      color: ${(props) => props.theme.secondary.lighter};
    }
  }

  svg {
    fill: ${(props) => props.theme.primary.darker};
    width: 1.5rem;
    height: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    min-width: 75vw;
    padding: 25px;
  }
`;
