// Types
import { type NavItem } from '../../../types/profile.role';

function NavItems({ navItems }: { navItems: NavItem[] }) {
  return (
    <>
        {navItems.map((item) => (
            <li key={item.href}>
                <a href={item.href} className="text-white hover:text-gray-300 duration-300 text-sm">{item.label}</a>
            </li>
        ))}
    </>
  )
}

export default NavItems
