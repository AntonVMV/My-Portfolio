import styled from "styled-components";

export const WorksContainer = styled.section`
  min-height: 100vh;
  position: relative;
  padding: 125px 0 20px;
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 75%;
    background-color: ${(props) => props.theme.background.lightest};
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
  @media screen and (max-width: 768px) {
    padding: 75px 0 20px;
  }
`;
