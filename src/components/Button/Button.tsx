import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};
