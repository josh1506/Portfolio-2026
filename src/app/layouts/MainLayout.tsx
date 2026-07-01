import { Outlet } from "react-router-dom";
import HomeNavbar from "../../components/layout/Navbar/HomeNavbar";
import HomeFooter from "../../components/layout/Footer/HomeFooter";
import ScrollToTop from "../../components/utils/ScrollToTop";

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <HomeNavbar />
      <Outlet />
      <HomeFooter />
    </>
  );
}

export default MainLayout;
