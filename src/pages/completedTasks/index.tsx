import { Link } from "react-router-dom";
import { CompletedTasksList } from "../../components/completedTasksList";
import { Header } from "../../components/header";
import { TasksContextProvider } from "../../contexts/TasksContext";

export const CompletedTasks = () => {
  return (
    <div className="bg-zinc-900 pb-96">
      <TasksContextProvider>
        <Header theme="dark" />
        <div className="pl-40 pt-10 pb-0 text-5xl font-medium text-slate-200">
          Tarefas Arquivadas
        </div>
        <div className="flex justify-end mx-auto w-[90%]">
          <Link to="/tasks" className="text-white mr-4 pt-4 font-medium">
            Tarefas
          </Link>
        </div>
        <div className="p-12">
          <CompletedTasksList />
        </div>
      </TasksContextProvider>
    </div>
  );
};
