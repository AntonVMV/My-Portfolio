import { useState } from "react";
import { ToggleContainer } from "./style";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

interface ThemeButtonProps {
  onToggle: () => void;
}

export const ThemeButton: React.FC<ThemeButtonProps> = ({ onToggle }) => {
  const [isOn, setIsOn] = useState<boolean>(true);

  const toggleHandler = () => {
    setIsOn((prev) => !prev);
    onToggle();
  };

  return (
    <ToggleContainer isOn={isOn} onClick={toggleHandler}>
      <BsMoonFill fill="#86c232" />
      <BsSunFill fill="#e85a4f" />
    </ToggleContainer>
  );
};
