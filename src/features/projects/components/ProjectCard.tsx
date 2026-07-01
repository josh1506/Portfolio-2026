// Icons
import { CiShare1 } from "react-icons/ci";

// Types
import type { Project } from "../types/project.types";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="hover:shadow-lg hover:shadow-red-500/40 hover:scale-105 rounded-lg duration-300">
      <div className="w-full sm:w-74 bg-neutral-900 rounded-lg p-2 border border-neutral-700">
        <div className="w-full h-32 relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <span className="absolute top-2 right-2 text-xs bg-black/60 text-white px-2 py-1 rounded-md">
            Full-Stack
          </span>
        </div>
        <div>
          <div className="h-4 flex items-center justify-between mt-2">
            {project.isFeatured && (
              <span className="text-xs text-red-500 uppercase tracking-wider">
                ● Featured
              </span>
            )}
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-wider">
              {project.title}
            </h2>
            <p className="text-sm text-white/80 line-clamp-3">
              {project.description}
            </p>
          </div>
          <div className="flex justify-between items-end mt-2 h-6">
            <ul className="flex gap-2">
              {project.additionalInfo.map((tech) => (
                <li
                  key={tech}
                  className="text-xs text-white/80 bg-neutral-700 px-1 py-0.5 rounded-md line-clamp-1 max-w-16 truncate"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-end">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white hover:underline p-1 bg-neutral-700 rounded-md"
                >
                  <CiShare1 />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
