// React
import { useEffect, useRef, useState } from "react";

// Components
import NavbarUsersList from "./NavbarUsersList";

// Types
import type { ProfileUsersProps } from "../../../types/profile.users";

function NavbarDropdown({ activeUser }: { activeUser: ProfileUsersProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="relative cursor-pointer flex items-center gap-2"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="w-8 h-8">
        <img
          src={activeUser.image}
          alt={activeUser.alt}
          className="w-full h-full rounded-md"
          loading="lazy"
        />
      </div>
      <span
        className={`inline-block h-0 w-0 border-x-[5px] border-t-[5px] border-x-transparent border-t-white transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
      <div
        className={`absolute top-12 right-0 w-56 bg-black shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <NavbarUsersList />
      </div>
    </div>
  );
}

export default NavbarDropdown;
