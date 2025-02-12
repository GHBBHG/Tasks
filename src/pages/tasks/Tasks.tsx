import { useState } from "react";
import { TasksList } from "../../components/tasksList/TasksList";
import { TasksContextProvider } from "../../contexts/TasksContext";
import { NewTask } from "./NewTask";
import { Header } from "../../components/header";

export function Tasks() {
  const [tasks, setTasks] = useState("hidden");
  const [nameButton, setNameButton] = useState("+");

  const newTasks = () => {
    if (tasks == "") {
      setTasks("hidden");
      setNameButton("+");
    } else {
      setTasks("");
      setNameButton("x");
    }
  };

  return (
    <div className="bg-zinc-900 pb-96">
      <TasksContextProvider>
        <Header theme="dark" />
        <div className="pl-40 pt-10 pb-0 text-7xl font-medium text-slate-200">
          Tarefas
        </div>
        <div className="flex justify-end mx-auto w-[90%] my-10 ">
          <button className={`text-5xl text-white`} onClick={newTasks}>
            {nameButton}
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
