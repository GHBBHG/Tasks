import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";

import { CompletedTasks } from "../pages/completedTasks";
import { Home } from "../pages/home/Home";
import { Tasks } from "../pages/tasks/Tasks";
import { TasksByProjects } from "../pages/tasksByProjects";

export function Routes() {
  return (
    <BrowserRouter>
      <RRDRouter>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* TAREFAS */}
        <Route path="/tasks" element={<Tasks />} />

        {/* TAREFAS ARQUIVADAS / COMPLETAS */}
        <Route path="/completed-tasks" element={<CompletedTasks />} />

        {/* TAREFAS POR PROJETOS */}
        <Route path="/tasks-by-projects" element={<TasksByProjects />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
