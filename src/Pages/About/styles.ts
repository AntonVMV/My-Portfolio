import styled from "styled-components";
import { colors } from "../../styles";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  gap: 50px;
  align-items: flex-start;
  ::after {
    content: "";
    display: block;
    position: absolute;
    left: -10%;
    height: 100%;
    width: 85%;
    background-color: white;
    z-index: -1;
  }
  button {
    grid-column: 1 / 3;
  }
  a {
    text-decoration: none;
  }
`;

export const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr 1fr;
  align-items: center;
  row-gap: 25px;
  margin-top: 200px;
  text-align: end;
`;

export const ProfileSubTitle = styled.h4`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  justify-self: flex-end;
  gap: 15px;
  ::before {
    content: "";
    display: block;
    width: 40px;
    height: 1px;
    background-color: black;
  }
`;

export const ProfilePhoto = styled.div`
  justify-self: center;
  grid-row: 1 / -1;
  grid-column: 2 / -1;
  width: 350px;
  height: 350px;
  background: url(./img/photo1.png) center center no-repeat;
  background-size: cover;
  border-radius: 100%;
  border: 10px solid white;
  background-color: #ebebeb;
  position: relative;
`;

export const Social = styled.div`
  margin-top: auto;
  display: flex;
  gap: 10px;
  padding: 30px 0;
  a {
    color: ${colors.primary};
  }
  svg {
    width: 2rem;
    height: 2rem;
    transition: 0.2s ease;
    :hover {
      fill: ${colors.secondary};
    }
  }
`;
