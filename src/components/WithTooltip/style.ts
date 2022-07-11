import styled from "styled-components";

export const WithTooltipContainer = styled.div`
  position: relative;
`;

export const TooltipContainer = styled.div`
  width: max-content;
  position: absolute;
  top: -50px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${(props) => props.theme.background.lightest};
  padding: 10px;
`;
