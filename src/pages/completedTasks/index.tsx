import { Link } from "react-router-dom";
import { CompletedTasksList } from "../../components/completedTasksList";
import { ArchiveRestore } from "lucide-react";

export const CompletedTasks = () => {
  return (
    <div className="pb-20">
      <div className="pl-40 sm:pl-8 pt-10 pb-0 text-5xl sm:text-3xl font-medium text-slate-200">
        Tarefas Arquivadas
      </div>
      <div className="flex justify-end mx-auto w-[90%] mb-10">
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
