import { Task } from "../../entities/Task";
import { useTasks } from "../../hooks/useTasks";
import { DeleteTaskButton } from "../TaskButtons/DeleteTaskButton";
import { UnarchiveTaskButton } from "../TaskButtons/UnarchiveTaskButton";

export function CompletedTasksList() {
  const { tasks } = useTasks();

  const tasksArchive: Task[] =
    tasks?.filter((task) => task.archive === "1") ?? [];

  return (
    <div className="flex flex-wrap gap-6 w-full min-h-60 mx-auto items-center justify-center">
      {tasksArchive.map((tasksArchives) => (
        <div className="w-[480px] min-h-60 text-center rounded-lg mt-3 bg-sky-950 text-slate-100 h-">
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

          <div className="px-4 pb-1 text-left">
            Branch: {tasksArchives.branch}
            <br />
          </div>

          <div className="flex justify-end">
            <UnarchiveTaskButton id={tasksArchives.id} />
            <DeleteTaskButton
              id={tasksArchives.id}
              name={tasksArchives.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
