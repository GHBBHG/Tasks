import { Header } from "../../components/header";

export const TasksByProjects = () => {
  return (
    <div className="bg-zinc-900 pb-96">
      <Header theme="dark" />

      <div className="pl-40 pt-10 pb-0 text-5xl font-medium text-slate-200">
        Projetos
      </div>

      <div className="p-20">
        <div className="bg-zinc-800 text-white text-4xl font-medium w-full rounded-lg p-4 mb-8">
          Veplex
          <div className="w-full flex justify-end">
            <div className="w-28 p-2 text-center bg-sky-400 text-sm rounded-lg hover:bg-sky-500 cursor-pointer">
              Ver Tarefas
            </div>
          </div>
        </div>

        <div className="bg-zinc-800 text-white text-4xl font-medium w-full rounded-lg p-4 mb-8">
          Pedflex
          <div className="w-full flex justify-end">
            <div className="w-28 p-2 text-center bg-sky-400 text-sm rounded-lg hover:bg-sky-500 cursor-pointer">
              Ver Tarefas
            </div>
          </div>
        </div>

        <div className="bg-zinc-800 text-white text-4xl font-medium w-full rounded-lg p-4 mb-8">
          Tasks
          <div className="w-full flex justify-end">
            <div className="w-28 p-2 text-center bg-sky-400 text-sm rounded-lg hover:bg-sky-500 cursor-pointer">
              Ver Tarefas
            </div>
          </div>
        </div>

        <div className="bg-zinc-800 text-white text-4xl font-medium w-full rounded-lg p-4">
          Outros
          <div className="w-full flex justify-end">
            <div className="w-28 p-2 text-center bg-sky-400 text-sm rounded-lg hover:bg-sky-500 cursor-pointer">
              Ver Tarefas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
