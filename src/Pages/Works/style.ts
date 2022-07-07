import styled from "styled-components";

export const WorksContainer = styled.div`
  height: 100%;
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
    background-color: white;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
  @media screen and (max-width: 768px) {
    padding: 75px 0 20px;
  }
`;
