import type { ProfileRole } from "../../types/profile.role";

export const ROUTES = {
  BROWSE: "/",
  HOME: "/:role/home",
  EXPERIENCE: "/:role/experience",
  SKILLS: "/:role/skills",
  PROJECTS: "/:role/featured-projects",
  CONTACT: "/:role/contact",
} as const;

export const roleHome = (role: ProfileRole) => `/${role}/home`;
