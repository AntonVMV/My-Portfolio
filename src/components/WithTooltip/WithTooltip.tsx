import { ReactNode, useState } from "react";
import { TooltipContainer, WithTooltipContainer } from "./style";

interface WithTooltipProps {
  children: ReactNode;
  text: string;
}

export const WithTooltip: React.FC<WithTooltipProps> = ({ children, text }) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const mouseEnter = () => {
    setIsShow(true);
  };

  const mouseLeave = () => {
    setIsShow(false);
  };

  return (
    <WithTooltipContainer onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      {isShow && <TooltipContainer>{text}</TooltipContainer>}
      {children}
    </WithTooltipContainer>
  );
};
