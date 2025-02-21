import { CompletedTasksList } from "../../components/completedTasksList";
import { Header } from "../../components/header";

export const CompletedTasks = () => {
  return (
    <div className="bg-zinc-900 pb-96">
      <Header />
      <div className="pl-40 pt-10 pb-0 text-5xl font-medium text-slate-200">
        Tarefas Arquivadas
      </div>
      <div className="p-12">
        <CompletedTasksList />
      </div>
    </div>
  );
};
