import ProfileCard from "../../../components/ui/Card/ProfileCard"
import { browseUsers } from "../../browse/data/BrowseUsers"

const BrowseUserList = () => {
    return (
        <div className="flex gap-8 mt-10 mb-16">
                {browseUsers.map((user) => (
                    <ProfileCard key={user.name} user={user} />
                ))}
            </div>
    )
}

export default BrowseUserList
