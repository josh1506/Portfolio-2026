// Assets
import nameLogo from "../../../assets/images/logos/name_logo.png";

// Data
import { profileNavbarItems } from "../../../data/profileNavbarItems";
import { profileUsersItems } from "../../../data/profileUsers";

// Components
import NavbarDropdown from "./NavbarDropdown";
import NavItems from "./NavItems";

// Types
import type { ProfileRole } from "../../../types/profile.role";
import type { ProfileUsersProps } from "../../../types/profile.users";

function HomeNavbar() {
  const selectedRole: ProfileRole = "recruiter";
  const navItems = profileNavbarItems[selectedRole];
  const activeUser: ProfileUsersProps = profileUsersItems[selectedRole];

  return (
    <nav className="fixed top-0 z-50 w-full flex justify-between items-center py-5 px-14 h-18 bg-linear-to-b from-black/70 to-transparent">
      <div className="flex items-center w-full">
        <div className="mr-12 h-7">
          <img src={nameLogo} alt="App logo" className="h-full" />
        </div>
        <ul className="flex gap-4">
          <NavItems navItems={navItems} />
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-white cursor-default">{activeUser.name}</span>
        <NavbarDropdown activeUser={activeUser} />
      </div>
    </nav>
  );
}

export default HomeNavbar;
