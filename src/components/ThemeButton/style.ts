import styled from "styled-components";

interface ToggleContainerProps {
  isDark: boolean;
}

export const ToggleContainer = styled.div<ToggleContainerProps>`
  border-radius: 20px;
  border: 3px solid ${(props) => props.theme.secondary.darker};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55px;
  height: 30px;
  padding: 0 6px;
  cursor: pointer;
  ::after {
    content: "";
    position: absolute;
    height: 90%;
    width: 22px;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s ease;

    left: ${(props) => (props.isDark ? "50%" : "5%")};
    border-radius: 100%;
    background-color: ${(props) => props.theme.secondary.darker};
  }
  @media screen and (max-width: 768px) {
    margin-top: auto;
  }
`;
