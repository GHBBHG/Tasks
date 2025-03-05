import { Link } from "react-router-dom";
import { useProject } from "../../hooks/useProject";
import { useTasks } from "../../hooks/useTasks";
import { Task } from "../../entities/Task";
import { confirmarExcluir } from "../sweetAlert/confirmarExcluir";
import { Trash2 } from "lucide-react";

type TaskCountByProject = Record<string, { name: string; qtTasks: number }>;

export function ProjectsList() {
  const { project, deleteProject } = useProject();
  const { tasks } = useTasks();

  let taskCountByProject: TaskCountByProject = {};

  project.map((project) => {
    const { length: countTask }: Task[] =
      tasks.filter((task) => task.projects === project.name) ?? [];

    taskCountByProject = {
      ...taskCountByProject,
      [project.id]: { name: project.name, qtTasks: countTask },
    };
  });

  const handleDelete = (id: string, name: string) => {
    confirmarExcluir
      .fire({
        title: `Excluir o projeto "${name}" ?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim, excluir!",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteProject(id);
          confirmarExcluir.fire({
            title: "Seu projeto foi excluído",
            icon: "success",
          });
        }
      });
  };

  return (
    <>
      {project.map((project) => (
        <div
          key={project.id}
          className="bg-zinc-800 text-white text-4xl font-medium w-[400px] rounded-lg p-4 mb-8"
        >
          {project.name}
          <div className="w-full flex justify-end">
            <div className="mr-2 mt-3">
              <button
                title="Excluir"
                className="bg-red-600 p-2 px-3 rounded-lg hover:bg-red-700"
                onClick={() => handleDelete(project.id, project.name)}
              >
                <Trash2 size={20} />
              </button>
            </div>
            {taskCountByProject[project.id].qtTasks === 0 ? (
              <div className="w-28 p-2 text-center bg-gray-400 text-sm rounded-lg cursor-not-allowed mt-4">
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
