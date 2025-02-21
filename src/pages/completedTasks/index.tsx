import { CompletedTasksList } from "../../components/completedTasksList";

export const CompletedTasks = () => {
  return (
    <div className="pb-96">
      <div className="pl-40 pt-10 pb-0 text-5xl font-medium text-slate-200">
        Tarefas Arquivadas
      </div>
      <div className="p-12">
        <CompletedTasksList />
      </div>
    </div>
  );
};
