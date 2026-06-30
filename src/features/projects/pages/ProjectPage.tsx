// Components
import ProjectCard from "../components/ProjectCard";

// Data
import { projects } from "../../home/data/contentRowData";

// Types
import type { Project } from "../types/project.types";

const sortedDesc = (list: Project[]) => [...list].reverse();

function ProjectPage() {
  const featuredProjects = projects.filter((p) => p.isFeatured);
  const otherProjects = projects.filter((p) => !p.isFeatured);

  const orderedProjects = [
    ...sortedDesc(featuredProjects),
    ...sortedDesc(otherProjects),
  ];

  return (
    <main className="flex justify-center pt-20 px-4 bg-black min-h-screen">
      <div className="w-full">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-4xl font-bold text-white tracking-wider">
              Projects
            </h1>
            <p className="text-neutral-300 w-full sm:w-120 text-center pt-2">
              A selection of projects I've built to solve real-world problems,
              showcasing my skills in web development and design.
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full px-2 lg:px-10 xl:px-30 mt-10 rounded-lg">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full sm:w-auto">
            {orderedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;
