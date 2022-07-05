import { Header } from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { StyledMain } from "./styles";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />

      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};
