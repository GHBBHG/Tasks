import { Link } from "react-router-dom";
import { Projects } from "../../entities/Projects";
import { useProject } from "../../hooks/useProject";
import { useTasks } from "../../hooks/useTasks";
import { Task } from "../../entities/Task";

type TaskCountByProject = Record<string, { name: string; qtTasks: number }>;

export function ProjectsList() {
  const { project } = useProject();
  const { tasks } = useTasks();
  const listProjects: Projects[] = project.filter((a) => a.name);

  let taskCountByProject: TaskCountByProject = {};

  listProjects.map((project) => {
    const { length: countTask }: Task[] =
      tasks.filter((task) => task.projects === project.name) ?? [];

    taskCountByProject = {
      ...taskCountByProject,
      [project.id]: { name: project.name, qtTasks: countTask },
    };
  });

  return (
    <>
      {listProjects.map((project) => (
        <div className="bg-zinc-800 text-white text-4xl font-medium w-[400px] rounded-lg p-4 mb-8">
          {project.name}
          <div className="w-full flex justify-end">
            {taskCountByProject[project.id].qtTasks === 0 ? (
              <div className="w-28 p-2 text-center bg-gray-400 text-sm rounded-lg cursor-not-allowed">
                Sem Tarefas!
              </div>
            ) : (
              <Link to={`/tarefas/projetos/${project.name}`}>
                <div className="w-28 p-2 text-center bg-sky-400 text-sm rounded-lg hover:bg-sky-500 cursor-pointer mt-4">
                  Ver {taskCountByProject[project.id].qtTasks}{" "}
                  {taskCountByProject[project.id].qtTasks === 1
                    ? "Tarefa"
                    : "Tarefas"}
                </div>
              </Link>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
