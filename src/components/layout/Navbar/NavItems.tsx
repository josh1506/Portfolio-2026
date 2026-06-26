// Types
import { type NavItem } from "../../../types/profile.role";

function NavItems({
  navItems,
  mobile = false,
}: {
  navItems: NavItem[];
  mobile?: boolean;
}) {
  return (
    <>
      {navItems.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className={`text-white hover:text-gray-300 duration-300 block ${
              mobile ? "text-base py-3 border-b border-white/10" : "text-sm"
            }`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </>
  );
}

export default NavItems;
