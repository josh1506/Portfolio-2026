import { Link } from "react-router-dom";
import type { ProfileCardProps } from "../../../types/profile.types";

const ProfileCard = ({ user }: ProfileCardProps) => {
  const { name, img, url } = user;

  return (
    <Link
      to={url}
      key={name}
      className="group flex flex-col items-center gap-1 lg:gap-2 text-zinc-500 hover:text-white duration-300"
    >
      <div className="relative w-18 sm:w-30 lg:w-40 xl:w-50 h-18 sm:h-30 lg:h-40 xl:h-50 rounded-md overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-18 sm:w-30 lg:w-40 xl:w-50 h-18 sm:h-30 lg:h-40 xl:h-50 rounded-md"
          loading="lazy"
        />
        <div className="group-hover:border-white group-hover:border-4 absolute inset-0 rounded-md border-transparent duration-300"></div>
      </div>
      <span className="lg:text-lg">{name}</span>
    </Link>
  );
};

export default ProfileCard;
