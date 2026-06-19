// Data
import { profileUsersItems } from '../../../data/profileUsers'

function NavbarUsersList() {
  return (
    <ul>
        {Object.values(profileUsersItems).map((user) => (
            <li key={user.name}>
                <a className="flex items-center gap-2 p-3 text-white hover:text-gray-200 duration-300 hover:underline" href={user.url}>
                    <img src={user.image} alt={user.alt} className="w-8 h-8 rounded-md" />
                    <span className="ml-2">{user.name}</span>
                </a>
            </li>
        ))}
    </ul>
  )
}

export default NavbarUsersList