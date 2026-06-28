import CreativeWorksLogo from "../../../assets/images/logos/creativeWorksLogo.png";
import CreatorProfile from "../../../assets/images/profile/creator.png";
import { contactInfoList } from "../data/contactData";

function ProfileCard() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full sm:w-96 h-130 bg-red-950 bg-linear-to-t from-red-400 via-red-500 rounded-3xl overflow-hidden lg:-rotate-6 hover:rotate-0 transition-transform duration-300 lg:hover:scale-115">
        <div className="relative">
          <div className="w-full h-92 overflow-hidden flex justify-center items-center">
            <img
              src={CreativeWorksLogo}
              className="w-60 h-60 object-cover"
              alt="Creative Works Logo"
            />
          </div>
          <div className="pl-4 absolute bottom-0 left-0 w-full text-white flex flex-col border-l-2 m-4">
            <span className="text-md font-semibold tracking-widest">
              Full-Stack Developer
            </span>
            <span className="text-sm">
              Building Web Solutions & Painting Collectible Figures
            </span>
          </div>
        </div>
        <div className="bg-white px-4 py-4 overflow-hidden">
          <div className="w-90 max-w-full flex space-x-4 items-center pb-2">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={CreatorProfile}
                alt="Portrait of Josh"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-widest">
                Joshua
              </span>
              <span className="text-sm text-neutral-500">
                Developer • Artist
              </span>
            </div>
          </div>
          <div className="flex flex-wrap border-t justify-between border-neutral-200 pt-4 divide-x gap-y-3">
            {contactInfoList.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.name}
                  className="flex space-x-3 items-center justify-center min-w-0 overflow-hidden border-none"
                >
                  <div className="text-3xl">
                    <Icon />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm truncate">{info.label}</span>
                    <span className="text-[11px] text-red-500 truncate">
                      {info.subLabel}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
