import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/utils/ScrollToTop";

function BareLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export default BareLayout;
