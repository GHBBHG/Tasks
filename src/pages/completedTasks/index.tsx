import { Link } from "react-router-dom";
import { CompletedTasksList } from "../../components/completedTasksList";
import { ArchiveRestore } from "lucide-react";
import { useTasks } from "../../hooks/useTasks";

export const CompletedTasks = () => {
  const { tasks } = useTasks();
  const qtTasksArchived = tasks.filter((task) => task.archive === "1") ?? [];

  return (
    <div className="pb-20">
      <div className="flex justify-between mx-auto w-[80%] sm:w-[90%] mt-16 mb-2 items-center">
        <div className="text-2xl font-medium text-white">
          {qtTasksArchived.length} Tarefas arquivadas
        </div>
        <Link to="/tarefas">
          <button title="Tarefas" className="text-5xl text-white">
            <ArchiveRestore size={32} />
          </button>
        </Link>
      </div>
      <div className="p-12 sm:p-4">
        <CompletedTasksList />
      </div>
    </div>
  );
};
