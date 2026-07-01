import { Link, NavLink } from "react-router-dom";

// Types
import { type NavItem } from "../../../types/profile.role";

function NavItems({
  navItems,
  role,
  mobile = false,
}: {
  navItems: NavItem[];
  role: string;
  mobile?: boolean;
}) {
  return (
    <>
      {navItems.map((item) => (
        <li key={item.href}>
          <NavLink
            to={`/${role}/${item.href}`}
            className={({ isActive }) =>
              `${
                isActive ? "text-red-500" : "text-white hover:text-gray-300"
              } duration-300 block ${
                mobile ? "text-base py-3 border-b border-white/10" : "text-sm"
              }`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default NavItems;
