import { ArchiveTaskButton } from "../TaskButtons/ArchiveTaskButton";
import { ProgressTaskButton } from "../TaskButtons/ProgressTaskButton";

interface CardProps {
  colorHeader: string;
  nameTask: string;
  tasks: {
    description: string;
    id: string;
    priority: string;
    status: string;
    title: string;
    branch: string;
    projects: string;
  }[];
}

export function Card({ colorHeader, nameTask, tasks }: CardProps) {
  return (
    <div className="mx-auto w-[31%] text-start items-center rounded-xl">
      <p className={`${colorHeader} p-1 rounded-2xl font-medium`}>{nameTask}</p>

      {tasks.map((task) => (
        <div className="text-center rounded-lg mt-3 bg-sky-950 text-slate-100">
          <div className="flex text-start p-3 rounded-t-lg font-medium bg-gray-800 justify-between">
            <div>
              {task.projects}: {task.title}
            </div>

            {task.priority === "baixa" ? (
              <div className="border-2 border-sky-600 pl-2 pr-2 text-sky-600 rounded-md">
                {task.priority}
              </div>
            ) : task.priority === "media" ? (
              <div className="border-2 border-yellow-600 pl-2 pr-2 text-yellow-600 rounded-md">
                {task.priority}
              </div>
            ) : (
              <div className="border-2 border-red-600 pl-2 pr-2 text-red-600 rounded-md">
                {task.priority}
              </div>
            )}
          </div>

          <div className="p-4 text-left">
            {task.description}
            <br />
          </div>

          <div className="px-4 pb-1 text-left">
            Branch: {task.branch}
            <br />
          </div>

          <div className="flex justify-end">
            {task.status !== "done" ? (
              <ProgressTaskButton id={task.id} status={task.status} />
            ) : (
              <ArchiveTaskButton id={task.id} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
