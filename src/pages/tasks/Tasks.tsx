import { useState } from "react";
import { NavigationButton } from "../../components/navigationButton/NavigationButton";
import { TasksList } from "../../components/tasksList/TasksList";
import { TasksContextProvider } from "../../contexts/TasksContext";
import { NewTask } from "./NewTask";

export function Tasks() {
  const [tasks, setTasks] = useState("hidden");

  const newTasks = () => {
    if (tasks == "") setTasks("hidden");
    else setTasks("");
  };

  return (
    <div className="bg-zinc-900 pb-96">
      <TasksContextProvider>
        <NavigationButton nameButton="Voltar" linkButton="/" />
        <div className="m-10">
          <button
            className="bg-green-500 p-2 rounded-lg hover:bg-green-600"
            onClick={newTasks}
          >
            Nova Tarefa
          </button>
        </div>
        <div className={`${tasks}`}>
          <NewTask />
        </div>
        <TasksList />
      </TasksContextProvider>
    </div>
  );
}
