import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  styleType?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  styleType = "primary",
}) => {
  return (
    <StyledButton onClick={onClick} styleType={styleType}>
      {children}
    </StyledButton>
  );
};
