import type { ProfileCardProps } from "../../../types/profile.types";

const ProfileCard = ({ user }: ProfileCardProps) => {
    const { name, img, url } = user;

    return (
        <a href={url} key={name} className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white duration-300">
            <div className="relative w-40 h-40 rounded-md overflow-hidden">
                <img src={img} alt={name} className="w-40 h-40 rounded-md" />
                <div className="group-hover:border-white group-hover:border-4 absolute inset-0 rounded-md border-transparent duration-300"></div>
            </div>
            <span className="text-lg">{name}</span>
        </a>
    )
}

export default ProfileCard