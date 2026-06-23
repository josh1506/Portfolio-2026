// Pages
import HomeFooter from "./components/layout/Footer/HomeFooter";
import HomeNavbar from "./components/layout/Navbar/HomeNavbar";
import BrowsePage from "./features/browse/pages/BrowsePage";
import HomePage from "./features/home/pages/HomePage";

import "./styles/main.css";

function App() {
  return (
    <>
      {/* <BrowsePage /> */}

      <HomeNavbar />
      <HomePage />
      <HomeFooter />
    </>
  );
}

export default App;
