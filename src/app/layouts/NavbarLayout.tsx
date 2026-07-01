import { Outlet } from "react-router-dom";
import HomeNavbar from "../../components/layout/Navbar/HomeNavbar";
import ScrollToTop from "../../components/utils/ScrollToTop";

function NavbarLayout() {
  return (
    <>
      <ScrollToTop />
      <HomeNavbar />
      <Outlet />
    </>
  );
}

export default NavbarLayout;
