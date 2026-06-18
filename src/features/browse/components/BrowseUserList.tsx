import ProfileCard from "../../../components/ui/Card/ProfileCard"
import { browseUsers } from "../../browse/data/browseUsers"

const BrowseUserList = () => {
    return (
        <div className="flex gap-3 lg:gap-8 mt-10 mb-16">
                {browseUsers.map((user) => (
                    <ProfileCard key={user.name} user={user} />
                ))}
            </div>
    )
}

export default BrowseUserList
