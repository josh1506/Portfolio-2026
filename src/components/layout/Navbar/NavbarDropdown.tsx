// Components
import NavbarUsersList from './NavbarUsersList'

// Types
import type { ProfileUsersProps } from '../../../types/profile.users'

function NavbarDropdown({ activeUser }: { activeUser: ProfileUsersProps }) {
  return (
    <div className="group cursor-pointer flex items-center gap-2">
        <div className="w-8 h-8">
            <img src={activeUser.image} alt={activeUser.alt} className="w-full h-full rounded-md" />
        </div>
        <span className="group-hover:delay-0 delay-200 inline-block h-0 w-0 border-x-[5px] border-t-[5px] border-x-transparent border-t-white transition-transform duration-300 group-hover:rotate-180" />
        <div className="absolute top-16 right-14 mt-2 w-56 shadow-lg duration-300 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:delay-0 delay-200 bg-black/5 bg-opacity-80">
            <NavbarUsersList />
        </div>
    </div>
  )
}

export default NavbarDropdown