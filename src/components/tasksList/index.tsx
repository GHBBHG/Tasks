import { Task } from "../../entities/Task";
import { useTasks } from "../../hooks/useTasks";
import { Card } from "../card";

export function TasksList() {
  const { tasks } = useTasks();

  const tasksTodo: Task[] =
    tasks.filter((task) => task.status === "todo") ?? [];

  const tasksInProgress: Task[] =
    tasks.filter((task) => task.status === "doing") ?? [];

  const tasksDone: Task[] =
    tasks?.filter((task) => task.status === "done" && task.archive === "0") ??
    [];

  return (
    <div className="flex sm:block flex-grow gap-8 w-[90%] mx-auto">
      <Card
        tasks={tasksTodo}
        nameTask={"A fazer"}
        colorHeader={"bg-gray-700 text-gray-300"}
      />
      <Card
        tasks={tasksInProgress}
        nameTask={"Em progresso"}
        colorHeader={"bg-yellow-800 text-yellow-400"}
      />
      <Card
        tasks={tasksDone}
        nameTask={"Finalizado"}
        colorHeader={"bg-green-800 text-green-400"}
      />
    </div>
  );
}
