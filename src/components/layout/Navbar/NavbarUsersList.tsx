// Data
import { NavLink } from "react-router-dom";
import { profileUsersItems } from "../../../data/profileUsers";

function NavbarUsersList() {
  return (
    <ul>
      {Object.values(profileUsersItems).map((user) => (
        <li key={user.name}>
          <NavLink
            className="flex items-center gap-2 p-3 text-white hover:text-gray-200 duration-300 hover:underline"
            to={`${user.url}/home`}
          >
            <img
              src={user.image}
              alt={user.alt}
              className="w-8 h-8 rounded-md"
              loading="lazy"
            />
            <span className="ml-2">{user.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavbarUsersList;
