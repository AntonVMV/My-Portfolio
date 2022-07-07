import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#000",
  secondary: "#ff9900",
  white: "#fff",
};

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
}

html, body, #root, #root > div {
  height: 100%;
}  


body {
  background-color: #ebebeb;
  font-family: "Montserrat", sans-serif;
}
`;

export const MainContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  @media screen and (max-width: 1250px) {
    padding: 0 20px;
  }
`;

export const MainText = styled.p`
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 20px;
`;

export const MainTextSmall = styled.p`
  font-size: 14px;
  letter-spacing: 0.3px;
  line-height: 18px;
`;

export const MainTitle = styled.h2`
  font-size: 42px;
  font-weight: 800;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Highlighted = styled.span`
  color: ${colors.secondary};
`;
