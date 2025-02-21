import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";
import { CompletedTasks } from "../pages/completedTasks";
import { Home } from "../pages/home";
import { Tasks } from "../pages/tasks";
import { TasksByProjects } from "../pages/tasksByProjects";
import { Projects } from "../pages/projects";
import { ProjectContextProvider } from "../contexts/projectContext";
import { TasksContextProvider } from "../contexts/TasksContext";

export const Routes = () => {
  return (
    <TasksContextProvider>
      <ProjectContextProvider>
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

            {/* TAREFAS DOS PROJETOS */}
            <Route path="/projects/:projeto" element={<Projects />} />
          </RRDRouter>
        </BrowserRouter>
      </ProjectContextProvider>
    </TasksContextProvider>
  );
};
