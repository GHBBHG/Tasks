import { CompletedTasksList } from "../../components/completedTasksList";

export const CompletedTasks = () => {
  return (
    <div className="pb-20">
      <div className="pl-40 sm:pl-8 pt-10 pb-0 text-5xl sm:text-3xl font-medium text-slate-200">
        Tarefas Arquivadas
      </div>
      <div className="p-12 sm:p-4">
        <CompletedTasksList />
      </div>
    </div>
  );
};
