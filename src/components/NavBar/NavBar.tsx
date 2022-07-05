import { MainContainer } from "../../styles";
import { NavList, Navigation } from "./styles";
import { Link, NavLink } from "react-router-dom";

const tabs = ["about", "skills", "works", "contact"];

export const NavBar: React.FC = () => {
  return (
    <Navigation>
      <MainContainer>
        <NavList>
          {tabs.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item}>{item}</NavLink>
              </li>
            );
          })}
        </NavList>
      </MainContainer>
    </Navigation>
  );
};
