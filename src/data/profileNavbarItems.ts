// Types
import { type NavItem, type ProfileRole } from './../types/profile.role';

export const profileNavbarItems = {
    recruiter: [
        { label: "Overview", href: "home" },
        { label: "Experience", href: "experience" },
        { label: "Skills", href: "skills" },
        { label: "Projects", href: "featured-projects" },
        { label: "Contact", href: "contact" },
    ],
    developer: [
        { label: "Overview", href: "home" },
        { label: "Experience", href: "experience" },
        { label: "Skills", href: "skills" },
        { label: "Projects", href: "featured-projects" },
        { label: "Contact", href: "contact" },
    ],
    client: [
        { label: "Overview", href: "home" },
        { label: "Services", href: "services" },
        { label: "How I Work", href: "how-i-work" },
        { label: "Case Studies", href: "case-studies" },
        { label: "Packages", href: "packages" },
        { label: "Contact", href: "contact" }
    ],
    creator: [
        { label: "Home", href: "home" },
        { label: "About", href: "about" },
        { label: "Designs", href: "designs" },
        { label: "3D Works", href: "3d-works" },
        { label: "Content", href: "content" },
        { label: "Behind the Scenes", href: "behind-the-scenes" },
        { label: "Contact", href: "contact" }
    ],
} satisfies Record<ProfileRole, readonly NavItem[]>;
