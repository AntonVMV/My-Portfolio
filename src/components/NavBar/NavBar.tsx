import { MainContainer } from "../../styles";
import { NavList, Navigation } from "./styles";
import { NavLink } from "react-router-dom";
import { BurgerEl } from "../BurgerEl/BurgerEl";
import { useState } from "react";

const tabs = ["about", "skills", "works", "contact"];

export const NavBar: React.FC = () => {
  const [isBurgerOpen, setBurgerOpen] = useState<boolean>(false);

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
        </NavList>
      </MainContainer>
    </Navigation>
  );
};
