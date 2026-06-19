// Assets
import clientImage from "../assets/images/profile/client.png";
import creatorImage from "../assets/images/profile/creator.png";
import developerImage from "../assets/images/profile/developer.png";
import recruiterImage from "../assets/images/profile/recruiter.png";

// Types
import type { ProfileUsersProps } from "../types/profile.users";
import type { ProfileRole } from "../types/profile.role";

export const profileUsersItems = {
    recruiter: {
        name: "Recruiter",
        image: recruiterImage,
        alt: "Recruiter profile image",
        url: "/recruiter"
    },
    developer: {
        name: "Developer",
        image: developerImage,
        alt: "Developer profile image",
        url: "/developer"
    },
    client: {
        name: "Client",
        image: clientImage,
        alt: "Client profile image",
        url: "/client"
    },
    creator: {
        name: "Creator",
        image: creatorImage,
        alt: "Creator profile image",
        url: "/creator"
    }
} satisfies Record<ProfileRole, ProfileUsersProps>;
