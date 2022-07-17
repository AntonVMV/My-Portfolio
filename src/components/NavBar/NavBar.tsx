import { MainContainer } from "../../styles";
import { NavList, Navigation } from "./styles";
import { NavLink } from "react-router-dom";
import { BurgerEl } from "../BurgerEl/BurgerEl";
import React, { useState } from "react";
import { ThemeButton } from "../ThemeButton/ThemeButton";

const tabs = ["about", "skills", "works", "contact"];

export const NavBar: React.FC = () => {
  const [isBurgerOpen, setBurgerOpen] = useState<boolean>(false);

  const clickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isBurgerOpen) {
      setBurgerOpen(false);
    }
    if (e.currentTarget.className === "active") {
      e.preventDefault();
    }
  };

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
                <NavLink to={item} onClick={clickHandler}>
                  {item}
                </NavLink>
              </li>
            );
          })}
          <ThemeButton />
        </NavList>
      </MainContainer>
    </Navigation>
  );
};
