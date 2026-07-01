// React
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Assets
import nameLogo from "../../../assets/images/logos/name_logo.png";

// Data
import { profileNavbarItems } from "../../../data/profileNavbarItems";
import { profileUsersItems } from "../../../data/profileUsers";
import { PROFILE_ROLES } from "../../../data/profileRoles";

// Components
import NavbarDropdown from "./NavbarDropdown";
import NavItems from "./NavItems";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Types
import type { ProfileRole } from "../../../types/profile.role";
import type { ProfileUsersProps } from "../../../types/profile.users";

function HomeNavbar() {
  const { role } = useParams<{ role: string }>();
  const selectedRole: ProfileRole = PROFILE_ROLES.includes(role as ProfileRole)
    ? (role as ProfileRole)
    : "recruiter";

  const navItems = profileNavbarItems[selectedRole];
  const activeUser: ProfileUsersProps = profileUsersItems[selectedRole];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full flex justify-between items-center py-5 px-4 md:px-14 h-18 transition-colors duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-black"
            : "bg-linear-to-b from-black/70 to-transparent"
        }`}
      >
        <div className="flex items-center w-full">
          <Link to="/" className="mr-6 md:mr-12 h-7">
            <img
              src={nameLogo}
              alt="App logo"
              className="h-full"
              loading="lazy"
            />
          </Link>
          {/* Desktop nav items */}
          <ul className="hidden md:flex gap-4">
            <NavItems navItems={navItems} role={selectedRole} />
          </ul>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <span className="hidden md:block text-white cursor-default">
            {activeUser.name}
          </span>
          <NavbarDropdown activeUser={activeUser} />

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`fixed top-18 left-0 w-full bg-black z-40 md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <ul className="flex flex-col px-4 pb-6 pt-2">
          <NavItems navItems={navItems} role={selectedRole} mobile />
        </ul>
      </div>
    </>
  );
}

export default HomeNavbar;
