import { Link } from "react-router-dom";
import { Projects } from "../../entities/Projects";
import { useProject } from "../../hooks/useProject";

export function ProjectsList() {
  const { project } = useProject();
  const listProjects: Projects[] = project?.filter((a) => a.name != null) ?? [];

  return (
    <>
      {listProjects.map((project) => (
        <div className="bg-zinc-800 text-white text-4xl font-medium w-[400px] rounded-lg p-4 mb-8">
          {project.name}
          <div className="w-full flex justify-end">
            <Link to={`/projects/${project.name}`}>
              <div className="w-28 p-2 text-center bg-sky-400 text-sm rounded-lg hover:bg-sky-500 cursor-pointer">
                Ver Tarefas
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
