// Data
import type { PROFILE_ROLES } from "../data/profileRoles";

export type ProfileRole = (typeof PROFILE_ROLES)[number];

export type NavItem = {
    label: string;
    href: string;
};
