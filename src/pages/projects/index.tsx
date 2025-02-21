import { Link, useParams } from "react-router-dom";
import { useTasks } from "../../hooks/useTasks";
import { Task } from "../../entities/Task";
import { Header } from "../../components/header";

export const Projects = () => {
  const { tasks } = useTasks();
  const { projeto } = useParams();

  const tasksProjects: Task[] =
    tasks.filter((task) => task.projects === projeto) ?? [];

  return (
    <div className="bg-zinc-900 pb-96">
      <Header />
      <div className="pl-40 pt-12 text-5xl font-medium text-slate-200">
        {projeto} tarefas:
      </div>
      <div className="flex justify-end mx-auto w-[90%] my-10 ">
        <Link
          to="/tasks-by-projects"
          className="text-center text-white bg-sky-400 px-6 py-2 font-semibold text-md rounded-2xl hover:bg-sky-500 cursor-pointer"
        >
          Voltar
        </Link>
      </div>
      <div className="flex flex-wrap gap-6 w-full min-h-60 mx-auto items-center justify-center">
        {tasksProjects.map((tasksArchives) => (
          <div className="w-[480px] min-h-52 text-center rounded-lg mt-3 bg-sky-950 text-slate-100 h-">
            <div className="flex text-start p-3 rounded-t-lg font-medium bg-gray-800 justify-between">
              <div>
                {tasksArchives.projects}: {tasksArchives.title}
              </div>

              {tasksArchives.priority === "baixa" ? (
                <div className="border-2 border-sky-600 pl-2 pr-2 text-sky-600 rounded-md">
                  {tasksArchives.priority}
                </div>
              ) : tasksArchives.priority === "media" ? (
                <div className="border-2 border-yellow-600 pl-2 pr-2 text-yellow-600 rounded-md">
                  {tasksArchives.priority}
                </div>
              ) : (
                <div className="border-2 border-red-600 pl-2 pr-2 text-red-600 rounded-md">
                  {tasksArchives.priority}
                </div>
              )}
            </div>

            <div className="p-4 text-left">
              {tasksArchives.description}
              <br />
            </div>

            <div className="px-4 pb-3 text-left">
              Branch: {tasksArchives.branch}
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
