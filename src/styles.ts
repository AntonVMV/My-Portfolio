import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const colorPalette = {
  light: {
    primary: {
      darker: "#3c3c3c",
      lighter: "#8e8d8a",
    },
    secondary: {
      darker: "#e85a4f",
      lighter: "#e98074",
    },
    background: {
      darker: "#e3d3be",
      lighter: "#eae7dc",
      lightest: "#f1efe7",
    },
  },
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
  background-color: ${colorPalette.light.background.darker};
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
  color: ${colorPalette.light.primary.darker};
`;

export const MainTextSmall = styled.p`
  font-size: 14px;
  letter-spacing: 0.3px;
  line-height: 18px;
`;

export const MainTextLarge = styled.p`
  font-size: 18px;
  letter-spacing: 0.5px;
  line-height: 20px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const MainTitle = styled.h2`
  font-size: 42px;
  font-weight: 800;
  color: ${colorPalette.light.primary.darker};
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const TitleMid = styled.h3`
  font-size: 34px;
  font-weight: 700;
  color: ${colorPalette.light.primary.darker};
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const TitleSm = styled.h4`
  color: ${colorPalette.light.primary.darker};
  font-size: 26px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Highlighted = styled.span`
  color: ${colorPalette.light.secondary.darker};
`;
