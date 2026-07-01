import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes";
import BareLayout from "../layouts/BareLayout";
import NavbarLayout from "../layouts/NavbarLayout";
import MainLayout from "../layouts/MainLayout";

import BrowsePage from "../../features/browse/pages/BrowsePage";
import HomePage from "../../features/home/pages/HomePage";
import ExperiencePage from "../../features/experience/pages/ExperiencePage";
import SkillsPage from "../../features/skills/pages/SkillsPage";
import ProjectPage from "../../features/projects/pages/ProjectPage";
import ContactPage from "../../features/contact/pages/ContactPage";
import NotFoundPage from "../../features/not-found/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <BareLayout />,
    children: [{ path: ROUTES.BROWSE, element: <BrowsePage /> }],
  },
  {
    element: <NavbarLayout />,
    children: [
      { path: ROUTES.EXPERIENCE, element: <ExperiencePage /> },
      { path: ROUTES.CONTACT, element: <ContactPage /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.HOME, element: <HomePage /> },
      { path: ROUTES.SKILLS, element: <SkillsPage /> },
      { path: ROUTES.PROJECTS, element: <ProjectPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
