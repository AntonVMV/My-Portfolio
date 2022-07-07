import { BurgerContainer } from "./style";

interface BurgerElProps {
  isActive: boolean;
  toggleActive: () => void;
}

export const BurgerEl: React.FC<BurgerElProps> = ({
  isActive,
  toggleActive,
}) => {
  return (
    <BurgerContainer isActive={isActive} onClick={toggleActive}>
      <div />
      <div />
      <div />
    </BurgerContainer>
  );
};
