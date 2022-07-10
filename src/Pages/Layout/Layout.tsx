import { Header } from "../../components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import { StyledMain } from "./styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Layout: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <StyledMain>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="pages" timeout={750}>
            <div className="pages">
              <Outlet />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </StyledMain>
    </>
  );
};
