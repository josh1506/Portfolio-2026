// Components
import HomeFooter from "./components/layout/Footer/HomeFooter";
import HomeNavbar from "./components/layout/Navbar/HomeNavbar";

// Pages
import BrowsePage from "./features/browse/pages/BrowsePage";
import ContactPage from "./features/contact/pages/ContactPage";
import ExperiencePage from "./features/experience/pages/ExperiencePage";
import HomePage from "./features/home/pages/HomePage";
import SkillsPage from "./features/skills/pages/SkillsPage";

import "./styles/main.css";

function App() {
  return (
    <>
      {/* <BrowsePage /> */}

      <HomeNavbar />
      {/* <HomePage /> */}
      {/* <SkillsPage /> */}
      {/* <ExperiencePage /> */}
      <ContactPage />
      <HomeFooter />
    </>
  );
}

export default App;
