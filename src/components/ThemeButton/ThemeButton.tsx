import { ToggleContainer } from "./style";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useThemeContext } from "../../Context/context";

export const ThemeButton: React.FC = () => {
  const { toggle, type } = useThemeContext();

  return (
    <ToggleContainer isDark={type === "dark"} onClick={toggle}>
      <BsMoonFill fill="#86c232" />
      <BsSunFill fill="#e85a4f" />
    </ToggleContainer>
  );
};
