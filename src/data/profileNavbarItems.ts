// Types
import { type NavItem, type ProfileRole } from './../types/profile.role';

export const profileNavbarItems = {
    recruiter: [
        { label: "Overview", href: "/overview" },
        { label: "Professional", href: "/professional" },
        { label: "Experience", href: "/experience" },
        { label: "Skills", href: "/skills" },
        { label: "Featured Projects", href: "/featured-projects" },
        { label: "Resume", href: "/resume" },
        { label: "Contact", href: "/contact" },
    ],
    developer: [
        { label: "Overview", href: "/overview" },
        { label: "Tech Stack", href: "/tech-stack" },
        { label: "System Design", href: "/system-design" },
        { label: "Projects", href: "/projects" },
        { label: "Code Standards", href: "/code-standards" },
        { label: "GitHub", href: "/github" },
        { label: "Contact", href: "/contact" }
    ],
    client: [
        { label: "Overview", href: "/overview" },
        { label: "Services", href: "/services" },
        { label: "How I Work", href: "/how-i-work" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Packages", href: "/packages" },
        { label: "Contact", href: "/contact" }
    ],
    creator: [
        { label: "Home", href: "/home" },
        { label: "About", href: "/about" },
        { label: "Designs", href: "/designs" },
        { label: "3D Works", href: "/3d-works" },
        { label: "Content", href: "/content" },
        { label: "Behind the Scenes", href: "/behind-the-scenes" },
        { label: "Contact", href: "/contact" }
    ],
} satisfies Record<ProfileRole, readonly NavItem[]>;
