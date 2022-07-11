import { MainContainer } from "../../styles";
import { NavList, Navigation } from "./styles";
import { NavLink } from "react-router-dom";
import { BurgerEl } from "../BurgerEl/BurgerEl";
import { useState } from "react";
import { useThemeContext } from "../../Context/context";
import { ThemeButton } from "../ThemeButton/ThemeButton";

const tabs = ["about", "skills", "works", "contact"];

export const NavBar: React.FC = () => {
  const [isBurgerOpen, setBurgerOpen] = useState<boolean>(false);

  const { toggle } = useThemeContext();

  return (
    <Navigation>
      <MainContainer>
        <BurgerEl
          isActive={isBurgerOpen}
          toggleActive={() => setBurgerOpen(!isBurgerOpen)}
        />
        <NavList isMenuOpen={isBurgerOpen}>
          {tabs.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item} onClick={() => setBurgerOpen(false)}>
                  {item}
                </NavLink>
              </li>
            );
          })}
          <ThemeButton onToggle={toggle} />
        </NavList>
      </MainContainer>
    </Navigation>
  );
};
